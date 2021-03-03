import React, { useEffect, useState } from "react"
import { getStory } from "../services/HackerNewsService"

export const StoryComponent = ({ storyId }) => {
  const [story, setStory] = useState({})

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data))
  }, [])
  return story && story.url ? (
    // fragment syntax <></> allows placing elements next to eachother
    <>
      <h4>
        <a href={story.url}>
          <p>{story.title}</p>
        </a>
      </h4>
      <p>Id: {story.id}</p>
      <p>By: {story.by}</p>
      <p>Time: {story.time}</p>
    </>
  ) : null
}
