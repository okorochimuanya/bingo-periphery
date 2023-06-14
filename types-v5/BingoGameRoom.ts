/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace IBingoRoom {
  export type ParticipantStruct = {
    user: PromiseOrValue<string>;
    cardId: PromiseOrValue<BigNumberish>;
  };

  export type ParticipantStructOutput = [string, BigNumber] & {
    user: string;
    cardId: BigNumber;
  };

  export type GameRoundStruct = {
    round: PromiseOrValue<BigNumberish>;
    number: PromiseOrValue<BigNumberish>;
    timestamp: PromiseOrValue<BigNumberish>;
    player: PromiseOrValue<string>;
  };

  export type GameRoundStructOutput = [number, number, number, string] & {
    round: number;
    number: number;
    timestamp: number;
    player: string;
  };
}

export interface BingoGameRoomInterface extends utils.Interface {
  functions: {
    "MAX_GAME_DURATION()": FunctionFragment;
    "ROUND_DURATION()": FunctionFragment;
    "ROUND_TIMEOUT()": FunctionFragment;
    "bingo(uint256,uint8[][],bytes)": FunctionFragment;
    "expectedLines()": FunctionFragment;
    "fee()": FunctionFragment;
    "gameCard()": FunctionFragment;
    "getCurrentRound(uint256)": FunctionFragment;
    "getGameInfo(uint256)": FunctionFragment;
    "getLatestRound(uint256)": FunctionFragment;
    "getSelectedNumbers(uint256)": FunctionFragment;
    "selectAndBingo(uint256,uint8,uint8[][],bytes)": FunctionFragment;
    "selectNumber(uint256,uint8)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MAX_GAME_DURATION"
      | "ROUND_DURATION"
      | "ROUND_TIMEOUT"
      | "bingo"
      | "expectedLines"
      | "fee"
      | "gameCard"
      | "getCurrentRound"
      | "getGameInfo"
      | "getLatestRound"
      | "getSelectedNumbers"
      | "selectAndBingo"
      | "selectNumber"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MAX_GAME_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUND_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUND_TIMEOUT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bingo",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[][],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "expectedLines",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(functionFragment: "gameCard", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCurrentRound",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getGameInfo",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestRound",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSelectedNumbers",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "selectAndBingo",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[][],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selectNumber",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_GAME_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUND_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUND_TIMEOUT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bingo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "expectedLines",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gameCard", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGameInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLatestRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSelectedNumbers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selectAndBingo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selectNumber",
    data: BytesLike
  ): Result;

  events: {
    "Bingo(uint256,address,uint8[][])": EventFragment;
    "GameParticipated(uint256,address,uint256,uint8)": EventFragment;
    "GameStarted(uint256,address)": EventFragment;
    "NumberSelected(uint256,uint32,address,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Bingo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GameParticipated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GameStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NumberSelected"): EventFragment;
}

export interface BingoEventObject {
  gameId: BigNumber;
  player: string;
  playerCardNumbers: number[][];
}
export type BingoEvent = TypedEvent<
  [BigNumber, string, number[][]],
  BingoEventObject
>;

export type BingoEventFilter = TypedEventFilter<BingoEvent>;

export interface GameParticipatedEventObject {
  gameId: BigNumber;
  player: string;
  cardId: BigNumber;
  position: number;
}
export type GameParticipatedEvent = TypedEvent<
  [BigNumber, string, BigNumber, number],
  GameParticipatedEventObject
>;

export type GameParticipatedEventFilter =
  TypedEventFilter<GameParticipatedEvent>;

export interface GameStartedEventObject {
  gameId: BigNumber;
  cardContract: string;
}
export type GameStartedEvent = TypedEvent<
  [BigNumber, string],
  GameStartedEventObject
>;

export type GameStartedEventFilter = TypedEventFilter<GameStartedEvent>;

export interface NumberSelectedEventObject {
  gameId: BigNumber;
  round: number;
  player: string;
  number: number;
}
export type NumberSelectedEvent = TypedEvent<
  [BigNumber, number, string, number],
  NumberSelectedEventObject
>;

export type NumberSelectedEventFilter = TypedEventFilter<NumberSelectedEvent>;

export interface BingoGameRoom extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BingoGameRoomInterface;

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
    MAX_GAME_DURATION(overrides?: CallOverrides): Promise<[number]>;

    ROUND_DURATION(overrides?: CallOverrides): Promise<[number]>;

    ROUND_TIMEOUT(overrides?: CallOverrides): Promise<[number]>;

    bingo(
      gameId: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    expectedLines(overrides?: CallOverrides): Promise<[number]>;

    fee(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { value: BigNumber; deno: BigNumber }>;

    gameCard(overrides?: CallOverrides): Promise<[string]>;

    getCurrentRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, string, number] & {
        round: number;
        player: string;
        remain: number;
      }
    >;

    getGameInfo(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        number,
        string,
        IBingoRoom.ParticipantStructOutput[],
        IBingoRoom.GameRoundStructOutput[]
      ] & {
        startedAt: number;
        endedAt: number;
        winner: string;
        players: IBingoRoom.ParticipantStructOutput[];
        rounds: IBingoRoom.GameRoundStructOutput[];
      }
    >;

    getLatestRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IBingoRoom.GameRoundStructOutput] & {
        last: IBingoRoom.GameRoundStructOutput;
      }
    >;

    getSelectedNumbers(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number[]] & { numbers: number[] }>;

    selectAndBingo(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    selectNumber(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  MAX_GAME_DURATION(overrides?: CallOverrides): Promise<number>;

  ROUND_DURATION(overrides?: CallOverrides): Promise<number>;

  ROUND_TIMEOUT(overrides?: CallOverrides): Promise<number>;

  bingo(
    gameId: PromiseOrValue<BigNumberish>,
    cardNumbers: PromiseOrValue<BigNumberish>[][],
    signedLabel: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  expectedLines(overrides?: CallOverrides): Promise<number>;

  fee(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { value: BigNumber; deno: BigNumber }>;

  gameCard(overrides?: CallOverrides): Promise<string>;

  getCurrentRound(
    gameId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [number, string, number] & { round: number; player: string; remain: number }
  >;

  getGameInfo(
    gameId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      number,
      number,
      string,
      IBingoRoom.ParticipantStructOutput[],
      IBingoRoom.GameRoundStructOutput[]
    ] & {
      startedAt: number;
      endedAt: number;
      winner: string;
      players: IBingoRoom.ParticipantStructOutput[];
      rounds: IBingoRoom.GameRoundStructOutput[];
    }
  >;

  getLatestRound(
    gameId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IBingoRoom.GameRoundStructOutput>;

  getSelectedNumbers(
    gameId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number[]>;

  selectAndBingo(
    gameId: PromiseOrValue<BigNumberish>,
    number: PromiseOrValue<BigNumberish>,
    cardNumbers: PromiseOrValue<BigNumberish>[][],
    signedLabel: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  selectNumber(
    gameId: PromiseOrValue<BigNumberish>,
    number: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    MAX_GAME_DURATION(overrides?: CallOverrides): Promise<number>;

    ROUND_DURATION(overrides?: CallOverrides): Promise<number>;

    ROUND_TIMEOUT(overrides?: CallOverrides): Promise<number>;

    bingo(
      gameId: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    expectedLines(overrides?: CallOverrides): Promise<number>;

    fee(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { value: BigNumber; deno: BigNumber }>;

    gameCard(overrides?: CallOverrides): Promise<string>;

    getCurrentRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, string, number] & {
        round: number;
        player: string;
        remain: number;
      }
    >;

    getGameInfo(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        number,
        string,
        IBingoRoom.ParticipantStructOutput[],
        IBingoRoom.GameRoundStructOutput[]
      ] & {
        startedAt: number;
        endedAt: number;
        winner: string;
        players: IBingoRoom.ParticipantStructOutput[];
        rounds: IBingoRoom.GameRoundStructOutput[];
      }
    >;

    getLatestRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IBingoRoom.GameRoundStructOutput>;

    getSelectedNumbers(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number[]>;

    selectAndBingo(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    selectNumber(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Bingo(uint256,address,uint8[][])"(
      gameId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null,
      playerCardNumbers?: null
    ): BingoEventFilter;
    Bingo(
      gameId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null,
      playerCardNumbers?: null
    ): BingoEventFilter;

    "GameParticipated(uint256,address,uint256,uint8)"(
      gameId?: null,
      player?: null,
      cardId?: null,
      position?: null
    ): GameParticipatedEventFilter;
    GameParticipated(
      gameId?: null,
      player?: null,
      cardId?: null,
      position?: null
    ): GameParticipatedEventFilter;

    "GameStarted(uint256,address)"(
      gameId?: null,
      cardContract?: null
    ): GameStartedEventFilter;
    GameStarted(gameId?: null, cardContract?: null): GameStartedEventFilter;

    "NumberSelected(uint256,uint32,address,uint8)"(
      gameId?: PromiseOrValue<BigNumberish> | null,
      round?: null,
      player?: PromiseOrValue<string> | null,
      number?: null
    ): NumberSelectedEventFilter;
    NumberSelected(
      gameId?: PromiseOrValue<BigNumberish> | null,
      round?: null,
      player?: PromiseOrValue<string> | null,
      number?: null
    ): NumberSelectedEventFilter;
  };

  estimateGas: {
    MAX_GAME_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    ROUND_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    ROUND_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>;

    bingo(
      gameId: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    expectedLines(overrides?: CallOverrides): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    gameCard(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGameInfo(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLatestRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSelectedNumbers(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    selectAndBingo(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    selectNumber(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_GAME_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROUND_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROUND_TIMEOUT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bingo(
      gameId: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    expectedLines(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gameCard(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGameInfo(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLatestRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSelectedNumbers(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    selectAndBingo(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    selectNumber(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
