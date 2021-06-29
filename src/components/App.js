//dependencies
import { Route, Switch } from "react-router-dom";
//components
//stylsheets
import "../stylesheets/App.scss";

function App() {
  return (
    <>
      <Header />

      <Switch>
        {/*HOME*/}
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/proyectos">
          <Proyectos />
        </Route>
        <Route path="/sobremi">
          <SobreMi />
        </Route>
      </Switch>

      <Footer />
    </>

    /*<div className="App">
      <div className="progress"></div>
    </div>*/
  );
}
export default App;
