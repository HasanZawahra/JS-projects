var ii = document.getElementById("in");
var btn = document.getElementById("jj");
var main = document.getElementById("main");
const arr = [];

btn.addEventListener('click', () => {
    let f = ii.value;
    if (f.length) {
    var div = document.createElement("div");
    div.setAttribute("id", "t");
    var dd = document.createElement("input");
    dd.classList.add("content");
    dd.setAttribute("type", "text");
    dd.setAttribute("disabled", "true");
    dd.setAttribute("value", f);
    dd.innerHTML = f;
    
    const course = {
        name : f,
        isConfirmed : false
    }

    var b1 = document.createElement("button");
    var b2 = document.createElement("button");
    var b3 = document.createElement("button");
    b1.innerHTML = "Delete";
    b2.innerHTML = "Edit";
    b3.innerHTML = "Confirm";
    b1.classList.add("button1");
    b2.classList.add("button2");
    b3.classList.add("button3");

    b1.addEventListener('click', () =>{
      main.removeChild(div);
      arr[f] = null;
      console.log(arr);
    });

    var isOn = false;

    function toggle() {

        if (isOn) {
            b2.style.backgroundColor = "black";
            b2.style.color = "white";
            dd.disabled = false;
            b2.innerHTML = "OK";
        } else {
            b2.style.backgroundColor = "blue";
            b2.style.color = "white";
            dd.disabled = true;
            b2.innerHTML =" Edit";
            console.log(arr);
        }
        isOn = !isOn;
    }

    b2.addEventListener('click', toggle);

    b3.addEventListener('click', ()=>{
        div.removeChild(b1);
        div.removeChild(b2);
        div.removeChild(b3);
        course.isConfirmed =true;
        console.log(arr);
    });

    arr[f] = course;
    console.log(arr);
    div.appendChild(dd);
    div.appendChild(b1);
    div.appendChild(b2);
    div.appendChild(b3);  
    main.appendChild(document.createElement("br"));
    main.appendChild(div);
  }
});
