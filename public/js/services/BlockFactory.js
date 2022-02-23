app.factory('BlockFactory', ["$http", function ($http) {
    return {
          FetchTokenJSON: FetchTokenJSON
      }
      function FetchTokenJSON () {
          // return $http.get('../../../abis/AngelToken.json')//need to change to hardlink to ipfs file containing token ABI
          //             .then(function(atjson) {
          //               return atjson.data;
          //             });
      }
}]);
