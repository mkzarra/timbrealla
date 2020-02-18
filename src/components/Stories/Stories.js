import React, { useReducer, useCallback, useEffect } from 'react';
import { timbreallaDB } from '../../utils/domains';

import StoryForm from './StoryForm';
import StoryList from './StoriesList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';
import storyReducer from '../../reducers/stories';
import useHttp from '../../hooks/http';

function Stories() {
  const [stories, dispatchStories] = useReducer(storyReducer, []);
  const { isLoading, error, data, sendRequest, extra, identifier, clear} = useHttp();

  useEffect(function() {
    if (!isLoading && !error && identifier === 'ADD_STORY') dispatchStories({
      type: 'ADD',
      story: { id: data.name, ...extra }
    });
    else if (!isLoading && !error && identifier === 'REMOVE_STORY') dispatchStories({
      type: 'DELETE',
      id: extra
    })
  }, [data, extra, identifier, isLoading, error]);

  const filteredStoriesHandler = useCallback(function(filteredStories) {
    dispatchStories({ type: 'SET', stories: filteredStories });
  }, []);

  const addStoryHandler = useCallback(function(story) {
    sendRequest(
      timbreallaDB(),
      'POST',
      JSON.stringify(story),
      story,
      'ADD_STORY'
    );
  }, [sendRequest]);

  const removeStoryHandler = useCallback(function(id) {
    sendRequest(
      timbreallaDB(id),
      'DELETE',
      null,
      id,
      'REMOVE_STORY'
    );
  }, [sendRequest]);

  return (
    <div>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <StoryForm onAddStory={addStoryHandler} clearError={clear} loading={isLoading} />

      <section>
        <Search onLoadStories={filteredStoriesHandler} />
        <StoryList stories={stories} onRemoveStory={removeStoryHandler} />
      </section>
    </div>
  );
}

export default Stories;