import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Github, { githubInfoLoader } from "./pages/Github/Github";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import User from "./pages/User/User";
import Contact from "./pages/Contact/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="contact" element={<Contact />} />

      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
