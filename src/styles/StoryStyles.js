import styled from "styled-components"

const StoryWrapper = styled.section`
  padding: 10px;
  margin-bottom: 20px;
  border-top: 1px solid #ccc;

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

export default StoryWrapper
