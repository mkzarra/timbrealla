import React from 'react';

import './StoryList.css';

function StoryList(props) {
  return (
    <section className="story-list">
      <h2>Loaded Stories</h2>
      <ul>
        {props.stories.map(({story, title, id }) => (
          <li key={id} onClick={props.onEditStory.bind(this, id)}>
            <div><h4><strong>{title}</strong></h4>
            <p>{story}</p>
            </div>
            <button onClick={props.onRemoveStory.bind(this, id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default React.memo(StoryList);