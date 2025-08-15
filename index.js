

setInterval(() => {
    let now = new Date(); 
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let ampm = "AM";
    if (h >= 12) {
        ampm = "PM";
        h = h % 12 || 12; 
    }

    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
    document.getElementById("ampm").innerText = ampm;
}, 1000);