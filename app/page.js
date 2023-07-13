import styles from "./page.module.css";

export default function Home() {

    // change from ["Online"] -> ({ status: "Online" });



  // Versions.
  let version = "v2.0-alpha";
  let apiversion = "v1.5-prod";

  async function getNxproxycheckStatus() {
    const res = await fetch(
      "https://pommesmitketchup.com/api/serverstatus/nxproxycheck"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  async function getBackendcheckStatus() {
    const res = await fetch(
      "https://pommesmitketchup.com/api/serverstatus/backendcheck"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  async function getXmppcheckStatus() {
    const res = await fetch(
      "https://pommesmitketchup.com/api/serverstatus/xmppcheck"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  async function getConnectedXmppClients() {
    const res = await fetch(
      "https://pommesmitketchup.com/api/serverstatus/connectedxmppclients"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  async function getMatchmakerStatus() {
    const res = await fetch(
      "https://pommesmitketchup.com/api/serverstatus/matchmakercheck"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

  // Styles.
  let nxproxyStyle;
  let backendStyle;
  let xmppStyle;
  let matchmakerStyle;

  // Status.
  const nxproxystatus = getNxproxycheckStatus();
  const backendStatus = getBackendcheckStatus();
  const xmppStatus = getXmppcheckStatus();
  const matchmakerStatus = getConnectedXmppClients();
  const xmppClients = getMatchmakerStatus();

  //console.log("nxproxystatus" + nxproxystatus);
  //console.log("backendStatus" + backendStatus);
  //console.log("xmppStatus" + xmppStatus);
  //console.log("matchmakerStatus" + matchmakerStatus);

  // NX-Proxy
  if (nxproxystatus == "Online") {
    nxproxyStyle = styles.online;
  } else if (nxproxystatus == "Offline") {
    nxproxyStyle = styles.offline;
  } else {
    nxproxyStyle = styles.nan;
  }
  // Backend (LawinServerV2)
  if (backendStatus == "Online") {
    backendStyle = styles.online;
  } else if (backendStatus == "Offline") {
    xmppStyle = styles.offline;
  } else {
    backendStyle = styles.nan;
  }
  // XMPP
  if (xmppStatus == "Online") {
    xmppStyle = styles.online;
  } else if (xmppStatus == "Offline") {
    xmppStyle = styles.offline;
  } else {
    xmppStyle = styles.nan;
  }
  // Matchmaker
  if (matchmakerStatus == "Online") {
    matchmakerStyle = styles.online;
  } else if (matchmakerStatus == "Offline") {
    matchmakerStyle = styles.offline;
  } else {
    matchmakerStyle = styles.nan;
  }

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <center>
          <a id="titledotstatus" className={styles.titledot}>
            &#x2022;{" "}
          </a>
          <a>LawinServerV2 | NX-Proxy Status</a>

          <div className={styles.services}>
            <div className={styles.nxproxy}>
              <p style={{ lineHeight: "0.8" }}>
                <a className={nxproxyStyle}>&#x2022;</a>
                <a>NX-Proxy:</a>
                <br></br>
                <a className={styles.nxproxystatus}>{nxproxystatus}</a>
              </p>
            </div>

            <br />
            <div className={styles.lawinserver}>
              <div className={styles.backend}>
                <p style={{ lineHeight: "0.8" }}>
                  <a className={backendStyle}>&#x2022;</a>
                  <a>Backend:</a>
                  <br></br>
                  <a className={styles.backendStatus}>{backendStatus}</a>
                </p>
              </div>

              <br />
              <div className={styles.xmpp}>
                <p style={{ lineHeight: "0.8" }}>
                  <a className={xmppStyle}>&#x2022;</a>
                  <a>XMPP:</a>
                  <br></br>
                  <a className={styles.xmppStatus}>{xmppStatus}</a>
                  <br></br>
                  <a className={styles.xmppClients}>
                    {xmppClients} online Clients.
                  </a>
                </p>
              </div>

              <br />
              <div className={styles.matchmaker}>
                <p style={{ lineHeight: "0.8" }}>
                  <a className={matchmakerStyle}>&#x2022;</a>
                  <a>Matchmaker:</a>
                  <br></br>
                  <a className={styles.matchmakerStatus}>{matchmakerStatus}</a>
                </p>
              </div>
            </div>
          </div>
        </center>
      </div>
      <footer className={styles.footer}>
        <div className={styles.versionfooter}>
          <a>
            Mades by Secret1337 | Site: {version} | API: {apiversion} | Next:
            v13.4
          </a>
        </div>
      </footer>
    </main>
  );
}
