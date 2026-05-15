
import * as userRepository from './repository.js';

export async function create(payload) {
    return await userRepository.create(payload);
}

export async function readAll() {
    return await userRepository.readAll();
}

export async function readById(id) {
    return await userRepository.readById(id);
}

export async function update(payload) {
    return await userRepository.update(payload);
}

export async function updatePassword(id, senha) {
    await userRepository.updatePassword(id, senha);
}

export async function deleteById(id) {
    await userRepository.deleteById(id);
}

