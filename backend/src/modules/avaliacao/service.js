import * as ratingRepository from './repository.js';


export async function create(payload) {
    return await ratingRepository.create(payload);
}

export async function readAll() {
    return await ratingRepository.readAll();
}

export async function readById(id) {
    return await ratingRepository.readById(id);
}

export async function deleteById(id) {
    await ratingRepository.deleteById(id);
}