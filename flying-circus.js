requirejs.config({
    paths: {
        ko: 'knockout-3.5.1',
        jquery: 'jquery-2.1.4.min'
    }
});

requirejs(['plane', 'ko', 'jquery'], function (modelConstructor, ko, $) {

	const planeState = JSON.parse(window.localStorage.getItem("planeState"));
    var model = modelConstructor(planeState);

    ko.applyBindings(model);
});