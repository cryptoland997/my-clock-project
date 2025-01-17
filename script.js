function updateClock() {
    const now = new Date();

    // დროის ნაწილის მიღება
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // 12-საათიანი ფორმატი
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // 12-საათიანი ფორმატი

    // საათის ჩვენება
    const clockElement = document.getElementById("clock");
    clockElement.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;

    // თარიღის ჩვენება
    const dateElement = document.getElementById("date");
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    dateElement.textContent = `${dayName}, ${monthName} ${date}, ${year}`;

    // დინამიური მისალმება
    const greetingElement = document.getElementById("greeting");
    if (hours < 12) {
        greetingElement.textContent = "Good Morning!";
        document.body.style.background = "linear-gradient(45deg, #1a73e8, #ff5722)";
    } else if (hours < 18) {
        greetingElement.textContent = "Good Afternoon!";
        document.body.style.background = "linear-gradient(45deg, #f9a825, #ff6f00)";
    } else {
        greetingElement.textContent = "Good Evening!";
        document.body.style.background = "linear-gradient(45deg, #1a237e, #311b92)";
    }
}

// საათის განახლება ყოველ წამს
setInterval(updateClock, 1000);

// პირველი გამოძახება
updateClock();
