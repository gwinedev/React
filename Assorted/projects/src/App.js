import './App.css';
import ImageSlider from './components/image-slider';
// import Accordion from './components/accordion';
// import RandomColor from './components/random_color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* < StarRating starCount={10} /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={'10'} />
    </div>
  );
}

export default App;
