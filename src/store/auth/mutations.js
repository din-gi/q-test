/*
export const someMutation = (state) => {}
 */

export const setAuth = (state, headers) => {
    state.auth = headers['x-authorization-bearer']
}