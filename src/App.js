import './App.css';
import Scene from './components/Scene';
import { useState } from 'react';

function App() {
  
  // [scenes, addScenes] = useState(/* all the scenes from data */)

  // const sceneList = scenes.map((scene) => (
  //   <Scene/>
  // ));


  return (
    <div className="App">

      <div className='user_info'>
        <header className="header">
          <p>Tomi's Storymood</p>
          <h1>The Crochet Chronicles - Series 1 Episode 3</h1>
        </header>
        <div className='datetime'>
          <p>01/01/2024</p>
        </div>
      </div>

      <div className='storyboard_grid'>

        <Scene/>
        <Scene/>
        <Scene/>
        <Scene/>
        <Scene/>
        <Scene/>
      </div>
    </div>
  );
}

export default App;
