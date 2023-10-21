const server = Bun.serve({
  port: Bun.env.PORT, // Or use process.env
  development: true,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === '/') {
      return new Response('Bun');
    }
    throw new Error('woops!');
  },
  error(error) {
    return new Response(`<pre>${error}\n${error.stack}</pre>`, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  },
});

console.log(`Listening on http://localhost:${server.port}`);
