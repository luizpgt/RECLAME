import * as cityService from './service.js';


export async function create(req, res, next) {
    try {
        const payload = req.body;
        const city = await cityService.create(payload);
        res.status(201).json(city);
    }
    catch (err) {
        next(err);
    }
}

export async function readAll(req, res, next) {
    try {
        const cities = await cityService.readAll();
        res.status(200).json({ data: cities });
    }
    catch (err) {
        next(err);
    }
}

export async function readById(req, res, next) {
    try {
        const { id } = req.params;
        const city = await cityService.readById(id);
        res.status(200).json({ data: city });
    }
    catch (err) {
        next(err);
    }
}

export async function update(req, res, next) {
    try {
        const payload = req.body;
        const city = await cityService.update(payload);
        res.status(200).json(city);
    }
    catch (err) {
        next(err);
    }
}