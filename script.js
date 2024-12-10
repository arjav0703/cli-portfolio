        const prompts = {
            'help': 'Show available commands',
            'about':  'about me',
            'projects':  'my projects',
            'contact':  'contact info',

        };

        const promptResult = {
            'about': `AHOY SAILOR!
I am a passionate developer focused on web technologies.
`,

            'projects': `My Projects:
1. My-Portfolio     -  A responsive website about me.
2. Twilight-Paradox -  A game inspired by Quidditch from Harry Potter !

`,
            'contact': `contact me:
Email: arjavjain0703@gmail.com
GitHub: https://github.com/arjav0703
`,
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
                    for (const [cmd, desc] of Object.entries(commands)) {
                        helpText += `${cmd.padEnd(10)} - ${desc}\n`;
                    }
                    outline.innerHTML += helpText + '\n';

                } else if (commandResponses[command]) {
                    outline.innerHTML += commandResponses[command] + '\n';
                } else if (command === '') {
                    outline.innerHTML += '\n';
                } else {
                    outline.innerHTML += `'${command}' is not recognized as an internal or external command.\n`;
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