import { React } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Category.css";

function Category() {
  const navigate = useNavigate();

  return (
    <div id="container">
      <div id="AppBar">
        <button
          id="backBtn"
          onClick={() => {
            navigate("/");
          }}
        >
          {"<"}
        </button>
        <div id="pageTitle">카테고리</div>
        <button
          id="addBtn"
          onClick={() => {
            navigate("/");
          }}
        >
          {"+"}
        </button>
      </div>

      <div id="categoryForm">
        <button
          id="category"
          onClick={() => {
            navigate("/");
          }}
        >
          일반
        </button>
        <button
          id="category_edit"
          onClick={() => {
            navigate("/");
          }}
        >
          {">"}
        </button>
        <div id="line"></div>
      </div>

      <div id="categoryForm">
        <button
          id="category"
          onClick={() => {
            navigate("/");
          }}
        >
          전체공개
        </button>
        <button
          id="category_edit"
          onClick={() => {
            navigate("/");
          }}
        >
          {">"}
        </button>
        <div id="line"></div>
      </div>
    </div>
  );
}

export default Category;
