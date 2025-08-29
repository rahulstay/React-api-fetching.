import React, { use, useState } from 'react';
import './Joke.css';
import Button from './Button';

const Joke = () => {
    const [joke, setjoke]=useState("");
    async function getdata(){
        const res= await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
        const data = await res.json();
        setjoke(data.joke);
    }
  return (
    <div className="joke">
        <p>{joke}</p>
        <Button getdata={getdata}/>
    </div>
  )
}

export default Joke