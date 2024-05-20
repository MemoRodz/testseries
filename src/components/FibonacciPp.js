import React, { useState } from 'react';
import InputFibonacci from './FibonacciInput';
import FibonacciResult from './FibonacciResult';
import Serie from '../Class/Series';

function Fibo() {
    const [numero, setNumero] = useState(0);
    const [resultadoFibonacci, setResultadoFibonacci] = useState(0);

    const handleCalcularFibonacci = () => {
        const n = parseInt(numero);
        const serie = new Serie(n);
        const resultado = serie.fibonacci(n);
        setResultadoFibonacci(resultado);
    };

    return (
        <div>
        <div>Cálculo de número de Fibonacci.</div>
            <InputFibonacci numero={numero} setNumero={setNumero} handleCalcularFibonacci={handleCalcularFibonacci} />
            {resultadoFibonacci > 0 && <FibonacciResult resultado={resultadoFibonacci} />}
        </div>
    )
}

export default Fibo;