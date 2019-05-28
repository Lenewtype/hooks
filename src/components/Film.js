import React from 'react';

import {useHttp} from '../hooks/http';

import FilmDetails from './FilmDetails';

const Film = props => {
	const [isLoading, fetchedData] = useHttp('https://swapi.co/api/films/' + props.selectedFilm, [props.selectedFilm]);

	let loadedFilm = null;

	if(fetchedData) {
		loadedFilm = {
			id: props.selectedFilm,
			name: fetchedData.title,
			episode: fetchedData.episode_id,
			releaseDate: fetchedData.release_date,
			teaser: fetchedData.opening_crawl 
		};
	}

	

	if(isLoading && !fetchedData) {
		return (<p>Loading film details...</p>);
	}

	else {
		return (
			<FilmDetails
				{...loadedFilm}
				rating={props.rating}
          		onRatingChange={props.onRatingChange}
			/>
		);
	}

}

export default React.memo(Film);