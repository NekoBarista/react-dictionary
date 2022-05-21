import React, { useState } from "react";
import axios from "axios";
import Result from "./Result"
import './dictionary.css';

export default function Dictionary() {
let [input, setInput] = useState("rainfall")
let [result, setResult] = useState(null)
let [inputReceived, setInputReceived] = useState(null)


function load() {
    setInputReceived(true)
    search()

}

function handleInput(event){
    setInput(event.target.value)
}

function search () {
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`

    axios.get(apiUrl).then(handleResponse)
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
    
    </div>
   
    )
} 
else {
load();
return ("Loading....")
}
}