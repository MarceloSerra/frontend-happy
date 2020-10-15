import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/landing';
import OrfanatosMap from './pages/orfanatos-map';
import CreateOrphanage from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';

function Routes()
{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={OrfanatosMap} />

            <Route path="/orphanages/create" component={CreateOrphanage} />
            <Route path="/orphanages/:id" component={Orphanage} />
        </Switch>
        </BrowserRouter>
    );
}


export default Routes;