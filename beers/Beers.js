import React, { useState } from "react";
import BeerItem from "../beerItem/BeerItem";
import AvailableBeers from "../availableBeers/AvailableBeers";
import ContBeer from "../contBeer/ContBeer";
import ChangeDollar from "../changeDollar/ChangeDollar";
import NewBeer from "../newBeer/NewBeer";

const Beers = () => {
  const beers = [
    {
      id: 1,
      beerName: "American",
      beerStyle: "IPA",
      price: 3,
      available: true,
    },
    {
      id: 2,
      beerName: "Argenta",
      beerStyle: "IPA",
      price: 4,
      available: false,
    },
    {
      id: 3,
      beerName: "Irish",
      beerStyle: "Red",
      price: 4,
      available: true,
    },
    {
      id: 4,
      beerName: "Scotish",
      beerStyle: "Red",
      price: 3,
      available: true,
    },
    {
      id: 5,
      beerName: "DeEssoCiTratta",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 6,
      beerName: "Santa APA",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 7,
      beerName: "German",
      beerStyle: "Pilsen",
      price: 1,
      available: true,
    },
    {
      id: 8,
      beerName: "London Porter",
      beerStyle: "Porter",
      price: 2,
      available: false,
    },
    {
      id: 9,
      beerName: "Scotish ALE",
      beerStyle: "Red",
      price: 5,
      available: false,
    },
  ];

  const [dollar, setDollar] = useState("");

  const ChangeDollarHandler = (value) => {
    setDollar(value);
  };

  // const [show, setShow] = useState(true);

  // const showHandler = () => {

  // }

  return (
    <div>
      <NewBeer />
      <br />
      <ChangeDollar
        valueDollar={dollar}
        onChangeDollarHandler={ChangeDollarHandler}
      />
      {beers.map((beer) => (
        <BeerItem
          key={beer.id}
          id={beer.id}
          beerName={beer.beerName}
          beerStyle={beer.beerStyle}
          price={beer.price}
          available={beer.available}
          dollar={dollar}
        />
      ))}
      <p>------------</p>
      <AvailableBeers beers={beers} />
      <p>------------</p>
      <ContBeer beers={beers} />
    </div>
  );
};

export default Beers;
