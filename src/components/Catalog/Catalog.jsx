import { useEffect, useState } from "react";

import api from "../Api/api";
import { AdvertsList } from "./Catalog.styled";
import ButtonLoad from "components/ButtonLoad/ButtonLoad";
import AdvertItem from "components/AdvertItem/AdvertItem";


function Catalog() {
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);

  const onFindMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    getAdverts(page);
  }, [page]);

  const getAdverts = (page) => {
    api(page)
      .then((results) => {
        setAdverts((prevAdverts) => [...prevAdverts, ...results]);
      })
      .catch((err) => console.error("error:" + err));
  };

  return (
    <>
      {adverts && (
        <>
          <AdvertsList>
            {adverts.map((advert) => {
              return <AdvertItem key={advert.id} advert={advert} />;
            })}
          </AdvertsList>
          <ButtonLoad  onFindMore={onFindMore} />
        </>
      )}
    </>
  );
}

export default Catalog;