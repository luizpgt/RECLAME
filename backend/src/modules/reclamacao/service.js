import * as userRepository from './repository.js';


export async function create(payload) {
    const user = userRepository.create(payload);
}