import React from "react";
import ReactDOM from "react-dom";
//import { createBrowserHistory } from "history";
//import { Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "assets/scss/now-ui-dashboard.css?v=1.2.0";
import "assets/css/demo.css";

//import indexRoutes from "routes/index.jsx";

//const hist = createBrowserHistory();

class Main extends React.Component {
  render() {
    return (
      <div>Hello React</div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
