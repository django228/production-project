import { render } from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

render(
    <BrowserRouter>
      <div>
        <App/>
      </div>
    </BrowserRouter>,
    document.getElementById("root")
);
