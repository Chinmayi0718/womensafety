function goToBooking() {
    const username = document.getElementById("username").value.trim();

    if (username === "") {
       alert("⚠️ Please enter a valid username");
        return;
    }
    document.getElementById("errorMsg").innerText="";
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("bookingPage").classList.remove("hidden");
}

function startRide() {
    document.getElementById("bookingPage").classList.add("hidden");
    document.getElementById("ridePage").classList.remove("hidden");
}
function shareRide() {
    alert("Ride details shared with trusted contacts!");
}
function triggerSOS() {
    alert("🚨 Emergency alert sent!\nLocation + Ride details shared.");
}
function fakeCall() {
    alert("📞 Incoming call from 'Mom'...");
}
function searchCabs() {
    const pickup = document.getElementById("pickup").value.trim();
    const destination = document.getElementById("destination").value.trim();

    if (pickup === "" || destination === "") {
        alert("⚠️ Please enter both Pickup and Destination");
        return;
    }
    localStorage.setItem("pickup", pickup);
    localStorage.setItem("destination", destination);

    const cabList = document.getElementById("cabList");

    cabList.innerHTML = `
        <h3>Available Cabs 🚕</h3>

       <div>
        <p><b>Mini</b> 🚕</p>
        <p>₹120 • 5 mins away • ⭐ 4.2</p>
        <button onclick="selectCab('Mini', 120)">Select</button>
    </div>

    <div>
        <p><b>Sedan</b> 🚗</p>
        <p>₹180 • 3 mins away • ⭐ 4.5</p>
        <button onclick="selectCab('Sedan', 180)">Select</button>
    </div>

    <div>
        <p><b>SUV</b> 🚙</p>
        <p>₹250 • 2 mins away • ⭐ 4.8</p>
        <button onclick="selectCab('SUV', 250)">Select</button>
    </div>
    `;
}
function selectCab(type, price) {
    const driver = getRandomDriver();

    // Store in localStorage (for map + validation)
    localStorage.setItem("currentVehicle", driver.plate);
    localStorage.setItem("driverName", driver.name);

    alert(`You selected ${type} - ₹${price}\n`);

    document.getElementById("bookingPage").classList.add("hidden");
    document.getElementById("ridePage").classList.remove("hidden");

    document.getElementById("status").innerText =
        `Ride started with ${type} (₹${price})`;

    // Show details in UI
    document.getElementById("rideDetails").innerText =
        `👤 Driver: ${driver.name}\n🚕 Vehicle: ${driver.plate}`;
}
window.onload = function () {
    //const type = localStorage.getItem("rideType");
    const price = localStorage.getItem("ridePrice");

    if (type && price) {
        document.getElementById("rideDetails").innerText = `🚕 ${type} ride booked - ₹${price}`;
    }
};
function cancelRide() {
    alert("Ride cancelled");

    document.getElementById("ridePage").classList.add("hidden");
    document.getElementById("bookingPage").classList.remove("hidden");
}
function checkVehicle(event) {
    event.preventDefault();

    let enteredVehicle = document.getElementById("vehicleNumber").value.trim();
    let actualVehicle = localStorage.getItem("currentVehicle");

    if (!actualVehicle) {
        document.getElementById("vehicleError").innerText =
            "⚠️ No vehicle data found";
        return;
    }

    // Normalize (remove dashes + spaces)
    enteredVehicle = enteredVehicle.toUpperCase().replace(/[\s-]/g, "");
    actualVehicle = actualVehicle.toUpperCase().replace(/[\s-]/g, "");

    if (enteredVehicle === "") {
        document.getElementById("vehicleError").innerText =
            "⚠️ Please enter vehicle number";
        return;
    }

    if (enteredVehicle !== actualVehicle) {
        document.getElementById("vehicleError").innerText =
            "❌ Vehicle number does not match!";
    } else {
        document.getElementById("vehicleError").innerText = "";
        alert("✅ Ride is safe! Vehicle number matches.");
    }
}
const drivers = [
    { name: "Aditya", plate: "KA-01-AB-1234" },
    { name: "Suresh", plate: "KA-03-XY-9988" },
    { name: "Karan", plate: "KA-51-MM-0071" },
    { name: "Rahul", plate: "KA-05-JK-4432" },
    { name: "Vikram", plate: "KA-02-ZZ-5566" },
    { name: "Priya", plate: "KA-04-LL-1122" }
];
function getRandomDriver() {
    const index = Math.floor(Math.random() * drivers.length);
    return drivers[index];
}
function openTimer(){
    window.location.href = "file:///C:/Users/sumad/AppData/Local/Packages/5319275A.WhatsAppDesktop_cv1g1gvanyjgm/LocalState/sessions/83762A6F609F541B706A8A1B871863A06B1F520A/transfers/2026-14/sos.html";
}