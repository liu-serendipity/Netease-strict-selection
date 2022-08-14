import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/Home'
const Sort = lazy(() => import ('@/pages/Sort'))
const WorthBuy = lazy(() => import ('@/pages/WorthBuy'))
const Cart = lazy(() => import ('@/pages/Cart'))
const Person = lazy(() => import ('@/pages/Person'))
const Search = lazy(() => import ('@/pages/Search'))

const RouterConfig = () => {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>} />
                <Route path="/home" element={<Home />} />
                <Route path="/sort" element={<Sort />} />
                <Route path="/worthbuy" element={<WorthBuy />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/person" element={<Person />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </Suspense>
    )
}

export default RouterConfig