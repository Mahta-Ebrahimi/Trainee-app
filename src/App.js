import { BrowserRouter } from "react-router-dom";
import MainRouter from "./components/MainRouter";
import Provider from "./context/Provider";

function App() {
  return (
    <Provider>
      <div className="container mx-auto max-w-lg">
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
