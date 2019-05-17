import React, { useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';
import FilmPicker from './components/FilmPicker';
import Film from './components/Film';

const App = props => {

  /*Setting up state hooks 🎣*/
  const [chosenSide, setChosenSide] = useState('light');
  const [selectedCharacter, setSelectedCharacter] = useState(1);
  const [selectedFilm, setSelectedFilm] = useState(1);
  const [destroyed, setDestroyed] = useState(false);



  const sideHandler = side => {
    setChosenSide(side);
  };

  const charSelectHandler = event => {
    const charId = event.target.value;
    setSelectedCharacter(charId);
  };

  const filmSelectHandler = event => {
    const filmId = event.target.value;
    setSelectedFilm(filmId);
  };

  const destructionHandler = () => {
    setDestroyed(true);
  };

  const rebuildHandler = () => {
    setDestroyed(false);
  }


    let content = (
      <React.Fragment>
        <CharPicker
          side={chosenSide}
          selectedChar={selectedCharacter}
          onCharSelect={charSelectHandler}
        />
        <Character selectedChar={selectedCharacter} />
        <button onClick={sideHandler.bind(this, 'light')}>
          Light Side
        </button>
        <button onClick={sideHandler.bind(this, 'dark')}>Dark Side</button>
        {chosenSide === 'dark' && (
          <button onClick={destructionHandler}>DESTROY!</button>
        )}
        <br/>
        <hr/>
        <FilmPicker 
          selectedFilm={selectedFilm}
          onFilmSelected={filmSelectHandler}
        />
        <Film selectedFilm={selectedFilm}/>
      </React.Fragment>
    );

    if (destroyed) {
      content = <>
        <h1>Total destruction!</h1>
        <button onClick={rebuildHandler}>Rebuild?</button>
      </>;
    }

    return content;
  
}

export default App;
