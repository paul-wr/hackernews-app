import axios from "axios"
import {
  getStory,
  getStoryIds,
  newStoriesUrl,
  storyUrl,
} from "../services/HackerNewsApi"
import { singularStory, storyIds, emptySingularStory } from "../fixtures"

jest.mock("axios")

describe("Hacker News Api", () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })
  describe("getStory functionality", () => {
    it("requests and gets a news story from the hacker news api", async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: singularStory })
      )
      const entity = await getStory(1)
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`)
      expect(entity).toEqual(singularStory)
    })

    it("does not retrieve a story from the hacker news api, but handles gracefullu", async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: emptySingularStory })
      )
      const entity = await getStory(1)
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`)
      expect(entity).toEqual(emptySingularStory)
    })
  })
  describe("getStoryIds", () => {
    it("requests and gets a news story from the hacker news api", async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }))
      const entity = await getStoryIds()
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith(newStoriesUrl)
      expect(entity).toEqual(storyIds)
    })
  })
})
