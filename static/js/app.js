var app = angular.module("app", []);

app.controller("AppCtrl", function($http) {
    var app = this;
    var server = "http://192.168.1.1:5000/api/switch"

    $http.get(server).success (function (data) {
        app.switches = data.objects;
    })

    app.addSwitch = function () {
        $http.post(server, {"name":"orange", "type":"Lamp", "room":"kitchen", "on_command":"0101010", "off_command":"111111111"})
        .success(function (data) {
            app.switches.push(data);
        })
    }
    /*
    app.deleteSwitch = function (switch) {
        $http.delete(server + "es/" + switch.id)
        .success(function (data) {
            app.switches.splice(app.switches.indexOf(switch), 1);
        })
    }
    */

    app.updateSwitch = function (switch) {
        $http.put(server + "es/" + switch.id, switch);
    }


});