import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import SearchList from "./SearchList";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [seachListA, setSeachList] = useState(false);
  const TitleArray = ["Video1", "Animation", "Movies", "Video2"].filter((q) =>
    q.toUpperCase().includes(searchQuery.toUpperCase())
  );
  return (
    <>
      <div className="SearchBar_Container"> 
        <div className="SearchBar_Container2">
          <div className="search_div">
            <input
              type="text"
              className="iBox_SearchBar"
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              onClick={(e) => setSeachList(true)}
            />
            <FaSearch className="searchIcon_SearchBar" />
            <BsMicFill className="Mic_SearchBar" />
            {searchQuery && seachListA && (
              <SearchList
                setSearchQuery={setSearchQuery}
                TitleArray={TitleArray}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
