import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const FooterWrapper = styled.div`
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    position: fixed;
    z-index: 5;
    .tabBar {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-around;
        position: relative;
        z-index: 6;
        height: ${px2rem(48)};
        border-top: 1px solid #d9d9d9;
        .item {
            position: relative;
            text-align: center;
            span {
                display: block;
                color: #666;
                line-height: 1;
                margin-top: ${px2rem(-3)};
                font-size: ${px2rem(12)};
            }
        }
        a {
            &.active {
                span, i {
                    color: red
                }
            }
        }
    }
`