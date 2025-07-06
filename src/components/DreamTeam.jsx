import React from 'react';
import Foto from "./Foto.jsx";
import {itemsFoto} from "../utils/constants.js";

const DreamTeam = () => {
    return (
        <section className="float-end row w-50 border rounded-bottom-4 me-0 ms-2">
            <h2 className="text-center">Dream Team</h2>
            {itemsFoto.map((item=> <Foto itemFoto={item} key={item}/>))}

        </section>
    );
};

export default DreamTeam;