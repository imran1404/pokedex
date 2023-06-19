import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ListingPage = () => {

    const [pokedata, setPokedata]=useState([])
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon")

    const pokefun = async ()=>{
        setLoading(true);
        const res = await axios.get(url)
        // console.log(res.data.results);
        getpokemon(res.data.results);
       console.log(pokedata)
    }

    const getpokemon = async(data)=>{
        data.map( async(items)=> {
            const result = await axios.get(items.url);
            console.log(result.data)
            setPokedata(result.data)
            
        })}

    useEffect(()=>{
        pokefun();
    }, [url])
    return (<div>
        <p>1</p>
        <h1>pikachu</h1>
        <img src="" alt="" />
        <button>Click</button>
    </div>)
}

export default ListingPage