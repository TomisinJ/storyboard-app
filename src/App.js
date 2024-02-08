import './input.css';
import NewScene from './components/NewScene';
import BlankScene from './components/BlankScene';
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


      

      <div className='flex items-center justify-between bg-yellow-200'>

      {/* .user_info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fbff00;
} */}

        <header className="flex flex-col justify-left p-1">

        {/* .header {
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 10px;
} */}

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