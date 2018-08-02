const authMiddleware = (req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        console.log(req.headers.authorization.split(' ')[0]);
        next();
    } else {
        console.log('else');
        next();
    }
};

module.exports =  authMiddleware;