
import React, { useEffect, useState } from 'react'

const ImageSlider = ({url, limit}) => {

    const [Images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(null);

    async function fetchImages(getUrl) {
        try{
            const response = await fetch(getUrl);
            const data = await response.json();

            if(data) {
                setImages(data);
                setLoading(false);
            }
        }catch(e){
            setErrorMsg(e.message);
        }
    }
    useEffect(() => {
        if(url !== '') fetchImages(url)
    },[url])
  return (
    <div className='container'>
      
    </div>
  )
}

export default ImageSlider