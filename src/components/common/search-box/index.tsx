import React, { memo, useState, useEffect, useRef, useMemo} from "react"
import { SearchBoxWrapper } from "./style"
import { SearchOutline, CloseCircleOutline } from "antd-mobile-icons"
import { debounce } from '@/utils'

interface SearchBoxProps {
    newQuery: string,
    handleQuery: ( q:string ) =>void,
    back: () => void
}

const SearchBox:React.FC<SearchBoxProps> = (props) => {
    const queryRef = useRef<HTMLInputElement>(null)

    const { newQuery } = props
    const { handleQuery, back } = props
    const [query, setQuery] = useState('')

    let handleQueryDebounce = useMemo(() => {
        return debounce(handleQuery, 500)
    }, [handleQuery])

    useEffect(() => {
        queryRef.current!.focus()
    }, [])

    useEffect(() => {
        handleQueryDebounce(query)
    }, [query])

    useEffect(() => {
        let curQuery = query
        if (newQuery !== query) {
            curQuery = newQuery
            queryRef.current!.value = newQuery
        }
        setQuery(curQuery)
    }, [newQuery])

    const clearQuery = () => {
        setQuery('');
        queryRef.current!.value = ""
        queryRef.current!.focus();
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        let val = e.currentTarget.value
        setQuery(val)
    }

    const displayStyle = query ? { display: 'block' } : { display: 'none'}

    return (
        <SearchBoxWrapper>
            <div className="bd">
                <div className="searchIpt">
                    <div className="search">
                        <i><SearchOutline /></i>
                        <input type="text" placeholder="请输入商品名称" ref={queryRef} onChange={handleChange} />
                        <i><CloseCircleOutline onClick={clearQuery} style={displayStyle} /></i>
                    </div>
                </div>
                <span onClick={back}>取消</span>
            </div>
        </SearchBoxWrapper>
    )
}

export default memo(SearchBox)