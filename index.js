const layout = __dirname + '/src/views/layout.twig';
const login = __dirname + '/src/views/login.twig';
const register = __dirname + '/src/views/register.twig';
const error404 = __dirname + '/src/views/404.twig';
const error500 = __dirname + '/src/views/500.twig';

const localsMiddlewares = require('/src/middlewares/localsMiddlewares.js');

const handlers = require('/src/handlers/handlers.js');

const Menu = require('/src/classes/Menu.js');

module.exports = {
    views: {
        layout,
        login,
        register,
        error404,
        error500
    },
    middlewares: {
        setLocals: localsMiddlewares.setLocals
    },
    handlers: {
    },
    classes: {
        Menu
    }
};