import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Edit } from "./pages/Edit";
import { Add } from "./pages/Add";
import GlobalStyle from "./globalStyles";
import {AppContextProvider} from "./context/appContext";

function App() {
  return (
      <AppContextProvider>
          <BrowserRouter>
              <GlobalStyle />
              <Routes>
                  <Route path={'/'} element={<Home />} />
                  <Route path={'/add'} element={<Add />} />
                  <Route path={'/edit/:id'} element={<Edit />} />
              </Routes>
          </BrowserRouter>
      </AppContextProvider>
  );
}

export default App;
