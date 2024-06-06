const http = require('http');

const server = http.createServer((req: any, res:any) => {
  if(req.method === "GET"){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(`
      <h1>Send your name</h1>

      <form method="post" action="/">
        <input type="text" name="name">
        <button type="submit">Send</button>
      </form>
    `)
  }else if(req.method === "POST"){

    req.on('data', (data:any) => {
      console.log(Buffer.from(data).toString('utf-8').split("=")[1]);
      
    });

    req.end(`
      <h1>Hello, ${Buffer.from(req.body).toString('utf-8').split("=")[1]}</h1>`);
  }
});


server.listen(3000, () => {
  console.log('Server listening on port 3000');
});