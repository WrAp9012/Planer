import "./App.css";
import Home from "./pages/Home";

/**
 * Główny komponent aplikacji.
 * Renderuje stronę startową (`Home`) i służy jako root komponent w React.
 *
 * @component
 * @returns {JSX.Element} Główna aplikacja React
 *
 * @example
 * <App />
 */
function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
