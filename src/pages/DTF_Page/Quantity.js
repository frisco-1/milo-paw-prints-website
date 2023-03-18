import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { handleSizeChange } from '../../Redux/slices/DFTSlice';
import { cottonSize, blendSizes } from './T-Shirts/SizeAvailability';


function Quantity() { 
  const sizeCount = useSelector(state => state.DFT.sizeCount);
  const tshirtMaterial = useSelector(state => state.DFT.tshirtMaterial);
  const dispatch = useDispatch();

  const toggleSizeChange = (size, count) => { 
    dispatch(handleSizeChange({ size, count }));
  }

  let sizes;
  switch (tshirtMaterial) {
    case '':
      sizes = 0;
      break;
    case '100% Cotton':
      sizes = cottonSize;
      break;
    case '50/50 Blend':
      sizes = blendSizes;
      break;
    default:
      console.log('Invalid t-shirt material');
      break;
  }

  return (
    <>
      {/* Quantity */}
      <div>
        <h2>Quantity:</h2>
        <ul className='quantity-list'>
          {Object.entries(sizes).map(([size, available]) => {
            if (!available) {
              return null;
            }
            return (
              <li
                key={size}
                className='quantity-item quantity-label'
              >
                <div>
                {size}:{" "}
                </div>
                
                
                <div>
                  <button className='quantity-button' onClick={() => toggleSizeChange(size, sizeCount[size] - 1)}>
                  -
                </button>{" "}
                {sizeCount[size]}{" "}
                <button className='quantity-button' onClick={() => toggleSizeChange(size, sizeCount[size] + 1)}>
                  +
                </button>
                </div>
                
              </li>
            );
          })}
        </ul>
        <div>
          <p>S: {sizeCount.S} M:{sizeCount.M} L:{sizeCount.L} XL:{sizeCount.XL} 2XL:{sizeCount['2XL']}</p>
        </div>
      </div>
    </>
  );
}


export default Quantity;