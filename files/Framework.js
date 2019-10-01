;(global => {
	var Framework = input => {
		return new Framework.init(input)
	}
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
			let content = document.querySelector(input)
			content.innerHTML = this.template
			this.addEvents()
			return this
		},
		addEvents: function() {
			const clear = document.querySelector('[data-event="click:clearTitle"]')
			clear.addEventListener('click', this.clearTitle)
			const keyUp = document.querySelector('[data-event="keyup:titleChanged"]')
			keyUp.addEventListener('keyup', this.titleChanged)
		}
	}
	Framework.init = function(input) {
		let self = this
		self.template = input.template || ''
		self.data = input.data || ''
		self.clearTitle = input.clearTitle || ''
		self.titleChanged = input.titleChanged || ''
	}

	Framework.init.prototype = Framework.prototype
	global.Framework = Framework
})(window)
