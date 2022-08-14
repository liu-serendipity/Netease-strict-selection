import { AnyAction, Dispatch } from 'redux'
import * as ActionTypes from '../constants'
import { 
    getTabItemRequest, 
    getRecommendRequest 
} from '@/api/request'

export const getHomeDataAction = () => {
    return async (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        const [tabItemResult, recommendResult] = await Promise.all([
            getTabItemRequest(),
            getRecommendRequest()
        ])
        dispatch(setTabItem(tabItemResult.data))
        dispatch(setRecommend(recommendResult.data.data))
        dispatch(setLoading(false))
    }
}

export const  setTabItem = (data:any[]):AnyAction => ({
    type: ActionTypes.SET_TABITEM,
    data
})

export const setRecommend = (data:any[]):AnyAction => ({
    type: ActionTypes.SET_RECOMMEND,
    data
})

export const setLoading = (data:boolean):AnyAction => ({
    type: ActionTypes.SET_LOADING,
    data
})