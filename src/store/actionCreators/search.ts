import { AnyAction, Dispatch } from 'redux'
import * as ActionTypes from '../constants'
import { 
    getHotwordRequest,
    getSuggestRequest
} from '@/api/request'

export const getSearchDataAction = (query:string) => {
    return async (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        const [hotwordResult, suggestResult] = await Promise.all([
            getHotwordRequest(),
            getSuggestRequest(query)
        ])
        dispatch(setHotword(hotwordResult.data.hotKeywordVOList))
        dispatch(setSuggest(suggestResult.data.data))
        dispatch(setLoading(false))
    }
}

export const  setHotword = (data:any[]):AnyAction => ({
    type: ActionTypes.SET_HOTWORD,
    data
})

export const setSuggest = (data:any[]):AnyAction => ({
    type: ActionTypes.SET_SUGGEST,
    data
})

export const setLoading = (data:boolean):AnyAction => ({
    type: ActionTypes.SET_LOADING,
    data
})