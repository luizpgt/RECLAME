import * as cityRepository from './repository.js';


export async function create(payload) {
    return await cityRepository.create(payload);
}

export async function readAll() {
    return await cityRepository.readAll();
}

export async function readById(id) {
    return await cityRepository.readById(id);
}

export async function update(payload) {
    return await cityRepository.update(payload);
}