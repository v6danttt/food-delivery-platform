const http = require('http');

const PORT = process.env.PORT || 5001;

const restaurants = [
  { _id: '1', name: 'Pasta Palace', address: '123 Noodle St', rating: 4.5 },
  { _id: '2', name: 'Curry Corner', address: '456 Spice Ave', rating: 4.7 },
];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // simple routing
  if (method === 'POST' && url === '/api/auth/login') {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      try {
        const { email, password } = JSON.parse(body || '{}');
        if (email && password) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ token: 'mock-token-123' }));
        } else {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'missing credentials' }));
        }
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'invalid json' }));
      }
    });

    return;
  }

  if (method === 'GET' && url === '/api/restaurants') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(restaurants));
    return;
  }

  if (method === 'GET' && url.startsWith('/api/restaurants/')) {
    const id = url.split('/').pop();
    const r = restaurants.find((x) => x._id === id);
    if (r) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ...r, menu: [{ name: 'Dish A', price: 10 }, { name: 'Dish B', price: 12 }] }));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'not found' }));
    }
    return;
  }

  // fallback
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'not found' }));
});

server.listen(PORT, () => {
  console.log(`Mock API server listening on http://localhost:${PORT}`);
});
