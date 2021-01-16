requirejs.config({
    paths: {
        ko: 'knockout-3.5.1',
        jquery: 'jquery-2.1.4.min'
    }
});

requirejs(['plane_model', 'ko', 'jquery'], function (modelConstructor, ko, $) {

    var model = modelConstructor();

    ko.applyBindings(model);

});