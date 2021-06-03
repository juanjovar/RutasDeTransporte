class nodo{
    constructor(nombre, minutos, siguiente){
        this.nombre = nombre;
        this.minutos = minutos;        
        this.siguiente = siguiente;        
        this.horaInicio = null;
        this.Fin = null;
    }
}

class RutaDeTransporte{
    constructor(){
        this.inicio = null;
    }
    agregar(nombre, minutos){
        let nuevo = new nodo(nombre, minutos, null);
        if(this.inicio==null){
            this.inicio=nuevo;
        }
        else{
            let t=this.inicio;
            while(t.siguiente!=null)
                t=t.siguiente;
            t.siguiente=nuevo;    
        }
    }
    crearRecorrido(baseInicio, horaInicio, horaFin){
         
    }
    buscar(){

    }
    eliminar(){
        let primero=this.inicio;
        if(this.inicio!=null)
        {
            this.inicio=this.inicio.next;
            primero.next=null;
        }
    }
    imprimir(){
        return this.inicio;
    }
    imprimirPro(){
        let actual = this.inicio;
        let resultado = '';
        let posicion=0;
        
        while(actual){
            resultado += "[ " + actual.nombre + " - " + actual.minutos + "]"+ "<" + posicion + ">" +' <-> ';
            actual = actual.siguiente;
            posicion++;
        }
        return resultado + ' X ';
    }
}

let ruta = new RutaDeTransporte();

ruta.agregar("Reparto",20);
ruta.agregar("Reparto",70);
ruta.agregar("Reparto",90);
//console.log(ruta.imprimir());
console.log(ruta.imprimirPro());