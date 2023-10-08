import React from 'react'
import { Avtopark, P,  } from './Home.styled';
import avtopark from '../../img/avtopark.jpg';


 function Home() {
  return (
    <div className='container'>
    
    <P>
    If you need a car temporarily, the fastest and most economical
     way to get it is to rent it. Renting a car from individuals involves
      the preparation of taxation and accounting, the conclusion of a car
       rental agreement and the determination of its important conditions.
    </P>
    <Avtopark src={avtopark} alt="Car logo" />
    </div>
   
  )
}
export default Home;