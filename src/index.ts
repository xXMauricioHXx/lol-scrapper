import { LolEsportsHttpIntegration } from './infra/integration/lol-esports/lol-esports';

const tournamentId = '108211865716506571';
const integration = new LolEsportsHttpIntegration();

setImmediate(async () => {
  try {
    const result = await integration.getVodList(tournamentId);

    if (!result) {
      return;
    }

    const eventsOfWeekSix = result.data.schedule.events.filter(
      (event) => event.blockName === 'Semana 6'
    );

    const [firstEvent] = eventsOfWeekSix;

    console.log(firstEvent);
  } catch (err) {
    console.error(err);
    throw err;
  }
});
