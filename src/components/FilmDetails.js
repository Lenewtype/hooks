import React, {useState} from 'react';

import './FilmDetails.css';

const FilmDetails = props => {

	let releaseDate = new Date(props.releaseDate);

	return (<div className='filmDetails'>
			<h2>{props.name}</h2>
			<p>Episode: {props.episode}</p>
			<p>Released: {releaseDate.getMonth()}/{releaseDate.getDate()}/{releaseDate.getFullYear()}</p>
			<p className='filmDetails__teaser'>{props.teaser}</p>
			<p className='filmDetails__rating'>
				Your rating: 
				<span onClick={props.onRatingChange.bind(this, 1)} className={`filmDetails__rating__option ${props.rating > 0? 'filmDetails__rating__option--selected' : ''}`} >
					
				</span>
				<span onClick={props.onRatingChange.bind(this, 2)} className={`filmDetails__rating__option ${props.rating > 1? 'filmDetails__rating__option--selected' : ''}`}>
					
				</span>
				<span onClick={props.onRatingChange.bind(this, 3)} className={`filmDetails__rating__option ${props.rating > 2? 'filmDetails__rating__option--selected' : ''}`}>
					
				</span>
				<span  onClick={props.onRatingChange.bind(this, 4)} className={`filmDetails__rating__option ${props.rating > 3? 'filmDetails__rating__option--selected' : ''}`}>
					
				</span>
				<span onClick={props.onRatingChange.bind(this, 5)} className={`filmDetails__rating__option ${props.rating > 4? 'filmDetails__rating__option--selected' : ''}`}>
					
				</span>
			</p>
		</div>)
}

export default FilmDetails;