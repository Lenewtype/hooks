import React, { useState } from 'react';

import {useHttp} from '../hooks/http';

import './FilmPicker.css';

const FilmPicker = (props) => {
	const [isLoading, fetchedData] = useHttp('https://swapi.co/api/films', []);

  	const selectedFilms = fetchedData? fetchedData.results.slice(0, 7).map( (film, index) => {

      return {
        title: film.title, 
        id: film.url.replace(/\D/g, '')
      }
    }) : [];
  	
  	let content = (<p>Loading film options...</p>);
    if (
      !isLoading &&
      selectedFilms &&
      selectedFilms.length > 0
    ) {
      content = (
        <select
          onChange={props.onFilmSelected}
          value={props.selectedFilm}
          className={props.side}
        >
          {selectedFilms.map(film => (
            <option key={film.id} value={film.id}>
              {film.title}
            </option>
          ))}
        </select>
      );
    } else if (
      !isLoading &&
      (!selectedFilms || selectedFilms.length === 0)
    ) {
      content = <p>Could not fetch any data.</p>;
    }

    return content;
};

export default FilmPicker;