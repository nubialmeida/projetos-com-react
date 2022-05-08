function writerMachine() {
    var content = [
        " We are the future",
        " Metaverse, the best version of yourself",
        " Come make a new future with us",
        " Now, you're in control",
    ];
    var text = document.getElementById("merchant");
    var cursor = document.getElementById("cursor");

    var writeSpeed = 50;
    var waitTime = 1000;
    var cont = 0;
    var phrase = 0;
    var color = "#aaa";

    setInterval(() => {
        color = color == "#aaa" ? "#1f1f1f" : "#aaa";
        cursor.style.backgroundColor = color;
    }, 500);

    function tapWriter() {
        if (cont < content[phrase].length) {
            text.textContent += content[phrase].charAt(cont);
            cont++;
            setTimeout(tapWriter, writeSpeed);
        } else {
            setTimeout(() => {
                text.textContent = "";
                cont = 0;
                phrase === content.length - 1 ? (phrase = 0) : phrase++;
                tapWriter();
            }, waitTime);
        }
    }
    tapWriter();
}

$(document).ready(() => {
    let video = document.querySelector(".demo");
    console.log(video);
    let source = $(".source");
    let counter = 1;

    video.addEventListener("ended", function (e) {
        console.log("tentei");
        if (!e) e = window.event;
        counter == 3 ? (counter = 1) : counter++;
        $(source).attr("src", `./videos/video${counter}.mp4`);
        video.load();
        video.play();
    });

    writerMachine();
});
