const Dog_Url = "https://dog.ceo/api/breeds/image/random";


const doggos = document.querySelector(".doggos");


function addnewdoggo() {
    const promise = fetch(Dog_Url);
    promise
        .then(function (response) {
            const processngPromise = response.json();
            console.log("here");
            return processngPromise;
        })

        .then(function (processedResponse) {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            doggos.appendChild(img);
        });
}

document.querySelector(".addbtn").addEventListener("click", addnewdoggo);
