import React, { useState } from "react" //importando o hook useState
import "./Contador.css"

//Hook: Tem funcionalidades e permite manipulações de diversos recursos do react, em um componente funcional.

//Hook useState: O hook useState trabalha com estados, e os estados são os que armazenam valores.

function Contador() {

    //Sintaxe do useState
    const [numero, setNumero] = useState(0)

    //setNumero atualiza/modifica/seta o número

    //Função para adicionar um 1 valor quando eu clicar no botão +

    function Adicionar() {

        if (numero < 20) { //número é menor que 20? se for, faça isso.
            setNumero(numero + 1) //setNumero(O que você quer fazer?)
        }
    }

    //Função para remover um 1 valor quando eu clicar no botão -

    function Remover() {
        if (numero > 0) {
            setNumero(numero - 1)
        }
    }


    //Função para limpar o contador
    function Limpar() {
        setNumero(0)
    }

    return (
        <section className="contador">
            <h1 className="numero"> {numero} </h1>
            <div className="boxButton">
                <button id="btn1" onClick={Adicionar}> + </button>
                <button id="btn2" onClick={Remover}> - </button>
                <button id="btn3" onClick={Limpar}> Limpar</button>
            </div>

        </section>
    )
}
export default Contador