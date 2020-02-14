export default function storyReducer(currentStories, action) {
  switch(action.type) {
    case 'SET':
      return action.stories;

    case 'ADD':
      return [...currentStories, action.story];

    case 'DELETE':
      return currentStories.filter(function(story) {
        return story.id !== action.id;
      });

    default:
      return null;
  }
}