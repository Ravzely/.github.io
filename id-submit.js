const form = document.getElementById("id-app-form")
let url = new URL("file:///D:/Documents/teeheehee/id-claim.html");

// url.searchParams.append("us-n", form.querySelector("#us-n"));
// url.searchParams.append("jn-d", form.querySelector("#jn-d"));
// url.searchParams.append("af-e", form.querySelector("#af-e"));
// url.searchParams.append("pf-i", form.querySelector("#pf-i"));

// console.log("AA")

// window.location.assign(url);

let reader = new FileReader();
reader.addEventListener("load", function(e) {
    url.searchParams.append("pf-i", reader.result);
    window.location.assign(url);
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let img = form.querySelector("#pf-i");

    url.searchParams.append("us-n", form.querySelector("#us-n").value);
    url.searchParams.append("jn-d", form.querySelector("#jn-d").value);
    url.searchParams.append("af-e", form.querySelector("#af-e").value);

    let image = img.files[0];
    reader.readAsDataURL(image);

    image = null;
    img = null;
})

