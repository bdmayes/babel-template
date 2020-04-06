import log from "llog";
import { someFunction } from "lib/foo";

const index = () => {
  log.info("testing calling someFunction");
  const something = someFunction(9);
  log.info(`I got ${something} from someFunction`);
};

export default index;
