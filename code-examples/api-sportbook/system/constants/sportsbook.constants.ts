import { DateTime } from "luxon";

export const SPORTSBOOK_GAME_SLUG = 'sportsbook';
export const SPORTSBOOK_GAME_CACHE = 'sportsbook:public:key';
export const SPORTSBOOK_TX_ID_PREFIX = () => `${SPORTSBOOK_GAME_SLUG}-${DateTime.utc().toMillis()}-`;