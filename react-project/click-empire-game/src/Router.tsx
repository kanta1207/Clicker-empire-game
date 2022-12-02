import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './components/pages/LoginPage'

export const Router = () => {
  return (
    <Routes>
      <Route element={<LoginPage/>} path="/"/>
    </Routes>
  )
}
