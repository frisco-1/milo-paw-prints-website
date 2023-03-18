import React from 'react';
import { cottonColors } from './T-Shirts/colors';

import { useSelector, useDispatch } from "react-redux";
import { handleColorChange } from '../../Redux/slices/DFTSlice';


function ColorsPage() { 

  const tshirtMaterial = useSelector(state => state.DFT.tshirtMaterial);
  const productColor = useSelector(state => state.DFT.productColor);

  const dispatch = useDispatch();

  const handleColor = e => { 
    dispatch(handleColorChange(e));
  }

  return (
    <>
      {/* ColorsPage */}
      <div>
        <h2>Color:</h2>

        {tshirtMaterial === "100% Cotton" && (
          <>
            
            <div className='color-list'>
              {cottonColors.map((color) =>(
                <button
                  key={color.name}
                  onClick={() => handleColor(color.name)}
                  className={`color-button`}
                >
                  <span
                    className={`button-color ${color.name === productColor ? 'selected' : ''}`}
                    style={{ backgroundColor: color.hex }}
                  >

                  </span>
                </button>
              ))
              }

            </div>
            
            <div>
              <p>Selected Color: {productColor}</p>
            </div>

          </>

        )}
      </div>
    </>
  )
}

export default ColorsPage;