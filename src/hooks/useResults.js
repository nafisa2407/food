import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';
export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (term) => {
        console.log(' im in errorMessage.length')

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses)
        }
        catch (err) {
            console.log('i m  in catch', err)

            setErrorMessage("Something went wrong");

        }
    };
    useEffect(() => {
        searchApi('pasta');
    }, [])
    return [searchApi, results, errorMessage]

};