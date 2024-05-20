import React from 'react';

function InputSerie({ numero, setNumero, handleCalcularSerie }) {
    return (
        <div>
            <input type="number" value={numero} onChange={(e) => setNumero(e.target.value)} />
            <button onClick={handleCalcularSerie}>Calcular Serie</button>
        </div>
    );
}

export default InputSerie;