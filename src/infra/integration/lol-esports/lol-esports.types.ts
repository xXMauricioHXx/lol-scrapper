export enum Role {
  TOP = 'top',
  JUNGLE = 'jungle',
  MID = 'mid',
  BOTTOM = 'bottom',
  SUPPORT = 'support',
}

export enum GameState {
  IN_GAME = 'in_game',
  FINISHED = 'finished',
}

export enum Dragon {
  INFERNAL = 'infernal',
  MOUNTAIN = 'mountain',
  CLOUD = 'cloud',
}

export type FrameParticipant = {
  participantId: number;
  totalGold: number;
  level: number;
  kills: number;
  deaths: number;
  assists: number;
  creepScore: number;
  currentHealth: number;
  maxHealth: number;
};

export type WindowFrameTeam = {
  totalGold: number;
  inhibitors: number;
  towers: number;
  barons: number;
  totalKills: number;
  dragons: Dragon[];
  participants: FrameParticipant[];
};

export type WindowFrame = {
  rfc460Timestamp: string;
  gameState: GameState;
  blueTeam: WindowFrameTeam;
  redTeam: WindowFrameTeam;
};

export type ParticipantMetadata = {
  participantId: number;
  esportsPlayerId: string;
  summonerName: string;
  championId: string;
  role: Role;
};

export type GetWindowDataParams = {
  gameId: string;
  startingTime: string;
};

export type GetWindowDataResult = {
  esportsGameId: string;
  esportsMatchId: string;
  gameMetadata: {
    patchVersion: string;
    blueTeamMetadata: {
      esportsTeamId: string;
      participantMetadata: ParticipantMetadata[];
    };
    redTeamMetadata: {
      esportsTeamId: string;
      participantMetadata: ParticipantMetadata[];
    };
  };
  frames: {};
};

export enum VodMatchStrategy {
  BEST_OF = 'bestOf',
}

export type VodMatchTeam = {
  name: string;
  code: string;
  image: string;
  result: {
    gameWins: number;
  };
};

export enum VodGameState {
  COMPLETED = 'completed',
}

export type VodScheduleEvent = {
  startTime: string;
  blockName: string;
  league: {
    name: string;
  };
  match: {
    id: string;
    type: string;
    teams: VodMatchTeam[];
    strategy: {
      type: VodMatchStrategy;
      count: number;
    };
  };
  games: [
    {
      id: string;
      state: VodGameState;
    }
  ];
};

export type GetVodListResponse = {
  data: {
    schedule: {
      events: VodScheduleEvent[];
    };
  };
};
