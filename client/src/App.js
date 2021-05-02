import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import { Detail } from './pages/Detail';
import Words from './pages/Words';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path={['/', '/words']}>
                            <Words />
                        </Route>
                        <Route exact path="/words/:id">
                            <Detail />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
