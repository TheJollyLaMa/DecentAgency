// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
// bring in openzeppelin erc-721 contracts, etc
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// profile token built on erc-721
// used to create mentor cards or profiles that will be added to and on display for the community
// What are the attributes of a Mentor Profile Card?

// bring in profile card struct
    // active proteges 
    // qualifiers, skills, and acheivements
    // contact info
// Mint-a-Link function to create 
//  Discord Gates,
//  Zoom/Video Event Gates,
//  Value Store representations,
// Decent Mentor AngelToken Mintor
//   - a clone of AngelTokens executed on through a DecentMentor Meeting


contract DecentMentor is ERC721URIStorage, Ownable {
   using Counters for Counters.Counter;
   Counters.Counter private _tokenIds;

   constructor() ERC721("NFT", "ENFT") {}

   function mintNFT(address recipient, string memory tokenURI)
       public onlyOwner
       returns (uint256)
   {
       _tokenIds.increment();

       uint256 newItemId = _tokenIds.current();
       _mint(recipient, newItemId);
       _setTokenURI(newItemId, tokenURI);

       return newItemId;
   }
}
