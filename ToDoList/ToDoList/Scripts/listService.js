(function () {

    var listService = function () {

        var getListItems = function () {

            var listItems = [];

            var listItem = {
                "ItemDescription": "Example of completed task",
                "IsComplete": true
            };

            var listItem2 = {
                "ItemDescription": "Example of incomplete task",
                "IsComplete": false
            };

            var listItem3 = {
                "ItemDescription": "This is an example of a really long incomplete task",
                "IsComplete": false
            }

            listItems.push(listItem);
            listItems.push(listItem2);
            listItems.push(listItem3);

            return listItems;

        };

        return {
            getListItems: getListItems
        };

    };

    var module = angular.module("todolist");
    module.factory("listService", listService);

}());