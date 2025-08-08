// const http = require('http')
// http.createServer().listen(3009)

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!\n');
//   });

// let caminho = './view/'
// switch(req.url){
//   case '/':
//       caminho += 'index.html';
//       res.statusCode = 200;
//       break;

  
//   case '/sobre':
//         caminho += 'sobre.html';
//         res.statusCode = 200;
//         break;

//   case '/nossaempresa':
//     res.statusCode = 301;
//     res.setHeader('Location', '/sobre');
//     break;

// default:
//     caminho += '404.html';
//     res.statusCode = 404;
//     break;
// }

// fs.readFile(caminho, (err, data)=>{
//   if(err){
//       console.log(err);
//       res.end();
//   }else{
//       //res.write
//       res.write(data);
//       res.end();
//   }
// });

// server.listen(3000, 'localhost', () => {
// console.log("ouvindo requisição na porta 3000");
// });