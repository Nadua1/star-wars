import React from 'react';
import friend1 from "../assets/friend1.jpg";

const Foto = ({itemFoto}) => {
    return (
        <img
            src={`./assets/${itemFoto}.jpg`} alt={itemFoto}/>
    );
};

export default Foto;