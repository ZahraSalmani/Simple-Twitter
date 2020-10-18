
function addTags(){


    let div1 = document.createElement('div'),
    div2 = document.createElement('div'),
    msg = document.createElement("textarea"),
    sendBtn = document.createElement("BUTTON"),
    uploadBtn = document.createElement("BUTTON"),
    br = document.createElement('br'),
    img = document.createElement("input");

    document.body.style.padding = "50px";

    div1.style.display = "inline-block";
    div1.style.width = "300px";
    div1.style.float =" left";

    div2.style.display = "inline-block";
    div2.style.width = "300px";
    div2.style.float =" left";
    div2.style.wordBreak = 'break-word';

    msg.setAttribute("name", "message"); 
    msg.setAttribute("placeholder", "Enter your message");
    msg.style.padding = "10px" ;
    msg.style.width = '200px';
    msg.style.height = '100px';
    msg.style.marginBottom = "20px";
   
    sendBtn.innerHTML = "Send";
    sendBtn.style.padding = "12px";
    sendBtn.style.marginBottom = "70px";

    uploadBtn.innerHTML = "Send image";
    uploadBtn.style.padding = "12px";
    uploadBtn.style.margin = "20px 0 20px 0";

    img.setAttribute("type", "file"); 
    img.setAttribute("accept", "image/*"); 
    


    document.body.appendChild(div1);
    document.body.appendChild(div2);
    div1.appendChild(msg);
    div1.appendChild(br); 
    div1.appendChild(sendBtn); 
    div1.appendChild(img); 
    div1.appendChild(uploadBtn); 

    sendBtn.addEventListener("click", function() {
        let para = document.createElement("p"); 
        para.innerText = msg.value;
        div2.insertBefore(para, div2.firstChild);
        msg.value = "";
    });

    uploadBtn.addEventListener("click", function() {

        files = document.querySelector('input[type="file"]').files;

        if (files) {

            let image = document.createElement("img");
            image.style.width ="200px ";
            image.style.height ="100px ";

            image.src = URL.createObjectURL(files[0]); 
            div2.insertBefore(image, div2.firstChild);
            img.value = ""
        }
    });

}
