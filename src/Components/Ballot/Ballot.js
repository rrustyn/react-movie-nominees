import React from 'react';
import Category from './Category';

const Ballot = ({ballotData, selections, handleSelection}) => {
  return (
    <div className='ballot'>
      {ballotData.items.map(item => (
        <Category 
          key={item.id}
          title={item.title}
          nominees={item.items}
          selection={selections[item.id]}
          handleSelection={(id) => handleSelection(item.id, id)}
        />
      ))};
    </div>
  )
}

export default Ballot;