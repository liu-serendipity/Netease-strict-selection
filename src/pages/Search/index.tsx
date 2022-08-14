import React, { useEffect, useState, useCallback } from "react"
import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux"
import { Dispatch, AnyAction } from 'redux'
import { rootState } from '@/store'
import { getSearchDataAction } from '@/store/actionCreators/search'
import { 
    LoadingWrapper, 
    Container, 
    SuggestWrapper, 
    ShutCutWrapper, 
    Header, 
    Nav 
} from './style'
import SearchBox from '@/components/common/search-box'
import { CSSTransition } from 'react-transition-group'
import Loading from '@/components/common/loading'
import { 
    RightOutline, 
    DeleteOutline 
} from 'antd-mobile-icons'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

interface SearchProps {
    loading: boolean,
    hotword: any[],
    suggest: any[],
    getSearchDataActionDispatch: (query: string) => void
}

const Search:React.FC<SearchProps> = (props) => {
    const [query, setQuery] = useState('')
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const {
        loading,
        hotword,
        suggest
    } = props

    const {
        getSearchDataActionDispatch
    } = props

    useEffect(() => {
        setShow(true)
        getSearchDataActionDispatch("")
    }, [])

    const searchBack = useCallback(() => {
        setShow(false)
    }, [])

    const handleQuery = (q:string) => {
        setQuery(q)
    }

    useEffect(() => {
        if (query.trim()) {
            getSearchDataActionDispatch(query)
        }
    }, [query])

    const collectQuery = (searchKey:string) => {
        if (searchKey.trim()) {
            let { historyItems } = localStorage;
            if (historyItems === undefined) {
                localStorage.historyItems = searchKey
            } else {
                let array = historyItems.split('|')
                if (array.length == 10) {
                    array.pop()
                }
                array.map((item:string, index:number) => {
                    if (item == searchKey) {
                        array.splice(index, 1)
                    }
                })
                array.unshift(searchKey)
                localStorage.historyItems = array.join('|')
            }
        }
    }

    const clearHistory = () => {
        localStorage.removeItem('historyItems')
        getSearchDataActionDispatch("")
    }

    const renderSuggest = () => {
        if (!suggest || !suggest.length || !query.trim()) return
        return (
            <SuggestWrapper>
            {
                suggest.map((item, index) => {
                    return (
                        <NavLink 
                            key={index} 
                            to="/search"
                            onClick={() => collectQuery(item)}
                        >
                            <li className="item">
                                <div className="listItem">
                                    <div className="inner">{item}</div>
                                    <i><RightOutline /></i>
                                </div>
                            </li>
                        </NavLink>
                    )
                })
            }
            </SuggestWrapper>
        )
    }

    const renderHotword = () => {
        let list = hotword ? hotword : []
        return (
            <ShutCutWrapper>
                <Header>
                    <h3 className="tit">热门搜索</h3>
                </Header>
                <Nav>
                {
                    list.map((item, index) => {
                        return (
                            <NavLink 
                                className={classNames("item", { "highlight": item.highlight == 1})}
                                to="/search"
                                key={index}
                                onClick={() => collectQuery(item.keyword)}
                            >
                                {item.keyword}
                            </NavLink>
                        )
                    })
                }
                </Nav>
            </ShutCutWrapper>
        )
    }

    let recentKey: string[] = []
    if (localStorage.getItem("historyItems")) {
        recentKey = (localStorage.getItem("historyItems"))!.split('|')
    }
    const renderRecentSearch = () => {
        if (!recentKey || !recentKey.length) return
        return (
            <ShutCutWrapper>
                <Header>
                    <h3 className="tit">历史记录</h3>
                    <i><DeleteOutline onClick={() => clearHistory()} /></i>
                </Header>
                <Nav>
                {
                    recentKey.map((item, index) => {
                        return (
                            <NavLink 
                                className="item"
                                to="/search"
                                key={index}
                                onClick={() => collectQuery(item)}
                            >
                                {item}
                            </NavLink>
                        )
                    })
                }
                </Nav>
            </ShutCutWrapper>
        )
    }

    return (
        <CSSTransition
            in={show}
            timeout={300}
            appear={true}
            classNames="fly"
            unmountOnExit
            onExit={() => { navigate(-1) }}
        >
            <Container>
                <SearchBox back={searchBack} newQuery={query} handleQuery={handleQuery} />
                { query && renderSuggest() }
                {
                    !query.trim() &&
                    <div className="search_suggestions_views">
                        { renderRecentSearch() }
                        { renderHotword() }
                    </div>
                }
                { loading && <LoadingWrapper><Loading /></LoadingWrapper> }
            </Container>
        </CSSTransition>
    )
}

const mapStateToProps = (state: rootState) => ({
    loading: state.loading,
    hotword: state.search.hotword,
    suggest: state.search.suggest
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    getSearchDataActionDispatch(query: string) {
        dispatch<any>(getSearchDataAction(query))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)