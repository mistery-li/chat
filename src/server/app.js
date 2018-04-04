const env = process.env.NODE_ENV;

const mongoose = require('mongoose');
const promise = require('bluebird');
const path = require('path');
const fs = require('fs');
const koa = require('koa');
const send = require('koa-send');

const app = new koa();

const server = require('http').Server(app.callback());
const io = require('socket.io')(server);

io.set('heartbeat interval', 60000);
io.set('heartbeat timeout', 5000);

const router = require('./route/index');

mongoose.Promise = global.Promise;

mongoose.connect(env !== 'test' ? config.database : config.testDatabase, err => {
  if (err) {
    console.log('connect database error ->>', err);
    process.exit(1);
  }
  if (env === 'test') {
    mongoose.connection.db.dropDatabase();
  }
  console.log('connect database success');
  require('./model/auth').remove({}, () => {
    console.log('remove all old auth');
  });
  const Group = require('./model/group');

  Group.find({ }, (findErr, groups) => {
    if (groups.length === 0) {
      const defaultGroup = new Group({
        name: 'liii',
        announcement: '欢迎来到吹水聊天室',
        isDefault: true,
      });
      defaultGroup.save((saveErr) => {
        if (saveErr) {
          console.log('save default group get err ->> ', saveErr);
        }
        console.log('create default group success');
      });
    }
    if (findErr) {
      console.log('find defaul group get error ->>', findErr);
    }
  });
});

fs.readdir(`${__dirname}/route`, (err, result) => {
  for (const file of result) {
    if (file !== 'index.js') {
      const routers = require('./route${file}');
      for (const routePath in routers) {
        if (Object.hasOwnProperty.call(routers, routePath)) {
          router[routePath] = promise.coroutine(routers[routePath]);
        }
      }
    }
  }
});

if (env !== 'test') {
  app.use(require('koa-logger')());
}

app.use(function* (next) {
  if (this.path.match(/\./) === null) {
    yield send(
      this,
      'index.html',
      {
        root: path.join(__dirname, '../../public'),
        maxage: 1000 * 60 * 60 * 24,
        gzip: true,
      }
    );
  } else {
    yield next;
  }
});

app.use(require('koa-static')(
  path.join(__dirname, '../../public'), {
    maxAge: 1000 * 60 * 60 * 24,
    gzip: true,
  }
));

app.use(function* (next) {
  try {
    yield next;
  }
  catch (err) {
    const message = err.message;
    console.log('error ->>', message);
  }
});

io.on('connection', socket => {
  socket.on('message', (data, cb) => {
    router.handle(io, socket, data, cb);
  });

  socket.on('disconnect', () => {
    router.handle(io, socket, { metod: 'DELETE', path:'/auth', data: { }}, () => { });
  });
});

server.listen(env === 'production' ? config.port : config.devPort, () => {
  console.log(`start server at http://localhost:${env === 'production' ? confog.port : config.devPort}`);
});

server.on('error', err => {
  console.log('error ->>', err.message);
  process.exit(1);
});

module.exports = server;