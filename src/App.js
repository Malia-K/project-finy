import './App.css';

import { BrowserRouter } from "react-router-dom";

import { RouteList } from "./routing";

function App() {
  return (
    <BrowserRouter>
        <main >
            <RouteList />
        </main>
    </BrowserRouter>
  );
}

export default App;


