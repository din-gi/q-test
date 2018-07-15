/*
export const someMutation = (state) => {}
 */

export const setUser = (state, user) => {
    state.firstName = user.firstName
    state.lastName = user.lastName
    state.picture = user.picture
    state.businessId = user.businessId
}