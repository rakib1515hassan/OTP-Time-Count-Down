// // বাক্সে যে এলিমেন্ট আছে সেটা রিট্রিভ করা
// const startButton = document.getElementById('startButton');
// const timerDisplay = document.getElementById('timer');

// let countdown; // টাইমার ভেরিয়েবল সেট করবে

// // কাউন্টডাউন শুরু করার জন্য ফাংশন
// function startCountdown() {
//     const startTime = Date.now();
//     const targetTime = startTime + 1 * 60 * 1000; // 5 মিনিটের মিলিসেকেন্ড

//     countdown = setInterval(() => {
//         const currentTime = Date.now();
//         const remainingTime = targetTime - currentTime;

//         if (remainingTime <= 0) {
//             clearInterval(countdown);
//             timerDisplay.textContent = '0:00';
//             return;
//         }

//         const minutes = Math.floor(remainingTime / 60000);
//         const seconds = Math.floor((remainingTime % 60000) / 1000);

//         timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     }, 1000); // 1 সেকেন্ড মিলিসেকেন্ড
// }

// // বাটনে ক্লিক ইভেন্ট লিস্টেনার যোগ করা
// startButton.addEventListener('click', startCountdown);


const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const timerDisplay = document.getElementById('timer');

let countdown;
let targetTime = 0;
let countdownStarted = false;

function updateTimerDisplay(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startCountdown() {
    if (!countdownStarted) {
        countdownStarted = true;
        const currentTime = Date.now();
        targetTime = currentTime + 5 * 60 * 1000; // 5 মিনিটের মিলিসেকেন্ড
    }

    clearInterval(countdown); // আগের টাইমার বন্ধ করুন

    countdown = setInterval(() => {
        const remainingTime = targetTime - Date.now();

        if (remainingTime <= 0) {
            clearInterval(countdown);
            updateTimerDisplay(0);
            countdownStarted = false;
            return;
        }

        updateTimerDisplay(remainingTime);
    }, 1000);
}

function resetCountdown() {
    console.log("Resete...")
    clearInterval(countdown);
    updateTimerDisplay(5 * 60 * 1000); // পুনরায় 5 মিনিট সেট করুন
    targetTime = 0;
    countdownStarted = false;
}

startButton.addEventListener('click', startCountdown);
resetButton.addEventListener('click', resetCountdown);

