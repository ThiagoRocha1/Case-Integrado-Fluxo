import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Cliente from "../Pages/Cliente";
import Admin from "../Pages/Admin";
import Login from "../Pages/Login";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path="/"/>
        <Route element={<Cliente />} path="/Cliente"/>
        <Route element={<Admin />} path="/Admin" />
        
      </Routes>
    </BrowserRouter>
  );
}
