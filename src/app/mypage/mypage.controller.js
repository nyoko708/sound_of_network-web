(function() {
  'use strict';

  angular
    .module('sound_of_network')
    .controller('MyPageController', MyPageController);

  /** @ngInject */
  function MyPageController($scope, $location, $http, apihost) {
    var vm = this;

    vm.errorMessage = "";
    vm.projects = [];
    vm.getRequests = [];
    vm.sendRequests = [];

    var token = localStorage.getItem('id_token');

    activate();

    function activate() {

      getMyProject();

      getMyRequests();

      getMySendRequests();
    }

    function getMyProject() {
      var api = 'http://' + apihost + '/api/me/projects?token=' + token;

      var success = function(data) {
        vm.projects = data.projects;
      }

      var error = function(data) {
      }

      requestApi(api, success, error)
    }

    function getMyRequests() {
      var api = 'http://' + apihost + '/api/me/request/get?token=' + token;

      var success = function(data) {
        vm.projects = data.projects;
      }

      var error = function(data) {
      }

      //requestApi(api, success, error)
    }

    function getMySendRequests() {
      var api = 'http://' + apihost + '/api/me/request/send?token=' + token;

      var success = function(data) {
        vm.projects = data.projects;
      }

      var error = function(data) {
      }

      //requestApi(api, success, error)
    }

    function requestApi(api, sC, eC) {
      $http.get(api,
          {headers: {
                      'Content-Type' : 'application/json; charset=UTF-8'
                    }})
      .success(function(data) {
        console.log(data);
        sC(data);
      })
      .error(function(data, status) {
        alert("データの取得に失敗しました");
        eC(data);
      });
    }
  }
})();
