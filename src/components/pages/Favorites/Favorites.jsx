
import React from "react";
import { AdvertsList } from "../../Catalog/Catalog.styled";

import { AdvertsContainer, FavouritesContainer, } from "./Favorites.styled";
import { useSelector, useDispatch } from "react-redux";
import { setFiltersFavorite  } from "../../../redux/catalog/catalogSlice";

import AdvertItem from "components/AdvertItem/AdvertItem";
import CarFilter from "components/CarFilter/CarFilter";

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.items);
  const filters = useSelector((state) => state.catalog.filtersFavorite);

  const handleFilterChange = (filters) => {
    dispatch(setFiltersFavorite(filters));
  };

  const filteredFavorites = favorites.filter((advert) => {
    if (filters.selectedMake && advert.make !== filters.selectedMake) {
      return false;
    }
    if (
      filters.selectedPrice &&
      parseInt(advert.rentalPrice.slice(1), 10) > Number(filters.selectedPrice)
    ) {
      return false;
    }
    if (filters.minMileage && advert.mileage < Number(filters.minMileage)) {
      return false;
    }
    if (filters.maxMileage && advert.mileage > Number(filters.maxMileage)) {
      return false;
    }
    return true;
  });

  return (
    // <Container>
    <FavouritesContainer className="container">
     
      <AdvertsContainer>
      <CarFilter onFilterChange={handleFilterChange} />
        {filteredFavorites.length > 0 ? (
          <AdvertsList>
            {filteredFavorites.map((advert) => (
              <AdvertItem key={advert.id} advert={advert} />
            ))}
          </AdvertsList>
        ) : (
          <div>No matching favorites found</div>
        )}
      </AdvertsContainer>
      
    </FavouritesContainer>
    // </Container>
  );
}

export default Favorites;

