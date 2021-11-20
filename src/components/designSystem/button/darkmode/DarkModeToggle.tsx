import styled, { useColorMode } from "@xstyled/styled-components"

import Toggle from "./Toogle"

const InnerDarkModeToggle = styled.navBox`
  display: flex;
  margin: 0 auto;

  & > button {
    background: none;
    border: none;
    color: #ffe600;
    cursor: pointer;
    font-size: 1.2em;
    transition: color 0.3s ease;
    
    &:last-child {
      color: #666;
    }

    &:focus {
      outline: none;
    }
  }
`

const DarkModeToggle = () => {
  const [mode, setColorMode] = useColorMode()

  return (
    <InnerDarkModeToggle>
      <button onClick={() => setColorMode("default")}>
        ☀
      </button>
      <Toggle
        checked={mode === "dark"}
        onChange={() => setColorMode(mode === "dark" ? "default" : "dark")}
      />
      <button type="button" onClick={() => setColorMode("dark")}>
        ☾
      </button>
    </InnerDarkModeToggle>
  )
}

export default DarkModeToggle
