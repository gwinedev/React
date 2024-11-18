import React, {useState} from 'react'

export const Tt = () => {

    const [candies, setCandies] = useState(0);
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>You have eaten {candies} candies!</h1>

      <button
        onClick={() => setCandies(candies + 1)}
        style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: 'lightblue',
            border: 'none',
            borderRadius: '5px'
        }}>
            Eat a Candy
      </button>
    </div>
  )
}

// export default Tt
