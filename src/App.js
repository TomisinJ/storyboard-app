import './App.css';
import Scene from './components/Scene';
import Form from './components/Form';
import { useState } from 'react';

function App(props) {

  function addScene(title) {
    const newScene = {id: "scene-id", title: title, description: "this is scene 4"};
  }
  
  const [scenes, setScenes] = useState(props.scenes /* all the scenes from data */);

  const allScenes = scenes.map(
    (scene) => (
      <Scene/>
    )
  );

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
        <Form addScene={addScene}/>
        {allScenes}
      </div>
    </div>
  );
}

export default App;

/*

passing a function as a prop is basically saying "I want to use this function here

*/