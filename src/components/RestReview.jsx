import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function RestReview({ reviews }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className='btn btn-warning rounded ms-3'
      >
        Click Here To See The Reviews
      </button>

      <Collapse in={open}>
        <div  className='mt-5'>
          {reviews?.map((item, index) => (
            <div key={index}>
              <hr />
              <h6>
                name: {item.name} - date: {item.date}
              </h6>
              <p>Rating: {item.rating}</p>
              <p>Discription: {item.comments}</p>
            </div>
          ))}
        </div>
      </Collapse>
    </>
  );
}

export default RestReview;
