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
        <Button className="btn-search" type="submit">
          <IoSearch className="search-icon"/>
        </Button>
      </form>
  );
};

export default SearchForm;
