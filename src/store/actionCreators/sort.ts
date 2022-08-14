import { Dispatch } from 'redux'
import * as actionTypes from '../constants'
import {
    getSortRequest
} from '@/api/request'

export const getSortDataAction = (rId:string) => {
    return async (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        const [sortResult] = await Promise.all([
            getSortRequest(rId)
        ])
        dispatch(setSortGroup(sortResult.data))
        dispatch(setLoading(false))
    }
}

export const setSortGroup = (data: any[]) => ({
    type: actionTypes.SET_SORT,
    data
})

export const setLoading = (data: boolean) => ({
    type: actionTypes.SET_LOADING,
    data
})