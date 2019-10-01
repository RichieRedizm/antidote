;(global => {
	var Framework = function(input) {
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
			return this
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
