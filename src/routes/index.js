import auth from './auth';
import userData from './user';
import questionRoutes from './questions';
import teacherRouter from './responses';

const routes = (server) => {
    server.use('/login', auth);
    server.use('/userData', userData);
    server.use('/response', questionRoutes);
    server.use('/teacher', teacherRouter )
};

export default routes;