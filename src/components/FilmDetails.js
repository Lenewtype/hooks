import React, {useState} from 'react';

import './FilmDetails.css';

const FilmDetails = props => {

	const [rating, changeRating] = useState(1);

	const setRating = (newRating) => {
		if(rating === newRating) {
			newRating = 0;
		}
		
		changeRating(newRating);
	}

	let releaseDate = new Date(props.releaseDate);
	return (<div className='filmDetails'>
			<h2>{props.name}</h2>
			<p>Episode: {props.episode}</p>
			<p>Released: {releaseDate.getMonth()}/{releaseDate.getDate()}/{releaseDate.getFullYear()}</p>
			<p className='filmDetails__teaser'>{props.teaser}</p>
			<p className='filmDetails__rating'>
				Your rating: 
				<span onClick={setRating.bind(this, 1)} className={`filmDetails__rating__option ${rating > 0? 'filmDetails__rating__option--selected' : ''}`} >
					
				</span>
				<span onClick={setRating.bind(this, 2)} className={`filmDetails__rating__option ${rating > 1? 'filmDetails__rating__option--selected' : ''}`}>
					
				</span>
				<span onClick={setRating.bind(this, 3)} className={`filmDetails__rating__option ${rating > 2? 'filmDetails__rating__option--selected' : ''}`}>
					
				</span>
				<span  onClick={setRating.bind(this, 4)} className={`filmDetails__rating__option ${rating > 3? 'filmDetails__rating__option--selected' : ''}`}>
					
				</span>
				<span onClick={setRating.bind(this, 5)} className={`filmDetails__rating__option ${rating > 4? 'filmDetails__rating__option--selected' : ''}`}>
					
				</span>
			</p>
		</div>)
}

export default FilmDetails;