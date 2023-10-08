
import React from "react";
import { AdvertsList } from "../../Catalog/Catalog.styled";

import { AdvertsContainer, FavouritesContainer, Container } from "./Favorites.styled";
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
    <Container>
    <FavouritesContainer className="container">
     
      <AdvertsContainer>
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
      <CarFilter onFilterChange={handleFilterChange} />
    </FavouritesContainer>
    </Container>
  );
}

export default Favorites;

// import React from "react";
// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// //import { useSelector } from "react-redux";
// import AdvertItem from "components/AdvertItem/AdvertItem";
// import { AdvertsList } from "components/Catalog/Catalog.styled";
// import api from "components/Api/api";

// function Favorites() {
//   const [adverts, setAdverts] = useState([]);

//   useEffect(() => {
//     getAdverts();
//   }, []);

//   const getAdverts = () => {
//     api()
//       .then((results) => {
//         setAdverts(results);
//       })
//       .catch((err) => console.error("error:" + err));
//   };

//   const favorites = useSelector((state) => state.favorite.items);
// console.log(favorites)
//   return (
//     <div className="container">
//       {adverts && (
//         <>
//           <AdvertsList>
//             {favorites.map((advert) => {
//               return <AdvertItem key={advert.id} advert={advert} />;
//             })}
//           </AdvertsList>
//         </>
//       )}
//     </div>
//   );
// }

// export default Favorites;