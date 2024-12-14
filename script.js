const acommand = {
    'help': 'Show available commands',
    'about':  'about me',
    'projects':  'my projects',
    'contact':  'contact info',
    'pwd':  'print working dir',
    'neofetch': 'show system stats',
    'cheese': 'a cute message'

};

const commandResponses = {
   
    'about': `HOY SAILOR!
I am a 14 year old who loves to explore like a sailor.
`,

    'projects': `\nMy Projects:\n\n
1. My-Portfolio     -  A responsive website about me.
2. Twilight-Paradox -  A game inspired by Quidditch from Harry Potter !
`,
    'contact': `contact me:
Email: arjavjain0703@gmail.com
GitHub: https://github.com/arjav0703
    
`,
    'pwd': `/home/arjav/portfolio`,
    'neofetch': `
            .-/+oossssoo+/-.               ╭─  Ubuntu 24.04.1 LTS x86_64 
        :+ssssssssssssssssss+:           ├─  6.8.0-49-generic 
      -+ssssssssssssssssssyyssss+-         ├─  lily 
    .ossssssssssssssssssdMMMNysssso.       ├─󰏗  3159 (dpkg), 54 (flatpak), 17 (snap) 
   /ssssssssssshdmmNNmmyNMMMMhssssss/      ╰─  bash 5.2.21 
  +ssssssssshmydMMMMMMMNddddyssssssss+
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    ╭─  Hyprland 
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   ├─  kitty 
+sssshhhyNMMNyssssssssssssyNMMMysssssss+
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   ╭─  OptiPlex 7040 
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   ├─󰍛  Intel i5-6500T (4) @ 3.1GHz [45.0°on] 
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   ├─󰍹  Intel HD Graphics 530 
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   ├─  i915 
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/    ├─  1920x1080 
  +sssssssssdmydMMMMMMMMddddyssssssss+     ├─  1.73GiB / 15.38GiB (11%) 
   /ssssssssssshdmNNNNmyNMMMMhssssss/      ├─  (/)  57G / 231G (26%) 
    .ossssssssssssssssssdMMMNysssso.       ╰─󰄉  2 days, 15 mins 
      -+sssssssssssssssssyyyssss+-         
         :+ssssssssssssssssss+:
            .-/+oossssoo+/-.

`,
    'cheese':` 
< ! AHOY SAILOR ! This is a sign for you to contact me >
 ----
   \
    \
      _____   _________
     /     \_/         |
    |                 ||
    |                 ||
   |    ###\  /###   | |
   |     0  \/  0    | |
  /|                 | |
 / |        <        |\ \
| /|                 | | |
| |     \_______/   |  | |
| |                 | / /
/||                 /|||
   ----------------|
        | |    | |
        ***    ***
       /___\  /___\
`
,
};

const terminal = document.getElementById('terminal');
const outline = document.getElementById('outline');
const input = document.getElementById('input');
const backgroundText = document.querySelector('.background-text');
const cursor = document.querySelector('.cursor');

input.addEventListener('input', function() {
    backgroundText.style.display = this .value ? 'none' : 'block';
    const textWidth = this.value.length * 8; 
    cursor.style.left = `${200 + textWidth}px`;
});

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = input.value.toLowerCase().trim();
        const promptText = document.querySelector('.prompt').textContent;
        
        outline.innerHTML += `${promptText}${input.value}\n`;
        
        if (command === 'help') {
            let helpText = 'Available commands:\n\n';
            for (const [cmd, desc] of Object.entries(acommand)) {
                helpText += `${cmd.padEnd(10)} - ${desc}\n`;
            }
            outline.innerHTML += helpText + '\n';

        } else if (commandResponses[command]) {
            outline.innerHTML += commandResponses[command] + '\n';
        } else if (command === 'pwd') {
            outline.innerHTML += commandResponses[command] +'\n';
        } else if (command === 'neofetch') {
            outline.innerHTML += commandResponses[command] +'\n';
        } else if (command === 'cheese') {
            outline.innerHTML += commandResponses[command] +'\n';
        } else {
            outline.innerHTML += `'${command}' Permission denied. Are you root?\n`;
        }

        terminal.scrollTop = terminal.scrollHeight;
        
        input.value = '';
        cursor.style.left = '200px';
        backgroundText.style.display = 'block';
    }
});

document.addEventListener('click', function() {
    input.focus();
});