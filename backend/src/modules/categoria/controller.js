import * as categoryService from './service.js';


export async function create(req, res, next) {
    try {
        const payload = req.body;
        const category = await categoryService.create(payload);
        res.status(201).json(category);
    }
    catch (err) {
        next(err);
    }
}

export async function readAll(req, res, next) {
    try {
        const categories = await categoryService.readAll();
        res.status(200).json({ data: categories });
    }
    catch (err) {
        next(err);
    }
}

export async function readById(req, res, next) {
    try {
        const { id } = req.params;
        const category = await categoryService.readById(id);
        res.status(200).json({ data: category });
    }
    catch (err) {
        next(err);
    }
}

export async function update(req, res, next) {
    try {
        const payload = req.body;
        const category = await categoryService.update(payload);
        res.status(200).json({ data: category });
    }
    catch (err) {
        next(err);
    }
}

export async function deleteById(req, res, next) {
    try {
        const { id } = req.params;
        await categoryService.deleteById(id);
        res.status(204).send();
    }
    catch (err) {
        next(err);
    }
}