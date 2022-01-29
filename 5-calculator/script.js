var answer = document.getElementById('Answer')

function EnterNumber(t) {
    answer.value += t;
}
var op ;
function EnterOperator(t) {
    answer.value += t;
    op=t ;

}
var arrOp = ["+","-","/",".","*"];
function EnterEqual() {
    if (answer.value[answer.value.length - 1] != op )
    {
        var x = answer.value;
        var y = eval(x);
        answer.value = y;

    }
    else
    {
        alert("can not end the operation by =>  " + op ) ;
    }
   
}
function EnterClear() {
    answer.value = ""
}