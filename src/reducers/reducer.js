// initial state

const initialState = {
    name: '',
    age: '',
    city: '',
    count: 0
}


// action types

const CHANGE_NAME = 'CHANGE_NAME'
const CHANGE_AGE = 'CHANGE_AGE'
const CHANGE_CITY = 'CHANGE_CITY'
const INCREASE_COUNT = 'INCREASE_COUNT'


// action creators

export function handleNameChange(newName) {
    return {
        type: CHANGE_NAME,
        payload: newName
    }
}

export function handleAgeChange(newAge) {
    return {
        type: CHANGE_AGE,
        payload: newAge
    }
}

export function handleCityChange(newCity) {
    return {
        type: CHANGE_CITY,
        payload: newCity
    }
}

export function increaseCount(value) {
    return {
        type: INCREASE_COUNT,
        payload: value
    }
}

// reducer


export default function(state=initialState, action) {
    switch(action.type) {
        case CHANGE_NAME:
            return Object.assign({},state,{name: action.payload})
        case CHANGE_CITY:
            return Object.assign({},state,{city: action.payload})
        case CHANGE_AGE:
            return Object.assign({},state,{age: action.payload})
        case INCREASE_COUNT:
            return Object.assign({},state,{count: state.count + action.payload})
        default:
            return state
    }
}








