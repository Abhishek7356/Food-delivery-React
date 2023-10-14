import React, { createContext, useReducer } from 'react'

export const DispatchContext = createContext();
export const StateContext = createContext()

function AppContext({ children }) {

    const initialState = {
        favItems: [],
        popup: {},
        categories: [],
        beefItems: [],
        allData: [],
    }
    const reducer = (state, action) => {
        // console.log('hey', action.payload);
        switch (action.type) {
            case 'add_to_cart':
                return {
                    ...state, favItems: [...state.favItems, action.payload]
                }

            case 'display_item':
                return {
                    ...state, popup: { ...action.payload }
                }

            case 'categoryItems':
                return {
                    ...state, categories: action.payload
                }

            case 'beefItems':
                return {
                    ...state, beefItems: action.payload
                }

            case 'allData':
                return {
                    ...state, allData: action.payload
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