import React from 'react';
import './Common.css';
const CommonSection = (props) => {
    const text = props.name;
    return (
        <div>
            <section className='sectionCommon'>
                <div className='container'>
                    <h1 className='titleCommon text-center'>{text}</h1>

                </div>
            </section>
        </div>
    );
};

export default CommonSection;