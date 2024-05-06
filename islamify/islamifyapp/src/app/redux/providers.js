"use client";
import { Provider } from "react-redux";
import store from "./store";
import Footer from "../components/Footer";

export const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
