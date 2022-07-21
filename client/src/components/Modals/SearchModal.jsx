import React, { useState } from "react";
import { GeneralData } from "../../context/GeneralContext";

/* Icons imports */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";

const SearchModal = ({ userType }) => {
  const { isShowingModal, setIsShowingModal } = GeneralData();

  const [searchFilter, setSearchFilter] = useState("searchTypeId");
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {};

  return (
    <div
      className={`absolute left-0 top-0 bg-black/25 w-full h-full ${
        isShowingModal ? "flex" : "hidden"
      } justify-center items-center z-50`}
    >
      <form
        onSubmit={handleSearch}
        className="relative bg-clr-secondary-one rounded-3xl text-xl text-black p-8"
      >
        <FontAwesomeIcon
          icon={faX}
          onClick={() => {
            setIsShowingModal(false);
          }}
          className="absolute right-0 top-0 bg-clr-primary rounded-full text-clr-secondary-two hover:text-clr-secondary-one text-3xl px-2 py-1 translate-x-1/2 -translate-y-1/2"
        />
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => {
              setSearchFilter(e.target.value);
            }}
            className="rounded-full px-2 py-1"
          >
            <option value="searchTypeId">ID</option>
            <option value="searchTypeName">Nombre</option>
            <option value="searchTypeAge">Edad</option>
          </select>
          <FontAwesomeIcon
            icon={faSearch}
            className="text-clr-primary text-5xl"
          />
        </div>
        <input
          type="text"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          className="rounded-full mt-4 px-3 py-2"
        />
      </form>
    </div>
  );
};

export default SearchModal;
