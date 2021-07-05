//dependencies
import {Route, Switch} from 'react-router-dom';
//components
import Header from './Header';
import Main from './Main';
import Proyectos from './Proyectos';
import SobreMi from './SobreMi';
import Footer from './Footer';
//stylsheets
import '../stylesheets/App.scss';

function App() {
  return (
    <>
      <Header />

      <Switch>
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
  );
}
export default App;
