import chalk from "chalk";
import loglevel from "loglevel";
import prefix from "loglevel-plugin-prefix";

const colors = {
  TRACE: chalk.magenta,
  DEBUG: chalk.cyan,
  INFO: chalk.blue,
  WARN: chalk.yellow,
  ERROR: chalk.red,
};

prefix.reg(loglevel);
prefix.apply(loglevel, {
  timestampFormatter(date) {
    return date.toISOString();
  },
  format(level, name, timestamp) {
    return `${chalk.gray(`[${timestamp}]`)} ${colors[level](level)}${
      ["INFO", "WARN"].includes(level) ? " " : ""
    } ${chalk.green(`${name}\n`)}`;
  },
});

const logger = (options) => {
  const { name, level } = typeof options === "object" ? options : {};
  const log = name ? loglevel.getLogger(name) : loglevel;
  if (level || level === 0) log.setLevel(level);

  return log;
};
export default logger;
