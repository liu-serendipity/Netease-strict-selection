import React from "react"
import { isPathPartlyExisted } from "@/utils"
import { 
    NavLink, 
    useLocation 
} from 'react-router-dom'
import { 
    FooterWrapper 
} from "./style"

const Footer = () => {

    const { pathname } = useLocation()
    if (isPathPartlyExisted(pathname)) return

    return (
        <FooterWrapper>
            <div className="tabBar">
                <NavLink to="/home">
                    <div className="item">
                        <i className="iconfont icon-shouyeshouye1"></i>
                        <span className="txt">首页</span>
                    </div>
                </NavLink>
                <NavLink to="/sort">
                    <div className="item">
                        <i className="iconfont icon-fenlei"></i>
                        <span className="txt">分类</span>
                    </div>
                </NavLink>
                <NavLink to="/worthbuy">
                    <div className="item">
                        <i className="iconfont icon-maiduan"></i>
                        <span className="txt">值得买</span>
                    </div>
                </NavLink>
                <NavLink to="/cart">
                    <div className="item">
                        <i className="iconfont icon-31gouwuche"></i>
                        <span className="txt">购物车</span>
                    </div>
                </NavLink>
                <NavLink to="/person">
                    <div className="item">
                        <i className="iconfont icon-geren"></i>
                        <span className="txt">个人</span>
                    </div>
                </NavLink>
            </div>
        </FooterWrapper>
    )
}

export default Footer