import React from "react"
import Description from "./components/descript";
import SearchForm from "./components/search";
import SearchResult from "./components/searchResult";
import '../../scss/main.scss'
import { useState } from "react"

function MainPage() {

  const [selectItem, setItem] = useState();

  return(
    <>
     <Description/>
     <SearchForm setData={setItem}/>
     <SearchResult setInfo={selectItem}/>
    </>
  )
};
export default MainPage;