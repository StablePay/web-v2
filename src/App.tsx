import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import TermsService from './components/TermsService/TermsService';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/terms" component={TermsService} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
