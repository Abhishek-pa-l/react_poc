import React, { useEffect, useState } from 'react';
import { fetchData } from './api';

const List = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const getData = async () => {
            setLoading(true); 
            setError(null);
            try {
                const result = await fetchData('/Books'); 
                if (result && result.value) {
                    setData(result.value); 
                } else {
                    throw new Error('Unexpected API response format.');
                }
            } catch (error) {
                console.error('Error loading data:', error);
                setError(error.message || 'Failed to fetch data.');
            } finally {
                setLoading(false); 
            }
        };

        getData();
    }, []);

    if (loading) return <p>Loading...</p>; 
    // if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>CAPM Data</h1>
            <ul>
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <li key={index}>{item.title || 'No title available'}</li> 
                    ))
                ) : (
                    <p>No data available.</p>
                )}
            </ul>
        </div>
    );
};

export default List;
