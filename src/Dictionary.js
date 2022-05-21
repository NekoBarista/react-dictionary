import React, { useState } from "react";
import axios from "axios";
import Result from "./Result"
import './dictionary.css';
import Photos from "./Photos";

export default function Dictionary() {
let [input, setInput] = useState("nostalgia")
let [result, setResult] = useState(null)
let [inputReceived, setInputReceived] = useState(null)
let [photos, setPhotos] = useState(null)


function load() {
    setInputReceived(true)
    search()

}

function handleInput(event){
    setInput(event.target.value)
}

function handlePexels(response) {
    console.log(response)
    setPhotos(response.data.photos)
}

function search () {
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`

    

    const pexelKey= "563492ad6f917000010000012add3367c8794fb98ceeed89c3565ce0"
    let pexelApi= `https://api.pexels.com/v1/search?query=${input}&per_page=9`

    axios.get(apiUrl).then(handleResponse)    
    axios
    .get(pexelApi, {
      headers: { Authorization: `Bearer ${pexelKey}` },
    })
    .then(handlePexels);
    
}

function handleResponse(response){
    setResult(response.data[0]);
}

    function handleSubmit(event) {
        event.preventDefault();
        search ()

}
 if(inputReceived) {
    return (
<div className="Dictionary">
    <section>
    <form onSubmit={handleSubmit}>
<input type={"search"} onChange={handleInput} placeholder="Enter a word"></input>
    </form>
    <div className="hint">
        Search for a word: yoga, swell, beach, sunrise    
    </div>
    </section>
  
    <Result results={result}/>
    <Photos photos={photos} />
    
    </div>
   
    )
} 
else {
load();
return ("Loading....")
}
}