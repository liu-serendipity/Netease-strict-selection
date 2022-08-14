import { combineReducers, AnyAction } from 'redux'
import * as ActionTypes from './constants'

const initialState = {
    loading: true,
    home: {
        tabItem: {},
        recommend: {}
    },
    search: {
        hotword: [],
        suggest: []
    },
    sort: {
        sortGroup: {}
    }
}

const homeReducer = (state = initialState.home, action:AnyAction) => {
    switch (action.type) {
        case ActionTypes.SET_TABITEM:
            return {
                ...state,
                tabItem: action.data
            }
            break
        case ActionTypes.SET_RECOMMEND:
            return {
                ...state,
                recommend: action.data
            }
            break
        default:
            return state
    }
}

const searchReducer = (state = initialState.search, action:AnyAction) => {
    switch (action.type) {
        case ActionTypes.SET_HOTWORD:
            return {
                ...state,
                hotword: action.data
            }
            break
        case ActionTypes.SET_SUGGEST:
            return {
                ...state,
                suggest: action.data
            }
            break
        default:
            return state
    }
}

const sortReducer = (state = initialState.sort, action: AnyAction) => {
    switch(action.type) {
        case ActionTypes.SET_SORT:
            return action.data
            break
        default:
            return state
    }
}

const loadingReducer = (state = initialState.loading, action: AnyAction) => {
    switch(action.type) {
        case ActionTypes.SET_LOADING:
            return action.data
            break
        default:
            return state
    }
}

export default combineReducers({
    home: homeReducer,
    search: searchReducer,
    loading: loadingReducer,
    sort: sortReducer
})