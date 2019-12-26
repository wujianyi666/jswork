let ws
function connect(){
    let server = document.getElementById('server').value
    ws = new WebSocket(server);
    ws.onopen = function(){
        document.getElementById('conn').disabled='disable';
        document.getElementById('disconn').disabled='';
        let nickname=document.getElementById('nickname')
    }
}