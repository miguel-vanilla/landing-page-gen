import { Theme } from '../core';

export const SPECIAL_THEMES: Theme[] = [
  {
    id: 'brutalism',
    name: 'Brutalist Design',
    template: `<!DOCTYPE html>
<html lang="{{language}}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <link href="https://fonts.googleapis.com/css2?family={{titleFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --background: {{background}};
            --title-color: {{titleColor}};
            --subtitle-color: {{subtitleColor}};
            --text-color: {{textColor}};
            --footer-color: {{footerColor}};
            --title-font: "{{titleFont}}", monospace;
        }
        {{countdownStyles}}
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: monospace;
            background: #000;
            color: #fff;
            line-height: 1.4;
            cursor: crosshair;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 2px;
            padding: 2px;
            background: #333;
            min-height: 100vh;
        }
        .header {
            grid-column: 1 / -1;
            background: #000;
            padding: 2rem;
            border: 2px solid #fff;
        }
        .title-block {
            display: inline-block;
            transform: skew(-5deg);
            background: #fff;
            padding: 1rem 2rem;
            margin-bottom: 2rem;
        }
        h1 {
            font-size: 4rem;
            color: #000;
            font-family: var(--title-font);
            text-transform: uppercase;
            transform: skew(5deg);
            margin: 0;
        }
        .subtitle-block {
            display: inline-block;
            border: 2px solid #fff;
            padding: 1rem 2rem;
            transform: translateX(2rem);
        }
        h2 {
            font-size: 1.5rem;
            color: #fff;
            margin: 0;
            font-weight: normal;
        }
        .content {
            grid-column: 2 / -2;
            background: #000;
            padding: 4rem 2rem;
            border: 2px solid #fff;
            margin-top: 2px;
            font-size: 1.2rem;
        }
        .countdown-block {
            grid-column: 1 / -1;
            background: #fff;
            color: #000;
            padding: 2rem;
            text-align: center;
            margin: 2px 0;
            font-size: 2rem;
        }
        footer {
            grid-column: 1 / -1;
            background: #000;
            padding: 2rem;
            text-align: right;
            border: 2px solid #fff;
            font-family: monospace;
        }
        @media (max-width: 768px) {
            .grid { grid-template-columns: 1fr; gap: 1px; }
            .content { grid-column: 1 / -1; }
            h1 { font-size: 2.5rem; }
        }
    </style>
</head>
<body>
    <div class="grid">
        <header class="header">
            <div class="title-block">
                <h1>{{title}}</h1>
            </div>
            <div class="subtitle-block">
                <h2>{{subtitle}}</h2>
            </div>
        </header>
        <div class="countdown-block">
            {{countdownHtml}}
        </div>
        <main class="content">
            {{mainContent}}
        </main>
        <footer>{{footerText}}</footer>
    </div>
    {{countdownScript}}
</body>
</html>`
  },
  {
    id: 'terminal',
    name: 'Terminal Theme',
    template: `<!DOCTYPE html>
<html lang="{{language}}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <style>
        :root {
            --background: #1a1b1e;
            --text: #33ff00;
            --cursor: #33ff00;
        }
        {{countdownStyles}}
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            background: var(--background);
            color: var(--text);
            font-family: 'Courier New', monospace;
            line-height: 1.6;
            padding: 2rem;
            min-height: 100vh;
        }
        .terminal {
            max-width: 900px;
            margin: 0 auto;
        }
        .prompt::before {
            content: '$ ';
            color: #888;
        }
        .cursor::after {
            content: '';
            display: inline-block;
            width: 8px;
            height: 1em;
            background: var(--cursor);
            animation: blink 1s step-end infinite;
            vertical-align: text-bottom;
            margin-left: 2px;
        }
        @keyframes blink {
            50% { opacity: 0; }
        }
        .output {
            margin: 1rem 0;
            padding-left: 1rem;
        }
        h1, h2 {
            font-size: 1rem;
            font-weight: normal;
            margin: 0;
        }
        .content {
            margin: 2rem 0;
            padding-left: 1rem;
            border-left: 2px solid #333;
        }
        footer {
            margin-top: 4rem;
            padding-top: 1rem;
            border-top: 1px solid #333;
            font-size: 0.9rem;
            color: #666;
        }
        .ascii-art {
            font-family: monospace;
            white-space: pre;
            color: #33ff00;
            margin: 2rem 0;
        }
    </style>
</head>
<body>
    <div class="terminal">
        <div class="prompt">echo "{{title}}"<span class="cursor"></span></div>
        <div class="output">
            <div class="ascii-art">
   _____                    _             _ 
  |_   _|__ _ __ _ __ ___ (_)_ __   __ _| |
    | |/ _ \\ '__| '_ \` _ \\| | '_ \\ / _\` | |
    | |  __/ |  | | | | | | | | | | (_| | |
    |_|\\___|_|  |_| |_| |_|_|_| |_|\\__,_|_|
            </div>
            <h1>{{title}}</h1>
        </div>
        
        <div class="prompt">echo "{{subtitle}}"</div>
        <div class="output">
            <h2>{{subtitle}}</h2>
        </div>
        
        <div class="prompt">cat content.txt</div>
        <div class="output content">
            {{mainContent}}
        </div>
        
        <div class="prompt">./countdown</div>
        <div class="output">
            {{countdownHtml}}
        </div>
        
        <footer>
            {{footerText}}
        </footer>
    </div>
    {{countdownScript}}
</body>
</html>`
  },
  {
    id: 'polymorphism',
    name: 'Polymorphic Design',
    template: `<!DOCTYPE html>
<html lang="{{language}}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <link href="https://fonts.googleapis.com/css2?family={{titleFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --background: {{background}};
            --title-color: {{titleColor}};
            --subtitle-color: {{subtitleColor}};
            --text-color: {{textColor}};
            --footer-color: {{footerColor}};
            --title-font: "{{titleFont}}", sans-serif;
        }
        {{countdownStyles}}
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @property --angle {
            syntax: '<angle>';
            initial-value: 0deg;
            inherits: false;
        }
        body {
            background: var(--background);
            color: var(--text-color);
            font-family: var(--title-font);
            min-height: 100vh;
            display: grid;
            place-items: center;
            overflow-x: hidden;
        }
        .container {
            width: 100%;
            max-width: 1200px;
            padding: 2rem;
        }
        .morph-section {
            position: relative;
            padding: 3rem;
            margin: 2rem 0;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            transform-style: preserve-3d;
            transform: perspective(1000px);
            transition: transform 0.3s ease;
        }
        .morph-section::before {
            content: '';
            position: absolute;
            inset: 0;
            border: 2px solid transparent;
            border-radius: 20px;
            background: linear-gradient(var(--angle), var(--title-color), var(--subtitle-color)) border-box;
            -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: destination-out;
            mask-composite: exclude;
            animation: rotate 3s linear infinite;
        }
        @keyframes rotate {
            to { --angle: 360deg; }
        }
        h1 {
            font-size: clamp(3rem, 8vw, 5rem);
            background: linear-gradient(45deg, var(--title-color), var(--subtitle-color));
            -webkit-background-clip: text;
            color: transparent;
            margin-bottom: 1rem;
            transform: translateZ(30px);
        }
        h2 {
            font-size: clamp(1.5rem, 4vw, 2rem);
            color: var(--subtitle-color);
            margin-bottom: 2rem;
            transform: translateZ(20px);
        }
        .content {
            font-size: 1.2rem;
            line-height: 1.6;
            transform: translateZ(10px);
        }
        .countdown-section {
            background: rgba(255, 255, 255, 0.05);
            padding: 2rem;
            border-radius: 15px;
            margin: 2rem 0;
            transform: translateZ(15px);
        }
        footer {
            text-align: center;
            padding: 2rem;
            color: var(--footer-color);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="morph-section">
            <h1>{{title}}</h1>
            <h2>{{subtitle}}</h2>
        </div>
        
        <div class="countdown-section">
            {{countdownHtml}}
        </div>
        
        <div class="morph-section">
            <div class="content">
                {{mainContent}}
            </div>
        </div>
        
        <footer>
            {{footerText}}
        </footer>
    </div>
    {{countdownScript}}
    <script>
        document.querySelectorAll('.morph-section').forEach(section => {
            section.addEventListener('mousemove', e => {
                const rect = section.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                section.style.transform = \`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
            });
            section.addEventListener('mouseleave', () => {
                section.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });
    </script>
</body>
</html>`
  },
  {
    id: 'wobble',
    name: 'Wobble Effect',
    template: `<!DOCTYPE html>
<html lang="{{language}}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <link href="https://fonts.googleapis.com/css2?family={{titleFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --background: {{background}};
            --title-color: {{titleColor}};
            --subtitle-color: {{subtitleColor}};
            --text-color: {{textColor}};
            --footer-color: {{footerColor}};
            --title-font: "{{titleFont}}", sans-serif;
        }
        {{countdownStyles}}
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            background: var(--background);
            color: var(--text-color);
            font-family: var(--title-font);
            min-height: 100vh;
            overflow-x: hidden;
        }
        .wobble-container {
            padding: 4rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        .wobble-text {
            position: relative;
            display: inline-block;
            transform-style: preserve-3d;
            transition: transform 0.3s ease;
        }
        .wobble-text span {
            display: inline-block;
            animation: float 6s ease-in-out infinite;
            transform-origin: 50% 50%;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0); }
            25% { transform: translateY(-8px) rotate(3deg); }
            75% { transform: translateY(8px) rotate(-3deg); }
        }
        h1 {
            font-size: clamp(3rem, 10vw, 6rem);
            color: var(--title-color);
            margin-bottom: 2rem;
            line-height: 1.2;
        }
        h2 {
            font-size: clamp(1.5rem, 5vw, 2.5rem);
            color: var(--subtitle-color);
            margin-bottom: 3rem;
        }
        .content-section {
            background: rgba(255, 255, 255, 0.05);
            padding: 3rem;
            border-radius: 20px;
            margin: 2rem 0;
            position: relative;
            overflow: hidden;
        }
        .content-section::before {
            content: '';
            position: absolute;
            inset: -10px;
            background: linear-gradient(45deg, var(--title-color), var(--subtitle-color));
            opacity: 0.1;
            filter: blur(20px);
            animation: pulse 4s ease-in-out infinite;
        }
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        .content {
            position: relative;
            font-size: 1.2rem;
            line-height: 1.8;
        }
        footer {
            text-align: center;
            padding: 3rem;
            color: var(--footer-color);
            position: relative;
            overflow: hidden;
        }
        footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, 
                transparent, 
                var(--footer-color),
                transparent
            );
        }
    </style>
</head>
<body>
    <div class="wobble-container">
        <h1 class="wobble-text">{{title}}</h1>
        <h2 class="wobble-text">{{subtitle}}</h2>
        
        <div class="content-section">
            {{countdownHtml}}
        </div>
        
        <div class="content-section">
            <div class="content">
                {{mainContent}}
            </div>
        </div>
        
        <footer>
            {{footerText}}
        </footer>
    </div>
    {{countdownScript}}
    <script>
        document.querySelectorAll('.wobble-text').forEach(element => {
            element.innerHTML = element.textContent.split('').map((char, i) => 
                \`<span style="animation-delay: \${i * 0.1}s">\${char}</span>\`
            ).join('');
        });
    </script>
</body>
</html>`
  },
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    template: `<!DOCTYPE html>
<html lang="{{language}}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <link href="https://fonts.googleapis.com/css2?family={{titleFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --background: {{background}};
            --title-color: {{titleColor}};
            --subtitle-color: {{subtitleColor}};
            --text-color: {{textColor}};
            --footer-color: {{footerColor}};
            --title-font: "{{titleFont}}", sans-serif;
        }
        {{countdownStyles}}
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            background-image: 
                radial-gradient(circle at 20% 20%, var(--title-color) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, var(--subtitle-color) 0%, transparent 50%);
            background-color: var(--background);
            color: var(--text-color);
            font-family: var(--title-font);
            min-height: 100vh;
            overflow-x: hidden;
        }
        .glass-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
            position: relative;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 30px;
            padding: 3rem;
            margin: 2rem 0;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        .glass-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
                45deg,
                transparent 0%,
                rgba(255, 255, 255, 0.1) 100%
            );
            border-radius: 30px;
            pointer-events: none;
        }
        h1 {
            font-size: clamp(3rem, 8vw, 5rem);
            color: var(--title-color);
            margin-bottom: 1rem;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            color: var(--subtitle-color);
            margin-bottom: 2rem;
            font-weight: 300;
        }
        .content {
            font-size: 1.2rem;
            line-height: 1.8;
            color: var(--text-color);
        }
        .floating-elements {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: -1;
        }
        .floating-elements div {
            position: absolute;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(5px);
            border-radius: 50%;
            animation: float 20s infinite linear;
        }
        .floating-elements div:nth-child(1) {
            width: 100px;
            height: 100px;
            top: 10%;
            left: 10%;
            animation-delay: 0s;
        }
        .floating-elements div:nth-child(2) {
            width: 150px;
            height: 150px;
            top: 60%;
            right: 15%;
            animation-delay: -5s;
        }
        .floating-elements div:nth-child(3) {
            width: 80px;
            height: 80px;
            top: 30%;
            right: 30%;
            animation-delay: -10s;
        }
        @keyframes float {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(100px, 50px) rotate(90deg); }
            50% { transform: translate(50px, 100px) rotate(180deg); }
            75% { transform: translate(-50px, 50px) rotate(270deg); }
            100% { transform: translate(0, 0) rotate(360deg); }
        }
        footer {
            text-align: center;
            padding: 2rem;
            color: var(--footer-color);
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(5px);
            margin-top: 4rem;
            border-radius: 15px;
        }
    </style>
</head>
<body>
    <div class="floating-elements">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="glass-container">
        <div class="glass-card">
            <h1>{{title}}</h1>
            <h2>{{subtitle}}</h2>
        </div>
        
        <div class="glass-card">
            {{countdownHtml}}
        </div>
        
        <div class="glass-card">
            <div class="content">
                {{mainContent}}
            </div>
        </div>
        
        <footer>
            {{footerText}}
        </footer>
    </div>
    {{countdownScript}}
</body>
</html>`
  }
];