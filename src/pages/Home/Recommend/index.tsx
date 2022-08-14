import React, { useEffect } from 'react'
import { RecommendWrapper, OptionsWrapper, BannerWrapper, PageContentWrapper } from './style'
import Swiper from 'swiper'
import LazyLoad from 'react-lazyload'
import replace2 from '../replace2.png'
import replace3 from '../replace3.png'
import replace4 from '../replace4.png'

interface RecommendProps {
    data: any
}

const Recommend:React.FC<RecommendProps> = (props) => {
    const {
        data=[]
    } = props

    let swiper1: null = null;
    useEffect(() => {
        if (swiper1) {
            return 
        }
        swiper1= new Swiper('.swiper1', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }, [])

    let swiper2: null = null;
    useEffect(() => {
        if (swiper2) {
            return 
        }
        swiper2= new Swiper('.swiper2', {})
    }, []) 

    const renderSwiper = () => {
        const { focusList=[] } = data
        return (
            <div className="m-slide">
                <div className="slide-con">
                    <div className="swiper-container swiper1">
                        <div className="swiper-wrapper">
                        {
                            focusList.map((item: { id: React.Key | null | undefined; picUrl: string | undefined }) => {
                                return (
                                    <div className="swiper-slide" key={item.id}>
                                        <LazyLoad placeholder={<img 
                                            src={replace2}
                                            width="100%"
                                            height="100%"
                                        />}>
                                            <img 
                                                src={item.picUrl} 
                                                alt="" 
                                                width="100%"
                                                height="100%"
                                            />
                                        </LazyLoad>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        )
    }

    const renderTags = () => {
        const { policyDescList=[] } = data
        return (
            <div className="m-indexServicePolicy">
                <ul className="g-grow">
                {
                    policyDescList.map((item:any) => {
                        return (
                            <li className="item" key={item.icon}>
                                <a href="/home">
                                    <i style={{backgroundImage: "url("+item.icon+")"}}></i>
                                    <span className="text">
                                        {item.desc}
                                    </span>
                                </a>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }

    const renderOptions = () => {
        const { kingKongModule=[] } = data
        return (
            <OptionsWrapper>
                <div className="tm-carousel">
                    <div className="swiper-container2 swiper2">
                        <div className="swiper-wrapper2">
                            <div className="swiper-slide2">
                            {
                                kingKongModule.kingKongList && kingKongModule.kingKongList.map((item:any) => {
                                    return (
                                        <div key={item.picUrl} style={{minHeight: "1"}}>
                                            <a href="/home" className="mb-9">
                                                <div className="icon">
                                                    <LazyLoad placeholder={<img 
                                                        src={replace3}
                                                        width="100%"
                                                        height="100%"
                                                    />}>
                                                        <img 
                                                            width="100%"
                                                            height="100%"
                                                            src={item.picUrl} 
                                                            alt="" 
                                                            className="img" />
                                                    </LazyLoad>
                                                </div>
                                                <div className="txt">{item.text}</div>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </OptionsWrapper>
        )
    }

    // const renderPageContent = () => {
    //     const { indexActivityModule=[], categoryHotSellModule={} } = data
    //     let items1 = categoryHotSellModule.categoryList.slice(0, 1)
    //     let items2 = categoryHotSellModule.categoryList.slice(1)
    //     return (
    //         <>
    //             <div className="m-freshmanModule m-indexFloor">
    //                 <div className="moduleTitle">
    //                     <span className="txt">新人专享礼</span>
    //                 </div>
    //                 <div className="content">
    //                     <div className="left">
    //                         <div className="name">新人专享礼包</div>
    //                         <div className="imgWrap">
    //                             <div className="pic">
    //                                 <LazyLoad placeholder={<img 
    //                                     width="100%"
    //                                     height="100%"
    //                                     src={replace4}
    //                                 />}>
    //                                     <img 
    //                                         src="https://yanxuan.nosdn.127.net/static-union/1648017994dd2933.png" 
    //                                         alt="" 
    //                                         width="100%"
    //                                         height="100%"
    //                                     />
    //                                 </LazyLoad>
    //                             </div>
    //                             <div className="animate"></div>
    //                         </div>
    //                     </div>
    //                     <div className="right">
    //                     {
    //                         indexActivityModule.map((item: { showPicUrl: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; subTitle: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; tag: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; activityPrice: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; originPrice: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }, index: number) => {
    //                             return (
    //                                 <div className={`module${index + 1}`} key={index}>
    //                                     <div>
    //                                         <div className="m-activityItem">
    //                                             <div className="picWrap">
    //                                                 <div className="pic">
    //                                                     <LazyLoad placeholder={<img 
    //                                                         width="100%"
    //                                                         height="100%"
    //                                                         src={replace4}
    //                                                     />}>
    //                                                         <img 
    //                                                             src={item.showPicUrl} 
    //                                                             alt="" 
    //                                                             width="100%"
    //                                                             height="auto"
    //                                                         />
    //                                                     </LazyLoad>
    //                                                 </div>
    //                                                 <div className="discount">
    //                                                     <div className="line1">{item.activityPrice}</div>
    //                                                     <div className="line2">{item.originPrice}</div>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="cnt">
    //                                                 <div className="title">{item.title}</div>
    //                                                 <div className="subTitle">{item.subTitle}</div>
    //                                                 { item.tag && <div className="tag">{item.tag}</div>}
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             )
    //                         })
    //                     }
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="m-categoryHotSellModule m-indexFloor">
    //                 <div className="moduleTitle">
    //                     <div className="left">{categoryHotSellModule.title}</div>
    //                 </div>
    //                 <div className="content">
    //                     <div className="line1">
    //                     {
    //                         items1.map((item: { categoryName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; picUrl: string | undefined }, index: number) => {
    //                             return (
    //                                 <div className={`item-big item-${index + 1}`} key={index}>
    //                                     <div className="name">
    //                                         <span className="txt">{item.categoryName}</span>
    //                                     </div>
    //                                     <div className="imgWrap">
    //                                         <LazyLoad placeholder={<img 
    //                                             width="100%"
    //                                             height="100%"
    //                                             src={replace4}
    //                                         />}>
    //                                             <img 
    //                                                 src={item.picUrl}
    //                                                 alt="" 
    //                                                 width="100%"
    //                                                 height="100%"
    //                                             />
    //                                         </LazyLoad>
    //                                     </div>
    //                                 </div>
    //                             )
    //                         })
    //                     }
    //                     </div>
    //                     <div className="line2">
    //                     {
    //                         items2.map((item: { categoryName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; picUrl: string | undefined }, index: React.Key | null | undefined) => {
    //                             return (
    //                                 <div className="item" key={index}>
    //                                     <div className="name">{item.categoryName}</div>
    //                                     <div className="imgWrap">
    //                                         <LazyLoad placeholder={<img 
    //                                             width="100%"
    //                                             height="100%"
    //                                             src={replace4}
    //                                         />}>
    //                                             <img 
    //                                                 src={item.picUrl}
    //                                                 alt="" 
    //                                                 width="100%"
    //                                                 height="100%"
    //                                             />
    //                                         </LazyLoad>
    //                                     </div>
    //                                 </div>
    //                             )
    //                         })
    //                     }
    //                     </div>
    //                 </div>
    //             </div>
    //         </>
    //     )
    // }

    return (
        <RecommendWrapper>
            <BannerWrapper>
                {renderSwiper()}
            </BannerWrapper>
            {renderTags()}
            {renderOptions()}
            <PageContentWrapper>
                {/* {renderPageContent()} */}
            </PageContentWrapper>
        </RecommendWrapper>
    )
}

export default Recommend