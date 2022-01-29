function opennewpage() {
    var win = window.open('child.html', "", "width = 500px ,height = 500px ");
}
var d = document.getElementById("mydiv");
var s = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only";
var arr = s.split("");
var i = 0;

function typing() {
    window.setInterval(
        () => {
            if (i < arr.length) {
                d.innerHTML += arr[i++];
            }
        }, 100);

}