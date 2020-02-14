import React, { useState } from 'react';

import Card from '../UI/Card';
import LoadingIndicator from '../UI/LoadingIndicator';
import './StoryForm.css';

function StoryForm(props) {
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    props.onAddStory({ title, story });
  }

  return (
    <section className="story-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="story">Story</label>
            <input
              type="text"
              id="story"
              value={story}
              onChange={event => setStory(event.target.value)}
            />
          </div>
          <div className="story-form__actions">
            <button type="submit">Submit</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>      
    </section>
  );
}

export default React.memo(StoryForm);