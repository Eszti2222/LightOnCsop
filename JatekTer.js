import Info from "./Info.js";
import Lampa from "./Lampa.js";


export default class Jatekter{
    #lista=["green","yellow","green","yellow","green","yellow","green","yellow","green"];
    #lampaLekapcsoltDB=0;

    constructor(szuloElem){
        
        this.szuloElem=szuloElem;
        this.init();
       this.#esemenykKezelo();
    }
    init(){
        this.szuloElem.innerHTML="";
        this.infoPanel=document.querySelector(".info")
        this.info=new Info(this.infoPanel)
        this.startButton=document.querySelector(".gomb");
        this.#lista= [0,1,0,1,1,1,0,1,0];
        this.#megjelenit();      
        this.#jatekIndit();
    }
    #jatekIndit(){
        this.startButton.addEventListener("click",()=>{
            //this.init();
            this.#lista.slice(0);
            for (let index = 0; index < this.#lista.length; index++) {
                let rand = Math.floor(Math.random() * 2);
                this.#lista.push(rand);
            }
        })

    }
    #esemenykKezelo(){
        window.addEventListener("kivalaszt",(event)=>{
            console.log(event.detail)
            if (this.#lampaLekapcsoltDB%2==0){
                this.#lista[event.detail]=0;
                 this.info.megjelenit(1);
            }else{
                this.#lista[event.detail]=1;
                 this.info.megjelenit(0);
            }
            this.#lampaLekapcsoltDB++
            this.szuloElem.innerHTML=1;
            this.szuloElem.innerHTML=0;
            this.#megjelenit()
        });
    }
    #megjelenit(){
        for(let index=0;index<this.#lista.length;index++){
            new Lampa(this.#lista[index],index,this.szuloElem)
        }
    }

}