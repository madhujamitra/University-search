import { useReducer, useEffect } from "react";
import { fetchUniversities } from "../services/api";
import SearchBar from "../components/SearchBar";
import UniversityTable from "../components/UniversityTable";
import ApiStatus from "../components/ApiStatus";
import Pagination from "../components/Pagination";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const countries = [
  { value: "Canada", label: "Canada" },
  { value: "United States", label: "United States" },
  { value: "India", label: "India" },
  { value: "Australia", label: "Australia" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "Germany", label: "Germany" },
  { value: "France", label: "France" },
  { value: "China", label: "China" },
  { value: "Japan", label: "Japan" },
  { value: "South Korea", label: "South Korea" },
  { value: "Brazil", label: "Brazil" },
  { value: "Mexico", label: "Mexico" },
  { value: "Russia", label: "Russia" },
  { value: "Italy", label: "Italy" },
  { value: "Spain", label: "Spain" },
];

const ITEMS_PER_PAGE = 10;

const initialState = {
  selectedCountry: { value: "Canada", label: "Canada" },
  universities: [],
  search: "",
  favourites: [],
  apiStatus: {},
  currentPage: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_COUNTRY":
      return { ...state, selectedCountry: action.payload };
    case "SET_UNIVERSITIES":
      return { ...state, universities: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_FAVOURITES":
      return { ...state, favourites: action.payload };
    case "SET_API_STATUS":
      return { ...state, apiStatus: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "CLEAR_FILTERS":
      return {
        ...state,
        selectedCountry: initialState.selectedCountry,
        search: "",
      };
    default:
      return state;
  }
};

export default function Search() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    loadUniversities();
  }, [state.selectedCountry]);

  const loadUniversities = async () => {
    const response = await fetchUniversities(state.selectedCountry.value);
    dispatch({ type: "SET_UNIVERSITIES", payload: response.data });
    dispatch({
      type: "SET_API_STATUS",
      payload: { status: response.status, time: response.time },
    });
  };

  const handleAddFavourite = (uni) => {
    const updatedFavourites = [...state.favourites, uni];
    dispatch({ type: "SET_FAVOURITES", payload: updatedFavourites });
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  const handleRemoveFavourite = (name) => {
    const updatedFavourites = state.favourites.filter(
      (fav) => fav.name !== name
    );
    dispatch({ type: "SET_FAVOURITES", payload: updatedFavourites });
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
    loadUniversities();
  };

  const filteredUniversities = state.universities.filter((uni) =>
    uni.name.toLowerCase().includes(state.search.toLowerCase())
  );

  const indexOfLastItem = state.currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentUniversities = filteredUniversities.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredUniversities.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    dispatch({ type: "SET_FAVOURITES", payload: favs });
  }, []);

  const handlePageChange = (page) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: page });
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">UNIVERSITY SEARCH</h1>
        <Link href="/favourites" className="text-primary flex items-center">
          <FontAwesomeIcon icon={faHeart} className="mr-2" />
          Go to Favourites
        </Link>
      </div>

      <SearchBar
        countries={countries}
        selectedCountry={state.selectedCountry}
        setSelectedCountry={(country) =>
          dispatch({ type: "SET_SELECTED_COUNTRY", payload: country })
        }
        search={state.search}
        setSearch={(value) => dispatch({ type: "SET_SEARCH", payload: value })}
        clearFilters={clearFilters}
      />
      <UniversityTable
        universities={currentUniversities}
        favourites={state.favourites}
        handleAddFavourite={handleAddFavourite}
        handleRemoveFavourite={handleRemoveFavourite}
      />
      <div className="p-2.5">
        <Pagination
          currentPage={state.currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <ApiStatus status={state.apiStatus.status} time={state.apiStatus.time} />
    </div>
  );
}
