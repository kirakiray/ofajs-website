let libPms;
let lang;
let libUrl;

self.addEventListener("message", async function (event) {
  // 获取主线程发送的数据
  const { searchText, lang: ln } = event.data;

  lang = ln || "cn";

  if (libUrl !== `/${lang}/libs.json`) {
    libUrl = `/${lang}/libs.json`;
    libPms = fetch(libUrl).then((e) => e.json());
  }

  // console.log(searchText);
  const data = await libPms;

  const results = search(searchText.toLowerCase(), data, "");

  // 发送消息回主线程
  self.postMessage({
    text: searchText,
    results,
  });
});

// 查找到符合条件的数据
function search(searchText, data, path) {
  const results = [];

  if (Array.isArray(data)) {
    let title = "";
    let heading = "";

    const matchs = [];

    // 正文数据
    data.forEach((e, index) => {
      if (!e) {
        return;
      }

      if (e.t === "h") {
        if (index === 0) {
          title = e.c;
        }
        heading = e.c;
      }

      const text = e.c;

      const tid = text.toLowerCase().indexOf(searchText);

      if (tid > -1) {
        let startId = tid - 10;
        if (startId < 0) {
          startId = 0;
        }

        let snippets = text.slice(startId, tid + 10);

        if (startId !== 0) {
          snippets = "..." + snippets;
        }

        if (tid + 10 < text.length) {
          snippets = snippets + "...";
        }

        matchs.push({
          heading,
          snippets,
          type: e.t,
          pId: index,
          path: `${lang}${path}.html`,
        });
      }
    });

    if (matchs.length) {
      results.push({
        title,
        matchs,
      });
    }
  } else {
    Object.keys(data).forEach((name) => {
      const target = data[name];

      const res = search(searchText, target, `${path}/${name}`);

      results.push(...res);
    });
  }

  return results;
}
