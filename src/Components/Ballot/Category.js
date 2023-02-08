import React from 'react';
import Nominee from './Nominee';

const Category = ({title, nominees, selection, handleSelection}) => {
  console.log(nominees);
  return (
    <div className="category">
      <h3>{title}</h3>
      {nominees.map(nominee => (
        <Nominee 
          key={nominee.id}
          name={nominee.title}
          selected={nominee.id === selection}
          handleSelection={() => handleSelection(nominee.id)}
        />
      ))}
    </div>
  );
};

export default Category;
