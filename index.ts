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
});

console.log(`Listening on http://localhost:${server.port}`);
