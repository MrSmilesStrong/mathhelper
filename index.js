export default {
  async fetch(request) {
    const target = "https://mathhelp-e73.pages.dev/";

    const url = new URL(request.url);
    url.host = new URL(target).host;
    url.protocol = new URL(target).protocol;

    let response = await fetch(url.toString(), request);

    response = new Response(response.body, response);

    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "*");

    response.headers.set("Cross-Origin-Embedder-Policy", "require-corp");
    response.headers.set("Cross-Origin-Opener-Policy", "same-origin");

    response.headers.delete("Content-Security-Policy");
    response.headers.delete("X-Frame-Options");

    return response;
  }
}
