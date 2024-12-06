import './App.css';
import {Routes,Route} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Homepage,Moviepage,Playpage} from "../src/Pages"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/movie/:id" element={<Moviepage/>} />
      <Route path="/plays" element={<Playpage/>} />
    </Routes>
  );
}

export default App;
