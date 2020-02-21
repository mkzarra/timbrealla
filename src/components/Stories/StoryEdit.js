import React, {useState} from 'react'

export default function StoryEdit(props) {
  const [story, setStory] = useState(props.story);
  const { id, title } = props;

  function submitStoryHandler(event, data) {
    event.preventDefault();
    props.onEditStory(data);
  }

  return (
    <div>
      <form onSubmit={(event) => submitStoryHandler(event, { id, title, story })}>
        <textarea value={story} onChange={(event) => setStory(event.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
