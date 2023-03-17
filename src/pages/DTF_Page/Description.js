import React from 'react';

function Description({ description, setDescription}) { 
  return (
    <>
      {/* Description */}
        <div>
          <h2>Description:</h2>
        <textarea
          id="Description"
          name='Description'
          className='text-area'
          placeholder='Example: Size of image1.png, 10"x 10". Front Only'
          value={description}
          onChange={e => setDescription(e.target.value) }
        >

        </textarea>
        </div>
    </>
  )
}

export default Description;