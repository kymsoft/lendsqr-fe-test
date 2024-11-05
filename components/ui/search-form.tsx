"use client"

import { Button } from "@mui/material";
import React, { FC } from "react";
import { IoSearch } from "react-icons/io5";

interface SearchFormProps {
  onSearch: () => void;
}

const SearchForm: FC<SearchFormProps> = ({ onSearch }) => {
  return (
      <form onSubmit={onSearch} className="search-form">
        <input
          placeholder="Search for anything"
          className="search-input"
          type="text"
        />
        <button className="btn-search" type="submit">
          <IoSearch className="search-icon"/>
        </button>
      </form>
  );
};

export default SearchForm;
