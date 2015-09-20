var app = angular.module("app", ['ui.bootstrap']);

app.controller("AppCtrl", function($http) {
    var app = this;
    var server = "http://192.168.1.2:5000/api/switch"

    $http.get(server).success (function (data) {
        app.switches = data.objects;
    })

    app.addSwitch = function () {
        $http.post(server, {"name":"orange", "type":"Lamp", "room":"kitchen", "on_command":"0101010", "off_command":"111111111"})
        .success(function (data) {
            app.switches.push(data);
        })
    }

    app.deleteSwitch = function (selected_switch) {
        $http.delete(server + "/" + selected_switch.id)
        .success(function (data) {
            app.switches.splice(app.switches.indexOf(selected_switch), 1);
        })
    }


    app.updateSwitch = function (selected_switch) {
        $http.put(server + "/" + selected_switch.id, selected_switch);
    }

    app.switchOn = function (selected_switch) {
        $http.get(server + "/" + selected_switch.id + "/1");
    }

    app.switchOff = function (selected_switch) {
        $http.get(server + "/" + selected_switch.id + "/0");
    }


});