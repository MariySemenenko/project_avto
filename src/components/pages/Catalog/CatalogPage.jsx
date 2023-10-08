import React from 'react'
import Catalog from 'components/Catalog/Catalog';
import CarFilter from 'components/CarFilter/CarFilter.jsx';
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from 'redux/catalog/catalogSlice';



function CatalogPage() {
  const dispatch = useDispatch();
  const adverts = useSelector((state) => state.catalog.adverts);

  const handleFilterChange = (filters) => {
    dispatch(setFilters(filters));
  };

  return (
  <div className='container'>
    
    <CarFilter adverts={adverts} onFilterChange={handleFilterChange} />
    <Catalog />
    </div>
  )
}
export default CatalogPage;