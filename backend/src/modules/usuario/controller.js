import * as userService from './service.js';

export async function create(req, res, next) {
    try {
        const payload = req.body;
        const user = await userService.create(payload);
        res.status(201).json({ data: user });
    } catch (error) {
        next(error);
    }
}

export async function readAll(req, res, next) {
    try {
        const users = await userService.readAll();
        res.status(200).json({ data: users });
    }
    catch (err) {
        next(err);
    }
}

export async function readById(req, res, next) {
    try {
        const { id } = req.params;
        const user = await userService.readById(id);
        res.status(200).json({ data: user });
    }
    catch (err) {
        next(err);
    }
}

export async function update(req, res, next) {
    try {
        const payload = req.body;
        const user = await userService.update(payload);
        res.status(200).json({ data: user });
    }
    catch (err) {
        next(err);
    }
}

export async function updatePassword(req, res, next) {
    try {
        const payload = req.body;
        await userService.updatePassword(payload);
        res.status(204).send();
    } catch (err) {
        next(err);
    }
}

export async function deleteById(req, res, next) {
    try {
        const { id } = req.params;
        await userService.deleteById(id);
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
}