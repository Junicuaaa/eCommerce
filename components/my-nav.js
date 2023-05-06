let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js","");

export default class myNav extends HTMLElement{
    static async components(){
        return await(await fetch (pathName.replace(".js",".html"))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
  
    }

    handleEvent(e){
        (e.type === "click") ? this.sendMessage(e): undefined;
    }

    sendMessage(e){
        e.preventDefault();   
        alert("Boton footer")    
    }

    connectedCallback(){
        Promise.resolve(myNav.components())
        .then(html =>{
            this.shadowRoot.innerHTML = html;
/*             this.myNavegador = this.shadowRoot.querySelector("#boton");
            this.myNavegador.addEventListener("click", this.handleEvent.bind(this))   */
        });
        console.log("Navegador");           
    }
}

customElements.define(name, myNav);