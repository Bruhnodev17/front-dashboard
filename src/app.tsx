import GlobalStyles from "./styles/global"
import { Home } from "./screens/home"
import { AppProvider } from "./hooks"

export function App() {
  return (
    <>
      <AppProvider>
        <GlobalStyles />
        < Home />
      </AppProvider>
    </>
  )
}

