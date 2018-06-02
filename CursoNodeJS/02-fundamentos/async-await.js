


let getNombre = async() => {
    
    return "GONZALO";
};


getNombre().then(nombre => {
    console.log(nombre);
}).catch(e=>{
    console.log("Error:", e);
})