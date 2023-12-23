(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    // Set the target date and time 
    const targetMonth = 0; // January is 0 (zero-based)
    const targetDay = 7;
    const targetHour = 23; // 11:00 PM
    const targetMinute = 0;
    const targetYear = 2024;

    const today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear();

    // Create target date string
    const targetDate = new Date(targetYear, targetMonth, targetDay, targetHour, targetMinute);

    const countDown = targetDate.getTime(),
        x = setInterval(function () {
            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / day);
            document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
            document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
            document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

            // Do something when the date is reached
            if (distance < 0) {
                document.getElementById("headline").innerText = "Yes it is time";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
        }, 0);
})();

