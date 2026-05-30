// Uptime Clock Simulation
let seconds = 0;

setInterval(() => {
    seconds++;
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    
    // Update the DOM element with the new time
    document.getElementById('uptime-clock').innerText = `${hrs}:${mins}:${secs}`;
}, 1000);

// Terminal Typing Effect Simulation
const terminalOutput = document.getElementById('terminal-output');

const commands = [
    "> initializing cluster monitoring...",
    "> pinging aws us-east-1...",
    "> pinging azure central-india...",
    "> fetching RHCSA validation keys...",
    "> all systems operational."
];

let cmdIndex = 0;

setInterval(() => {
    // Cycle to the next command in the array
    cmdIndex = (cmdIndex + 1) % commands.length;
    // Update the DOM element
    terminalOutput.innerText = commands[cmdIndex];
}, 3500);