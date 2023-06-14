// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IBingoRoom {
    struct Participant {
        address user;
        uint256 cardId;
    }

    struct GameRound {
        uint32 round;
        uint8 number;
        uint32 timestamp;
        address player;
    }

    event GameStarted(
        uint256 indexed gameId,
        address cardContract
    );

    event GameParticipated(
        uint256 indexed gameId,
        address indexed player,
        uint256 indexed cardId,
        uint8 position
    );

    event NumberSelected(
        uint256 indexed gameId,
        uint32 round,
        address indexed player,
        uint8 number
    );

    event Bingo(
        uint256 indexed gameId,
        address indexed player,
        uint8[][] playerCardNumbers
    );

    function gameCard() external view returns (address);

    // function betToken() external view returns (address);

    // function betSize() external view returns (uint256);

    // function rewardToken() external view returns (address);

    function expectedLines() external view returns (uint8);

    function fee() external view returns (uint256 value, uint256 deno);

    function getGameInfo(
        uint256 gameId
    ) external view returns (
        uint32 startedAt,
        uint32 endedAt,
        address winner,
        Participant[] memory players,
        GameRound[] memory rounds
    );

    function getCurrentRound(uint256 gameId) external view returns (
        uint32 round,
        address player,
        uint32 remain
    );

    function getSelectedNumbers(
        uint256 gameId
    ) external view returns (uint8[] memory);

    function selectNumber(
        uint256 gameId,
        uint8 number
    ) external;

    function bingo(
        uint256 gameId,
        uint8[][] calldata cardNumbers,
        bytes calldata signedLabel
    ) external;

    function selectAndBingo(
        uint256 gameId,
        uint8 number,
        uint8[][] calldata cardNumbers,
        bytes calldata signedLabel
    ) external;
}
