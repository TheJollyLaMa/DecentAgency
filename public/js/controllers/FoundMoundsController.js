"use strict";
app.controller("DecentAgencyController", ["$scope", "$route", "DecentAgencyFactory", "BlockFactory", function($scope, $route, DecentAgencyFactory, BlockFactory) {
    $scope.title = {msg: 'Found Mounds HomePage'};
    $scope.dictionary = {
      Decent: "Of an acceptable standard; satisfactory; abbr. for Decentral(ize)(d)",
      Agency: "The ability to transform energy that arises from a combination of chioce and action; The ability to interact with and affect a system and/or its components; A collection of individuals with such capacity to affect change in a system.",
      Mentor: "An experienced and trusted advisor.",
      Employee: "A person given work and paid for it, especially at a non-executive level.",
      Contribute: "To give in order to help achieve or provide something; help to cause or bring about; supply for publication.",
      Ethics: "Moral principles that govern a person's behavior or the conducting of an activity.",
      Protocol: "1.)the official procedure or system of rules governing affairs of state or diplomatic occasions.\n 2.) the original draft of a diplomatic document, especially of the terms of a treaty agreed to in conference and signed by the parties.",
      Investor: "a person or organization that puts money into financial plans, property, etc. with the expectation of achieving a profit.",
      Band: "A group of musicians, singers, or other performers who are united by a common theme or purpose.",
      Dignity: "The state or quality of being worthy of honor or respect."
    };
    $scope.morals = ["Honesty", "Integrity", "Loyalty", "Courage", "Honor", "Humor", "Free-Expression", "Power", "Discipline", "Compassion", "Perseverence", "Tolerance", "Cleanliness", "Duty", "Gratitude"];
    $scope.about = {msg: "A Decent Agency By Deed."};
    $scope.fetchDecentAgencyData = async () => {
      await DecentAgencyFactory.FetchDecentAgencyData().then((res)=>{
        console.log(res);
        $scope.DAdata = res.data;
        $scope.lbs_expected = 0;
        $scope.lbs_stored = 0;
      })
    };
    $scope.web3 = window.ethereum;
    $scope.connect = async () => {
      if (typeof window.ethereum !== 'undefined') {
        // console.log($scope.web3);
        if ($scope.web3.isMetaMask) {
        console.log('MetaMask is installed!');
        }
        console.log("Chain Id: ",$scope.web3.chainId);
        console.log("Wallet Address: ", $scope.web3.selectedAddress);
        $scope.account = await $scope.web3.selectedAddress;
        $scope.display_account_first = $scope.account.toString().substring(0,4);
        $scope.display_account_last = $scope.account.toString().substring($scope.account.toString().length - 4);
        // $scope.display_account = $scope.account.toString().substring(0,4) + "   ....   " + $scope.account.toString().substring($scope.account.toString().length - 4);
        console.log($scope.display_account_first, "$$$", $scope.display_account_last);
      }
    };
    $scope.ens_eth_breathe = 'http://bafybeifklwly6spqwnofu26llpgreii74riix432aluhoa3xslxydqihma.ipfs.localhost:8080';

    $scope.wallet_connected = () => {
      if (window.ethereum.isConnected()) {
        console.log("Connected to blockchain!")
        return true;
      }else{
        console.log("Not connected to blockchain!")
        return false;
      }
    };
    
    $scope.fetchDecentAgencyData();

}]);
