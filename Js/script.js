function buyTicket(){
    showElementId('ticket-section')
}


const a1 = document.getElementById('a1')
const a2 = document.getElementById('a2')
const a3 = document.getElementById('a3')
const a4 = document.getElementById('a4')
const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')
const b4 = document.getElementById('b4')
const seat_count = document.getElementById('seatCount')
const selectedSeat = document.getElementById('selected-seat');
const price_value = document.getElementById('total_price')

let seat = 8
let seatBook = 0;
const mainSeat = document.getElementById('mainSeat');
mainSeat.innerText = seat
seat_count.innerText = seatBook
let seatList = []

function allFunction(id, value){
    id.addEventListener('click', function(){
        const mainSeatNo = id.classList[id.classList.length - 1]
        
        if(mainSeatNo === "bg-green-600"){
            id.classList.remove("bg-green-600")
            seatBook = seatBook - 1
            seat = seat + 1
            mainSeat.innerText = seat
            seat_count.innerText = seatBook

            const indexToRemove = seatList.indexOf(val);
            if (indexToRemove !== -1) {
            seatList.splice(indexToRemove, 1);
      }
        }else{
            id.classList.add("bg-green-600")
            seatBook = seatBook + 1
            seat = seat - 1
            mainSeat.innerText = seat
            seat_count.innerText = seatBook
            seatList.push(value)
        }

    seat_count.innerText = seatList.length;
    selectedSeat.innerHTML = "";
    seatList.forEach((element, index) => {
      const node = document.createElement("div");
      node.innerHTML = `
    <div class="flex justify-between">
      <div class="text-xl text-gray-900">${element}</div>
      <div class="text-xl text-gray-400">$550</div>
    </div>
  `;

      selectedSeat.appendChild(node);

      // Add a space after each seat value, except for the last one
      if (index < seatList.length - 1) {
        const space = document.createElement("span");
        space.textContent = " ";
        space.style.whiteSpace = "pre"; // Preserve spaces
        selectedSeat.appendChild(space);
      }
    });

    const totalPrice = seatList.length * 550;
    price_value.innerText = totalPrice;  
            
        
        
    })
}


allFunction(a1, "A1")
allFunction(a2, "A2")
allFunction(a3, "A3")
allFunction(a4, "A4")
allFunction(b1, "B1")
allFunction(b2, "B2")
allFunction(b3, "B3")
allFunction(b4, "B4")

