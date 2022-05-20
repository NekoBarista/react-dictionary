import React, { useState } from "react";

export default function Dictionary() {
let [Input, setInput] = useState("")

function handleInput(event){
    
    setInput(event.target.value)
}

    function search(event) {
        event.preventDefault();
        alert("Searching")
    }
    return (
<div className="Dictionary">
    <form onSubmit={search}>
<input type={"search"} onChange={handleInput}></input>
    </form>
    </div>
    )
}