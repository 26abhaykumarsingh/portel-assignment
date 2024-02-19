import React from "react";
import "./Main.css";
import MyEditor from "./MyEditor";

function Main() {
  return (
    <div className="Main">
      <div className="header">
        <div className="title">Demo editor by Abhay</div>
        <button className="saveBtn">Save</button>
      </div>
      <div className="editorArea">
        <MyEditor></MyEditor>
      </div>
    </div>
  );
}

export default Main;
