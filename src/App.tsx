import { NavProvider } from "hooks/nav-provider";
import { Home } from "pages/home";

function App() {
  return (
    <NavProvider>
      <Home />
    </NavProvider>
  );
}

export default App;
