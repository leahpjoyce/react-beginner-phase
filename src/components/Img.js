import React from 'react';

const Img = (props) => {
    const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

    // Declare new variable here:
   const gooseImg = <img src={goose} />

    return (
        <div>
            {gooseImg}
        </div>
    );

}

export default Img;