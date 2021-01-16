define(['ko'], function(ko) {

	return function () {
		var that = {};

		var hello = ko.observable("Hello from js");
		that.hello = hello;

		// var calculate = function() {
		// };
		// that.calculate = calculate;

		return that;
	};
});