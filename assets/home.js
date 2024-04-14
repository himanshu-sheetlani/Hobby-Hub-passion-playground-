setInterval(()=>{
    var now = new Date();
    var datetime = now.toLocaleString();
    document.getElementById("datetime").innerHTML = datetime;
  },1000)