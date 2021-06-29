import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Work from './components/Work';
import AboutMe from './components/AboutMe';
import SiteWizard from './components/SiteWizard'
import SiteEditor from './components/SiteEditor';
import EcommTemplate from './components/EcommTemplate';
import Blog from './components/Blog';
import HelpCenter from './components/HelpCenter';
import AdTech from './components/AdTech';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/work' component={Work} />
            <Route path='/about' component={AboutMe} />
            <Route path='/create-site-wizard' component={SiteWizard} />
            <Route path='/convertly-site-editor' component={SiteEditor} />
            <Route path='/adtech' component={AdTech} />
            <Route path='/ecomm' component={EcommTemplate} />
            <Route path='/blog' component={Blog} />
            <Route path='/helpcenter' component={HelpCenter} />
            <Route component={NotFound} />
          </Switch>
        <Footer />
      </BrowserRouter>

    </div>

  );
}

export default App;
