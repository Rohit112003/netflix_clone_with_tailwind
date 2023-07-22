import axios from "axios";

import React, { useEffect, useState } from "react";
import Movie from './Movie';
import {MdChevronRight,MdChevronLeft} from 'react-icons/md'

const Row = ({ title, fetchUrl ,rowid}) => {
  const [movies, setMovies] = useState([]);
 
  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);
  // console.log(movies);
  const SlideLeft = ()=>{
    var slider = document.getElementById('slider' + rowid)
    slider.scrollLeft = slider.scrollLeft-500;
  };
  const SlideRight = ()=>{
    var slider = document.getElementById('slider'+ rowid)
    slider.scrollLeft = slider.scrollLeft+500;
  }
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group  ">
        <MdChevronLeft onClick={SlideLeft} className="bg-white  left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size ={40}  />
        <div id={"slider" + rowid} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight onClick={SlideRight} className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0" size ={40} />
      </div>
    </>
  );
};

export default Row;
