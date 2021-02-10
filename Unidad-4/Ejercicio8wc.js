const template = document.createElement('template');
var tiem=0;
var inter;
template.innerHTML = `
<style>
.barr
{
    height: 30px;
    background-color: brown;
    float: left;
    width: 0;
}
</style>
<progress-bar class='barr'>0.0%</progress-bar>`;
class progressBar extends HTMLElement {
	constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
		    /*this._shadowRoot.appendChild(template.content.cloneNode(true));*/
     }
     connectedCallback(){
       
        this.tiempo=(this.getAttribute('tiempo') || 1 /*alert('El tiempo no existe o es menor que cero')*/);
        document.getElementById('empezar').addEventListener('click',function (){
          if(tiem>=100) tiem=0;
            inter=setInterval(() => {
            var testE = document.querySelector("progress-bar");
            var testB = document.getElementById("container");
            testB=parseFloat(testB.style.width);
            testE.style.width=(tiem*400)/100+'px';
            tiem++;
            document.querySelector("progress-bar").innerHTML=tiem+'.0%'
            if(tiem==100){ 
            clearInterval(inter);
            testE.style.backgroundColor='green'
            }
            else testE.style.backgroundColor='red';
            
        },(this.tiempo*1000)/100);
      });
      document.getElementById('acabar').addEventListener('click',function(){
        clearInterval(inter);
        tiem=0;
      });
    }

	get tiempo() {
		return this.getAttribute('tiempo');
    }

	set tiempo(newVal) {
		this.setAttribute('tiempo', newVal);
    }

    render(tiem) {
      this.shadowRoot.innerHTML =`
      <style>
      .barr
      {
          height: 30px;
          background-color: brown;
          float: left;
          width: 0;
      }
      </style>
      <progress-bar>""0.0%</progress-bar>` 
      ;
    }

}
customElements.define('progress-bar', progressBar);