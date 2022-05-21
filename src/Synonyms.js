import React from "react";
import "./synonyms.css"

export default function Synonyms(props) {
    console.log(props)
    if(props.synonyms) { return (
        <ul className="Synonyms">
{props.synonyms.map(function(synonym,index) {
return (

<li className="list"> {synonym} </li>


    
)


}



)





}


    
        </ul>


    )
    }
    
    else {
        return null
    }
}