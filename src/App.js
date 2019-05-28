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
  const [ratings, setRating] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0});  


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

  const onRatingChange = (rating) => {
    //clone the rating map
    let newRatingMap = Object.assign({}, ratings);
    //check to see if the rating selected matches the stored rating
    //if so, set rating to 0, essentially "unrating" this film
    newRatingMap[selectedFilm] = newRatingMap[selectedFilm] === rating? 0 : rating;
    setRating(newRatingMap);
  }

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
        <Film 
          selectedFilm={selectedFilm}
          rating={ratings[selectedFilm]}
          onRatingChange={onRatingChange}
        />
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
