function myFunction() {
    var paragraph = document.getElementById("demo");
    var a = document.getElementById('inputName').value;
    if (a == ''){
        return false;
    }else{
        for (var i =0; i<=0; i++) {
            var li = document.createElement('li');
            li.innerHTML = a + "<button id='demo1' class='btn btn-lg btn-danger' style='margin: 10px 10px;font-size: 16px' onclick='remove(this)'>REMOVE LINE</button>";
            //li.onclick = function (){
            //    this.parentNode.removeChild(this)
            //};
            paragraph. appendChild(li);
            document.getElementById('inputName').value = '';
        }
    }
}
function remove(link) {
    link.parentNode.parentNode.removeChild(link.parentNode);
}

