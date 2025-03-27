export default class Lampa {
  #szin;
  #index;
  #szElem;

  constructor(szin, index, szElem) {
    this.#szin = szin;
    this.#index = index;
    this.#szElem = szElem;
    this.getSzin();
    this.setMellette();

    this.#szElem.addEventListener("click", () => {
      if (this.#szin === this.#index.#szin) {
        const e = new CustomEvent("kivalaszt", { detail: this.#index });
        window.dispatchEvent(e);
      }
    });
  }
  megjelenit() {
    let html = `<div class="lampa">
                        <p>${this.#szin}</p>
                    </div>
                    `;
    this.#szElem.insertAdjacentHTML("beforeend", html);
  }

  getSzin() {
    return this.#szin;
  }
  setMellette(){
    aktSzin=this.getSzin()
    if(kattintas){
        this.#index+= !aktSzin;
    }
  }
}
