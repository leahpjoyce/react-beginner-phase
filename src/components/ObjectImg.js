import React from 'react';

const ObjectImg = (props) => {
    
const pics = {
    panda: "http://bit.ly/1Tqltv5",
    owl: "http://bit.ly/1XGtkM3",
    owlCat: "http://bit.ly/1Upbczi"
    }; 

const sideLength = '150px';
    const panda = (
    <img 
        src={pics.panda} 
        alt="Lazy Panda"
        width={sideLength}
        height={sideLength} />
    );
    
    const owl = (
        <img 
        src={pics.owl} 
        alt="Unimpressed Owl"
        width={sideLength}
        height={sideLength} />
    );
    
    const owlCat = (
        <img 
        src={pics.owlCat} 
        alt="Ghastly Abomination" 
        width={sideLength}
        height={sideLength} />
    );

    return (
        <div>
            {panda}
            {owl}
            {owlCat}
        </div>
    );

}

export default ObjectImg;




