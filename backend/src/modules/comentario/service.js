import * as commentService from '../comentario/service.js';


export async function create(payload) {
    return await commentService.create(payload);
}

export async function readAll() {
    return await commentService.readAll();
}

export async function readById(id) {
    return await commentService.readById(id);
}

export async function update(payload) {
    return await commentService.update(payload);
}

export async function deleteById(id) {
    await commentService.deleteById(id);
}