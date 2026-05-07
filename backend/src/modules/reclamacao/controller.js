import * as userService from './service';

export async function create(req, res, next) {
    try {
        const payload = req.body;
        const user = userService.create(payload);
        return res.json(user);
    }
    catch (err) {
        next(err);
    }
}