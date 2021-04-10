import Loading from './components/LoadingComponent/index';
import Tours from './components/ToursComponent/index';
import './App.css';

import { useState, useEffect } from 'react';

const url = "https://course-api.com/react-tours-project";

function App() {

  const [loading,setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) =>{
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () =>{
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    );
  }

  if(tours.length === 0){
    return(
      <main className="no-tours-container">
        <h2 className="heading-text">No Tours Left</h2>
        <h1>😓</h1>
        <button onClick={fetchTours} className="refresh-btn">Refresh</button>
      </main>
    );
  }
  return (
    <main className="main-container">
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
