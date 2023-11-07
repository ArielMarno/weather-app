import '../css/form.css';
import React, {useState} from "react";
import lupa from '../assets/lupa.png';

const Form = ({newLocation}) => {

    const [city, setCity]= useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});
        if(city === "" || !city) return; 

        newLocation(city);
    }

    return(
        <div>
                <form onSubmit={onSubmit}>
                    <button><img src={lupa} alt="" /></button>
                        <input type= "text" className="form-control" placeholder="Ciudad/Localidad" onChange={(e)=>setCity(e.target.value)}/>
                </form>
        </div>
    )
};

export default Form;