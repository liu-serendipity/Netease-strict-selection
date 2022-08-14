const fetch = require('node-fetch')

const URL_RECOMMEND = 'https://m.you.163.com/xhr/index.json?csrf_token=c02602c4bec8e34afcebda048ad4ba2b&__timestamp=1660194797093'
const URL_HOTWORD = 'https://m.you.163.com/xhr/search/init.json?csrf_token=c02602c4bec8e34afcebda048ad4ba2b'
const URL_SUGGEST = 'https://m.you.163.com/xhr/search/searchAutoComplete.json'
const URL_SORT = 'https://m.you.163.com/item/cateList.json?csrf_token=c02602c4bec8e34afcebda048ad4ba2b&__timestamp=1660199859976&categoryId={rid}'
const URL_TABITEM = 'https://m.you.163.com/xhr/page/global.json?csrf_token=c02602c4bec8e34afcebda048ad4ba2b'

const fetchRecommend = () => {
    return fetch(URL_RECOMMEND)
        .then(res => res.json())
        .then(json => json)
}

const fetchHotword = () => {
    return fetch(URL_HOTWORD, { method: 'post'})
        .then(res => res.json())
        .then(json => json)
}

const fetchSuggest = (w) => {
    const params = [
        "csrf_token=c02602c4bec8e34afcebda048ad4ba2b",
        `keywordPrefix=${w}`
    ]
    return fetch((URL_SUGGEST + "?" + params.join("&")), { method: 'post'})
        .then(res => res.json())
        .then(json => json)
}

const fetchSortGoodsById = (rId) => {
    return fetch(URL_SORT.replace("{rid}", rId))
        .then(res => res.json())
        .then(json => json)
}

const fetchTabItem = () => {
    return fetch(URL_TABITEM, { method: 'post' })
        .then(res => res.json())
        .then(json => json)
}

module.exports = {
    fetchRecommend,
    fetchHotword,
    fetchSuggest,
    fetchSortGoodsById,
    fetchTabItem
}