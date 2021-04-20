// const url = "https://eloquentjavascript.net/author";
// const types = ["text/plain",
//                "text/html",
//                "application/json",
//                "application/rainbows+unicorns"];

// async function showTypes() {
//   for (let type of types) {
//     let resp = await fetch(url, {headers: {accept: type}});
//     console.log(`${type}: ${await resp.text()}\n`);
//   }
// }

// showTypes();


document.querySelector("#button").addEventListener("click", () => {
    let code = document.querySelector("#code").value;
    let outputNode = document.querySelector("#output");
    try {
      let result = Function(code)();
      outputNode.innerText = String(result);
    } catch (e) {
      outputNode.innerText = "Error: " + e;
    }
  });