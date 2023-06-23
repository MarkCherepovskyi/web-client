/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  TokenContract,
  TokenContractInterface,
} from "../../contracts/TokenContract";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenName_",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol_",
        type: "string",
      },
      {
        internalType: "string",
        name: "baseURI_",
        type: "string",
      },
    ],
    name: "__TokenContract_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI_",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "to_",
        type: "address[]",
      },
      {
        internalType: "string[]",
        name: "tokenURIs_",
        type: "string[]",
      },
    ],
    name: "mintBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds_",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "baseURI_",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b5060805161291461004c600039600081816107580152818161079801528181610863015281816108a3015261093601526129146000f3fe6080604052600436106101815760003560e01c806370a08231116100d1578063a22cb4651161008a578063d0def52111610064578063d0def5211461044e578063e985e9c51461046e578063f2fde38b146104b8578063f3467dd2146104d857600080fd5b8063a22cb465146103ee578063b88d4fde1461040e578063c87b56dd1461042e57600080fd5b806370a0823114610342578063715018a61461036257806375794a3c146103775780638da5cb5b1461038e578063924cff6d146103ac57806395d89b41146103d957600080fd5b806342842e0e1161013e57806352d1902d1161011857806352d1902d146102ca57806355f804b3146102ed5780636352211e1461030d5780636c0360eb1461032d57600080fd5b806342842e0e1461027757806342966c68146102975780634f1ef286146102b757600080fd5b806301ffc9a71461018657806306fdde03146101bb578063081812fc146101dd578063095ea7b31461021557806323b872dd146102375780633659cfe614610257575b600080fd5b34801561019257600080fd5b506101a66101a1366004611f10565b6104f8565b60405190151581526020015b60405180910390f35b3480156101c757600080fd5b506101d061054a565b6040516101b29190611f7d565b3480156101e957600080fd5b506101fd6101f8366004611f90565b6105dc565b6040516001600160a01b0390911681526020016101b2565b34801561022157600080fd5b50610235610230366004611fc5565b610603565b005b34801561024357600080fd5b50610235610252366004611fef565b61071d565b34801561026357600080fd5b5061023561027236600461202b565b61074e565b34801561028357600080fd5b50610235610292366004611fef565b61082d565b3480156102a357600080fd5b506102356102b2366004611f90565b610848565b6102356102c53660046120fd565b610859565b3480156102d657600080fd5b506102df610929565b6040519081526020016101b2565b3480156102f957600080fd5b5061023561030836600461214b565b6109dc565b34801561031957600080fd5b506101fd610328366004611f90565b6109f1565b34801561033957600080fd5b506101d0610a51565b34801561034e57600080fd5b506102df61035d36600461202b565b610ae0565b34801561036e57600080fd5b50610235610b66565b34801561038357600080fd5b506102df6101605481565b34801561039a57600080fd5b506033546001600160a01b03166101fd565b3480156103b857600080fd5b506103cc6103c7366004612234565b610b7a565b6040516101b291906122ea565b3480156103e557600080fd5b506101d0610cae565b3480156103fa57600080fd5b5061023561040936600461232e565b610cbd565b34801561041a57600080fd5b5061023561042936600461236a565b610cc8565b34801561043a57600080fd5b506101d0610449366004611f90565b610d00565b34801561045a57600080fd5b506102df6104693660046120fd565b610e04565b34801561047a57600080fd5b506101a66104893660046123d2565b6001600160a01b0391821660009081526101006020908152604080832093909416825291909152205460ff1690565b3480156104c457600080fd5b506102356104d336600461202b565b610ea0565b3480156104e457600080fd5b506102356104f3366004612405565b610f16565b60006001600160e01b031982166380ac58cd60e01b148061052957506001600160e01b03198216635b5e139f60e01b145b8061054457506301ffc9a760e01b6001600160e01b03198316145b92915050565b606060fb80546105599061248d565b80601f01602080910402602001604051908101604052809291908181526020018280546105859061248d565b80156105d25780601f106105a7576101008083540402835291602001916105d2565b820191906000526020600020905b8154815290600101906020018083116105b557829003601f168201915b5050505050905090565b60006105e782611044565b50600090815260ff60205260409020546001600160a01b031690565b600061060e826109f1565b9050806001600160a01b0316836001600160a01b0316036106805760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061069c575061069c8133610489565b61070e5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608401610677565b61071883836110a3565b505050565b6107273382611111565b6107435760405162461bcd60e51b8152600401610677906124c7565b610718838383611124565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036107965760405162461bcd60e51b815260040161067790612514565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166107df600080516020612898833981519152546001600160a01b031690565b6001600160a01b0316146108055760405162461bcd60e51b815260040161067790612560565b61080e81611288565b6040805160008082526020820190925261082a91839190611290565b50565b61071883838360405180602001604052806000815250610cc8565b6108506113fb565b61082a81611455565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036108a15760405162461bcd60e51b815260040161067790612514565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108ea600080516020612898833981519152546001600160a01b031690565b6001600160a01b0316146109105760405162461bcd60e51b815260040161067790612560565b61091982611288565b61092582826001611290565b5050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146109c95760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610677565b5060008051602061289883398151915290565b6109e46113fb565b61015f61092582826125fa565b600081815260fd60205260408120546001600160a01b0316806105445760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610677565b61015f8054610a5f9061248d565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8b9061248d565b8015610ad85780601f10610aad57610100808354040283529160200191610ad8565b820191906000526020600020905b815481529060010190602001808311610abb57829003601f168201915b505050505081565b60006001600160a01b038216610b4a5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610677565b506001600160a01b0316600090815260fe602052604090205490565b610b6e6113fb565b610b786000611497565b565b6060610b846113fb565b8151835114610bea5760405162461bcd60e51b815260206004820152602c60248201527f546f6b656e436f6e74726163743a20556e657175616c206c656e677468206f6660448201526b103830b930b6b2ba32b9399760a11b6064820152608401610677565b825167ffffffffffffffff811115610c0457610c04612046565b604051908082528060200260200182016040528015610c2d578160200160208202803683370190505b50905060005b8351811015610ca757610c78848281518110610c5157610c516126ba565b6020026020010151848381518110610c6b57610c6b6126ba565b6020026020010151610e04565b828281518110610c8a57610c8a6126ba565b602090810291909101015280610c9f816126d0565b915050610c33565b5092915050565b606060fc80546105599061248d565b6109253383836114e9565b610cd23383611111565b610cee5760405162461bcd60e51b8152600401610677906124c7565b610cfa848484846115b8565b50505050565b6060610d0b82611044565b600082815261012d602052604081208054610d259061248d565b80601f0160208091040260200160405190810160405280929190818152602001828054610d519061248d565b8015610d9e5780601f10610d7357610100808354040283529160200191610d9e565b820191906000526020600020905b815481529060010190602001808311610d8157829003601f168201915b505050505090506000610daf6115eb565b90508051600003610dc1575092915050565b815115610df3578082604051602001610ddb9291906126f7565b60405160208183030381529060405292505050919050565b610dfc846115fb565b949350505050565b6000610e0e6113fb565b610e1783610ae0565b15610e755760405162461bcd60e51b815260206004820152602860248201527f546f6b656e436f6e74726163743a205573657220616c7265616479206861732060448201526730903a37b5b2b71760c11b6064820152608401610677565b6101608054906000610e86836126d0565b919050559050610e968382611662565b61054481836117ed565b610ea86113fb565b6001600160a01b038116610f0d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610677565b61082a81611497565b600054610100900460ff1615808015610f365750600054600160ff909116105b80610f505750303b158015610f50575060005460ff166001145b610fb35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610677565b6000805460ff191660011790558015610fd6576000805461ff0019166101001790555b610fde611881565b610fe66118b0565b610ff084846118d7565b610ff9826109dc565b8015610cfa576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150505050565b600081815260fd60205260409020546001600160a01b031661082a5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610677565b600081815260ff6020526040902080546001600160a01b0319166001600160a01b03841690811790915581906110d8826109f1565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061111b6113fb565b50600192915050565b826001600160a01b0316611137826109f1565b6001600160a01b03161461115d5760405162461bcd60e51b815260040161067790612726565b6001600160a01b0382166111bf5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610677565b826001600160a01b03166111d2826109f1565b6001600160a01b0316146111f85760405162461bcd60e51b815260040161067790612726565b600081815260ff6020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260fe855283862080546000190190559087168086528386208054600101905586865260fd90945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b61082a6113fb565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156112c35761071883611908565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561131d575060408051601f3d908101601f1916820190925261131a9181019061276b565b60015b6113805760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608401610677565b60008051602061289883398151915281146113ef5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608401610677565b506107188383836119a4565b6033546001600160a01b03163314610b785760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610677565b61145e816119c9565b600081815261012d6020526040902080546114789061248d565b15905061082a57600081815261012d6020526040812061082a91611eac565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b03160361154a5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610677565b6001600160a01b0383811660008181526101006020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6115c3848484611124565b6115cf84848484611a5e565b610cfa5760405162461bcd60e51b815260040161067790612784565b606061015f80546105599061248d565b606061160682611044565b60006116106115eb565b90506000815111611630576040518060200160405280600081525061165b565b8061163a84611b5f565b60405160200161164b9291906126f7565b6040516020818303038152906040525b9392505050565b6001600160a01b0382166116b85760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610677565b600081815260fd60205260409020546001600160a01b03161561171d5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610677565b600081815260fd60205260409020546001600160a01b0316156117825760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610677565b6001600160a01b038216600081815260fe602090815260408083208054600101905584835260fd90915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600082815260fd60205260409020546001600160a01b03166118685760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b6064820152608401610677565b600082815261012d6020526040902061071882826125fa565b600054610100900460ff166118a85760405162461bcd60e51b8152600401610677906127d6565b610b78611bf2565b600054610100900460ff16610b785760405162461bcd60e51b8152600401610677906127d6565b600054610100900460ff166118fe5760405162461bcd60e51b8152600401610677906127d6565b6109258282611c22565b6001600160a01b0381163b6119755760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610677565b60008051602061289883398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6119ad83611c62565b6000825111806119ba5750805b1561071857610cfa8383611ca2565b60006119d4826109f1565b90506119df826109f1565b600083815260ff6020908152604080832080546001600160a01b03199081169091556001600160a01b03851680855260fe8452828520805460001901905587855260fd909352818420805490911690555192935084927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60006001600160a01b0384163b15611b5457604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611aa2903390899088908890600401612821565b6020604051808303816000875af1925050508015611add575060408051601f3d908101601f19168201909252611ada9181019061285e565b60015b611b3a573d808015611b0b576040519150601f19603f3d011682016040523d82523d6000602084013e611b10565b606091505b508051600003611b325760405162461bcd60e51b815260040161067790612784565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610dfc565b506001949350505050565b60606000611b6c83611d96565b600101905060008167ffffffffffffffff811115611b8c57611b8c612046565b6040519080825280601f01601f191660200182016040528015611bb6576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084611bc057509392505050565b600054610100900460ff16611c195760405162461bcd60e51b8152600401610677906127d6565b610b7833611497565b600054610100900460ff16611c495760405162461bcd60e51b8152600401610677906127d6565b60fb611c5583826125fa565b5060fc61071882826125fa565b611c6b81611908565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b611d0a5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610677565b600080846001600160a01b031684604051611d25919061287b565b600060405180830381855af49150503d8060008114611d60576040519150601f19603f3d011682016040523d82523d6000602084013e611d65565b606091505b5091509150611d8d82826040518060600160405280602781526020016128b860279139611e6e565b95945050505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310611dd55772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611e01576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310611e1f57662386f26fc10000830492506010015b6305f5e1008310611e37576305f5e100830492506008015b6127108310611e4b57612710830492506004015b60648310611e5d576064830492506002015b600a83106105445760010192915050565b60608315611e7d57508161165b565b61165b8383815115611e925781518083602001fd5b8060405162461bcd60e51b81526004016106779190611f7d565b508054611eb89061248d565b6000825580601f10611ec8575050565b601f01602090049060005260206000209081019061082a91905b80821115611ef65760008155600101611ee2565b5090565b6001600160e01b03198116811461082a57600080fd5b600060208284031215611f2257600080fd5b813561165b81611efa565b60005b83811015611f48578181015183820152602001611f30565b50506000910152565b60008151808452611f69816020860160208601611f2d565b601f01601f19169290920160200192915050565b60208152600061165b6020830184611f51565b600060208284031215611fa257600080fd5b5035919050565b80356001600160a01b0381168114611fc057600080fd5b919050565b60008060408385031215611fd857600080fd5b611fe183611fa9565b946020939093013593505050565b60008060006060848603121561200457600080fd5b61200d84611fa9565b925061201b60208501611fa9565b9150604084013590509250925092565b60006020828403121561203d57600080fd5b61165b82611fa9565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561208557612085612046565b604052919050565b600082601f83011261209e57600080fd5b813567ffffffffffffffff8111156120b8576120b8612046565b6120cb601f8201601f191660200161205c565b8181528460208386010111156120e057600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561211057600080fd5b61211983611fa9565b9150602083013567ffffffffffffffff81111561213557600080fd5b6121418582860161208d565b9150509250929050565b60006020828403121561215d57600080fd5b813567ffffffffffffffff81111561217457600080fd5b610dfc8482850161208d565b600067ffffffffffffffff82111561219a5761219a612046565b5060051b60200190565b600082601f8301126121b557600080fd5b813560206121ca6121c583612180565b61205c565b82815260059290921b840181019181810190868411156121e957600080fd5b8286015b8481101561222957803567ffffffffffffffff81111561220d5760008081fd5b61221b8986838b010161208d565b8452509183019183016121ed565b509695505050505050565b6000806040838503121561224757600080fd5b823567ffffffffffffffff8082111561225f57600080fd5b818501915085601f83011261227357600080fd5b813560206122836121c583612180565b82815260059290921b840181019181810190898411156122a257600080fd5b948201945b838610156122c7576122b886611fa9565b825294820194908201906122a7565b965050860135925050808211156122dd57600080fd5b50612141858286016121a4565b6020808252825182820181905260009190848201906040850190845b8181101561232257835183529284019291840191600101612306565b50909695505050505050565b6000806040838503121561234157600080fd5b61234a83611fa9565b91506020830135801515811461235f57600080fd5b809150509250929050565b6000806000806080858703121561238057600080fd5b61238985611fa9565b935061239760208601611fa9565b925060408501359150606085013567ffffffffffffffff8111156123ba57600080fd5b6123c68782880161208d565b91505092959194509250565b600080604083850312156123e557600080fd5b6123ee83611fa9565b91506123fc60208401611fa9565b90509250929050565b60008060006060848603121561241a57600080fd5b833567ffffffffffffffff8082111561243257600080fd5b61243e8783880161208d565b9450602086013591508082111561245457600080fd5b6124608783880161208d565b9350604086013591508082111561247657600080fd5b506124838682870161208d565b9150509250925092565b600181811c908216806124a157607f821691505b6020821081036124c157634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b601f82111561071857600081815260208120601f850160051c810160208610156125d35750805b601f850160051c820191505b818110156125f2578281556001016125df565b505050505050565b815167ffffffffffffffff81111561261457612614612046565b61262881612622845461248d565b846125ac565b602080601f83116001811461265d57600084156126455750858301515b600019600386901b1c1916600185901b1785556125f2565b600085815260208120601f198616915b8281101561268c5788860151825594840194600190910190840161266d565b50858210156126aa5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b6000600182016126f057634e487b7160e01b600052601160045260246000fd5b5060010190565b60008351612709818460208801611f2d565b83519083019061271d818360208801611f2d565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60006020828403121561277d57600080fd5b5051919050565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061285490830184611f51565b9695505050505050565b60006020828403121561287057600080fd5b815161165b81611efa565b6000825161288d818460208701611f2d565b919091019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212208d93fa9e44b727f215811bd745f450cd562ce8da8dfdc91b7da81d1bdae5701b64736f6c63430008140033";

type TokenContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenContract__factory extends ContractFactory {
  constructor(...args: TokenContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TokenContract";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenContract> {
    return super.deploy(overrides || {}) as Promise<TokenContract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TokenContract {
    return super.attach(address) as TokenContract;
  }
  override connect(signer: Signer): TokenContract__factory {
    return super.connect(signer) as TokenContract__factory;
  }
  static readonly contractName: "TokenContract";

  public readonly contractName: "TokenContract";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenContractInterface {
    return new utils.Interface(_abi) as TokenContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenContract {
    return new Contract(address, _abi, signerOrProvider) as TokenContract;
  }
}