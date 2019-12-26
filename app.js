const express = require('express')
const app = express()
const bodyParser = require("body-parser")

app.use(express.static('.'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/formBuilder', function (req, res) {
    console.log(req.body)
    res.send(req.body)
  })

  let ajaxData = []
  let count = 0
  app.post('/ajax', function (req, res){
      let sno = req.body.sno
      let name = req.body.name
      let content = req.body.content
  })

app.listen(8080, () => console.timeLog('node express 服务器已启动，监听端口：8080'))
const openDefaultBrowser  = function (url) {
    var exec = require('child_process').exec;
    switch (process.platform) {
        case "darwin":
            exec('open ' + url);
            break;
        case "win32":
            exec('start ' + url);
            break;
        default:
            exec('xdg-open', [url]);
    }
}
openDefaultBrowser('http://localhost:8080')