export default {
  async fetch(request, env, ctx) {
    return new Response(
      `<!DOCTYPE html>
       <html>
       <head>
         <meta charset="UTF-8">
         <title>Eaglercraft iframe</title>
         <style>
           html, body, iframe {
             margin: 0;
             padding: 0;
             width: 100%;
             height: 100%;
             border: none;
             overflow: hidden;
           }
         </style>
       </head>
       <body>
         <iframe src="https://mathhelp-e73.pages.dev/" allowfullscreen></iframe>
       </body>
       </html>`,
      {
        headers: { "content-type": "text/html" },
      }
    );
  },
};
