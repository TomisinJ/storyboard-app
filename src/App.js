import './input.css';
import BlankScene from './components/BlankScene';
import NewScene from './components/NewScene';
import { useState } from 'react';

function App(props) {

  function addScene(scene) {
    setScenes([...scenes, scene])
  }
  
  const [scenes, setScenes] = useState([{title:'TITLE...', description: 'DESCRIPTION...'}]);

  const allScenes = scenes.map(
    ({title, description}) => (
      <NewScene addScene={addScene} sceneTitle={title} sceneDescription={description}/>
    )
  );

  return (
    <div>
      <div className='flex items-center justify-between bg-lime-400 p-4'>
        <header className="flex flex-col justify-left p-1">
          <p className='font-normal'>Tomi's Storymood</p>
          <h1 className='font-bold'>The Crochet Chronicles - Series 1 Episode 3</h1>
        </header>
        <div className='font-normal pr-2'>
          <p>01/01/2024</p>
        </div>
      </div>

      <div className='grid grid-cols-4'>
        {allScenes}
        <div>
          <BlankScene addScene={addScene}/>
        </div>
      </div>
      </div>
  );
}

export default App;