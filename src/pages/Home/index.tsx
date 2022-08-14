import React, { useEffect, useState, useRef } from 'react'
import { HomeWrapper, Top } from './style'
import { SearchOutline } from 'antd-mobile-icons'
import netease from './netease.png'
import { connect } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'
import { rootState } from '@/store'
import { getHomeDataAction } from '@/store/actionCreators'
import { NavLink } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import replace from './replace.png'
import classNames from 'classnames'
import Recommend from './Recommend'
import Othermend from './Othermend'
import {
    Tabs,
    Swiper 
} from 'antd-mobile'
import { DownOutline } from 'antd-mobile-icons'
import { SwiperRef } from 'antd-mobile/es/components/swiper'

const tabItems = [
    { name: '推荐', key: '111'},
    { name: '居家生活', key: '1005000' },
    { name: '宠物生活', key: '109320005' },
    { name: '服饰鞋包', key: '1010000' },
    { name: '美食酒水', key: '1005002' },
    { name: '个护清洁', key: '1013001' },
    { name: '母婴亲子', key: '1011000' },
    { name: '运动旅行', key: '109243029' },
    { name: '数码家电', key: '1043000' },
    { name: '严选全球', key: '1019000'},
]

interface HomeProps {
    loading: boolean,
    tabItem: any[],
    recommend: any[],
    getHomeDataActionDispatch: () => void
}

const Home:React.FC<HomeProps> = (props) => {
    const { 
        getHomeDataActionDispatch 
    } = props

    const {
        tabItem,
        recommend
    } = props

    useEffect(() => {
        getHomeDataActionDispatch()
    }, [])

    const [activeIndex, setActiveIndex] = useState(0)
    const swiperRef = useRef<SwiperRef>(null)
    const [isActive, setIsActive] = useState(false)

    const handleTabItem = (index:number) => {
        setIsActive(false)
        setActiveIndex(index)
    }

    const renderTabList = () => {
        if (!tabItems || !tabItems.length) return
        return (
            <div className="tabWrap">
            { isActive?
                <>
                <div className="tabAlter">全部频道</div>
                <div className="moreCate">
                {
                    tabItems.map((item, index) => {
                        return (
                            <div 
                                className={classNames("cateTag", {"activetab": index == activeIndex})}
                                key={item.key} 
                                onClick={() => handleTabItem(index)}
                            >
                                {item.name}
                            </div>
                        )
                    })
                }
                </div>
                </>:
                <Tabs
                    activeKey={tabItems[activeIndex].key}
                    onChange={key => {
                        const index = tabItems.findIndex(item => item.key === key)
                        setActiveIndex(index)
                        swiperRef.current?.swipeTo(index)
                    }}
                >
                {
                    tabItems.map(item => (
                        <Tabs.Tab 
                            title={item.name}
                            key={item.key} 
                        />
                    ))
                }
                </Tabs>
            }
            <div className="toggleWrap">
                <div className="linear"></div>
                <div className={classNames("toggle", { "active": isActive})} onClick={() => setIsActive(!isActive)}>
                    <i><DownOutline /></i>
                </div>
            </div>
            </div>
        )
    }

    return (
        <HomeWrapper>
            <Top>
                <div className="hd">
                    <div className="line">
                        <a href="/" className="logo"><img src={netease} alt="网易严选" /></a>
                        <NavLink to='/search' className="searchInput">
                            <div >
                                <i><SearchOutline /></i>
                                <span className="placeholder">搜索商品，共118826款好物</span>
                            </div>
                        </NavLink>
                    </div>
                    { renderTabList() }
                    { isActive && <div className="mask" onClick={() => setIsActive(false)}></div>}
                </div>
            </Top>
            <Swiper
                direction='horizontal'
                loop
                indicator={() => null}
                ref={swiperRef}
                defaultIndex={activeIndex}
                onIndexChange={index => {
                    setActiveIndex(index)
                }}
            >
            {
                tabItems.map((item) => {
                    if(item.key === "111") 
                        return (
                            <Swiper.Item key={item.key}>
                                <Recommend data={recommend} />
                            </Swiper.Item>
                        )
                    else
                        return (
                            <Swiper.Item key={item.key}>
                                <Othermend/>
                            </Swiper.Item>
                        )
                })
            }
            </Swiper>
        </HomeWrapper>
    )
}

const mapStateToProps = (state:rootState) => ({
    loading: state.loading,
    tabItem: state.home.tabItem,
    recommend: state.home.recommend
})

const mapDispatchToProps = (dispatch:Dispatch<AnyAction>) => ({
    getHomeDataActionDispatch() {
        dispatch<any>(getHomeDataAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)