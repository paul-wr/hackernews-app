import React, { useEffect, useState } from "react"
import { StoryComponent } from "../components/StoryComponent"
import getStoryIds from "../services/HackerNewsService"
import GlobalStyles from "../styles/GlobalStyle"
import StoriesContainerStyles from "../styles/StoryContainerStyles"

const StoriesContainer = () => {
  // initialize empty array
  const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data))
  }, []) // runs once with empty array. Arg can be used such as [varToWatchForChanges]

  return (
    <>
      <GlobalStyles />
      <StoriesContainerStyles data-testid="stories-container">
        <h1>Hacker News stories:</h1>
        {storyIds.map((storyId) => (
          <StoryComponent key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerStyles>
    </>
  )
}

export default StoriesContainer
