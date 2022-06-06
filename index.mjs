import flureenjs from "@fluree/flureenjs/flureenjs.js";

async function run() {
  //create the ledger
  const flureeServerUrl = "http://localhost:8090";
  const ledger = "test/chat";

  var flureeDbConn = await flureenjs.connect(flureeServerUrl);

  await flureenjs.transact(
    flureeDbConn,
    ledger,
    [{ _id: "_user", username: "jake" }],
    {}
  );
}

run();
