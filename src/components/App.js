import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";
import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={StreamList}></Route>
              <Route
                path="/streams/create"
                exact
                component={StreamCreate}
              ></Route>
              <Route path="/streams/:id" exact component={StreamShow}></Route>
              <Route
                path="/streams/edit/:id"
                exact
                component={StreamEdit}
              ></Route>
              <Route
                path="/streams/delete/:id"
                exact
                component={StreamDelete}
              ></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
