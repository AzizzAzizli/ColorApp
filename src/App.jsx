import React from "react";
import { Route, Routes } from "react-router";
import { SettingsPage} from "./pages/Settings";
import {HomePage } from "./pages/Home";
import { Router } from "./constants/ROUTE";

function App() {
  return (
    <>
      <Routes>
        <Route path={Router.home} element={<HomePage/>} />
        <Route path={Router.setting} element={<SettingsPage />} />
      </Routes>
    </>
  );
}

export default App;
