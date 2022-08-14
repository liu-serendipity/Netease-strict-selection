import { axiosInstance } from "./config"
import { 
    URL_RECOMMEND,
    URL_TABITEM,
    URL_HOTWORD,
    URL_SUGGEST,
    URL_SORT
} from "./url"

export const getTabItemRequest = 
    () => axiosInstance.get(URL_TABITEM) 

export const getRecommendRequest = 
    () => axiosInstance.get(URL_RECOMMEND)

export const getHotwordRequest = 
    () => axiosInstance.get(URL_HOTWORD)

export const getSuggestRequest = (query: string) => {
    let url = `${URL_SUGGEST}/?w=${query}`
    return axiosInstance.get(url)
}

export const getSortRequest = (rId:string) => {
    let url = `${URL_SORT}/${rId}`
    return axiosInstance.get(url)
}