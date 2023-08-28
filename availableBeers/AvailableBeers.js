import React from 'react'
import BeerItem from '../beerItem/BeerItem';

const AvailableBeers = ({beers}) => {
    return (
    <div>
        {beers
        .filter((beer) => beer.available === true)
        .map((beer) => 
      <BeerItem key={beer.id} id={beer.id} beerName={beer.beerName} beerStyle={beer.beerStyle} price={beer.price} available={beer.available}/>
    )}
    </div>
  );
}

export default AvailableBeers