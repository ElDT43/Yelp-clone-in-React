import React from 'react';
import styles from './SearchResult.module.css';

export function SearchResult() {
    return (
        <div className={styles['search-result']}>
            <img src='https://via.placeholder.com/210' alt='business' className={styles['business-image']} />
            <div className={styles['business-info']}>
                <h2 className="subtitle">Burger Place</h2>
                <p>Rating</p>
                <p>$$ <span className="tag">Fast Food</span> <span className="tag">Burger</span></p>
            </div>
            <div>
                <p>+4912345753</p>
                <p>Example Street 5</p>
                <p>123456 Berlin</p>
            </div>
        </div>
    )
}