import React, {useState} from 'react'

export const Tt = () => {

    const [candies, setCandies] = useState(0);
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>You have eaten {candies} candies!</h1>
    </div>
  )
}

// export default Tt
