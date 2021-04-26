import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
             
                <Switch>
                    <Route exact path="/" />
                    <Route exact path="/vault/:id"  />
                    <Route
                        exact
                        path="/strategy/:name/:id"
                      
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
