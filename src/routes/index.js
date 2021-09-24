import auth from './auth';
import userData from './user';
import questionRoutes from './questions';
import teacherRouter from './responses';
import dashboard from './dashboard'

const routes = (server) => {
    server.use('/login', auth);
    server.use('/userData', userData);
    server.use('/response', questionRoutes);
    server.use('/teacher', teacherRouter );
    server.use('/dashboard', dashboard );
};

export default routes;