import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Contact from './pages/contact';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;