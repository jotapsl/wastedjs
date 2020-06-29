// This should mirror client/src/constants.tsx
export const ServerEvents = {
  PLAYER_CONNECT: "player-connect",
  PLAYER_READY: "update-client-ready",
  UPDATE_BET: "bet-update",
  PLAYER_PLAY_UPDATE: "play-update",
  NEW_ROUND: "new-round",
  NEW_MATCH: "new-match",
  END_GAME: "end-game",
  GAME_START_NOTIFICATION: "game-start-notification",
  KICKED: "kicked",
  PLAYER_DISCONNECT: "player-disconnect",
};

export const ClientEvents = {
  LOGIN: "login",
  READY: "ready",
  BET: "player-bet",
  PLAY_CARD: "player-play-card",
  START: "start-game",
  REQUEST_CARDS: "request-cards",
  REQUEST_PLAYER_LIST: "request-playerlist",
  KICK: "kick-player",
  DISCONNECT: "disconnect",
};

export const GamePhaseEnum = {
  BET: "BET",
  PLAY: "PLAY",
  END: "END",
  END_MATCH: "END_MATCH",
  END_GAME: "END_GAME",
};
