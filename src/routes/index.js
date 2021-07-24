import auth from './auth';
import userData from './user';
import questionRoutes from './questions';

const routes = (server) => {
    server.use('/login', auth);
    server.use('/userData', userData);
    server.use('/response', questionRoutes)
};

export default routes;