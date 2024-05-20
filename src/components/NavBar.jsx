import React from 'react'
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import fibo from './FibonacciPp';
import primo from './Primopp';
import triangular from './TriangularPp';
import serie from './Seriepp';

function Navbar() {
    return (
        <nav>
            {/* Agregar enlaces para Home, Serie y Fibonacci */}
            <div className={styles.nav}>
                <div className={styles.bttn}>
                    <Link to='/'>
                        <button>Inicio</button>
                    </Link>
                </div>
                <div className={styles.bttn}>
                    <Link to="/triangular">
                        <button>Triangular</button>
                    </Link>
                </div>
                <div className={styles.bttn}>
                    <Link to="/fibo">
                        <button>Fibonacci</button>
                    </Link>
                </div>
                <div className={styles.bttn}>
                    <Link to="/primo">
                        <button>Primo</button>
                    </Link>
                </div>
                <div className={styles.bttn}>
                <Link to="/serie">
                    <button>Serie</button>
                </Link>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;