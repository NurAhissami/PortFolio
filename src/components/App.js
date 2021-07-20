//dependencies
import React from 'react';

import {Route, Switch} from 'react-router-dom';
//components
import Header from './Header';
import Main from './Main';
import Proyectos from './PaginaProyectos';
import SobreMi from './SobreMi';
import Footer from './Footer';
import SocialMedia from './SocialMedia';
import PaginaContacto from './PaginaContacto';
import Languages from './Languages';
//stylsheets
import '../stylesheets/App.scss';

function App() {
  return (
    <div className="body">
      <SocialMedia />
      <Header />
      <Languages />

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
        <Route path="/contacto">
          <PaginaContacto />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
