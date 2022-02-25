const express = require('express');
var router = express.Router();

const {NFTStorage, File} = require('nft.storage');
const fs = require('fs');
require('dotenv').config();
const API_KEY = process.env.NFT_STORAGE_API_KEY;

async function storeAsset() {
    const client = new NFTStorage({ token: API_KEY })
    const metadata = await client.store({
        name: 'toon_head',
        description: 'A Jolly Toon Head Indeed',
        image: new File(
            [await fs.promises.readFile('public/img/toon_head.png')],
            'toon_head.png',
            { type: 'image/png' }
        ),
    })
    console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
    return metadata;
 }

/* Store MetaData to IPFS and Filecoin */
router.get('/store', function(req, res, next) {
    storeAsset()
   .then((res) => {
        console.log(res);
        process.exit(0)
        return res;
    })
   .catch((error) => {
       console.error(error);
       process.exit(1);
   }).then((data) => {
        // mock json data
        var data = {
         "msg": "NFT Storage Hash"
        };
        res.json(data);
   })
  });

module.exports = router;

