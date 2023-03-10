import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from './component/Body';
import Footer from './component/Footer';


const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<AppLayout />);
