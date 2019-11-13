import React from 'react';

const MyCart = props => {
  const { goods } = props;
  return (
    <div>
      <ul>
        {goods.map(item => (
          <li key={item.id}>{item.gname}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyCart;
