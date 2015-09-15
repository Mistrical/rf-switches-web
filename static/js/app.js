var app = angular.module("app", []);

app.controller("AppCtrl", function($http) {
    var app = this;

    app.message = "Am I working?";

    $http.get("http://192.168.1.1:5000/api/switch").success (function (data) {
        app.switches = data.objects;
    })
})