import React from 'react';
import st from '../Assets/Styles/LoadingStub.module.css'

const LoadingStub = () => {
    return (
        <div className={st.wrapper}>
            <div className={st.loader}></div>
        </div>
    );
};

export default LoadingStub;
