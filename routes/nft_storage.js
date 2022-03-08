var path = require('path');
const mime = require('mime');
const express = require('express');
var router = express.Router();
// import decentMentor contract abi
// const abi = require('build/DecentMentor.json');

const {NFTStorage, File} = require('nft.storage');
const fs = require('fs');
require('dotenv').config();
const NFT_STORAGE_API_KEY = process.env.NFT_STORAGE_API_KEY;

async function storeNFT(imagePath, name, description) {
    // load the file from disk
    const image = await fileFromPath(imagePath)
    // console.log("path:", imagePath);
    // console.log("name:", name);
    // console.log("description:", description);
    const nftstorage = new NFTStorage({ token: NFT_STORAGE_API_KEY })

    // call client.store, passing in the image & metadata
    return nftstorage.store({
        image,
        name,
        description,
    })
}
 async function fileFromPath(filePath) {
    const content = await fs.promises.readFile(filePath)
    const type = mime.getType(filePath)
    return new File([content], path.basename(filePath), { type })
}

/* Store MetaData to IPFS and Filecoin */
router.get('/store', function(req, res, next) {
    // var asset ='public/img/toon_head.png';
    var req = {};
    req.params = {imagePath: 'public/img/Ens_Eth_Breathe.gif', name: 'ENS ETH Breathe', description: 'ENS ETH Breathe Logo'};
    storeNFT(req.params.imagePath, req.params.name, req.params.description)
   .then((data) => {
        console.log(data);
        process.exit(0)
        res.json(data);
    })
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });
});
module.exports = router;


/* toon head */
// Token1 {
//     ipnft: 'bafyreigpc7sgobykqrwnucbrncjbcyehlv3giw7vkhjbnbg4occjw5txp4',
//     url: 'ipfs://bafyreigpc7sgobykqrwnucbrncjbcyehlv3giw7vkhjbnbg4occjw5txp4/metadata.json'
//   }

/* ens eth breathe logo */
// Token2 {
//     ipnft: 'bafyreidh265r5lums336hvyturdd3tbmtroirb7ufevk62wlin6z6ppgpm',
//     url: 'ipfs://bafyreidh265r5lums336hvyturdd3tbmtroirb7ufevk62wlin6z6ppgpm/metadata.json'
//   }