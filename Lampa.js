export default class Lampa {
  #szin;
  #index;
  #szElem;

  constructor(szin, index, szElem) {
    this.#szin = szin;
    this.#index = index;
    this.#szElem = szElem;
    this.megjelenit();
    this.kisLampa= document.querySelector(".kisLampa:last-child");

    this.kisLampa.addEventListener("click", () => {
      if (this.#szin === this.#index.#szin) {
        const e = new CustomEvent("kivalaszt", { detail: this.#index });
        window.dispatchEvent(e);
      }
    });
  }
  megjelenit() {
    let html = `<div class="kisLampa" style="background-color:${this.#szin}">
                    </div>
                    `;
    this.#szElem.insertAdjacentHTML("beforeend", html);
  }


}
