import React ,{useEffect} from 'react';
import {postsFetch} from '../../API/fetchAPI';

export const Homepage = () =>{

useEffect(()=>{
    (async()=>{
        const data = await postsFetch();
        // const data = await res.json();
        console.log(data);
    })()
},[])
    return (<h1>Homepage</h1>)
}
