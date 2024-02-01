import React from 'react';
import Loader  from '../../../public/loader.svg'
const LoadingComponent = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <img
                src={Loader}
                alt="Loading..."
                width={100}
                height={100}
            />
        </div>
    );
};

export default LoadingComponent;
