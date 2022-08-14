import styled from "styled-components"
import { px2rem } from '@/assets/global-style'

export const SearchBoxWrapper = styled.div`
    z-index: 1;
    position: relative;
    background-color: #fff;
    height: ${px2rem(43.5)};
    .bd {
        padding: 0 ${px2rem(15)};
        background-color: #fff;
        z-index: 1;
        width: ${px2rem(375)};
        margin: auto;
        overflow: hidden;
        position: relative;
        height: ${px2rem(44)};
        display: flex;
        align-items: center;
        justify-content: center;
        .searchIpt {
            flex: 1;
            .search {
                padding-top: 0;
                padding-left: ${px2rem(10)};
                padding-bottom: 0;
                border: 0;
                background-color: #f4f4f4;
                height: ${px2rem(28)};
                border-radius: 4px;
                padding: 0 0.5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                input {
                    flex: 1;
                    font-size: 0.7rem;
                    border: none;
                    color: rgba(0,0,0,.8);
                    background-color: transparent;
                    line-height: 1rem;
                    padding-left: 0.05rem;
                }
            }
        }
        span {
            margin-left: 0.75rem;
            font-size: 0.7rem;
        }
    }
`