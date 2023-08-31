enum LoggerType {
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
  TRACE = "trace",
  DEBUG = "debug",
}
const logger = (() => {
  const isDevelopment = process.env.NODE_ENV !== "production";

  const print = (type: LoggerType, ...messages: any) => {
    if (isDevelopment) {
      switch (type) {
        case "info":
          console.info(
            "%c Custom Log:",
            "background: blue; color: white;",
            ...messages
          );
          break;
        case "warn":
          console.warn(
            "%c Custom Log:",
            "background: orange; color: white;",
            ...messages
          );
          break;
        case "error":
          console.error(
            "%c Custom Log:",
            "background: red; color: white;",
            ...messages
          );
          break;
        case "trace":
          console.trace(
            "%c Custom Log:",
            "background: grey; color: black;",
            ...messages
          );
          break;
        case "debug":
        default:
          console.log(
            "%c Custom Log:",
            "background: green; color: white;",
            ...messages
          );
      }
    }
  };

  return {
    debug: print.bind(null, LoggerType.DEBUG),
    info: print.bind(null, LoggerType.INFO),
    warn: print.bind(null, LoggerType.WARN),
    error: print.bind(null, LoggerType.ERROR),
    trace: print.bind(null, LoggerType.TRACE),
  };
})();

export default logger;
