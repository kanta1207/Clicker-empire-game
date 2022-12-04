import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './components/pages/LoginPage'
import { MainPage } from './components/pages/MainPage'

export const Router = () => {
  return (
    <Routes>
      <Route element={<LoginPage/>} path="/"/>
      <Route element={<MainPage/>} path="/main"/>
    </Routes>
  )
}
