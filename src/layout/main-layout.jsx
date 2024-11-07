import React from 'react'
import { Header } from './header/header'
import { Navigate, Outlet } from 'react-router-dom'
import { loadState } from '../config/storege'

export const MainLayout = () => {
    const user = loadState("user")

    if (!user) {
        return <Navigate replace  to="/app" />
    }
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}
