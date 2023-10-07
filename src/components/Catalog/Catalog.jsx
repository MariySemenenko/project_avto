import { useEffect, useState } from "react";
import api from "../Api/api";


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
          <ul>
            {adverts.map((advert) => {
              return <li key={advert.id} advert={advert} />;
            })}
          </ul>
          <button onFindMore={onFindMore} />
        </>
      )}
    </>
  );
}

export default Catalog;