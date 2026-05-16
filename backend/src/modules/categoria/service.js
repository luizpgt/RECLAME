import * as categoryRepository from './repository.js';


export async function create(payload) {
    return await categoryRepository.create(payload);
}

export async function readAll() {
    return await categoryRepository.readAll();
}

export async function readById(id) {
    return await categoryRepository.readById(id);
}

export async function update(payload) {
    return await categoryRepository.update(payload);
}

export async function deleteById(id) {
    await categoryRepository.deleteById(id);
}