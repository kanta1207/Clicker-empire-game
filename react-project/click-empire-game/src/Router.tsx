import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { LoginPage } from "./components/pages/LoginPage";
import { MainPage } from "./components/pages/MainPage";

export const Router = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route element={<LoginPage />} path="/" />
        <Route element={<MainPage />} path="/main" />
      </Routes>
    </RecoilRoot>
  );
};
