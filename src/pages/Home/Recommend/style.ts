import styled from "styled-components"

export const RecommendWrapper = styled.div`
    .m-indexServicePolicy {
        background: #fff;
        .g-grow {
            width: 100%;
            height: 1.8rem;
            padding: 0 0.75rem;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            zoom: 1;
            .item {
                flex: 1;
                float: left;
                a {
                    display: inline-block;
                    vertical-align: middle;
                    zoom: 1;
                    height: 0.8;
                    i {
                        background-size: 100% 100%;
                        background-position: 50%;
                        width: 0.8rem;
                        height: 0.8rem;
                        display: inline-block;
                        vertical-align: middle;
                    }
                    .text {
                        font-size: 0.6rem;
                        color: #333;
                        margin-left: 0.2rem;
                        line-height: 0.8rem;
                        display: inline-block;
                        vertical-align: middle;
                        zoom: 1;
                    }
                }
            }
        }
    }
`

export const BannerWrapper = styled.div`
    height: 7.4rem;
    position: relative;
    background-color: #fff;
    .m-slide {
        padding-top: 7.4rem!important;
        position: relative;
        width: 100%;
        overflow: hidden;
        .slide-con {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
    .swiper-container {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        z-index: 1;
        width: 100%;
        height: 100%;
        .swiper-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 1;
            display: flex;
            box-sizing: content-box;
            transition-property: transform;
            .swiper-slide {
                position: relative;
                height: 100%;
                flex-shrink: 0;
                img {
                    background-color: #f9f9f9;
                    width: 100%;
                    height: auto;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }
`

export const OptionsWrapper = styled.div`
    background: url('https://yanxuan.nosdn.127.net/fe0bd37a552434cc0d27c1889ff3e1fe.png') rgb(255, 255, 255);
    width: 100%;
    height: 9.3rem;
    .tm-carousel {
        position: relative;
        background-color: #fff;
        .swiper-container2 {
            margin-left: auto;
            margin-right: auto;
            position: relative;
            overflow: hidden;
            z-index: 1;
            .swiper-wrapper2 {
                height: auto;
                transform: translateZ(0);
                position: relative;
                width: 100%;
                z-index: 1;
                display: flex;
                box-sizing: content-box;
                .swiper-slide2 {
                    height: auto;
                    flex-shrink: 0;
                    width: 100%;
                    position: relative;
                    .mb-9 {
                        margin-bottom: 0.225rem;
                        display: block;
                        width: 2.75rem;
                        height: 3.9rem;
                        float: left;
                        margin: 0.25rem 0.5rem 0;
                        .icon {
                            width: 2.75rem;
                            height: 2.75rem;
                            .img {
                                width: 2.75rem;
                                height: 2.75rem;
                                display: block;
                            }
                        }
                        .txt {
                            margin-top: 0.25rem;
                            text-align: center;
                            font-size: 0.6rem;
                            line-height: 0.9rem;
                            white-space: nowrap;
                            color: rgb(51, 51, 51);
                        }
                    }
                }
            }
        }
    }
`

export const PageContentWrapper = styled.div`
    min-height: 100%;
    .m-indexFloor {
        margin-bottom: 0.5rem;
        background-color: #fff;
    }
    .moduleTitle {
        width: 100%;
        height: 2.5rem;
        line-height: 2.5rem;
        padding: 0 0.75rem;
        background: #fff;
        overflow: hidden;
    }
    .m-freshmanModule {
        background: #fff;
        margin-top: 0.2rem;
        padding-bottom: 0.75rem;
        .moduleTitle {
            height: 2.25rem;
            width: 100%;
            line-height: 2.25rem;
            text-align: center;
            font-family: PingFangSC-Regular;
            font-size: 0.8rem;
            .txt {
                display: inline-block;
                position: relative;
            }
            .txt::before {
                content: "";
                position: absolute;
                left: -1rem;
                top: 1.125rem;
                width: 0.6rem;
                height: 0.075rem;
                background: #333;
            }
            .txt::after {
                content: "";
                position: absolute;
                right: -1rem;
                top: 1.125rem;
                width: 0.6rem;
                height: 0.075rem;
                background: #333;
            }
        }
        .content {
            padding-left: 0.75rem;
            overflow: hidden;
            .left {
                display: block;
                width: 8.575rem;
                height: 10.85rem;
                background: #f9e9cf;
                border-radius: 0.1rem;
                margin-right: 0.1rem;
                float: left;
                color: #333;
                .name {
                    font-family: PingFangSC-Medium;
                    font-size: 0.8rem;
                    padding: 0.75rem 0 0 0.75rem;
                }
                .imgWrap {
                    margin: 0.925rem auto;
                    width: 6.45rem;
                    height: 6.425rem;
                    position: relative;
                    .animate {
                        position: absolute;
                        width: 0.75rem;
                        height: 0.5rem;
                        bottom: 0.45rem;
                        right: 1.625rem;
                        background: url('https://yanxuan.nosdn.127.net/3f7e731c6650bc1770589c78bd5a18b7.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        animation: carousel 1s linear infinite;
                    }
                }
            }
            .right {
                float: left;
                .module1 {
                    background: #fbe2d3;
                    border-radius: 4px;
                    width: 8.575rem;
                    height: 5.375rem;
                    margin-bottom: 0.1rem;
                }
                .module2 {
                    background: #ffecc2;
                    border-radius: 4px;
                    width: 8.575rem;
                    height: 5.375rem;
                }
                .m-activityItem {
                    position: relative;
                    height: 5.375rem;
                    display: block;
                    color: #333;
                    width: 8.575rem;
                    float: left;
                    border-radius: 0.1rem;
                    margin: 0 0.1rem 0.1rem 0;
                    font-size: 0.6rem;
                    padding: 0.5rem 0 0 0.75rem;
                    .picWrap {
                        width: 5rem;
                        height: 5rem;
                        position: absolute;
                        right: 0;
                        top: 0.375rem;
                        .pic {
                            width: 5rem;
                            height: 5rem;
                        }
                        .discount {
                            position: absolute;
                            top: 0;
                            right: 0.75rem;
                            width: 2rem;
                            height: 2rem;
                            opacity: 0.8;
                            background: #f59524;
                            border-radius: 50%;
                            padding-top: 0.25rem;
                            color: #fff;
                            text-align: center;
                        }
                    }
                    .cnt {
                        position: relative;
                        .title {
                            font-family: PingFangSC-Medium;
                            font-size: 0.8rem;
                        }
                        .subTitle {
                            color: #7f7f7f;
                        }
                        .tag {
                            position: relative;
                            display: inline-block;
                            padding: 0 0.25rem;
                            height: 0.8rem;
                            background: #cbb693;
                            border-radius: 0.1rem;
                            color: #fff;
                            font-size: 0.55rem;
                            line-height: 0.8rem;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
`