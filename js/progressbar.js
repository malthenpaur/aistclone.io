$(function(){
    let canvas = $(".myCanvas");
    let percent = $(".percent").text().split("%");


    percent.pop();
    canvas.each(function(i){
        let posX = canvas[i].width/2;
        let posY = canvas[i].height/2;
        let progressbar = canvas[i].getContext("2d");
        let degreeInPerc = 360/100;
        let deg = 0;
        let perc = 0;
        let wholeInDeg = degreeInPerc*parseInt(percent[i]);
        
        
        let animateArc = setInterval(function(){
            deg+=1;
            perc = deg/degreeInPerc;
            progressbar.clearRect(0,0,canvas[i].width, canvas[i].height);
            $(".percent")[i].innerHTML=perc.toFixed() + "%"

            progressbar.beginPath();
            progressbar.lineWidth = "5";
            progressbar.strokeStyle = "#e6e7e8";
            progressbar.arc(posX, posY, 44, (Math.PI/180)*270, (Math.PI/180) * (270 + 360));
            progressbar.stroke();

            progressbar.beginPath();
            progressbar.lineWidth = "5";
            progressbar.strokeStyle = "#FFC500";
            progressbar.arc(posX, posY, 44, (Math.PI/180)*270, (Math.PI/180) * (270 + deg));
            progressbar.stroke();

            if(deg >= wholeInDeg){
                clearInterval(animateArc);
            }

        },5)
        
    })

    
});