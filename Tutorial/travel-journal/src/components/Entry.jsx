export default function Entry() {
    return(
        <article className="journal-entry">
            <div className="main-img-container">
                <img src="https://i.pinimg.com/236x/37/3f/16/373f16a53f791f5abf0dea1b62abdb59.jpg" alt="Mount Fiji" className="main-img"/>
            </div>
            <div className="details">
                <img src="https://cdn-icons-png.flaticon.com/128/684/684908.png" alt="loc-icon" className="loc-icon"/>
                <span>Japan</span>
                <a href="https://maps.app.goo.gl/y31LbjAE6kiA3Wry7">Mount Fiji on Google Map</a>
                <h2 className="article-name">Mount Fuji</h2>
                <p>Friday 29th, November, 2024</p>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
                    Mount Fuji is the single most tourist site in Japan, for booth Japanese and foreign tourists.
                </p>
            </div>
        </article>
    )
}