import React, {PropsWithChildren} from 'react';
import styles from './Demo.module.css';

export const Demo: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
};

