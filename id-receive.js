const prog_bar = document.getElementById("prog-bar");
const prog_status = document.getElementById("prog-status");
const canvas = document.getElementById("canvas");

const canvasContext = canvas.getContext("2d");

const sleep = function (s) {
    return new Promise(resolve => setTimeout(resolve, s)) 
};

document.addEventListener("data-submit", (e) => {
    console.log(data)
})

let search_params = new URLSearchParams(document.location.search);

async function load(params) {
    let bar_1 = 30 - Math.random() * 10
    let bar_2 = 55 - Math.random() * 5
    let bar_3 = 85 - Math.random() * 10

    while (Number(prog_bar.value) < 100) {
        let val = Number(prog_bar.value);

        switch (true) {
            case val < bar_1:
                prog_status.innerText = "Compiling...";
                break;
            
            case bar_1 < val && val < bar_2:
                prog_status.innerText = "Sending...";
                break;

            case bar_2 < val && val < bar_3:
                prog_status.innerText = "Awaiting response...";
                break;

            case bar_3 < val:
                prog_status.innerText = "Generating id...";
                break;
        }

        prog_bar.value += Math.random() * 3

        await sleep(Math.random() * 1000)
    };

    await sleep(2)

    prog_status.innerText = "Done!";

    await sleep(2)

    draw_id()
}

function draw_id () {
    // var gradient_1 = canvasContext.createLinearGradient(0, 0, 0, 400);
    // gradient_1.addColorStop(0, "#00000000");
    // gradient_1.addColorStop(1, "#00000050")

    // canvasContext.fillStyle = gradient_1;
    // canvasContext.fillRect(7.5, 10, 800, 400);

    canvas.style.display = "block";
    prog_bar.style.display = "none";
    prog_status.style.display = "none";

    var gradient_2 = canvasContext.createLinearGradient(0, 0, 0, 400);
    gradient_2.addColorStop(0, "#EEE");
    gradient_2.addColorStop(1, "#DDD")

    canvasContext.fillStyle = gradient_2;

    canvasContext.filter = "drop-shadow(0 2px 3px #00000083)";
    canvasContext.fillRect(10, 10, 700, 250);

    canvasContext.filter = "none";
    canvasContext.fillStyle = "#404040";
    canvasContext.font = "30px Serif";

    canvasContext.fillText(`Username: ${search_params.get("us-n")}`, 250, 50)
    canvasContext.fillText(`Join date: ${search_params.get("jn-d").replace("T", "   ")}`, 250, 100)
    
    let aff_est = search_params.get("af-e");

    if (aff_est == "") {
        canvasContext.fillText(`Affiliated est. : N/A`, 250, 150)
    } else {
        canvasContext.fillText(`Affiliated est. : ${search_params.get("af-e")}`, 250, 150)
    };

    canvasContext.fillStyle = "#F00";
    canvasContext.font = "35px Serif";
    canvasContext.fillText("TRASHISTAN OFFICIAL ID", 250, 235)

    let img = new Image();

    img.src = search_params.get("pf-i");
    img.onload = function () {

        canvasContext.fillStyle = "#404040";
        canvasContext.fillRect(28, 28, 209, 209);

        canvasContext.drawImage(img, 30, 30, 205, 205)
    }


}

load()