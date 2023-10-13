import React, { createContext, useReducer } from 'react'

export const DispatchContext = createContext();
export const StateContext = createContext()

function AppContext({ children }) {

    const initialState = {
        cartItems: []
    }
    const reducer = (state, action) => {
        // console.log(action);
        switch (action.type) {
            case 'add_to_cart':
                return {
                    ...state, cartItems: [...state.cartItems, action.payload]
                }

            default: {
                return state
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state);

    return (
        <div>
            <DispatchContext.Provider value={dispatch}>
                <StateContext.Provider value={state}>
                    {children}
                </StateContext.Provider>
            </DispatchContext.Provider>
        </div>
    )
}

export default AppContext