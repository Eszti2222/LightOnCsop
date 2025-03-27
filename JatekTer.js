import Info from "./Info.js";
import Lampa from "./Lampa.js";


export default class Jatekter{
    #lista=["green","yellow","green","yellow","green","yellow","green","yellow","green"];
    #lampaLekapcsoltDB=0;

    constructor(szuloElem){
        let InfoPanel=document.querySelector("article")
        this.Info=new Info(InfoPanel)
        this.szuloElem=szuloElem;
        this.#esemenykKezelo();
        this.#megjelenit();
    }

    constructor(startButton){
        let InfoPanel=document.querySelector("aside")
        this.Info=new Info(InfoPanel)
        this.startButton=startButton;
        this.#jatekIndit();

    }
    #esemenykKezelo(){
        window.addEventListener("kivalaszt",(event)=>{
            console.log(event.detail)
            if (this.#lampaLekapcsoltDB%2==0){
                this.#lista[event.detail]="green";
                 this.Info.megjelenit("yellow")
            }else{
                this.#lista[event.detail]="yellow";
                 this.Info.megjelenit("green")
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
    #jatekIndit(){

    }
}