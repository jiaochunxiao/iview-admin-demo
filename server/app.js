const Koa = require('koa');
const app = new Koa();
const cors = require('koa-cors');
const fs = require('fs');
const Router = require('koa-router');

app.use(cors());
var router = new Router();
router
.get('/api/login', function (ctx, next) {
  ctx.response.type = 'json';
  ctx.response.body = fs.createReadStream('./data/user.json')
})

app.use(router.routes())
app.listen(3000)
