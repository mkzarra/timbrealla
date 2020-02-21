import React, { useState } from 'react';

import StoryEdit from './StoryEdit';
import './StoryList.css';

function StoryList(props) {
  const [editMode, setEditMode] = useState(false);

  function toggleEdit() {
    setEditMode(!editMode);
  }
  
  return (
    <section className="story-list">
      <h2>Loaded Stories</h2>
      <ul>
        {props.stories.map(({ story, title, id }, i) => {
          console.log(story, title, id)
          return(
          <li key={id + i}>
            {!editMode
            ? (
            <div>
              <div onClick={toggleEdit}>
                <h4><strong>{title}</strong></h4>
                <p>{story}</p>
              </div>
              <button onClick={props.onRemoveStory.bind(this, id)}>Delete</button>
            </div>
            )
            : (
            <div>                
              <h4 onClick={toggleEdit}><strong>{title}</strong></h4>
              <StoryEdit story={story} id={id} title={title} onEditStory={props.onEditStory} />
            </div>
            )}
          </li>
        )})}
      </ul>
    </section>
  );
}

export default React.memo(StoryList);