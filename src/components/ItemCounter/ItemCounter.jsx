import './ItemCounter.css';

export default function ItemCounter({ contador, incrementarContador, decrementarContador, reset }) {



    



    return (
        <div className='counter-container'>
             <p className="description">Cantidad</p>
             <div className='counter'>
                <button className='btn-restar' onClick={decrementarContador} disabled={contador === 0}>-</button>
                <p className='detail-contador'>{contador}</p>
                <button className='btn-sumar' onClick={incrementarContador} disabled={contador === 10} >+</button>
            </div>
        </div>
    );
} 