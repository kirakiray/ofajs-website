(async () => {
  async function getHash(str, algorithm = "SHA-256") {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest(algorithm, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  }

  // 注册 sw 服务
  const swText = await fetch("/sw.js")
    .then((e) => {
      if (e.status == 200) {
        return e.text();
      }

      return false;
    })
    .catch(() => false);

  if (swText) {
    const hsId = await getHash(swText);

    navigator.serviceWorker
      .register("/sw.js", {
        scope: "/",
      })
      .then((reg) => {
        if (localStorage._swid !== hsId) {
          reg.update();
          localStorage._swid = hsId;
        }

        setTimeout(() => {
          reg.update();
        }, 60 * 60 * 1000);
      })
      .catch((err) => {
        console.error(err);
      });
  }
})();
