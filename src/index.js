import log from 'llog';
import { someFunction } from 'lib/foo';

log.info('testing calling someFunction');
const something = someFunction();
log.info(`I got ${something} from someFunction`);
