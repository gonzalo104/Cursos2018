/*
 * @Author            : Gonzalo Zavala Mendoza
   @email             : gonzalozavalamendoza@gmail.com
 * @Date              : 2018-06-12 19: 22: 54
 * @Last Modified by  : Gonzalo Zavala Mendoza
 * @Last Modified time: 2018-06-12 19: 31: 51
 */


class Usuarios {
    constructor(){
        this.personas = [];
    }

    agregarPersona(id,nombre, sala){
        let persona = {id,nombre, sala};
        this.personas.push(persona);
        return  this.personas;
    }

    getPersona(id){
        let persona = this.personas.filter(persona =>  persona.id === id)[0];
        return persona;
    }

    getPersonas(){
        return this.personas;
    }

    getPersonasPorSala(sala) {
        //...  
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala
    }

    borrarPersona(id){
       let personaBorrada = this.getPersona(id);
           this.personas  = this.personas.filter(person => person.id != id);
           return personaBorrada;
    }


}


module.exports = {
    Usuarios
}