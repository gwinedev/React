
import React, { useEffect, useState } from 'react'

const ImageSlider = ({ url, limit = 5}) => {

    const [Images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(null);

    async function fetchImages(getUrl) {
        try {
            const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url]);

    if (loading) {
        return <div>Loading data! Please wait</div>
    }
    if (errorMsg !== null) {
        return <div>Error Occured! {errorMsg}</div>
    }
    return (
        <div className='container'>

        </div>
    )
}

export default ImageSlider