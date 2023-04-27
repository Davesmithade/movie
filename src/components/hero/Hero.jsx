import React from "react";
import MovieCard from "../../assets/moviecardimg.svg";

const Hero = () => {
  const Card = (props) => {
    return (
      <div className=" relative">
        <div className="w-[200px]">
          <img className="w-[700px] h-[280px]" src={props.img} alt="" />
        </div>
        <div className=" absolute bottom-4 left-14">
          {" "}
          <button className="text-black bg-white py-1 px-4 rounded-full hover:bg-black hover:text-white hover:font-medium">{props.Playnow}</button>
        </div>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-4 gap-5 mt-8 mx-12">
      <Card img={MovieCard} Playnow="Playnow" />
      <Card img={MovieCard} Playnow="Playnow" />
      <Card img={MovieCard} Playnow="Playnow" />
      <Card img={MovieCard} Playnow="Playnow" />
      <Card img={MovieCard} Playnow="Playnow" />
      <Card img={MovieCard} Playnow="Playnow" />
      <Card img={MovieCard} Playnow="Playnow" />
      <Card img={MovieCard} Playnow="Playnow" />
      <Card img={MovieCard} Playnow="Playnow" />
      <Card img={MovieCard} Playnow="Playnow" />
      <Card img={MovieCard} Playnow="Playnow" />
      <Card img={MovieCard} Playnow="Playnow" />
      <Card img={MovieCard} Playnow="Playnow" />
      <Card img={MovieCard} Playnow="Playnow" />
      <Card img={MovieCard} Playnow="Playnow" />
      <Card img={MovieCard} Playnow="Playnow" />
    </div>
  );
};

export default Hero;
