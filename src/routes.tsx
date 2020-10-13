import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/landing';
import OrfanatosMap from './pages/orfanatos-map';

function Routes()
{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={OrfanatosMap} />
        </Switch>
        </BrowserRouter>
    );
}


export default Routes;