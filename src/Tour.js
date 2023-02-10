import React, { useState } from 'react';

const Tour = ({ image, id, name, info, price, onRemove}) => {

  const [collapse, setCollapse] = useState(false);

  const tourInfo = info.substring(0, 200);

  const showMore = function() {
    setCollapse(prevState => !prevState);
  }
  
  const removeCard = function () {
    onRemove(id)
  }

  return (
    <article className='card tour-card'>
    <div className='img-cont'>
      <img src={image} alt={name} />
    </div> 
      <div className='tour'>
        <h2>{name}</h2>
        <p>{!collapse ? tourInfo + '...' : info + ' '}
          <button onClick={showMore}>{!collapse ? 'Read more' : 'Show less'}</button> 
        </p>
      </div>
      
      <button onClick={removeCard} data-btn="Not Interested">Not Interested</button>
    </article>
  )
};

export default Tour;