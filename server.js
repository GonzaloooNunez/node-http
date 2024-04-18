const http = require("http");
const data = require("./data");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${data.title}</title>
      </head>
      <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
      }
  
      h1 {
        color: blue;
      }
  
      /* Agrega más estilos según sea necesario */
    </style>
      <body>
        <h1>${data.title}</h1>
        <h2>${data.subtitle}</h2>
        <p>${data.description}</p>
        <footer>
          <p>Ciudad: ${data.city}</p>
          <p>Año: ${data.year}</p>
        </footer>
      </body>
      </html>
    `;

  res.end(htmlContent);
});

server.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
