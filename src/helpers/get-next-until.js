/*!
 * Get next siblings of an element until selector
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element
 * @param  {String} selector The selector to match against
 * @return {Array}           The siblings
 */
var getNextUntil = function (elem, selector) {
	// Setup siblings array and get next sibling
	var siblings = [];
	var next = elem.nextElementSibling;

	// Loop through all siblings
	while (next) {

		// If the matching item is found, quit
		if (selector && next.matches(selector)) break;

		// Otherwise, push to array
		siblings.push(next);

		// Get the next sibling
		next = next.nextElementSibling
	}

	return siblings;
};
