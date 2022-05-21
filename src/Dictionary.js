import React, { useState } from "react";
import axios from "axios";
import Result from "./Result"
import './Dictionary.css';

export default function Dictionary() {
let [input, setInput] = useState("")
let [result, setResult] = useState(null)

function handleInput(event){
    setInput(event.target.value)
}


function handleResponse(response){
    setResult(response.data[0]);
}

    function search(event) {
        event.preventDefault();

let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`

axios.get(apiUrl).then(handleResponse)
}

    return (
<div className="Dictionary">
    <section>
    <form onSubmit={search}>
<input type={"search"} onChange={handleInput} placeholder="Enter a word"></input>
    </form>
    </section>
  
    <Result results={result}/>
    
    </div>
   
    )
}