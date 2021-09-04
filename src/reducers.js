import {
    CHAGE_SEARCH_FIELD,
    REQUEST_ROBOTS_ERROR,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from './constants'

const intialStateSearch = {
    searchField: ""
}

export const searchRobots = (state = intialStateSearch, action = {}) => {
    switch (action.type) {
        case CHAGE_SEARCH_FIELD:
            return {...state, searchField: action.paylod}
        default:
            return state
    }
    
}

const intialStateRobots = {
    isPending: true,
    robots: [],
    error: ''
    
}
export const requestRobots = (state = intialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return {...state, isPending:true}
        case REQUEST_ROBOTS_SUCCESS:
            console.count("reduscer sucsess")
            return {...state, robots: action.paylod, isPending: false}
        case REQUEST_ROBOTS_ERROR:
            return {...state, error: action.paylod, isPending: false}
        default:
            return state
    }
}