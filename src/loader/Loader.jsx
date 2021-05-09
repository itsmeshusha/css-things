import React from 'react';
import style from './Loader.module.css'

export const Loader = () => {
    return <div className={style.loaderWrapper}>
        <div className={style.loader}></div>
    </div>
}