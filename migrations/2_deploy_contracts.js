const DecentMentor = artifacts.require("DecentMentor");
const DA_Mint_721 = artifacts.require("DA_Mint_721");


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
    deployer.deploy(DA_Mint_721).then(async function(){
      var da_mint = await DA_Mint_721.deployed();
      console.log("  DA_Mint_721 deployed at: " + da_mint.address);
    });
  }catch(err){
    console.log(err);
  }
};
