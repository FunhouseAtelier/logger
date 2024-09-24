import logger from "./index.js";

const log = logger({ name: "@test.ts", level: 0 });

log.trace("testing log.trace()");
log.debug("testing log.debug()");
log.info("testing log.info()");
log.warn("testing log.warn()");
log.error("testing log.error()");
