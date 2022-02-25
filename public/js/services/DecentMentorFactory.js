'use strict';
/*global app*/
/*global localStorage*/
app.factory('DecentMentorFactory', ['$http', function ($http) {
    return {
      FetchDecentMentorData: FetchDecentMentorData
    }
    /* Returns data from backend */
    function FetchDecentMentorData() {
      const ipfs_url = 'http://bafybeiga3tsbwdnpnqdoaefgqeydtu3dillcq455shzdczx3ocew3yfszm.ipfs.localhost:8080/';  
      return $http.get(ipfs_url).then((res)=>{return res});
    }

}]);
