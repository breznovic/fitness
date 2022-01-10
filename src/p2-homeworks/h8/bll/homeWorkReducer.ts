import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: { type: 'sort' | 'check', payload: 'up' | 'down' | string | number }): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            if (action.payload === 'up') {
                return state.map(m => ({...m})).sort((a, b) => a.name > b.name ? 1 : -1)
            } else if (action.payload === 'down') {
                return state.map(m => ({...m})).sort((a, b) => a.name < b.name ? 1 : -1)
            } else {
                return {...state}
            }
        }
        case 'check': {
            // need to fix
            return state.filter(f => f.age > +action.payload)
        }
        default:
            return state
    }
}