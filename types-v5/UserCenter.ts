/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace IUserCenter {
  export type PlayerStatisticsStruct = {
    wins: PromiseOrValue<BigNumberish>;
    joined: PromiseOrValue<BigNumberish>;
  };

  export type PlayerStatisticsStructOutput = [BigNumber, BigNumber] & {
    wins: BigNumber;
    joined: BigNumber;
  };
}

export interface UserCenterInterface extends utils.Interface {
  functions: {
    "_seasonLogs(uint256,address)": FunctionFragment;
    "userRecords(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "_seasonLogs" | "userRecords"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_seasonLogs",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "userRecords",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "_seasonLogs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userRecords",
    data: BytesLike
  ): Result;

  events: {};
}

export interface UserCenter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UserCenterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _seasonLogs(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { wins: BigNumber; joined: BigNumber }>;

    userRecords(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        IUserCenter.PlayerStatisticsStructOutput,
        IUserCenter.PlayerStatisticsStructOutput
      ] & {
        current: IUserCenter.PlayerStatisticsStructOutput;
        overall: IUserCenter.PlayerStatisticsStructOutput;
      }
    >;
  };

  _seasonLogs(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { wins: BigNumber; joined: BigNumber }>;

  userRecords(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [
      IUserCenter.PlayerStatisticsStructOutput,
      IUserCenter.PlayerStatisticsStructOutput
    ] & {
      current: IUserCenter.PlayerStatisticsStructOutput;
      overall: IUserCenter.PlayerStatisticsStructOutput;
    }
  >;

  callStatic: {
    _seasonLogs(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { wins: BigNumber; joined: BigNumber }>;

    userRecords(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        IUserCenter.PlayerStatisticsStructOutput,
        IUserCenter.PlayerStatisticsStructOutput
      ] & {
        current: IUserCenter.PlayerStatisticsStructOutput;
        overall: IUserCenter.PlayerStatisticsStructOutput;
      }
    >;
  };

  filters: {};

  estimateGas: {
    _seasonLogs(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userRecords(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _seasonLogs(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userRecords(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
