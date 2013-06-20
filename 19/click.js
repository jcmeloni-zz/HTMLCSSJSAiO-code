function mousestatus(e) {
    if (!e) e = window.event;
    btn = e.button;
    whichone = (btn < 2) ? "Left" : "Right";
    message=e.type + " : " + whichone + "\n";
    document.form1.info.value += message;
}
obj=document.getElementById("testlink");
obj.onmousedown = mousestatus;
obj.onmouseup = mousestatus;
obj.onclick = mousestatus;
obj.ondblclick = mousestatus;
