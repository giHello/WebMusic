import React, { memo, Suspense } from 'react';
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config';


import routes from './router'
import store from './store';

import { HashRouter } from 'react-router-dom';
import WEAppHeader  from '@/components/app-header';
import WEAppFooter  from '@/components/app-footer';
import WEAppPlayerBar from './pages/player/app-player-bar'


export default memo(function App() {
    return (
        <Provider store={store}>
        <HashRouter>
            <WEAppHeader/>
            <Suspense fallback = {<div>page loading...</div>}>
            {renderRoutes(routes)}
            </Suspense>
            <WEAppFooter/>
            <WEAppPlayerBar/>
        </HashRouter>
        </Provider>
    )
})
