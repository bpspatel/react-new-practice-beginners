import RestaurantsCard from "./RestaurantsCard";
import { proudctListApi } from "../config";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchTxt, restaurantData) {
  return restaurantData.filter((item) =>
    item.data.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
}

const Body = () => {
  const [searchTxt, setSearchTxt] = useState(""); // useState() return array
  const [allRestaurantData, setAllRestaurantData] = useState([]);
  const [filterRestaurantData, setFilterRestaurantData] = useState([]);

  async function getRestaurantData() {
    const record = await fetch(proudctListApi);
    const json = await record.json();
    setAllRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
  }
  // once call after the render
  useEffect(() => {
    $data = getRestaurantData();
    console.log("CAll Useffect...");
  }, []);

  //don't render component
  if (!allRestaurantData) return null;

  console.log("Render");
  return allRestaurantData?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
            setAllRestaurantData(allRestaurantData);
          }}
        />
        <h1>{searchTxt}</h1>

        <button
          className="search-btn"
          onClick={() => {
            //filter data
            const data = filterData(searchTxt, allRestaurantData);
            //setRestaurantData(data);
            setFilterRestaurantData(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filterRestaurantData?.length === 0 ? (
          <h1>No record match.</h1>
        ) : (
          filterRestaurantData.map((items) => {
            return <RestaurantsCard {...items.data} key={items.data.id} />;
          })
        )}
      </div>
    </>
  );
};

export default Body;
