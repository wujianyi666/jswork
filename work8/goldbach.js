function goldbach(){
    var value = document.getElementById('odd').value
    if(value%2!==0){
       alert("请输入大于2的偶数")
    }
    let goldbach = document.getElementById('goldbach')
        var arr = []
        var a = 0;
    for (var b=2;b<=value;b++ ){
                a = 0
        for(var c=2;c<b;c++){
            if(b%c==0){
                a++
            }
        }
        if(a==0){
            arr.push(b)
        }
    }
    var str = ''
    for (let b=0;b<(arr.length)/2;b++){
        for (let c=0;c<arr.length;c++){
            if((arr[b]+arr[c])==Number(value )){
                str +='<div>'+value+"可以拆分为两个质数"+arr[b]+"与"+arr[c]+"的和"+'</div>'
            }
        }
    }
    goldbach.innerHTML = str
}