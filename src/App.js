import React from "react";
import Header from "./components/Header";
import PageTitle from "./components/PageTitle";
import style from  "./styles/modules/app.module.scss";

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO List</PageTitle>
        <div className={style.app__wrapper}>
          <Header/>
        </div>
      </div>
    </>
  );
}
 
export default App;
