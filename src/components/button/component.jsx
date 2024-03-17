/* eslint-disable react/prop-types */
import { forwardRef } from 'react';
import styles from'./styles.module.scss';

export const Button = forwardRef(
    function Button( {type = 'small', onClick, children, disabled}, ref ) {
        return (
            <button 
                ref={ref} 
                className={styles[type]} 
                onClick={onClick} 
                disabled={disabled}
            >
                {children}
            </button>
        )
    }
)