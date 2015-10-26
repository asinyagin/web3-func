var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider());

var abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "i",
        "type": "uint256"
      },
      {
        "name": "b",
        "type": "bytes32"
      }
    ],
    "name": "retArr",
    "outputs": [],
    "type": "function"
  }
];

var func = new SolidityFunction(web3, abi[0], '0x8901a2bbf639bfd21a97004ba4d7ae2bd00b8da8');
console.log(func.toPayload([1, 'asdf']));
