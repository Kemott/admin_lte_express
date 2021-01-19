const setLocals = (menu, user) => {
    return (req, res, next) => {
        if(!user){
            req.locals.user = req.user;
        }else{
            req.locals.user = user;
        }
        req.locals.menu = menu.getMenu();
        req.locals.uri = req.originalUrl;
        next();
    }
};

module.exports = {
    setLocals
}