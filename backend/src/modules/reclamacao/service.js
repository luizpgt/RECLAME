import * as complaintRepository from './repository.js';


export async function create(payload) {
    return await complaintRepository.create(payload);
}


export async function readAll() {
    return await complaintRepository.readAll();
}


export async function readById(idReclamacao) {
    return await complaintRepository.readById(idReclamacao);
}


export async function update(payload) {
    return await complaintRepository.update(payload);
}


export async function deleteById(idReclamacao) {
    return await complaintRepository.deleteById(idReclamacao);
}
