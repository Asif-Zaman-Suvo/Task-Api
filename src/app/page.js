"use client";
import Company from "@/Components/Company";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="m-10 p-10">
        <Company />
      </div>
    </Provider>
  );
}
