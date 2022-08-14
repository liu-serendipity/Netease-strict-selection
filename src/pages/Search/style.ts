import styled from "styled-components"

export const Container = styled.div`
    background-color: #eee!important;
    position:fixed;
    top: 0;
    left:0;
    right:0;
    bottom:0;
    width: 100%;
    z-index: 100;
    overflow: hidden;
    transform-origin: right bottom;
    &.fly-enter, &.fly-appear {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active, &.fly-apply-active {
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
    .search_suggestions_views {
        background-color: #eee;
        position: relative;
        z-index: 1;
    }
`

export const LoadingWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    z-index: 1000
`

export const ShutCutWrapper = styled.div`
    padding: 0 0.75rem 0.75rem;
    background-color: #fff;
    overflow: hidden;
    margin-bottom: 0.5rem;
    .highlight {
        border-color: #dd1a21!important;
        color: #dd1a21!important;
    }
    i {
        margin-left: auto;
        margin-right: -0.15rem;
    }
`

export const Header = styled.header`
    height: 2.25rem;
    font-size: 0.7rem;
    color: #999;
    display: flex;
    align-items: center;
`

export const Nav = styled.nav`
    margin-right: -0.75rem;
    margin-bottom: -0.8rem;
    zoom: 1;
    .item {
        float: left;
        padding: 0 0.375rem;
        margin-right: 0.8rem;
        margin-bottom: 0.8rem;
        line-height: 1.15rem;
        border: 1px solid #999;
        border-radius: 4px;
        color: #333;
        font-size: 0.6rem;
    }
    ::after {
        display: block;
        clear: both;
        visibility: hidden;
        height: 0;
        overflow: hidden;
        content: ".";
    }
`

export const SuggestWrapper = styled.ul`
    border-top: 1px solid #d9d9d9;
    z-index: 101;
    position: relative;
    display: block;
    padding-left: 0.75rem;
    background-color: #fff;
    .item {
        height: 2.25rem;
        font-size: 0.7rem;
        position: relative;
        .listItem {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            position: relative;
            min-height: 2.25rem;
            padding-right: 2rem;
            .inner {
                width: 100%;
                zoom: 1;
            }
            i {
                position: absolute;
                right: 0.4rem;
            }
        }
        .listItem::after {
            content: "";
            position: absolute;
            background-color: #d9d9d9;
            left: 0;
            width: 100%;
            height: 1px;
            -webkit-transform-origin: 50% 100% 0;
            transform-origin: 50% 100% 0;
            bottom: 0;
        }
    }
`