import React from 'react';

const Foto = ({itemFoto}) => {
    return (
        <img className="col-sm-4 p-1" src={itemFoto} alt="Friend"/>
    );
};

export default Foto;