import React from 'react';

import './StoryList.css';

function StoryList(props) {
  return (
    <section className="story-list">
      <h2>Loaded Stories</h2>
      <ul>
        {props.stories.map(({story, title, id}) => (
          <li key={id} onClick={props.onRemoveStory.bind(this, id)}>
            <span>{title}</span>
            <span>{story}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default React.memo(StoryList);