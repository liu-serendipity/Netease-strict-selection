import styled from "styled-components"
import { px2rem } from '@/assets/global-style'

export const HomeWrapper = styled.div`
    
`

export const Top = styled.div`
    z-index: 11;
    position: sticky;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #fff;
    .hd {
        background-color: #fff;
        border-bottom: 1px solid #d9d9d9;
        .line {
            position: relative;
            z-index: 2;
            display: flex;
            align-items: center;
            background: #fff;
            padding: ${px2rem(8)} ${px2rem(15)};
            .logo {
                height: ${px2rem(22)};
                width: ${px2rem(80)};
                margin-right: ${px2rem(8)};
                display: inline-block;
                img {
                    height: 100%;
                    width: 100%;
                }
            }
            .searchInput {
                display: flex;
                align-items: center;
                justify-content: center;
                height: ${px2rem(28)};
                font-size: ${px2rem(14)};
                background-color: #ededed;
                border-radius: ${px2rem(4)};
                flex-grow: 1;
                .placeholder {
                    color: #666;
                }
            }
        }
        .mask {
            position: fixed;
            z-index: 1;
            background: rgba(0,0,0,.5);
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
    .adm-tabs-tab-active {
        color: #dd1a21;
    }
    .adm-tabs-tab-line {
        background: #dd1a21;
    }
    .adm-tabs-tab {
        font-weight: 500;
        height: 1.8rem;
        font-size: 0.7rem;
    }
    .tabWrap {
        position: relative;
        z-index: 2;
        background: #fff;
        margin-top: -0.5rem;
        .toggleWrap {
            display: flex;
            flex-grow: 0;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            right: 0;
            .linear {
                width: .6rem;
                height: .6rem;
                background-image: linear-gradient(90deg,hsla(0,0%,100%,0) 0,#fff);
            }
            .toggle {
                width: 2.5rem;
                height: 1.85rem;
                background: #fff;
                text-align: center;
                i {
                    margin-top: 0.4rem;
                    display: inline-block;
                }
            }
        }
    }
    .active {
        i {
            transform: rotate(180deg);
            transition: transform 0.5s;
        }
    }
    .tabAlter {
        height: 1.5rem;
        line-height: 2rem;
        padding-left: 0.75rem;
        font-size: 0.7rem;
    }
    .moreCate {
        padding-top: 0.6rem;
        overflow: hidden;
        font-size: 0.6rem;
        .cateTag {
            width: 3.75rem;
            height: 1.4rem;
            line-height: 1.4rem;
            text-align: center;
            float: left;
            margin-bottom: 1rem;
            margin-left: 0.75rem;
            background: #fafafa;
            border: 1px solid #ccc;
            border-radius: 0.1rem;
        }
    }
    .activetab {
        border: 1px solid #dd1a21;
        color: #dd1a21;
    }
`