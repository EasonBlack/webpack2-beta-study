import App from './app.js';
import Home from './Home';

function errorLoading(err) {
    console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
    return (module) => cb(null, module.default);
}

export default  {
    path: '/',
    component: App,
    childRoutes: [
        {
            path: 'user',
            getComponent(location, cb) {
                System.import('./User.js')
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        },
        {
            path: 'about',
            getComponent(location, cb) {
                System.import('./About.js')
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        }
    ],
    indexRoute: {
        component: Home
    }
}
