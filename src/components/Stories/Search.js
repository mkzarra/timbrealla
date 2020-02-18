import React, { useEffect, useState, useRef } from 'react';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import useHttp from '../../hooks/http';
import { timbreallaDB } from '../../utils/domains';
import './Search.css';

const url = timbreallaDB();

function Search(props) {
  const { onLoadStories } = props;
  const [filter, setFilter] = useState('');
  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(function() {
    const timer = setTimeout(function() {
      if (filter === inputRef.current.value) {
        const query = (
          filter.length > 0
          ? `?orderBy="title"&equalTo="${filter}"`
          : ''
        );
        sendRequest(url + query, 'GET');
      }

      return function() {
        clearTimeout(timer);
      }
    }, 500);
  }, [filter, inputRef, sendRequest]);

  useEffect(function() {
    if (!isLoading && !error && data) {
      const loadedStories = [];

      for (const key in data) {
        loadedStories.push({
          id: key,
          title: data[key].title,
          story: data[key].story
        });
      }

      onLoadStories(loadedStories);
    }
  }, [data, isLoading, error, onLoadStories]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Fitler by Title</label>
          {isLoading && <span>...</span>}
          <input
            ref={inputRef}
            type="text"
            value={filter}
            onChange={event => setFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
}

export default React.memo(Search);
