/*
/ initialise Framework
*/
const Framework = input => {
	// create instance of Framework object
	return new Framework.init(input)
}

/*
/ protoype methods for Framework
*/
Framework.prototype = {
	create: function() {
		// remove hash as not required
		const templateName = this.template.replace('#', '')
		// get the template
		const template = document.getElementById(templateName).innerHTML
		// update placeholder with data
		this.template = template.replace(/{{title}}/g, this.data.title)
		return this
	},
	render: function(input) {
		// get the container
		let content = document.querySelector(input)
		// set the template to the container
		content.innerHTML = this.template
		// add event listeners
		this.addEvents()
		return this
	},
	addEvents: function() {
		// get the element for clear title and add click event listener
		const clear = document.querySelector('[data-event="click:clearTitle"]')
		clear.addEventListener('click', this.clearTitle)
		// get the element for title changed and add key up event listener
		const keyUp = document.querySelector('[data-event="keyup:titleChanged"]')
		keyUp.addEventListener('keyup', this.titleChanged)
	}
}

/*
/ Structure of Framework object with defaults
*/
Framework.init = function(input) {
	this.template = input.template || ''
	this.data = input.data || ''
	this.clearTitle = input.clearTitle || ''
	this.titleChanged = input.titleChanged || ''
}

/*
/ Add methods to Framework object
*/
Framework.init.prototype = Framework.prototype
