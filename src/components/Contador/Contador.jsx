import React, {useState} from "react"//importando o hook useState

function Contador(){

const [numero, setNumero] = useState(0) //Esse 0 é o valor inicial


    return(
        <>
        <h1> {numero} </h1>
        <button> + </button>
        <button> - </button>
        <button> C </button>
        </>
    )
}

export default Contador