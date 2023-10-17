const server = Bun.serve({
  port: Bun.env.PORT, // Or use process.env
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === '/') {
      return new Response('Bun');
    }
    return new Response('404');
  },
});

console.log(`Listening on http://localhost:${server.port}`);
