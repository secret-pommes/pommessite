import styles from "./page.module.css";

export default function Home() {
  let version = "2.0-alpha";
  let apiversion = "1.5-prod";

  let nxproxystatus = "N/A";
  let backendStatus = "N/A";
  let xmppStatus = "N/A";
  let matchmakerStatus = "N/A";
  let xmppClients = 0;

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
                <a className={styles.nxproxydot}>&#x2022;</a>
                <a>NX-Proxy:</a>
                <br></br>
                <a className={styles.nxproxystatus}>{nxproxystatus}</a>
              </p>
            </div>

            <br />
            <div className={styles.lawinserver}>
              <div className={styles.backend}>
                <p style={{ lineHeight: "0.8" }}>
                  <a className={styles.backenddot}>&#x2022;</a>
                  <a>Backend:</a>
                  <br></br>
                  <a className={styles.backendStatus}>{backendStatus}</a>
                </p>
              </div>

              <br />
              <div className={styles.xmpp}>
                <p style={{ lineHeight: "0.8" }}>
                  <a className={styles.xmppdot}>&#x2022;</a>
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
                  <a className={styles.matchmakerdot}>&#x2022;</a>
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
            Mades by Secret1337 | Version {version} | API-Version: {apiversion}{" "}
            | Next.js v13.4
          </a>
        </div>
      </footer>
    </main>
  );
}
