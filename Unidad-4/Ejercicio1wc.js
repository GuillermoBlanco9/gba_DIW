class wcBlink extends HTMLElement {	
	constructor() {
        super();
 	}
	
	connectedCallback(){
        var n=0;
        this.changeInterval=(this.getAttribute('changeInterval') || 1);
        this.baseColor=(this.getAttribute('baseColor') || 'inherit');
        this.alternativeColor=(this.getAttribute('alternativeColor') || 'transparent');

		setInterval(() => {
        var testE = document.querySelector("wc-blink");
        testE.style.color= ++n % 2 ? this.alternativeColor : this.baseColor;
        },this.changeInterval*1000);
    }

	get baseColor() {
		return this.getAttribute('baseColor');		
	}
	
	set baseColor(newVal) {
		this.setAttribute('baseColor', newVal);
    }
    get alternativeColor() {
		return this.getAttribute('alternativeColor');		
	}
	
	set alternativeColor(newVal) {
		this.setAttribute('alternativeColor', newVal);
    }
    get changeInterval() {
		return this.getAttribute('changeInterval');		
	}
	
	set changeInterval(newVal) {
		this.setAttribute('changeInterval', newVal);
	}
			
}

customElements.define('wc-blink', wcBlink);