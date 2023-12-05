//for dropdown menu

const menu_btn = document.querySelector('.menubtn')
const menubtnICON = document.querySelector('.menu_btn input')
const dropmenu = document.querySelector('.dropdown_menu')

menu_btn.onclick = function(){
    dropmenu.classList.toggle('open')
    const isOpen = dropmenu.classList.contains('open')
    }
//booking page

let fullRealPrice;
let roomcount;
let lopts;

//constant values for price calculations

const singleRoomPrice = 25000;
const doubleRoomPrice = 35000;
const tripleRoomPrice = 40000;


const bookMainform = document.getElementById('bookmain')
const roomBookForm = document.getElementById('roombookmain')
const minValue = 0;
let fName = document.getElementById('fname')
let lName = document.getElementById('lname')
let emailTXT = document.getElementById('email')
let phone = document.getElementById('cno')
const loyaltyBtn = document.getElementById('lopts')
const addfavBtn = document.getElementById('addfavorite')
const callfavBtn = document.getElementById('openfavorite')

//room booking refs

let arrDate = document.getElementById('ad')
let depDate = document.getElementById('dd')
let aduNo = document.getElementById('aducount');
let  kidNo = document.getElementById('kidcount');
let  sinroomNo = document.getElementById('rscount');
let douroomNo = document.getElementById('rdcount');
let  triroomNo = document.getElementById('rtcount');
let promo = document.getElementById("procode");
let extraRequests = document.getElementsByName('extra');
let wifiCheck = document.getElementById('Wi-Fi');
let barCheck = document.getElementById('minibar');
let bedCheck = document.getElementById('bedding');
let roomBookButton = document.getElementById('roombook');
let roomTable = document.getElementById('currroom');


arrDate.min = new Date().toISOString().split("T")[0];
depDate.min = new Date().toISOString().split("T")[0];


//room table references

const fullNameRoomElement = document.getElementById('fullnameroom');
const adTableElement = document.getElementById('adtable');
const ddTableElement = document.getElementById('ddtable');
const daysTableElement = document.getElementById('daystable');
const roomSingleNoElement = document.getElementById('rsnotab');
const roomSingleTotalPriceElement = document.getElementById('rstot');
const roomDoubleNoElement = document.getElementById('rdnotab');
const roomDoubleTotalPriceElement = document.getElementById('rdtot');
const roomTripleNoElement = document.getElementById('rtnotab');
const roomTripleTotalPriceElement = document.getElementById('rttot');
const roomTotalPriceElement = document.getElementById('roomtottable');
const roomTotal1DayPriceElement = document.getElementById('roomtot1daytable');
const kidsNoElement = document.getElementById('kidnotab');
const adultsNoElement = document.getElementById('adunotab');
const kidsTotal1DayPriceElement = document.getElementById('kidtot1dayprice');
const kidsTotalPriceElement = document.getElementById('kidtotprice');
const roomFullPriceElement = document.getElementById('roomfullpricetab');
const wifiTable = document.getElementById('wifistattable')
const barTable = document.getElementById('ministattable')
const bedTable = document.getElementById('bedstattable')
const bedNo = document.getElementById('bednumber')
const bedTot = document.getElementById('bedtotprice')
const discTable = document.getElementById('discTable')




//adventure booking refs

let  kidadvNo = document.getElementById('kidadvcount')

let  aduadvNo = document.getElementById('aduadvcount')
let  hourNo = document.getElementById('hourcount')
let guideReq = document.getElementsByName('guideadv')
let aduguideCheck = document.getElementById('aduadvguide')
let kidguideCheck = document.getElementById('kidadvguide')
let ethnic = document.getElementsByName('ethdrop')
let adventureBookButton = document.getElementById('advbooksubmit')
let adventureTable = document.getElementById('curradv');

//adventure table refs 

const fullNameAdventureElement = document.getElementById('fullnameadv');
const nationalityElement = document.getElementById("ethtable");
const adultAdventureCountElement = document.getElementById("aduadvcounttable");
const adultAdventureCostElement = document.getElementById("aduadvpricingtable");
const adultAdvInitPrice = document.getElementById("aduadvpp")
const kidAdvInitPrice = document.getElementById("kidadvpp")
const childrenAdventureCountElement = document.getElementById("kidadvtablecount");
const childrenAdventureCostElement = document.getElementById("kidadvpricingtable");
const aduGuideStat = document.getElementById('aduguidancestat')
const kidGuideStat = document.getElementById('kidguidancestat')
const childrenGuidanceTotalCostElement = document.getElementById("totguidekid");
const adultGuidanceTotalCostElement = document.getElementById("totguideadu");
const totalpersprice = document.getElementById('totpersprice')
const hourNoElement = document.getElementById('hrtable')
const totalAdventureCostElement = document.getElementById("totadvpricing");

//overall table refs
const fullNameOvrElement = document.getElementById('fullnameovr');
const emailOvrElement = document.getElementById('emailovr');
const rsOvrCountElement = document.getElementById('rsovrcount');
const rdOvrCountElement = document.getElementById('rdovrcount');
const rtOvrCountElement = document.getElementById('rtovrcount');
const roomOvrCountElement = document.getElementById('roomovrcount');
const totalOvrPriceElement = document.getElementById('totalovrprice');


//plus minus buttons for both pages
const kidMin = document.getElementById('kidmin')
const kidPlus = document.getElementById('kidplus')
const kidadvMin = document.getElementById('kidadvmin')
const kidadvPlus = document.getElementById('kidadvplus')
const aduMin = document.getElementById('adumin')
const aduPlus = document.getElementById('aduplus')
const aduadvMin = document.getElementById('aduadvmin')
const aduadvPlus = document.getElementById('aduadvplus')
const sinMin = document.getElementById('rsmin')
const sinPlus = document.getElementById('rsplus')
const douMin = document.getElementById('rdminus')
const douPlus = document.getElementById('rdplus')
const triMin = document.getElementById('rtmin')
const triPlus = document.getElementById('rtplus')
const hourMin = document.getElementById('hourmin')
const hourPlus = document.getElementById('hourplus')


// button functions to close and open forms

document.getElementById('roomform').style.display = 'none';
document.getElementById('advform').style.display = 'none';
document.getElementById('roomview').onclick=function(){
  document.getElementById('roomform').style.display='';
  calculateRoomCost();
};

document.getElementById('roomclose').onclick=function(){
  document.getElementById('roomform').style.display='none';
  calculateRoomCost();
};



document.getElementById('advview').onclick=function(){
  document.getElementById('advform').style.display='';
  calculateAdventureCost();
};

document.getElementById('advclose').onclick=function(){
  document.getElementById('advform').style.display='none';
  calculateAdventureCost();
};

document.getElementById('ovrform').style.display = 'none';

document.getElementById('ovrview').onclick=function(){
  document.getElementById('ovrform').style.display='';

};

document.getElementById('ovrclose').onclick=function(){
  document.getElementById('ovrform').style.display='none';

};

//checkbox effects

const bc6Sections = document.querySelectorAll('.bc6');
const bc3Sections = document.querySelectorAll('.bc3');

for (const section of bc6Sections) {
  section.addEventListener('click',extraREQcolorchanger);
}
for (const section of bc3Sections) {
  section.addEventListener('click', extraREQcolorchanger);
}

function extraREQcolorchanger(event){
    const checkbox = event.target.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    event.target.style.backgroundColor = checkbox.checked ? '#fff' : '#230f44';
    event.target.style.color = checkbox.checked ? '#230f44' : '#fff'

    calculateRoomCost();
    calculateAdventureCost();
    guideCheck();
}

//all plus and minus buttons


aduMin.addEventListener('click', event => {
  event.preventDefault();
  aduNo.innerHTML = parseInt(aduNo.innerHTML) - 1;
  adultsNoElement.innerHTML = parseInt(adultsNoElement.innerHTML) - 1;
  if (aduNo.innerHTML < 0) {
      aduNo.innerHTML = 0;
      adultsNoElement.innerHTML = 0;
    } else {
      aduNo.innerHTML = aduNo.innerHTML;
      adultsNoElement.innerHTML = adultsNoElement.innerHTML;
    }
    calculateRoomCost();
});

aduPlus.addEventListener('click', event => {
  event.preventDefault();
  aduNo.innerHTML = parseInt(aduNo.innerHTML) + 1;
  adultsNoElement.innerHTML = parseInt(adultsNoElement.innerHTML) + 1;
  calculateRoomCost();
});

kidMin.addEventListener('click', event => {
    event.preventDefault();
    kidNo.innerHTML = parseInt(kidNo.innerHTML) - 1;
    kidsNoElement.innerHTML = parseInt(kidsNoElement.innerHTML) - 1;
    if (kidNo.innerHTML < 0) {
        kidNo.innerHTML = 0;
        kidsNoElement.innerHTML = 0;
      } else {
        kidNo.innerHTML = kidNo.innerHTML;
        kidsNoElement.innerHTML = kidsNoElement.innerHTML;
      }
      calculateRoomCost();
  });
  
kidPlus.addEventListener('click', event => {
    event.preventDefault();
    kidNo.innerHTML = parseInt(kidNo.innerHTML) + 1;
    kidsNoElement.innerHTML = parseInt(kidsNoElement.innerHTML) + 1;
    calculateRoomCost();
  });
  
sinMin.addEventListener('click', event => {
    event.preventDefault();
    sinroomNo.innerHTML = parseInt(sinroomNo.innerHTML) - 1;
    roomSingleNoElement.innerHTML = parseInt(roomSingleNoElement.innerHTML) - 1;
    if (sinroomNo.innerHTML < 0) {
        sinroomNo.innerHTML = 0;
      } else {
        sinroomNo.innerHTML = sinroomNo.innerHTML;
      }
    
      if (roomSingleNoElement.innerHTML < 0) {
        roomSingleNoElement.innerHTML = 0;
      } else {
        roomSingleNoElement.innerHTML = roomSingleNoElement.innerHTML;
      }
      calculateRoomCost();
  });
  
sinPlus.addEventListener('click', event => {
    event.preventDefault();
    sinroomNo.innerHTML = parseInt(sinroomNo.innerHTML) + 1;
    roomSingleNoElement.innerHTML = parseInt(roomSingleNoElement.innerHTML) + 1;
    calculateRoomCost();
  });

  douMin.addEventListener('click', event => {
    event.preventDefault();
    douroomNo.innerHTML = parseInt(douroomNo.innerHTML) - 1;
    roomDoubleNoElement.innerHTML = parseInt(roomDoubleNoElement.innerHTML) -1;
    if (douroomNo.innerHTML < 0) {
        douroomNo.innerHTML = 0;
        roomDoubleNoElement.innerHTML = 0;
      } else {
        douroomNo.innerHTML = douroomNo.innerHTML;
        roomDoubleNoElement.innerHTML = roomDoubleNoElement.innerHTML;
      }
      calculateRoomCost();
  });
  
douPlus.addEventListener('click', event => {
    event.preventDefault();
    douroomNo.innerHTML = parseInt(douroomNo.innerHTML) + 1;
    roomDoubleNoElement.innerHTML = parseInt(roomDoubleNoElement.innerHTML) +1;
    calculateRoomCost();
  });

  triMin.addEventListener('click', event => {
    event.preventDefault();
    triroomNo.innerHTML = parseInt(triroomNo.innerHTML) - 1;
    roomTripleNoElement.innerHTML = parseInt(roomTripleNoElement.innerHTML) - 1;
    if (triroomNo.innerHTML < 0) {
        triroomNo.innerHTML = 0;
        roomTripleNoElement.innerHTML = 0;
      } else {
        triroomNo.innerHTML = triroomNo.innerHTML;
        roomTripleNoElement.innerHTML = roomTripleNoElement.innerHTML;
      }
      calculateRoomCost();
  });
  
triPlus.addEventListener('click', event => {
    event.preventDefault();
    triroomNo.innerHTML = parseInt(triroomNo.innerHTML) + 1;
    roomTripleNoElement.innerHTML = parseInt(roomTripleNoElement.innerHTML) + 1;
    calculateRoomCost();
  });

  hourMin.addEventListener('click', event => {
    event.preventDefault();
    hourNo.innerHTML = parseInt(hourNo.innerHTML) - 1;
    hourNoElement.innerHTML = parseInt(hourNoElement.innerHTML) - 1;
    if (hourNo.innerHTML < 0) {
        hourNo.innerHTML = 0;
        hourNoElement.innerHTML = 0;
      } else {
        hourNo.innerHTML = hourNo.innerHTML;
        hourNoElement.innerHTML = hourNoElement.innerHTML;
      }

      calculateAdventureCost();
  });
  
  hourPlus.addEventListener('click', event => {
    event.preventDefault();
    hourNo.innerHTML = parseInt(hourNo.innerHTML) + 1;
    hourNoElement.innerHTML = parseInt(hourNoElement.innerHTML) + 1;
    calculateAdventureCost();
  });
  
  kidadvMin.addEventListener('click', event => {
    event.preventDefault();
    kidadvNo.innerHTML = parseInt(kidadvNo.innerHTML) - 1;
    childrenAdventureCountElement.innerHTML = parseInt(childrenAdventureCountElement.innerHTML) - 1;
    if (kidadvNo.innerHTML < 0) {
        kidadvNo.innerHTML = 0;
        childrenAdventureCountElement.innerHTML = 0;
      } else {
        kidadvNo.innerHTML = kidadvNo.innerHTML;
        childrenAdventureCountElement.innerHTML = childrenAdventureCountElement.innerHTML;
      }
      calculateAdventureCost();
  });
  
  kidadvPlus.addEventListener('click', event => {
    event.preventDefault();
    kidadvNo.innerHTML = parseInt(kidadvNo.innerHTML) + 1;
    childrenAdventureCountElement.innerHTML = parseInt(childrenAdventureCountElement.innerHTML) + 1;
    calculateAdventureCost();
  });
  
  aduadvMin.addEventListener('click', event => {
    event.preventDefault();
    aduadvNo.innerHTML = parseInt(aduadvNo.innerHTML) - 1;
    adultAdventureCountElement.innerHTML = parseInt(adultAdventureCountElement.innerHTML) - 1;
    if (aduadvNo.innerHTML < 0) {
        aduadvNo.innerHTML = 0;
        adultAdventureCountElement.innerHTML = 0;
      } else {
        aduadvNo.innerHTML = aduadvNo.innerHTML;
        adultAdventureCountElement.innerHTML = adultAdventureCountElement.innerHTML;
      }
      calculateAdventureCost();
  });
  
  aduadvPlus.addEventListener('click', event => {
    event.preventDefault();
    aduadvNo.innerHTML = parseInt(aduadvNo.innerHTML) + 1;
    adultAdventureCountElement.innerHTML = parseInt(adultAdventureCountElement.innerHTML) + 1;
    calculateAdventureCost();
  });



// Add event listeners to input fields and checkboxes in the room booking form and adventure form

window.addEventListener('load', init)


//initiating function
function init(){
  clearAdv();
  clearRoom();
}

const mainInput = document.querySelectorAll("input");

mainInput.forEach(input => input.addEventListener('input', calculateRoomCost));
extraRequests.forEach(item => item.addEventListener("check",extraCheck));
loyaltyBtn.addEventListener('click', loyaltyCheck);
roomBookButton.addEventListener('click',bookCurrent)

mainInput.forEach(input => input.addEventListener('input', calculateAdventureCost));
ethnic.forEach(item => item.addEventListener('change', ethPrice))
guideReq.forEach(checkbox => checkbox.addEventListener("change",guideCheck));
aduguideCheck.addEventListener('change', guideCheck);
kidguideCheck.addEventListener('change', guideCheck);
adventureBookButton.addEventListener('click', bookAdventure);




// Extra Requirements function
  function extraCheck(){
    wifiTable.innerText = `${wifiCheck.checked ? "Yes" : "No"}`;
    barTable.innerText = `${barCheck.checked ? "Yes" : "No"}`;
    bedTable.innerText = `${bedCheck.checked ? "Yes" : "No"}`;

    

  }

// Calculating Total Booking Room Cost
  function calculateRoomCost() {
    
    fullNameRoomElement.innerHTML = `${fName.value} ${lName.value}`;
    adTableElement.innerHTML =`${arrDate.value}`;
    ddTableElement.innerHTML =`${depDate.value}`;


    days = Math.round(Math.abs((new Date(depDate.value) - new Date(arrDate.value)) / (24 * 60 * 60 * 1000)));

    daysTableElement.innerHTML = parseInt(days);
    

    roomDoubleTotalPriceElement.innerHTML = parseInt(roomDoubleNoElement.innerHTML) * doubleRoomPrice;

    roomSingleTotalPriceElement.innerHTML = parseInt(roomSingleNoElement.innerHTML) * singleRoomPrice;
    
    roomTripleTotalPriceElement.innerHTML = parseInt(roomTripleNoElement.innerHTML) * tripleRoomPrice;

    kidsTotalPriceElement.innerHTML = parseInt(kidsNoElement.innerHTML) * 5000;

    

    kidstot1day = parseInt(kidsNoElement.innerHTML) * 5000;
    kidstotprice = kidstot1day * days;

    kidsTotal1DayPriceElement.innerHTML = `${kidstot1day.toFixed(2)}`
    kidsTotalPriceElement.innerHTML = `${kidstotprice.toFixed(2)}`


    doubletot = parseInt(roomDoubleTotalPriceElement.innerHTML);
    
    singletot = parseInt(roomSingleTotalPriceElement.innerHTML);
    tripletot = parseInt(roomTripleTotalPriceElement.innerHTML);

    
    roomCost1day = (tripletot + singletot + doubletot);
    roomCost = (tripletot + singletot + doubletot) * days;

    roomcount = parseInt(roomDoubleNoElement.innerHTML) + parseInt(roomSingleNoElement.innerHTML) + parseInt(roomTripleNoElement.innerHTML);

    if (bedCheck.checked){
      bedTotal = roomcount * 8000;
      bedNo.innerText = `${roomcount} beds`;
    }
    else{
      bedTotal = 0;
      bedNo.innerText = `No beds`;
    }
    
    

    bedTot.innerText = bedTotal 
    roomTotalPriceElement.innerHTML = `${roomCost.toFixed(2)}`;
    roomTotal1DayPriceElement.innerHTML = `${roomCost1day.toFixed(2)}`;

    fullprice = parseFloat(roomCost) + parseFloat(kidstotprice) + parseInt(bedTotal);
    
    if(promo.value === "promo123"){
      const discountAmount = roomCost * 0.05;
      discTable.innerText = '5%';

      const discountedPrice = fullprice - discountAmount;
      roomFullPriceElement.innerHTML =  `${discountedPrice.toFixed(2)}`
      fullRealPrice = discountedPrice
  }
    else{
      discTable.innerText = 'No Discount';
      roomFullPriceElement.innerHTML =  `${fullprice.toFixed(2)}`;
      fullRealPrice = fullprice
    }


    extraCheck();
 
}

// Function to book and update loyalty points
function bookCurrent(evt) {
  if (bookMainform.checkValidity()) {
    evt.preventDefault();
    validateRoomInputs();
  }
}

//OVERALL TABLE VARIABLES FOR UPDATES
ovrroomnoapp = parseInt(roomOvrCountElement.innerHTML)
rsapp = parseInt(rsOvrCountElement.innerHTML)
rdapp = parseInt(rdOvrCountElement.innerHTML)
rtapp = parseInt(rtOvrCountElement.innerHTML)
totapp = parseFloat(totalOvrPriceElement.innerHTML)

ovrroomnoapp = 0
rsapp = 0
rdapp = 0
rtapp = 0
totapp = 0

function updateOverallBookingDetails() {

  let currentRsOvrCount = parseInt(rsOvrCountElement.textContent) || 0;
  let currentRdOvrCount = parseInt(rdOvrCountElement.textContent) || 0;
  let currentRtOvrCount = parseInt(rtOvrCountElement.textContent) || 0;
  let currentRoomOvrCount = parseInt(roomOvrCountElement.textContent) || 0;
  let currentTotalOvrPrice = parseFloat(totalOvrPriceElement.textContent) || 0;

  // Calculate the new values
  const newRsOvrCount = currentRsOvrCount + parseInt(roomSingleNoElement.innerHTML);
  const newRdOvrCount = currentRdOvrCount + parseInt(roomDoubleNoElement.innerHTML);
  const newRtOvrCount = currentRtOvrCount + parseInt(roomTripleNoElement.innerHTML);
  const newRoomOvrCount = currentRoomOvrCount + parseInt(roomDoubleNoElement.innerHTML) + parseInt(roomSingleNoElement.innerHTML) + parseInt(roomTripleNoElement.innerHTML);
  const newTotalOvrPrice = currentTotalOvrPrice + parseFloat(fullRealPrice);


  rsOvrCountElement.textContent = newRsOvrCount;
  rdOvrCountElement.textContent = newRdOvrCount;
  rtOvrCountElement.textContent = newRtOvrCount;
  roomOvrCountElement.textContent = newRoomOvrCount;
  totalOvrPriceElement.textContent = newTotalOvrPrice.toFixed(2);
}

function validateRoomInputs(){
    if (!fullNameRoomElement.innerHTML.trim()) {
    alert("Please make sure to provide a valid full name");
  }
  else if(adTableElement.innerHTML == `` || ddTableElement.innerHTML == ``){
    alert("Please make sure to provide your arrival and departure dates properly");
  }
  else if((parseInt(sinroomNo.innerHTML) + parseInt(douroomNo.innerHTML) + parseInt(triroomNo.innerHTML)) == 0){
    alert("Select at least one type of room to book.")
  }
  else if(parseInt(aduNo.innerHTML) == 0){
    alert("Please make sure to have at least one adult for your booking")
  }
  else{
    const lopts = loyaltyCalc();
    updateLoyaltyPoints(lopts);
    updateOverallBookingDetails();
    clearRoom();
    bookMainform.reset();
    calculateRoomCost();
    alert('You have booked your rooms at Hilton successfully, please check the overall bookings to see your overall booking prices and rooms')
  }
  
}

//clear form inputs

function clearRoom(){
fName.value = "";
 lName.value = "";
 arrDate.value = "";
 depDate.value = "";
 aduNo.innerHTML = "0";
 kidNo.innerHTML = "0";
 sinroomNo.innerHTML = "0";
 douroomNo.innerHTML = "0";
 triroomNo.innerHTML = "0";
 promo.value = "";
 wifiCheck.checked = false;
 barCheck.checked = false;
 bedCheck.checked = false;

 fullNameRoomElement.innerHTML = "";
 adTableElement.innerHTML = "";
 ddTableElement.innerHTML = "";
 daysTableElement.innerHTML = "0";
 roomSingleNoElement.innerHTML = "0";
 roomSingleTotalPriceElement.innerHTML = "0";
 roomDoubleNoElement.innerHTML = "0";
 roomDoubleTotalPriceElement.innerHTML = "0";
 roomTripleNoElement.innerHTML = "0";
 roomTripleTotalPriceElement.innerHTML = "0";
 roomTotalPriceElement.innerHTML = "0";
 roomTotal1DayPriceElement.innerHTML = "0";
 kidsNoElement.innerHTML = "0";
 adultsNoElement.innerHTML = "0";
 kidsTotal1DayPriceElement.innerHTML = "0";
 kidsTotalPriceElement.innerHTML = "0";
 roomFullPriceElement.innerHTML = "0";
 wifiTable.innerText = "No";
 barTable.innerText = "No";
 bedTable.innerText = "No";
 bedNo.innerText = "0";
 bedTot.innerText = "0";
 discTable.innerText = "No Discount";
}



//adventure form functions


//ethnic function
function ethPrice(){
  if (this.value == 'localeth'){
    nationalityElement.innerText = 'Sri Lankan';
    adultAdventureCostElement.innerText= '5000.00';
    childrenAdventureCostElement.innerText = '2000.00';
  }
  else if (this.value == 'foreigneth')
  {
    nationalityElement.innerText = 'Foreign';
    adultAdventureCostElement.innerText = '10000.00';
    childrenAdventureCostElement.innerText = '5000.00';
  }
  else{
    nationalityElement.innerText = 'Invalid Ethnicity';
    adultAdventureCostElement.innerText = '0.00';
    childrenAdventureCostElement.innerText = '0.00';
  }
  calculateAdventureCost();
}



function guideCheck() {
  aduGuideStat.innerHTML = `${aduguideCheck.checked ? "Yes" : "No"}`;
  kidGuideStat.innerHTML = `${kidguideCheck.checked ? "Yes" : "No"}`;

    calculateAdventureCost();
  }



function calculateAdventureCost() {
  fullNameAdventureElement.innerHTML = `${fName.value} ${lName.value}`;

  const hours = parseInt(hourNoElement.textContent);
  
  // Calculate adult adventure price
  const adultAdventureCount = parseInt(aduadvNo.textContent);
  const adultAdventureCost = parseFloat(adultAdventureCostElement.textContent);
  const adultTotalPrice = isNaN(adultAdventureCount) ? 0 : adultAdventureCount * adultAdventureCost * hours;
  adultAdvInitPrice.innerText = `${adultTotalPrice.toFixed(2)}`;

  // Calculate children adventure price
  const childrenAdventureCount = parseInt(kidadvNo.textContent);
  const childrenAdventureCost = parseFloat(childrenAdventureCostElement.textContent);
  const childrenTotalPrice = isNaN(childrenAdventureCount) ? 0 : childrenAdventureCount * childrenAdventureCost * hours;
  kidAdvInitPrice.innerText = `${childrenTotalPrice.toFixed(2)}`;

  //guidance price calculation

  if (aduGuideStat.innerText == 'Yes'){
    aduguitot = adultAdventureCount * 1000
    adultGuidanceTotalCostElement.innerText = `${aduguitot.toFixed(2)}`
  }
  else{
    aduguitot = 0
    adultGuidanceTotalCostElement.innerText = `No Guidance`
  }

  if (kidGuideStat.innerText == 'Yes'){
    kidguitot = childrenAdventureCount * 500
    childrenGuidanceTotalCostElement.innerText = `${kidguitot.toFixed(2)}`
  }
  else{
    kidguitot = 0
    childrenGuidanceTotalCostElement.innerText = `No Guidance`
  }

  totgui = aduguitot + kidguitot;


  totpp = adultTotalPrice + childrenTotalPrice;

  totalpersprice.innerHTML = `${totpp.toFixed(2)}`

  totadvfullprice = totgui + totpp

  totalAdventureCostElement.innerHTML = `${totadvfullprice.toFixed(2)}`

}

// declaration for table



// Function to show adventure booking details
function alertAdventure() {
  // Get adventure booking details from the table
  const fullName = fullNameAdventureElement.innerHTML;
  const nationality = nationalityElement.innerHTML;
  const duration = hourNoElement.innerHTML;
  const adultCount = adultAdventureCountElement.innerHTML;
  const childrenCount = childrenAdventureCountElement.innerHTML;
  const totalAdventureCost = totalAdventureCostElement.innerHTML;

    // Prepare adventure booking details message
    const adventureDetailsMessage = `

    Your adventure at Hilton has been booked successfully:

    Adventure Booking Details:
        Full Name: ${fullName}
        Nationality: ${nationality}
        No. of Adults: ${adultCount}
        No. of Children: ${childrenCount}
        Total Adventure Cost: ${totalAdventureCost}

    Your adventure awaits!
  `;

  if (!fullName.trim()) {
    alert("Please make sure to provide a valid full name");
  }
  else if(nationality === 'Invalid Ethnicity'){
    alert("Please make sure to provide your ethnicity");
  }
  else if(duration == `0`){
    alert("Please make sure to provide at least 1 hour")
  }
  else if(adultCount == `0` ){
    alert("Please make sure to have at least one adult for the adventure ethnicity")
  }
  else if (kidguideCheck.checked &&childrenAdventureCountElement.innerHTML == "0"){
    alert('You cannot get a guide for kids if there are no children partaking in the adventure.')
  }
  else{
    alert(adventureDetailsMessage);
    clearAdv();
    bookMainform.reset();
  }
}

function bookAdventure(evt){
  if (bookMainform.checkValidity()){
    evt.preventDefault();
    alertAdventure();
  calculateAdventureCost();}
}

function clearAdv(){
  fName.value = "";
  lName.value = "";
  emailTXT.value = "";
  aduadvNo.innerHTML = "0";
  kidadvNo.innerHTML = "0";
  hourNo.innerHTML = "0";
  aduadvguide.checked = false;
  kidadvguide.checked = false;
  ethdrop.value = "nohot";

  
  fullNameAdventureElement.innerHTML = "";
nationalityElement.innerHTML = "Invalid Ethnicity";
adultAdventureCountElement.innerHTML = "0";
adultAdventureCostElement.innerHTML = "0";
adultAdvInitPrice.innerHTML = "0";
childrenAdventureCountElement.innerHTML = "0";
childrenAdventureCostElement.innerHTML = "0";
kidAdvInitPrice.innerHTML = "0";
aduGuideStat.innerHTML = "";
kidGuideStat.innerHTML = "";
childrenGuidanceTotalCostElement.innerHTML = "0";
adultGuidanceTotalCostElement.innerHTML = "0";
totalpersprice.innerHTML = "0";
hourNoElement.innerHTML = "0";
totalAdventureCostElement.innerHTML = "0";
}




//neccessary functions for loyalty points checker


// Function to retrieve loyalty points from local storage
function getLoyaltyPoints() {
  const storedPoints = localStorage.getItem('loyaltyPoints');
  return storedPoints ? parseInt(storedPoints) : 0;
}

// Function to update and save loyalty points to local storage
function updateLoyaltyPoints(newPoints) {
  const currentPoints = getLoyaltyPoints();
  const totalPoints = currentPoints + newPoints;
  localStorage.setItem('loyaltyPoints', totalPoints.toString());
}


// Function to check loyalty points
function loyaltyCheck() {
  const loyaltyPoints = getLoyaltyPoints();
  if (loyaltyPoints > 0 || loyaltyPoints == null) {
    alert(`You have ${loyaltyPoints} Hilton loyalty points.`);
  } else {
    alert(`You have no loyalty points.`);
  }
}

//loyalty point calculation
function loyaltyCalc() {
  const roomcount =
    parseInt(sinroomNo.innerText) +
    parseInt(douroomNo.innerText) +
    parseInt(triroomNo.innerText);

  if (roomcount > 3) {
    lopts = roomcount * 20;
    alert(`Congratulations! You have been awarded ${lopts} for booking a total of ${roomcount} rooms`)
  } else {
    lopts = 0;
    alert(`No loyalty points has been added`)
  }

  return lopts;
}

//add to favorite button
addfavBtn.addEventListener('click', addfavorite);

function addfavorite() {
  const favoriteData = {
    fName: fName.value,
    lName: lName.value,
    email: emailTXT.value,
    phone: phone.value,
    ad: arrDate.value,
    dd: depDate.value,
    aduNo: aduNo.innerHTML,
    kidNo: kidNo.innerHTML,
    sinroomNo: sinroomNo.innerHTML,
    douroomNo: douroomNo.innerHTML,
    triroomNo: triroomNo.innerHTML,
    promo: promo.value,
    wifiCheck: wifiCheck.checked,
    barCheck: barCheck.checked,
    bedCheck: bedCheck.checked,
    kidadvNo: kidadvNo.value,
    aduadvNo: aduadvNo.value,
    hourNo: hourNo.innerHTML,
    aduguideCheck: aduguideCheck.checked,
    kidguideCheck: kidguideCheck.checked,
    ethnic: ethnic.value,

    ddTable: ddTableElement.innerHTML,
    daysTable: daysTableElement.innerHTML,
    roomSingleNo: roomSingleNoElement.innerHTML,
    roomSingleTotalPrice: roomSingleTotalPriceElement.innerHTML,
    roomDoubleNo: roomDoubleNoElement.innerHTML,
    roomDoubleTotalPrice: roomDoubleTotalPriceElement.innerHTML,
    roomTripleNo: roomTripleNoElement.innerHTML,
    roomTripleTotalPrice: roomTripleTotalPriceElement.innerHTML,
    kidsTotalPrice: kidsTotalPriceElement.innerHTML,
    adultsNo: adultsNoElement.innerHTML,
    kidsTotal1DayPrice: kidsTotal1DayPriceElement.innerHTML,
    kidsTotalPrice: kidsTotalPriceElement.innerHTML,
    roomFullPrice: roomFullPriceElement.innerHTML,
    wifiTable: wifiTable.innerText,
    barTable: barTable.innerText,
    bedTable: bedTable.innerText,
    bedNo: bedNo.innerText,
    bedTot: bedTot.innerText,
    discTable: discTable.innerText,

    fullNameAdventure: fullNameAdventureElement.innerHTML,
    nationality: nationalityElement.innerHTML,
    adultAdventureCount: adultAdventureCountElement.innerHTML,
    adultAdventureCost: adultAdventureCostElement.innerHTML,
    adultAdvInitPrice: adultAdvInitPrice.innerHTML,
    childrenAdventureCount: childrenAdventureCountElement.innerHTML,
    childrenAdventureCost: childrenAdventureCostElement.innerHTML,
    kidAdvInitPrice: kidAdvInitPrice.innerHTML,
    aduGuideStat: aduGuideStat.innerHTML,
    kidGuideStat: kidGuideStat.innerHTML,
    childrenGuidanceTotalCost: childrenGuidanceTotalCostElement.innerHTML,
    adultGuidanceTotalCost: adultGuidanceTotalCostElement.innerHTML,
    totalpersprice: totalpersprice.innerHTML,
    hourNo: hourNoElement.innerHTML,
    totalAdventureCost: totalAdventureCostElement.innerHTML,

  };

  
  calculateAdventureCost();
  calculateRoomCost();
  alert('Your booking has been saved as a favorite!');
  
  localStorage.setItem('favoriteData', JSON.stringify(favoriteData));


}

//recall favorite button
callfavBtn.addEventListener('click', callFavourite);

function callFavourite(){
  
  init();

  const storedFav = localStorage.getItem('favoriteData');

  if (storedFav) {
    const storedData = JSON.parse(storedFav)

    fName.value = storedData.fName;
    lName.value = storedData.lName;
    emailTXT.value = storedData.email;
    phone.value = storedData.phone,
    arrDate.value = storedData.ad,
    depDate.value = storedData.dd,
    aduNo.innerHTML = storedData.aduNo;
    kidNo.innerHTML = storedData.kidNo;
    sinroomNo.innerHTML = storedData.sinroomNo;
    douroomNo.innerHTML = storedData.douroomNo;
    triroomNo.innerHTML = storedData.triroomNo;
    promo.value = storedData.promo;
    wifiCheck.checked = storedData.wifiCheck;
    barCheck.checked = storedData.barCheck;
    bedCheck.checked = storedData.bedCheck;
    kidadvNo.value = storedData.kidadvNo;
    aduadvNo.value = storedData.aduadvNo;
    hourNo.innerHTML = storedData.hourNo;
    aduguideCheck.checked = storedData.aduguideCheck;
    kidguideCheck.checked = storedData.kidguideCheck;
    ethnic.value = storedData.ethnic;

    fullNameRoomElement.innerHTML = storedData.fullNameRoom;
    adTableElement.innerHTML = storedData.adTable;
    ddTableElement.innerHTML = storedData.ddTable;
    daysTableElement.innerHTML = storedData.daysTable;
    roomSingleNoElement.innerHTML = storedData.roomSingleNo;
    roomSingleTotalPriceElement.innerHTML = storedData.roomSingleTotalPrice;
    roomDoubleNoElement.innerHTML = storedData.roomDoubleNo;
    roomDoubleTotalPriceElement.innerHTML = storedData.roomDoubleTotalPrice;
    roomTripleNoElement.innerHTML = storedData.roomTripleNo;
    roomTripleTotalPriceElement.innerHTML = storedData.roomTripleTotalPrice;
    kidsTotalPriceElement.innerHTML = storedData.kidsTotalPrice;
    adultsNoElement.innerHTML = storedData.adultsNo;
    kidsTotal1DayPriceElement.innerHTML = storedData.kidsTotal1DayPrice;
    kidsTotalPriceElement.innerHTML = storedData.kidsTotalPrice;
    roomFullPriceElement.innerHTML = storedData.roomFullPrice;
    wifiTable.innerText = storedData.wifiTable;
    barTable.innerText = storedData.barTable;
    bedTable.innerText = storedData.bedTable;
    bedNo.innerText = storedData.bedNo;
    bedTot.innerText = storedData.bedTot;
    discTable.innerText = storedData.discTable;

    fullNameAdventureElement.innerHTML = storedData.fullNameAdventure;
    nationalityElement.innerHTML = storedData.nationality;
    adultAdventureCountElement.innerHTML = storedData.adultAdventureCount;
    adultAdventureCostElement.innerHTML = storedData.adultAdventureCost;
    adultAdvInitPrice.innerHTML = storedData.adultAdvInitPrice;
    childrenAdventureCountElement.innerHTML = storedData.childrenAdventureCount;
    childrenAdventureCostElement.innerHTML = storedData.childrenAdventureCost;
    kidAdvInitPrice.innerHTML = storedData.kidAdvInitPrice;
    aduGuideStat.innerHTML = storedData.aduGuideStat;
    kidGuideStat.innerHTML = storedData.kidGuideStat;
    childrenGuidanceTotalCostElement.innerHTML = storedData.childrenGuidanceTotalCost;
    adultGuidanceTotalCostElement.innerHTML = storedData.adultGuidanceTotalCost;
    totalpersprice.innerHTML = storedData.totalpersprice;
    hourNoElement.innerHTML = storedData.hourNo;
    totalAdventureCostElement.innerHTML = storedData.totalAdventureCost;
  }
  else{
    alert("There is no favourite set yet. Make sure to fill in the neccesary details of the form and then click on 'Add to Favorite' to get a favourite.")
  }

}

