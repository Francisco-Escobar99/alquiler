

const ComponenteMultiple=({opcion, dias})=>{

    const calculoCostoHotel=()=>{

        let costoFinal = dias * 50;

        if(dias>5) costoFinal -=35;
        else if(dias>3) costoFinal-=25;

        return <p>Costo de estancia del hotel: {costoFinal}</p>
    }


    const calculoAlquilerCoche=()=>{

        let costoFinal = dias * 37;

        if(dias>5) costoFinal -=30;
        else if(dias>3) costoFinal-=15;

        return <p>Costo alquiler del coche: {costoFinal}</p>
    }


    return <div>
        {opcion === 1? calculoCostoHotel(): opcion===2? calculoAlquilerCoche(): ""}
    </div>
}

export default  ComponenteMultiple;