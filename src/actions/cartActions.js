import store from "../store.js";
export const addItem = (id) => {
    return {type: 'CART_ADD', payload: id};
}
export const deleteItem = (id) => {
    return {type: 'CART_DEL', payload: id};
}
export const removeItem = (id) => {
    return {type: 'CART_REMOVE', payload: id};
}
/*
NOTES: type, payload are the standard fields inside dispath event.
*/
export const resetAll = () => {
    return {type: 'CART_RESET', payload: null};
}
