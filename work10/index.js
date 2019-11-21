function monkey(){
    let total =document.getElementById("monkeytotal").value 
    let kick = document.getElementById("monkeykick").value
    total = parseInt(total) && Number(total)
    kick = parseInt(kick) && Number(kick)
    if(isNaN(total)|| isNaN(kick)){
        alert(请)
    }
}