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
   
    'about': `AHOY SAILOR!
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
    'neofetch': `            .-/+oossssoo+/-.               lily@mydesktop 
        :+ssssssssssssssssss+:           -------------- 
      -+ssssssssssssssssssyyssss+-         OS: Ubuntu 24.04.1 LTS x86_64 
    .ossssssssssssssssssdMMMNysssso.       Host: OptiPlex 7040 
   /ssssssssssshdmmNNmmyNMMMMhssssss/      Kernel: 6.8.0-49-generic 
  +ssssssssshmydMMMMMMMNddddyssssssss+     Uptime: 1 day, 3 hours, 33 mins 
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    Packages: 3156 (dpkg), 54 (flatpak)
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Shell: bash 5.2.21 
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   Resolution: 1920x1080 
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   DE: GNOME 46.0 
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   WM: Mutter 
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   WM Theme: Adwaita 
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Theme: Cold Metal [GTK2/3] 
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/    Icons: candy-icons [GTK2/3] 
  +sssssssssdmydMMMMMMMMddddyssssssss+     Terminal: kitty
   /ssssssssssshdmNNNNmyNMMMMhssssss/      CPU: Intel i5-6500T (4) @ 3.100GHz 
    .ossssssssssssssssssdMMMNysssso.       GPU: Intel HD Graphics 530 
      -+sssssssssssssssssyyyssss+-         Memory: 2314MiB / 15750MiB 
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