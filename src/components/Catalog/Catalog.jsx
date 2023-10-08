import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  onNextPage,
  setAdverts,
  firstAdverts,
} from '../../redux/catalog/catalogSlice';

import api from '../Api/api';
import { AdvertsList, Container } from './Catalog.styled';
import AdvertItem from 'components/AdvertItem/AdvertItem';
import ButtonLoad from 'components/ButtonLoad/ButtonLoad';

function Catalog() {
  const dispatch = useDispatch();

  const page = useSelector(state => state.catalog.page);
  const adverts = useSelector(state => state.catalog.adverts);
  const filters = useSelector(state => state.catalog.filters);

  const onFindMore = () => {
    dispatch(onNextPage());
    getAdverts(page);
  };

  const getAdverts = page => {
    api(page)
      .then(results => {
        dispatch(setAdverts(results));
      })
      .catch(err => console.error('error:' + err));
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
    <Container>
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
          <ButtonLoad onFindMore={onFindMore} />
        </>
      )}
    </Container>
  );
}

export default Catalog;
