import * as complaintService from './service.js';

export async function create(req, res, next) {
    try {
        const payload = req.body;
        const complaint = await complaintService.create(payload);
        return res.status(201).json({ data: complaint });
    }
    catch (err) {
        next(err);
    }
}

export async function readAll(req, res, next)  {
    try {
        const complaints = await complaintService.readAll();
        return res.status(200).json({ data: complaints });
    }
    catch (err) {
        next(err);
    }
}

export async function readById(req, res, next) {
    try {
        const { id } = req.params;
        const complaint = await complaintService.readById(id);
        return res.status(200).json({ data: complaint });
    }
    catch (err) {
        next(err);
    }
}

export async function update(req, res, next) {
    try {
        const payload = req.body;
        const complaint = await complaintService.update(payload);
        return res.status(200).json({ data: complaint });
    }
    catch (err) {
        next(err);
    }
}

export async function deleteById(req, res, next) {
    try {
        const { id } = req.params;
        await complaintService.deleteById(id);
        return res.status(200).json({ message: 'Complaint deleted successfully' });
    }
    catch (err) {
        next(err);
    }
}