const jwt = require('jsonwebtoken');

async function validateJWTToken(req, res) {
    const jwtSecret = process.env.JWT_SECRET;
    if (!!req.headers['x-auth-token']) {
        await jwt.verify(req.headers['x-auth-token'], jwtSecret, (err) => {
            if (err) {
                res.statusCode = 401;
                return res.end(JSON.stringify({error: 'Authentication failed!'}));
            }
        });
    }
}

module.exports = { validateJWTToken };