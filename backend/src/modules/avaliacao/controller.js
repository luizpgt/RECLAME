import * as ratingService from './service.js';


export async function create(req, res, next) {
    try {
        const payload = req.body;
        const rating = await ratingService.create(payload);
        res.status(201).json({ data: rating });
    }
    catch (err) {
        next(err);
    }
}

export async function readAll(req, res, next) {
    try {
        const ratings = await ratingService.readAll();
        res.status(200).json({ data: ratings });
    }
    catch (err) {
        next(err);
    }
}

export async function readById(req, res, next) {
    try {
        const { id } = req.params;
        const rating = await ratingService.readById(id);
        res.status(200).json({ data: rating });
    }
    catch (err) {
        next(err);
    }
}

export async function deleteById(req, res, next) {
    try {
        const { id } = req.params;
        await ratingService.deleteById(id);
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
}