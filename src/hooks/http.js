import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies) => {

	const [isLoading, setIsloading] = useState(false);
	const [fetchedData, setFetchedData] = useState(null);

	//'https://swapi.co/api/people'
	useEffect(() => {
		setIsloading(true);
		console.log('sending http request to: ' + url);
		fetch(url)
		      .then(response => {
		        if (!response.ok) {
		          throw new Error('Failed to fetch.');
		        }
		        return response.json();
		      })
		      .then(data => {
		        setIsloading(false);
		        setFetchedData(data);
		      })
		      .catch(err => {
		        console.log(err);
		        setIsloading(false);
		      });
	}, dependencies);
	

      return [isLoading, fetchedData];
};
