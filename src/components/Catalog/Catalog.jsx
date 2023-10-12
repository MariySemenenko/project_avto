import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  onNextPage,
  setAdverts,
  firstAdverts,
  // setIsLoading,
} from '../../redux/catalog/catalogSlice';

import api from '../../redux/operations/Api/api';
import { AdvertsList, Container } from './Catalog.styled';
import AdvertItem from 'components/AdvertItem/AdvertItem';
import ButtonLoad from 'components/ButtonLoad/ButtonLoad';
//import Loader from 'Loader/Loader';

function Catalog() {
  const dispatch = useDispatch();

  const page = useSelector(state => state.catalog.page);
  const adverts = useSelector(state => state.catalog.adverts);
  const filters = useSelector(state => state.catalog.filters);
  // const isLoading = useSelector(state => state.catalog.setIsLoading);

  const onFindMore = () => {
    // console.log('Button clicked');
    // dispatch(setIsLoading(true));
    
    dispatch(onNextPage());
    getAdverts(page);
  };

  const getAdverts = page => {
    api(page)
      .then(results => {
        dispatch(setAdverts(results));
      })
      .catch(err => {
        console.error('error:' + err);
      })
      // .finally(() => {
      //   dispatch(setIsLoading(false)); 
      // });
  };

  useEffect(() => {
    if (adverts.length === 0) {
      api(page).then(results => {
         dispatch(firstAdverts(results));
      });
    }
  }, [adverts.length, dispatch, page]);

  const filteredAdverts = adverts.filter(adverts => {
    if (filters.selectedMake && adverts.make !== filters.selectedMake) {
      return false;
    }
    if (
      filters.selectedPrice &&
      parseInt(adverts.rentalPrice.slice(1), 10) > Number(filters.selectedPrice)
    ) {
      return false;
    }
    if (filters.minMileage && adverts.mileage < Number(filters.minMileage)) {
      return false;
    }
    if (filters.maxMileage && adverts.mileage > Number(filters.maxMileage)) {
      return false;
    }
    return true;
  });

  return (
    <Container className="container">
    {adverts && (
      <>
        {filteredAdverts.length > 0 ? (
          <AdvertsList>
            {filteredAdverts.map(advert => {
              return <AdvertItem key={advert.id} advert={advert} />;
            })}
          </AdvertsList>
        ) : (
          <div>No matching favorites found</div>
        )}
        <div>
          {/* {isLoading ? (
            <Loader />
          ) : (
            <ButtonLoad onFindMore={onFindMore} />
          )} */}
 <ButtonLoad onFindMore={onFindMore} />

        </div>
      </>
    )}
  </Container>
  );
}

export default Catalog;


////////////
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   onNextPage,
//   setAdverts,
//   firstAdverts,
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from '../../redux/catalog/catalogSlice';


// import { AdvertsList, Container } from './Catalog.styled';
// import AdvertItem from 'components/AdvertItem/AdvertItem';
// import ButtonLoad from 'components/ButtonLoad/ButtonLoad';
// import Loader from 'Loader/Loader';
// import {api} from 'redux/operations/Api/api';

// function Catalog() {
//   const dispatch = useDispatch();

//   const page = useSelector(state => state.catalog.page);
//   const adverts = useSelector(state => state.catalog.adverts);
//   const filters = useSelector(state => state.catalog.filters);
//   const isLoading = useSelector(state => state.catalog.isLoading); // Використовуйте isLoading зі стору

//   const onFindMore = () => {
//     dispatch(fetchingInProgress()); // Викликаємо fetchingInProgress замість setIsLoading(true)

//     dispatch(onNextPage());
//     getAdverts(page);
//   };

//   const getAdverts = page => {
//     api(page)
//       .then(results => {
//         dispatch(setAdverts(results));
//         dispatch(fetchingSuccess()); // Викликаємо fetchingSuccess замість setIsLoading(false)
//       })
//       .catch(err => {
//         console.error('error:' + err);
//         dispatch(fetchingError(err)); // Викликаємо fetchingError в разі помилки
//       });
//   };

//   useEffect(() => {
//     if (adverts.length === 0) {
//       api(page)
//         .then(results => {
//           dispatch(firstAdverts(results));
//           dispatch(fetchingSuccess());
//         })
//         .catch(err => {
//           console.error('error:' + err);
//           dispatch(fetchingError(err));
//         });
//     }
//   }, [adverts.length, dispatch, page]);

//   const filteredAdverts = adverts.filter(adverts => {
//     if (filters.selectedMake && adverts.make !== filters.selectedMake) {
//       return false;
//     }
//     if (
//       filters.selectedPrice &&
//       parseInt(adverts.rentalPrice.slice(1), 10) > Number(filters.selectedPrice)
//     ) {
//       return false;
//     }
//     if (filters.minMileage && adverts.mileage < Number(filters.minMileage)) {
//       return false;
//     }
//     if (filters.maxMileage && adverts.mileage > Number(filters.maxMileage)) {
//       return false;
//     }
//     return true;
//   });

//   return (
//     <Container className="container">
//     {adverts && (
//       <>
//         {filteredAdverts.length > 0 ? (
//           <AdvertsList>
//             {filteredAdverts.map(advert => {
//               return <AdvertItem key={advert.id} advert={advert} />;
//             })}
//           </AdvertsList>
//         ) : (
//           <div>No matching favorites found</div>
//         )}
//         <div>
//           {isLoading ? (
//             <Loader />
//           ) : (
//             <ButtonLoad onFindMore={onFindMore} />
//           )}
//         </div>
//       </>
//     )}
//   </Container>
//   );
// }

// export default Catalog;