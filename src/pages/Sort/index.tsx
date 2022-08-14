import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'
import { rootState } from '@/store'
import { getSortDataAction } from '@/store/actionCreators/sort'

interface SortProps {
    loading: boolean,
    group: any[],
    getSortDataActionDispatch: (rId: string) => void
}

const Sort:React.FC<SortProps> = (props) => {
    const {
        getSortDataActionDispatch
    } = props

    useEffect(() => {
        getSortDataActionDispatch("1005000")
    }, [])

    return (
        <div>
            Sort
        </div>
    )
}

const mapStateToProps = (state:rootState) => ({
    loading: state.loading,
    group: state.sort.sortGroup
})

const mapDispatchToProps = (dispatch:Dispatch<AnyAction>) => ({
    getSortDataActionDispatch(rId: string) {
        dispatch<any>(getSortDataAction(rId))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Sort)