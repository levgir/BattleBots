const http = require('http')
const ws = require('ws')
const port = 7070
const {spawn} = require('child_process');

function forward() {spawn('python', ['./scripts/forward.py'])}
function reverse() {spawn('python', ['./scripts/reverse.py'])}
function left() {spawn('python', ['./scripts/left.py'])}
function right() {spawn('python', ['./scripts/right.py'])}
function stop() {spawn('python', ['./scripts/stop.py'])}
function weapon1(direction) {
  if(direction === 'down'){
    spawn('python', ['./scripts/weapon1-down.py'])}
  else{spawn('python', ['./scripts/weapon1-up.py'])}
  }

const wss = new ws.Server({noServer: true});

function accept(req, res) {
  // all incoming requests must be websockets
  if (!req.headers.upgrade || req.headers.upgrade.toLowerCase() != 'websocket') {
    res.end()
    return
  }

  // can be Connection: keep-alive, Upgrade
  if (!req.headers.connection.match(/\bupgrade\b/i)) {
    res.end()
    return
  }

  wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnect)
}

function onConnect(ws) {
  ws.on('message', function (message) {
    ws.send(message)
    console.log(message)
    switch(message) {
      case 'forward':
        forward()
        break
      case 'reverse':
        reverse()
        break
      case 'left':
        left()
        break
      case 'right':
        right()
        break
      case 'stop':
        stop()
        break
      case 'down-weapon1':
        weapon1('down')
        break
      case 'up-weapon1':
        weapon1('up')
        break
      default:
        // code block
    }
  });
}

if (!module.parent) {
  http.createServer(accept).listen(7070);
  console.log(`\nWebSocket server running on port ${port}\n`)
} else {
  exports.accept = accept
  console.log('WebSocket Server Failed')
}