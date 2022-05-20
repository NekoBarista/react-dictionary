import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
let [input, setInput] = useState("")

function handleInput(event){
    
    setInput(event.target.value)
}


function handleResponse(response){
    console.log(response.data[0])
}

    function search(event) {
        event.preventDefault();

let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`

axios.get(apiUrl).then(handleResponse)
}

    return (
<div className="Dictionary">
    <form onSubmit={search}>
<input type={"search"} onChange={handleInput}></input>
    </form>
    </div>
    )
}