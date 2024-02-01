import './App.css';
import NewScene from './components/NewScene';
import BlankScene from './components/BlankScene';
import Form from './components/Form';
import { useState } from 'react';



function App(props) {

  function addScene(scene) {
    setScenes([...scenes, scene])
  }
  
  const [scenes, setScenes] = useState([{title:'type here...', description: 'type here...'}]);

  const allScenes = scenes.map(
    ({title, description}) => (
      <NewScene addScene={addScene} sceneTitle={title} sceneDescription={description}/>
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
        {allScenes}
        <BlankScene addScene={addScene}/>
      </div>
    </div>
  );
}

export default App;

/*

passing a function as a prop is basically saying "I want to use this function here

*/