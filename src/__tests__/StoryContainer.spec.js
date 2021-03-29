import React from "react"
import StoriesContainer from "../containers/StoriesContainer"
import { storyIds, singularStory } from "../fixtures"
import { render, cleanup, waitFor } from "@testing-library/react"
import { getStory, getStoryIds } from "../services/HackerNewsApi"
import { useInfiniteScroll } from "../hooks/useInfiniteScroll"
import { STORY_INCREMENT } from "../constants"

beforeEach(cleanup)

jest.mock("../hooks/useInfiniteScroll")
jest.mock("../services/HackerNewsApi", () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}))

test("renders the appliction", async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }))
  getStory.mockImplementation(() => Promise.resolve(singularStory))
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds))

  const { getByText, queryByTestId } = render(<StoriesContainer />)
  await waitFor(() => [
    expect(getByText("Hacker News Api:")).toBeTruthy(),
    expect(getByText("New amazing web tech")).toBeTruthy(),
    expect(queryByTestId("story-by").textContent).toEqual("By: Paul W"),
  ])
})
