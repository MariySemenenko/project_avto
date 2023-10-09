
import { useState } from "react";
import Modal from "../Modal/Modal";
import {
  Img,
  CarImage,
  CarInfo,
  CarTitle,
  CarWrapper,
  CardLi,
  Favoritebutton,
  LearnButton,
} from "./AdvertItem.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorite/favoriteSlice";
import iconAdd from "./../img/iconAdd.png";
import heartAmpty from "./../img/heartAmpty.png";

function AdvertItem({ advert }) {
  const [openModal, setOpenModal] = useState(false);

  const address = advert.address.split(",");
  const city = address[address.length - 2];
  const country = address[address.length - 1];

  const openModalHendler = () => {
    setOpenModal(true);
  };

  const closeModalHendler = () => {
    setOpenModal(false);
  };

  const handleOnClose = (e) => {
    if (e.code === "Escape") {
      closeModalHendler();
    }
  };

  window.addEventListener("keydown", handleOnClose);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.items);

  const toggleFavorite = () => {
    const isFavorite = favorites.some((favorite) => favorite.id === advert.id);

    if (isFavorite) {
      dispatch(removeFromFavorites(advert));
    } else {
      dispatch(addToFavorites(advert));
    }
  };

  return (
    <>
      <CardLi>
        <CarWrapper>
          <Favoritebutton onClick={toggleFavorite}>
            {favorites.some((favorite) => favorite.id === advert.id) ? (
              <img src={iconAdd} alt="icon add" />
            ) : (
              <Img src={heartAmpty} alt="icon remove" />
            )}
          </Favoritebutton>
          <CarImage src={advert.img} alt="car img" height={268} />
        </CarWrapper>
        <div>
          <CarTitle>
            <h2>
              {advert.make} <span>{advert.model}</span>, {advert.year}
            </h2>
            <p>{advert.rentalPrice}</p>
          </CarTitle>
          <CarInfo>
            {city}&ensp;|&ensp;{country}&ensp;|&ensp;{advert.rentalCompany}
          </CarInfo>
          <CarInfo>
            {advert.type}&ensp;|&ensp;{advert.make}
            &ensp;|&ensp;{Number(advert.mileage).toLocaleString("en")}
            &ensp;|&ensp;{advert.accessories[0]}
          </CarInfo>
        </div>
        <LearnButton onClick={openModalHendler}>Learn more</LearnButton>
      </CardLi>
      {openModal && <Modal closeModal={closeModalHendler} advert={advert} />}
    </>
  );
}

export default AdvertItem;