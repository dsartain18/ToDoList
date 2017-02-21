(function () {
    var app = angular.module("todolist", []);

    var MainController = function ($scope, listService) {

        var onListComplete = function (response) {
            $scope.listItems = response.data;

            console.log("List Successfully Retrieved");
            console.log(response.data);
        };

        var onError = function (reason) {
            console.log("There was an error");
            console.log(reason);
        };

        $scope.getListItems = function () {

            $scope.listItems = listService.getListItems();
        };

        $scope.addItem = function (itemDescription) {

            var listItem = {
                "ItemDescription": itemDescription,
                "IsComplete": false
            };

            $scope.listItems.push(listItem);

            $scope.itemDescription = null;
        };

        $scope.message = "To Do List Demo";

        $scope.getListItems();
    };


    app.controller("MainController", ["$scope", "listService", MainController]);
}());