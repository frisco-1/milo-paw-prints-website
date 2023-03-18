import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { handleDescription } from '../../Redux/slices/DFTSlice';

function Description() { 
  const description = useSelector(state => state.DFT.description);
  const dispatch = useDispatch();

  const setDescription = e => {
    dispatch(handleDescription(e));
  }

  return (
    <>
        <div>
          <h2>Description:</h2>
        <textarea
          id="Description"
          name='Description'
          className='text-area'
          placeholder='Example:
          "image1.png, 10"x 10" Front Only."
          "image2.png, 10"x 10" Back Only."
          '
          value={description}
          onChange={e => setDescription(e.target.value) }
        >
        </textarea>
        
        </div>
    </>
  )
}

export default Description;