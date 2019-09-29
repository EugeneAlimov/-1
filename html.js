function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

jQuery.prototype.html = function(tag) {
    this.each(element => element.innerHTML = tag)
    return this;
}

const $ = (e) => new jQuery(e);
