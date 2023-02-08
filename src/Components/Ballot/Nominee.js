import React from 'react';

const Nominee = ({name, id, selected, handleSelection}) => {
  return (
    <div className="nominee" onClick={handleSelection}>
      <div>{name}</div>
      {selected && <div>Selected</div>}
    </div>
  );
};

export default Nominee;
