import React from 'react';
import styles from './SearchResult.module.css';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';

export function SearchResult() {
    return (
        <div className={styles['search-result']}>
            <img src='https://via.placeholder.com/210' alt='business' className={styles['business-image']} />
            <div className={styles['business-info']}>
                <h2 className="subtitle">Burger Place</h2>
                <BusinessRating />
                <p>$$ <span className="tag">Fast Food</span> <span className="tag">Burger</span></p>
            </div>
            <div className={styles['contact-info']}>
                <p>+4912345753</p>
                <p>Example Street 5</p>
                <p>123456 Berlin</p>
            </div>
        </div>
    )
}