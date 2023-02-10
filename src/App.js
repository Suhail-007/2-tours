import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours()
  }, []);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setTours(data);
    } catch (err) {
      console.log(err);
    }
  }

  const removeCard = function(id) {
    const updatedTours = tours.filter(tour => tour.id !== id);
    setTours(updatedTours);
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (!loading && tours.length === 0) {
    return (
      <main className='ntf'>
        <div className='title'>
          <p>No Tours Found</p>
          
          <button onClick={fetchTours} className='refresh'>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <>
    <main>
      <div className='title'>
        <h1 >Our Tours</h1>
        <div className = 'underline' ></div>
      </div>
      
      <Tours onRemove={removeCard} list={tours}/>
      
    </main>
    
  
    </>
  )
}

export default App