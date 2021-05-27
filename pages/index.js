import Head from 'next/head'
import WorldMap from '../components/WorldMap'
import { useState, useEffect } from 'react'




export default function Home() {

  const [seconds, setSeconds] = useState(1);
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);
  const [leftFrac, setLeftFrac] = useState('');
  const [topFrac, setTopFrac] = useState('');
  
  

  useEffect(() => {
    const timer = setInterval(() => {
      apiGet();
      setSeconds(seconds + 10);
      getXCoordinates(xPos);
      getYCoordinates(yPos);
      console.log(leftFrac);
    }, 10000);
               // clearing interval
    return () => clearInterval(timer);
  });
  
  const apiGet = () => {
    fetch("http://api.open-notify.org/iss-now.json")
      .then((response) => response.json())
      .then((json) => {
        setxPos(json.iss_position.longitude);
        setyPos(json.iss_position.latitude);
        console.log(`${xPos} + ${yPos}`);
      });
  };


  //create props to pass
  const getXCoordinates = (xState) => {
    const xNum = parseFloat(xState);
    switch(xNum){
      case (xNum >= -180 && xNum <= -144): 
        setLeftFrac('0');
        break;
      case (xNum >= -139.99 && xNum <= -108): 
        setLeftFrac('1/10');
        break;
      case (xNum >= -107.99 && xNum <= -72): 
        setLeftFrac('2/10');
        break;
      case (xNum >= -71.99 && xNum <= -36): 
        setLeftFrac('3/10');
        break;
      case (xNum >= -35.99 && xNum <= 0): 
        setLeftFrac('4/10');
        break;
      case (xNum >= -35.99 && xNum <= 0): 
        setLeftFrac('5/10');
        break;
      case (xNum >= 0.01 && xNum <= 36): 
        setLeftFrac('6/10');
        break;
      case (xNum >= 36.01 && xNum <= 72): 
        setLeftFrac('7/10');
        break;
      case (xNum >= 72.01 && xNum <= 108): 
        setLeftFrac('8/10');
        break;
      case (xNum >= 108.01 && xNum <= 144): 
        setLeftFrac('9/10');
        break;
      default: 
        setLeftFrac('6/10');
        break;
    }

  }

  const getYCoordinates = (yState) => {
      setTopFrac('5/10');

  }


  
     


  return (
    <div className="flex flex-col justify-items-center w-screen bg-space-background h-screen bg-cover bg-no-repeat">
      <Head>
        <title>Space Station Tracker</title>
        <meta name="description" content="Real time space station tracker using NASA Open API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-5xl p-5 text-center text-gray-100 font-mono">International Space Station Tracker</h1>
        <p className="text-lg p-3 mb-5 text-center text-gray-100 font-mono">Real time position of the International Space Station based on data from the Open API from NASA</p>
      </div>
      <div className="max-w-screen-xl mx-auto w-screen">
        <WorldMap xPos={leftFrac} yPos={topFrac}/>
      </div>
      <div className="flex flex-wrap text-white justify-center text-2xl bg-indigo-900 bg-opacity-40 p-5 mt-3">
        <p className="mx-5">Current Longitude: {xPos}<span>&#176;</span></p>
        <p className="mx-5">Current Lattitude: {yPos}<span>&#176;</span></p>
      </div>
    </div>
  )
}
