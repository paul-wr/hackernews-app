import React from "react"
import Story from "../components/Story"
import { singularStory } from "../fixtures"
import {
  render,
  cleanup,
  waitFor,
  queryByTestIdgetByTestId,
} from "@testing-library/react"
import { getStory } from "../services/HackerNewsApi"

beforeEach(() => {
  cleanup()
  jest.resetAllMocks()
})

jest.mock("../services/HackerNewsApi", () => ({
  getStory: jest.fn(),
}))

test("renders story container with content", async () => {
  getStory.mockImplementation(() => Promise.resolve(singularStory))
  const { getByText, queryByTestId } = render(<Story storyId="1" />)
  await waitFor(() => [
    expect(queryByTestId("story").textContent).toContain("amazing"),
    expect(getByText("New amazing web tech")).toBeTruthy(),
    expect(queryByTestId("story-by").textContent).toEqual("By: Paul W"),
  ])
})
