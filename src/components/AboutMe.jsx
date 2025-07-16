import {base_url, period_month} from "../utils/constants.js";
import {useEffect, useState} from "react";

const AboutMe = () => {
    const [hero, setHero] = useState();
    useEffect(() => {
        const hero = JSON.parse(localStorage.getItem("hero"));
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            setHero(hero.payload);
        } else {
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem("hero", JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }
    }, [])

    return (
        <>
            {(!!hero) &&
                <div className='text-4xl leading-[1.6] text-justify ml-5'>
                    <p><span>name:</span> {hero.name}</p>
                    <p><span>gender:</span> {hero.gender}</p>
                    <p><span>birth year:</span> {hero.birth_year}</p>
                    <p><span>height:</span> {hero.height}</p>
                    <p><span>mass:</span> {hero.mass}</p>
                    <p><span>hair color:</span> {hero.hair_color}</p>
                    <p><span>skin color:</span> {hero.skin_color}</p>
                    <p><span>eye color:</span> {hero.eye_color}</p>
                </div>
            }
        </>
    );
};

export default AboutMe;