import React from 'react';

// export default () => {
function OlaMundo() {

    const informacao = 'Primeiro componente JSX'

    return (
        <div>
            <h2> Componente OlaMundo </h2> 
            <p> {informacao} </p>
        </div>
    )
}

export default OlaMundo

// fragment ->  <>  </>  -> Caso a quantidade de divs me incomode   