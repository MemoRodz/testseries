import React from 'react';

function InputPrimo({ numero, setNumero, handleCalcularPrimo }) {
    return (
        <div>
            <input type="number" value={numero} onChange={(e) => setNumero(e.target.value)} />
            <button onClick={handleCalcularPrimo}>Calcular Primo</button>
        </div>
    );
}

export default InputPrimo;