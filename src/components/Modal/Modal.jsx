import { Overlay, ModalContainer, CloseButton, A, Ul, } from './Modal.styled';
import { ImCross } from 'react-icons/im';


function Modal({ closeModal, advert }) {
  const conditions = advert.rentalConditions.split('\n');
  const address = advert.address.split(',');
  const city = address[address.length - 2];
  const country = address[address.length - 1];

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Overlay className={closeModal ? 'open' : 'closed'} onClick={handleBackdropClick}>
     
   
      <ModalContainer>
      <CloseButton onClick={closeModal}>
          <ImCross />
        </CloseButton>
        {/* <button onClick={closeModal} className={cancelButton}>Cancel</button> */}
        
        <img src={advert.img} alt="car" width={461} height={248} />
        <h2>
          {advert.make} <span>{advert.model}</span>, {advert.year}
        </h2>
        <p>
          {city} | {country} | Id: {advert.id} | Year: {advert.year} | Type:{' '}
          {advert.type} | Fuel Consumption: {advert.fuelConsumption} | Engine
          Size: {advert.engineSize}
        </p>
        <p>{advert.description}</p>
        <h3>Accessories and functionalities:</h3>
        <ul>
          {advert.functionalities.map(functionaliti => {
            return <li>{functionaliti} |</li>;
          })}
        </ul>
        <h3>Rental Conditions: </h3>
        <Ul>
          {conditions.map(condition => {
            return <li>{condition} |</li>;
          })}
        </Ul>
        <A href="tel:+380730000000" >Rental car</A>
      </ModalContainer>
     
    
      </Overlay>
  );
}

export default Modal;
