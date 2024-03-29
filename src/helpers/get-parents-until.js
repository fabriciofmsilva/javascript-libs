/*!
 * Get all of an element's parent elements up the DOM tree until a matching parent is found
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element
 * @param  {String} parent   The selector for the parent to stop at
 * @param  {String} filter   The selector to filter against [optional]
 * @return {Array}           The parent elements
 */
var getParentsUntil = function (elem, parent, filter) {
	// Setup parents array
	var parents = [];

	// Get matching parent elements
	while (elem && elem !== document) {
		// If there's a parent and the element matches, break
		if (parent) {
			if (elem.matches(parent)) break;
		}

		// If there's a filter and the element matches, push it to the array
		if (filter) {
			if (elem.matches(filter)) {
				parents.push(elem);
			}
			continue;
		}

		// Otherwise, just add it to the array
		parents.push(elem);

		elem = elem.parentNode;
	}

	return parents;
};
