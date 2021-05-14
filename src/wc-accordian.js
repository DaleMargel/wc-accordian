let template = document.createElement('template');
template.innerHTML = `
<style>
:host {
	display: block;
	contain: content;
}
#panel {
	max-height: 0;
	overflow: hidden;
	transition: max-height 0.2s ease-out;
}
</style>
<slot name="header"></slot>
<div id="panel">
	<slot name="section"></slot>
</div>`;

class WcAccordian extends HTMLElement {
	constructor() { super();
		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.appendChild(template.content.cloneNode(true));
	}
	static get observedAttributes() { return ['open','group'] }

	connectedCallback(){
		const master = this.querySelector('[slot=header]');	
		master.addEventListener('click', e => {
			this.setAttribute('open', !this.data.open);
		})
		window.addEventListener("beforeprint", e=>this.render(true));
		window.addEventListener('afterprint', e=>this.render(this.data.open));

	}
	attributeChangedCallback(name, oldVal, newVal) {
		if(!oldVal) oldVal='false';
		if(oldVal === newVal) return;
		if(name ==='open'){
			let {data}=this;
			data.open = (newVal === 'true');
			this.render(data.open);
			this.closeothers(data.open);
		}
	}
	render(open){
		const panel = this.shadowRoot.querySelector('#panel');
		panel.style.maxHeight = open ? panel.scrollHeight + "px" : null;
	}
	closeothers(open){
		if(!open) return;
		let grp = this.getAttribute('group');
		if(!grp) return;

		let all = document.querySelectorAll(`[group=${grp}]`)
		for(let other of all){
			if(other === this) continue;
			other.setAttribute('open',false);
		}
	}
	data={ open:false }
}
try{ customElements.define("wc-accordian",WcAccordian) }
catch(NotSupportedError){/* duplicate */}
export { WcAccordian }
// Copyright © 2021 Dale Margel / Azure Solutions
// under Creative Commons - Attribution-NonCommercial CC BY-NC
// Build 2021.05.05
// Use at your own risk
