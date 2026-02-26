let thrivingList = [];
let strugglingList = [];


let total = document.getElementById("total");
let thrivingCount = document.getElementById("thriving-count");
let strugglingCount = document.getElementById("struggling-count");
console.log(thrivingCount);

const allCard = document.getElementById("all-card");

function calculateCount(){
    total.innerText = allCard.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;
}
calculateCount();

const allFilterBtn = document.getElementById('all-filter-btn');
const thrivingFilterBtn = document.getElementById('thriving-filter-btn');
const strugglingFilterBtn = document.getElementById("struggling-filter-btn");

function toggleStyle(id) {
    allFilterBtn.classList.remove("bg-black", "text-white");
    thrivingFilterBtn.classList.remove("bg-black", "text-white");
    strugglingFilterBtn.classList.remove("bg-black", "text-white");

    // not needed
    // allFilterBtn.classList.add("bg-gray-300", "text-black");
    // thrivingFilterBtn.classList.add("bg-gray-300", "text-black");
    // strugglingFilterBtn.classList.add("bg-gray-300", "text-black");

    const selected = document.getElementById(id);
     currentStatus = id;
    selected.classList.add("bg-black", "text-white");
    selected.classList.remove("bg-gray-300", "text-black");

    // console.log("click" , id)
    if (id == "thriving-filter-btn") {
        allCard.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderThriving();
    } else if(id== "all-filter-btn"){
        allCard.classList.remove("hidden");
        filterSection.classList.add("hidden");
        
    } else if (id == "struggling-filter-btn") {
        allCard.classList.add("hidden");       
        filterSection.classList.remove("hidden");
        renderStruggling();
        }
}

const mainContainer = document.querySelector("main");
console.log(mainContainer);

mainContainer.addEventListener("click", function (event) {
    console.log(event.target.classList.contains("triving-btn"))

    const parentNode = event.target.parentNode.parentNode;
    const plantName = parentNode.querySelector(".plant-name").innerText;
    console.log(plantName);
    const light = parentNode.querySelector(".light").innerText;
    const water = parentNode.querySelector(".water").innerText;
    const notes = parentNode.querySelector(".Notes").innerText;
    const stats = parentNode.querySelector(".state").innerText;
    console.log(plantName, light, water, light, stats,notes);

    if (event.target.classList.contains("triving-btn")) {
     
    const cardInfo = {
        plantName,
        light,
        water,
        notes, 
        stats: "thrive"
    }

      
    parentNode.querySelector(".state").innerText= "thrive"
    const planExist = thrivingList.find(item => item.plantName == cardInfo.plantName);
        
    
    if (!planExist) {
        thrivingList.push(cardInfo)
        }
    
        strugglingList = strugglingList.filter(item => item.plantName != cardInfo.plantName);
        if (currentStatus == "struggling-filter-btn") {
        renderStruggling()
    }
        // console.log(thrivingList)
        calculateCount();
        }

    // struggling btn
    if (event.target.classList.contains("struggling-btn")) {
     
    const cardInfo = {
        plantName,
        light,
        water,
        notes, 
        stats: "Struggling"
    }

      
         
     parentNode.querySelector(".state").innerText= "Struggling"
    const planExist = strugglingList.find(item => item.plantName == cardInfo.plantName);
        
    
    if (!planExist) {
        strugglingList.push(cardInfo)
        }
        

        thrivingList = thrivingList.filter(item => item.plantName != cardInfo.plantName);
        // console.log(thrivingList)
        if (currentStatus == "thriving-filter-btn") {
            renderThriving()
        }
     calculateCount();
    
    }
})

const filterSection = document.getElementById("filtered-section");

function renderThriving() {
    filterSection.innerHTML = ``;
    
    for (let thrive of thrivingList) {
        let div = document.createElement("div");
        div.className = " flex justify-between border p-8";
        div.innerHTML = `
        <!--main part 01 -->
                <div class="w-4/5 space-y-6">
                    <!-- part 01 -->
                    <div >
                        <p class="plant-name text-3xl">${thrive.plantName}</p>
                        <p class="latin-name">Latin Name</p>
                    </div>
                    <!-- part 02 -->
                    <div class="flex gap-5">
                        <p class="light bg-gray-200 px-5">Bright Indicate</p>
                        <p class="water bg-gray-200 px-5">Weekly</p>
                    </div>
                    <!-- part 03 -->
                     <p class="state ">${thrive.stats}</p>
                     <p class="Notes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, sed.</p>
                     <div class="flex gap-6">
                        <button class="triving-btn btn btn-outline btn-success">Thriving</button>
                        <button class="struggling-btn btn btn-outline btn-error">Struggling</button>
                     </div>
                </div>

                <!--main part 02 -->
                <div>
                    <button class="btn-delete btn btn-outline btn-warning">Delete</button>
                </div>`;
        
        filterSection.appendChild(div)
    }
}
function renderStruggling() {
    filterSection.innerHTML = ``
    
    for (let struggling of strugglingList) {
        let div = document.createElement("div");
        div.className = "flex justify-between border p-8";
        div.innerHTML = `
        <!--main part 01 -->
                <div class="w-4/5 space-y-6">
                    <!-- part 01 -->
                    <div >
                        <p class="plant-name text-3xl">${struggling.plantName}</p>
                        <p class="latin-name">Latin Name</p>
                    </div>
                    <!-- part 02 -->
                    <div class="flex gap-5">
                        <p class="light bg-gray-200 px-5">Bright Indicate</p>
                        <p class="water bg-gray-200 px-5">Weekly</p>
                    </div>
                    <!-- part 03 -->
                     <p class="state ">${struggling.stats}</p>
                     <p class="Notes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, sed.</p>
                     <div class="flex gap-6">
                        <button class="triving-btn btn btn-outline btn-success">Thriving</button>
                        <button class="struggling-btn btn btn-outline btn-error">Struggling</button>
                     </div>
                </div>

                <!--main part 02 -->
                <div>
                    <button class="btn-delete btn btn-outline btn-warning">Delete</button>
                </div>`;
        
        filterSection.appendChild(div)
    }
}