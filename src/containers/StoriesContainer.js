import React, { useEffect, useState } from "react"
import { StoryComponent } from "../components/StoryComponent"
import getStoryIds from "../services/HackerNewsService"
import StoryWrapper from "../styles/StoryStyles"

const StoriesContainer = () => {
  // initialize empty array
  const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data))
  }, []) // runs once with empty array. Arg can be used such as [varToWatchForChanges]

  return (
    <StoryWrapper data-testid="story">
      <h1>Hacker News stories:</h1>
      {storyIds.map((storyId) => (
        <StoryComponent key={storyId} storyId={storyId} />
      ))}
    </StoryWrapper>
  )
}

export default StoriesContainer
