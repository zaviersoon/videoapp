import React from 'react';

function PhotoImage(props) {
    return ( 
        <div>
            <img src={"https://picsum.photos/320/240?random="+props.randomimage} alt="" />
        </div>
     );
}

export default PhotoImage;