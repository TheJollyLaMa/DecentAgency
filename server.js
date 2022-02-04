//server listen
const app = require("./index");

if (process.env.NODE_ENV !== 'test') {
    app.listen(process.env.PORT, '127.0.0.1', () => {
        console.log(`Server is running on port: ${process.env.PORT}`);
    });
}else{
  app.listen(() => {
      console.log(`Test Server is running on default port: ` + server.address().port);
  });
}