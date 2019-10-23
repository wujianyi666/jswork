//冒泡排序
function bubbleSort(str) {
    //把字符串切分成数组
    let arr = str.split(',')
    //声明排序步骤记录数组sortLog数组的数据用于动画演示
    let sortLog = []
    //比较轮数，数组有多少个数字，就比较数组长度-1轮
    for(let i =0; i< arr.length - 1; i++) {
        //从第一个开始比较相邻的两个数值
        for(let j =0; j < arr.length - i - 1; j++) {
            //把比较前的数组状态和定位指针保存到sortLog中，为保存演示效果，加多两行
            
            //比较像相邻的两个元素，如果左面的大，那么就把大的交换到右边
            if (arr[j] > arr[j + 1]) {
                //使用解构赋值的方法，把两个元素交换位置
                [arr[j], arr[j + 1]]= [arr[j +1], arr[j]]
            }
        }
    }
    return arr
}
//插入排序
function insertSort(str) {
    let arr = str.split(',')
    for (let i = 1; i < arr.length; i++) {
        for (let j =i; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            }
        }
    }
    return arr
}