const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/', (req, res) => {
  const bgColor = process.env.BG_COLOR || '#4a90d9';
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>argo-test-app</title>
      <style>
        body {
          background-color: ${bgColor};
          color: #fff;
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          text-align: center;
          background: rgba(0,0,0,0.2);
          padding: 40px 60px;
          border-radius: 12px;
        }
        h1 { font-size: 2.5em; margin-bottom: 10px; }
        p { font-size: 1.2em; opacity: 0.9; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>argo-test-app</h1>
        <p>v1.0.0</p>
        <p>Hello from argo-test-app!</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`argo-test-app listening on port ${PORT}`);
});
