import React from "react";
import SearchSvg from "../svg/SearchSvg";
import Input from "../common/Input";

const SearchBar = ({ onChange }) => {
  return (
    <div>
      <form className="max-w-md mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <SearchSvg />
          </div>
          <Input
            type="search"
            id="default-search"
            varient="mediumBlueOutlined"
            placeholder="Search by name"
            onChange={(e) => {
              onChange(e.target.value.toLowerCase());
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
