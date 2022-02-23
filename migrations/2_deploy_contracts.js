const DecentMentor = artifacts.require("DecentMentor");

module.exports = function(deployer, network, accounts) {
  // console.log(accounts);
  var date = new Date("01/01/2021").toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  try{
    deployer.deploy(DecentMentor).then(async function(){
      var dm = await DecentMentor.deployed();
      console.log("  DecentMentor deployed at: " + dm.address);
    });
  }catch(err){
    console.log(err);
  }
};
