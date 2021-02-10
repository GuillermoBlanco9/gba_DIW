class elementDetails extends HTMLElement {
    constructor() {
        super();
        var template = document.querySelector('template').content;

        // Clono el contenido del template
        var elem = template.cloneNode(true);

        // Creo el shadow root para todo el componente
        this.attachShadow({mode: 'open'});
        
        // Accedo al shadow root e incluyo el template 
        this.shadowRoot.appendChild(elem);
        
        // Si comento las dos líneas anteriores y ponemos this.appendChild(elem), entonces se añade al DOM de la página
        //this.appendChild(elem)
    }
}

customElements.define('element-details', elementDetails);

// Si no creamos Shadow DOM podemos acceder al contenido interno el elemento
alert(document.querySelector("element-details").querySelector("p").innerHTML);