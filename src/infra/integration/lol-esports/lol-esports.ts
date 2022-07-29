import { Http } from '../http';
import {
  GetVodListResponse,
  GetWindowDataParams,
  GetWindowDataResult,
} from './lol-esports.types';

export class LolEsportsHttpIntegration extends Http {
  async getWindowData(
    data: GetWindowDataParams
  ): Promise<GetWindowDataResult | null> {
    const { gameId, startingTime } = data;
    const result = await this.instance.get<GetWindowDataResult>(
      `https://feed.lolesports.com/livestats/v1/window/${gameId}?startingTime=${startingTime}`
    );

    if (this.isNoContentStatus(result)) {
      return null;
    }

    return result.data;
  }

  async getVodList(tournamentId: string): Promise<GetVodListResponse | null> {
    const result = await this.instance.get<GetVodListResponse>(
      `https://esports-api.lolesports.com/persisted/gw/getVods?hl=pt-BR&tournamentId=${tournamentId}`,
      {
        headers: {
          'x-api-key': '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z',
        },
      }
    );

    if (this.isNoContentStatus(result)) {
      return null;
    }

    return result.data;
  }
}
