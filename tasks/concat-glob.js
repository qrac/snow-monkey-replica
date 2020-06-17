var glob = require("glob").glob;
var concat = require("concat"),
  args = process.argv,
  dest,
  filesIdx =
    args.indexOf("-f") > args.indexOf("--files")
      ? args.indexOf("-f")
      : args.indexOf("--files"),
  outputIdx =
    args.indexOf("-o") > args.indexOf("--output")
      ? args.indexOf("-o")
      : args.indexOf("--output"),
  nosort = args.indexOf("--nosort") >= 0;

var path = args[filesIdx + 1];

var loop = new glob(path, { nosort: nosort }, function (error, files) {
  console.log(dest);
  concat(files, dest, function (error) {
    if (error) {
      console.error(error);
      process.exit(2);
    }
    console.log("files concatenated");
    process.exit(0);
  });
});

filesIdx < 0 && console.log("files parameter missing") && process.exit(1);

outputIdx < 0
  ? (outputIdx = args.length) && (dest = "all.")
  : (dest = args[args.length - 1]);
