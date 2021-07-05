//dependencies
import {Route, Switch} from 'react-router-dom';
//components
import Header from './Header';
import Main from './Main';
import PaginaProyectos from './PaginaProyectos';
import SobreMi from './SobreMi';
import Footer from './Footer';
import SocialMedia from './SocialMedia';
//stylsheets
import '../stylesheets/App.scss';

function App() {
  return (
    <>
      <Header />
      <SocialMedia />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/proyectos">
          <PaginaProyectos />
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
