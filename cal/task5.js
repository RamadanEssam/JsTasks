var ans = document.getElementById("Answer");
var flag = 1;
function EnterNumber(val) {
  var s = (ans.value).toString();
  if (val.toString() != ".") {
    ans.value += val;
  }
  else {
    if (!s.includes(".") || flag == 0 && s[s.length - 1] != ".") { ans.value += val; flag = 1; }
  }
}
function EnterOperator(val) {
  var s = (ans.value).toString();
  if (s[s.length - 1] != "+" && s[s.length - 1] != "-" && s[s.length - 1] != "*" && s[s.length - 1] != "/") {
    if (ans.value != "") {
      ans.value += val;
      flag = 0;
    }
  }
}
function EnterClear() {
  var s = (ans.value).toString();;
  ans.value = s.slice(0, -1);
}
function EnterEqual() {
  ans.value = eval(ans.value);
}

function clearAll(){
  ans.value="";
}