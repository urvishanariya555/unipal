import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppContextProvider } from "./context/AppContext";
import AppRoutes from "./routing/AppRoutes";

function App() {
  return (
    <AppContextProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
