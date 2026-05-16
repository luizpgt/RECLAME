import * as commentService from './service.js';

export async function create(req, res, next) {
    try {
        const payload = req.body;
        const comment = await commentService.create(payload);
        res.status(201).json({ data: comment });
    }
    catch (err) {
        next(err);
    }
}

export async function readAll(req, res, next) {
    try {
        const comments = await commentService.readAll();
        res.status(200).json({ data: comments });
    }
    catch (err) {
        next(err);
    }
}

export async function readById(req, res, next) {
    try {
        const { id } = req.params;
        const comment = await commentService.readById(id);
        res.status(200).json({ data: comment });
    }
    catch (err) {
        next(err);
    }
}

export async function update(req, res, next) {
    try {
        const payload = req.body;
        const comment = await commentService.update(payload);
        res.status(200).json({ data: comment });
    }
    catch (err) {
        next(err);
    }
}

export async function deleteById(req, res, next) {
    try {
        const { id } = req.params;
        await commentService.deleteById(id);
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
}