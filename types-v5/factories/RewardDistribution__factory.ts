/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  RewardDistribution,
  RewardDistributionInterface,
} from "../RewardDistribution";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newReward",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRewardStartId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldReward",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldRewardDistributed",
        type: "uint256",
      },
    ],
    name: "NewReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "reward",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "RewardDistributed",
    type: "event",
  },
];

export class RewardDistribution__factory {
  static readonly abi = _abi;
  static createInterface(): RewardDistributionInterface {
    return new utils.Interface(_abi) as RewardDistributionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardDistribution {
    return new Contract(address, _abi, signerOrProvider) as RewardDistribution;
  }
}
