'use strict';
/*global app*/
/*global localStorage*/
app.factory('DecentAgencyFactory', ['$http', function ($http) {
    return {
      FetchDecentAgencyData: FetchDecentAgencyData
    }
    /* Returns data from backend */
    function FetchDecentAgencyData() {
      return $http.get('/da').then((res)=>{return res});
    }

}]);
