import React from 'react'

const Table = ({orderId,
    price,
    dish,
    table,
    deleteCol }) => {

const handleDelete = () => {
    console.log('Deleting orderId:', orderId);
    deleteCol(orderId);
};
  return (
    <div style={{display:'flex', flexDirection:'row', justifyContent: 'center', gap:'15px', fontSize:"20px"}}>
        <p>{orderId}</p>
        <p>{price}</p>
        <p>{dish}</p>
        <p>{table}</p>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Table