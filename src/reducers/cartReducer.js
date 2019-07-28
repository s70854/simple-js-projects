const initialState = {
    products: {
        "1": {
            name: "VICKS VapoRub",
            count: 0
        },
        "2": {
            name: "ALL OUT",
            count: 0
        },
        "3": {
            name: "Good Night Repeller",
            count: 0
        },
        "4": {
            name: "HIT spray",
            count: 0
        },
        "5": {
            name: "Detol",
            count: 0
        }
    }
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CART_ADD':
            {
                const modifiedState = {
                    ...state,
                    products: {
                        ...state.products,
                        [action.payload]: {
                            ...state.products[action.payload],
                            count: state.products[action.payload].count + 1
                        }
                    }
                }
                return modifiedState;
            }
        case 'CART_DEL':
            {
                if (state.products[action.payload].count <= 0) {
                    return state;
                }
                const modifiedState = {
                    ...state,
                    products: {
                        ...state.products,
                        [action.payload]: {
                            ...state.products[action.payload],
                            count: state.products[action.payload].count - 1
                        }
                    }
                }
                return modifiedState;
            }
            /*
            NOTES: React cannot detect the changes if you directly modify the original state using pass by ref.
            Carefully clone the original (in nested way) using the spread operator.
            Clone the original state and modify the intersted field before returning.
            */
        case 'CART_REMOVE':
            {
                const modifiedState = {
                    ...state,
                    products: {
                        ...state.products
                    }
                }
                delete modifiedState.products[action.payload];
                return modifiedState;
            }
        case 'CART_RESET':
            return initialState;
        default:
            console.error("Unknown Action:", action.item);
            return state;
    }
}

export default cartReducer;
