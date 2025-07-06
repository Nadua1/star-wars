import React from 'react';
import friend1 from "../assets/friend1.jpg";
import friend2 from "../assets/friend2.jpg";
import friend3 from "../assets/friend3.jpg";
import friend4 from "../assets/friend4.jpg";
import friend5 from "../assets/friend5.jpg";
import friend9 from "../assets/friend9.jpg";
import friend7 from "../assets/friend7.jpg";
import friend8 from "../assets/friend8.jpg";
import friend6 from "../assets/friend6.jpg";
import Foto from "./Foto.jsx";
import {itemsFoto} from "../utils/constants.js";

const DreamTeam = () => {
    return (
        <section className="float-end row w-50 border rounded-bottom-4 me-0 ms-2">
            <h2 className="text-center">Dream Team</h2>
            {/*{itemsFoto.map((item=> <Foto itemFoto={item} key={item}/>))}*/}
            <Foto itemFoto={friend1}/>
            <Foto itemFoto={friend2}/>
            <Foto itemFoto={friend3}/>
            <Foto itemFoto={friend4}/>
            <Foto itemFoto={friend5}/>
            <Foto itemFoto={friend9}/>
            <Foto itemFoto={friend7}/>
            <Foto itemFoto={friend8}/>
            <Foto itemFoto={friend6}/>
        </section>
    );
};

export default DreamTeam;