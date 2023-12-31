/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  TokenContractDeployer,
  TokenContractDeployerInterface,
} from "../TokenContractDeployer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenImplementation_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "salt_",
        type: "bytes32",
      },
    ],
    name: "deployTokenContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "salt_",
        type: "bytes32",
      },
    ],
    name: "predictTokenAddress",
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
        name: "tokenImplementation_",
        type: "address",
      },
    ],
    name: "setTokenImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenContract",
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
] as const;

export class TokenContractDeployer__factory {
  static readonly abi = _abi;
  static createInterface(): TokenContractDeployerInterface {
    return new utils.Interface(_abi) as TokenContractDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenContractDeployer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TokenContractDeployer;
  }
}
