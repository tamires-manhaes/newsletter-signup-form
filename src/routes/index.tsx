/** @jsxRuntime classic */
/** @jsx jsx */
import Feedback from "../pages/Feedback";
import Home from "../pages/Home";
import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/thanks" Component={Feedback} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
