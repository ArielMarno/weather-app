import React, {useState} from "react";

const Form = ({newLocation}) => {

    const [city, setCity]= useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});
        if(city === "" || !city) return; 

        newLocation(city);
    }

    return(
        <div className="form">
            <div className="container">
                <form onSubmit={onSubmit}>
                    <div className="input-group">
                        <input type= "text" className="form-control" placeholder="Ciudad" onChange={(e)=>setCity(e.target.value)}/>
                        <button className="btn inut-group-text">Buscar</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Form;