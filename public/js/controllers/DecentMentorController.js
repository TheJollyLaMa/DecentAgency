"use strict";
app.controller("DecentMentorController", ["$scope", "DecentMentorFactory", function($scope, DecentMentorFactory) {
  var init = function () {
      $scope.title = 'Decent Mentor HomePage';
      $scope.about = {msg: "A Decent Mentor About."};
      $scope.FetchDecentMentorData = async () => {
        await DecentMentorFactory.FetchDecentMentorData().then((res)=>{
          console.log(res);
          $scope.mentorMetaData = res;
        });
      };
      $scope.toon_head = 'https://ipfs.io/ipfs/QmYgbhsXQPPC79we1AaVQMoH8tSCSo4N2QD5urT1EvDCBM?filename=toon_head.png';
      $scope.mandelblum = 'https://ipfs.io/ipfs/QmQRonNAkHWRcVuWwKbpeDuf34D8vW3yGjvxLoa7Qcjypf?filename=mandelbrot_blum.gif';
      $scope.FetchDecentMentorData();
  }

  init();
}]);
