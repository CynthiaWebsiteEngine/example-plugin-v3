import type {
  CynthiaPlugin,
  CynthiaApiPoints,
} from "@cynthiaweb/plugin-api/main";

const d: CynthiaPlugin = {
  onLoad: (Cynthia) => {
    Cynthia.console.log("Hi! You installed example-plugin.");
    console.log("Hi! You installed example-plugin.");
    return;
  },
  modifyRequest: (req, Cynthia: CynthiaApiPoints) => {
    req.get("/a*", () => {
      Cynthia.console.info("example-plugin just took a request!");
      return "Ooh, I sent this from my example-plugin!";
    });
  },
  modifyResponseHTMLBodyFragment: (htmlin, _, Cynthia) => {
    Cynthia.console.log("This is a log message from my plugin!");
    return (
      htmlin +
      "<p>My plugin adds this little paragraph at the bottom of each page!</p>"
    );
  },
  onClearInterval: (Cynthia) => {
    Cynthia.console.log("This interval is triggered around every 5 minutes!");
  },
};
// Exporting the CynthiaPlugin as a module. That way CynthiaPluginLoader can read it.
module.exports = d;
