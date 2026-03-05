const heartContainer=document.getElementById("heartContainer");

/* TIM RƠI */
setInterval(()=>{
    let heart=document.createElement("div");
    heart.className="falling-heart";
    heart.innerHTML="💖";
    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=(Math.random()*15+20)+"px";
    heart.style.animationDuration=(Math.random()*2+3)+"s";
    heartContainer.appendChild(heart);
    setTimeout(()=>heart.remove(), 5000);
},250);

function showScreen(id){
    document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
    const target = document.getElementById(id);
    target.classList.add("active");
    const input = target.querySelector("input");
    if(input) {
        input.value = "";
        input.focus();
    }
}

document.getElementById("openEnvelope").onclick=()=>showScreen("screen2");

/* TẠO 21 Ô ẢNH */
let grid=document.getElementById("photoGrid");
for(let i=1;i<=21;i++){
    let div=document.createElement("div");
    div.className="photo";
    div.innerHTML=`<img src="pictures/anh_${i}.jpg" id="img-${i}">`;
    grid.appendChild(div);
}

function updateDots(containerId, val, total) {
    let container = document.getElementById(containerId);
    container.innerHTML = "";
    for (let i = 0; i < total; i++) {
        let d = document.createElement("span");
        d.className = "dot" + (i < val.length ? " filled" : "");
        container.appendChild(d);
    }
}
updateDots("dots2", "", 8);
updateDots("dots3", "", 6);

/* LẬT ẢNH VÀ CHỜ 18 GIÂY */
function revealImages() {
    let i = 1;
    const interval = setInterval(() => {
        if (i <= 21) {
            let img = document.getElementById(`img-${i}`);
            if(img) {
                img.style.display = "block";
                setTimeout(() => { img.style.opacity = "1"; }, 10);
            }
            i++;
        } else {
            clearInterval(interval);
            // TỰ ĐỘNG CHUYỂN CẢNH SAU 18 GIÂY
            setTimeout(() => {
                showScreen('screen3');
            }, 18000); 
        }
    }, 150);
}

/* KIỂM TRA MÃ */
function checkPass2(){
    let input=document.getElementById("pass2");
    updateDots("dots2", input.value, 8);
    if(input.value.length == 8){
        if(input.value === "19042007"){
            revealImages();
        } else {
            input.value=""; updateDots("dots2", "", 8);
            document.getElementById("error2").innerText="Nhập đủ ngày tháng năm cô gái xinh đẹp của anh xuất hiện đi .....";
        }
    }
}

function checkPass3(){
    let input=document.getElementById("pass3");
    updateDots("dots3", input.value, 6);
    if(input.value.length == 6){
        if(input.value === "162024"){
            showScreen("screen4");
        } else {
            input.value=""; updateDots("dots3", "", 6);
            document.getElementById("error3").innerText="Ngày mà đôi ta bên nhau là ngày nào ????";
        }
    }
}