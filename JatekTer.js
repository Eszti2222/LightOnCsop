import Info from "./Info.js";


export default class Jatekter{
    #lista=["green","yellow"];
    #lampaLekapcsoltDB=0;
    constructor(szuloElem){
        let InfoPanel=document.querySelector("aside")
        this.Info=new Info(InfoPanel)
        this.szuloElem=szuloElem;
        this.#esemenykKezelo();


    }
    #esemenykKezelo(){
        window.addEventListener("kivalaszt",(event)=>{
            console.log(event.detail)
            if (this.#lampaLekapcsoltDB%2==0){
                this.#lista[event.detail]="green";
            }else{
                this.#lista[event.detail]="yellow";
            }
            this.#lampaLekapcsoltDB++
            this.szuloElem.innerHTML="yellow";
            this.szuloElem.innerHTML="green";
            this.#megjelenit()
        });
    }
    #megjelenit(){
        for(let index=0;index<this.#lista.length;index++){
            new Lampa(this.#lista[index],index,this.szuloElem)
        }
    }
}