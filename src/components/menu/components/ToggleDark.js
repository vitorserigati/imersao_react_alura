import styled from "styled-components";

export default function ToggleDark({ darkMode, setDarkMode }) {
  function isDark() {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  }
  return <StyledToggleDark onClick={isDark} darkMode={darkMode} />;
}

const StyledToggleDark = styled.div`
  width: 40px;
  height: 20px;
  border-radius: 30px;
  display: flex;
  padding: 3px;
  align-items: center;
  background-color: ${({ darkMode }) => {
    return darkMode ? "black" : "white";
  }};
  transition: background-color 500ms linear;
  cursor: pointer;
  position: relative;
  box-shadow: inset 0px 0px 4px
    ${({ darkMode }) => {
      return darkMode ? "white" : "black";
    }};
  &:before {
    content: "a";
    color: rgba(0, 0, 0, 0);
    position: absolute;
    background-color: ${({ darkMode }) => {
      return darkMode ? "white" : "black";
    }};
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: 0 1%;
    box-shadow: inset 0px 0px 2px
      ${({ darkMode }) => {
        return darkMode ? "black" : "white";
      }};
    left: ${({ darkMode }) => {
      return darkMode ? "23px" : "2px";
    }};
    transition: background-color 500ms linear;
    transition: left 500ms linear;
  }
`;
