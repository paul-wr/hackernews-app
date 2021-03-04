import styled from "styled-components"

export const StoryWrapper = styled.section`
  padding: 5px;
  margin: 10px;
  border-top: 1px solid #ccc;
  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

export const StoryTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 17px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;
  a {
    color: #2e2e2c;
    background-color: #f8dc3d;
    text-decoration: none;
    padding: 2px;
  }
`

export const StoryMeta = styled.div`
  font-style: italic;
  > span:not(:first-child):before {
    content: "|";
    font-style: normal;
    margin: 0 9px;
  }
  .story_meta-bold {
    font-weight: bold;
  }
`

export const StoryMetaElement = styled.span`
  font-weight: 600;
  color: ${(props) => props.color || "#111"};
`

export default StoryWrapper
