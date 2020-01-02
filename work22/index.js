var jms = null
var timeHandle = null;
var xmlhttp=new XMLHttpRequest()
xmlhttp.onreadystatechange = function () {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        try{
            let ajaxData=JSON.parse(xmlhttp.responseText)
            result = ajaxData.map((val,index)=>{return index+1+":"+val.name+"--"+val.score})
            result = '排行榜\n'+result.join(String.fromCharCode(13))
            alert(result)
        }catch(e){
            console.log(e)
        }
    }
}
window.onload = function () {
    var radios = document.getElementsByName("level");
    for(var i = 0, j = radios.length; i < j; i++) {
        radios[i].onclick = function () {
            if (jms != null)
                if(jms.landMineCount > 0)
                    if(!confirm("确定结束当前游戏？"))
                        return false;
            var value = this.value;
            init(value, value*value / 5 - value, value * value / 5);
            document.getElementById("JMS_main").style.width = value * 40  + 180 + 60 + "px";
        }
    }
    init(10, 10);
};
function init(rowCount, colCount, minLandMineCount, maxLandMineCount) {
    var doc = document,
        landMineCountElement = doc.getElementById("landMineCount"),
        timeShow = doc.getElementById("costTime"),
        beginButton = doc.getElementById("begin");
    if(jms != null) {
        clearInterval(timeHandle);
        timeShow.innerHTML = 0;
        landMineCountElement.innerHTML = 0;
    }
    jms = JMS("landmine", rowCount, colCount, minLandMineCount, maxLandMineCount);
    jms.endCallBack = function (status) {
        clearInterval(timeHandle);
        document.getElementById("begin").disabled=""
        if(status){
            let name = document.getElementById('name').innerText
            let score = document.getElementById('costTime').innerText
            xmlhttp.open('post', 'http://139.9.81.203:8090/gameRecord/mine', true)
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlttp.send('name=' +name + '&score=' + score+"&order=1")
        }else{
            alert('扫雷失败！')
        }

    };
    jms.landMineCallBack = function (count) {
        landMineCountElement.innerHTML = count;
    };
    beginButton.onclick = function () {
        jms.play();
        landMineCountElement.innerHTML = jms.landMineCount;
        jms.begin();
        this.disabled="disable"
        timeHandle = setInterval(function () {
            timeShow.innerHTML = parseInt((new Date() - jms.beginTime) / 1000);
        }, 1000);
    };
}