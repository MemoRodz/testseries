import React, { useState } from 'react';
import Serie from '../Class/Series';
import InputPrimo from './PrimoInput';
import PrimoResult from './PrimoResult';

function Primo() {
    const [numero, setNumero] = useState(0);
    const [resultadoPrimo, setResultadoPrimo] = useState(0);

    const handleCalcularPrimo = () => {
        const n = parseInt(numero);
        const serie = new Serie(n);
        const resultado = serie.primo(n);
        setResultadoPrimo(resultado);
    };

    return(
        <div>
        <div>Cálculo de número primo.</div>
            <InputPrimo numero={numero} setNumero={setNumero} handleCalcularPrimo={handleCalcularPrimo} />
            {resultadoPrimo > 0 && <PrimoResult resultado={resultadoPrimo} />}
        </div>
    )
}

export default Primo;