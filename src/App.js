import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Navbar } from "./layouts/Navbar";
import { Footer } from "./components/Footer";

export const App = () => {
    return (
        <>
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/contact" component={Contact} />
              <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    )
};
