import React from 'react';
import Tour from './Tour';
const Tours = (props) => {

  const toursList = props.list.map(item => {
    return <Tour onRemove={props.onRemove} key={item.id} {...item} />
  })

  return (
    <>
    {toursList}
    </>
  );
};

export default Tours;