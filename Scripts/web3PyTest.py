from web3 import Web3
import json

infura_url = "https://polygon-mainnet.infura.io/v3/b1c7e97446de44f083f3e3ad0752cda7"
web3 = Web3(Web3.HTTPProvider(infura_url))

account1 = "0xcAeEd8422fB5682C298B7F0971906d446fFd4e7a"
account2 = "0x807061DF657A7697c04045dA7d16D941861cAABc"

bean_address = "0xcbA54d6900FB2F4C04df75b568af78bc4a28863A"
# get abi from abis/Bean.json
with open("/Volumes/TerryBytes2/2021_Kode_Tut/DappU/abis/Bean.json") as f:
    bean_abi = json.load(f)

# instantiate the contract
bean = web3.eth.contract(address=bean_address, abi=bean_abi['abi'])

# get total supply
beanlb_total_supply = bean.functions.totalSupply().call()
# get bean balance of account1
bean_bal1 = bean.functions.balanceOf(account1).call()
# get bean balance of account2
bean_bal2 = bean.functions.balanceOf(account2).call()

# Create function to convert from wei to ether
def wei_to_ether(wei):
    return web3.fromWei(wei, "ether")

# get balance of account1
bal1 = wei_to_ether(web3.eth.getBalance(account1))
# get balance of account2
bal2 = wei_to_ether(web3.eth.getBalance(account2))

if web3.isConnected():
    data = {
        "Connected": True,
        "Polygon Block Number": web3.eth.blockNumber,
        "Account 1 balance": str(bal1),
        "Account 2 balance": str(bal2),
        "Beanlb Total Supply": beanlb_total_supply,
        "Account1 BeanLb Balance": bean_bal1,
        "Account2 BeanLb Balance": bean_bal2,
        "BeanLbs in the wild": beanlb_total_supply - bean_bal1 - bean_bal2
    }
    #  print in json format
    print(json.dumps(data, indent=4))
else:
    print("Not connected to Ethereum network")

# display the balance of account1

# display the balance of account2
# display the difference between the two balances
# display the total supply of beanlbs
