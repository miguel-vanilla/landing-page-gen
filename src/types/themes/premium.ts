import { Theme } from '../core';

export const PREMIUM_THEMES: Theme[] = [
  {
    id: 'parallax-depth',
    name: 'Parallax Depth',
    template: `<!DOCTYPE html>
<html lang="{{language}}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <link href="https://fonts.googleapis.com/css2?family={{titleFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family={{subtitleFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family={{textFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family={{footerFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --background: {{background}};
            --title-color: {{titleColor}};
            --subtitle-color: {{subtitleColor}};
            --text-color: {{textColor}};
            --footer-color: {{footerColor}};
            --title-font: "{{titleFont}}", sans-serif;
            --subtitle-font: "{{subtitleFont}}", sans-serif;
            --text-font: "{{textFont}}", sans-serif;
            --footer-font: "{{footerFont}}", sans-serif;
        }
        {{countdownStyles}}
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html {
            height: 100%;
            overflow-x: hidden;
            perspective: 1px;
            scroll-behavior: smooth;
        }
        body {
            font-family: var(--text-font);
            color: var(--text-color);
            line-height: 1.6;
            background-color: var(--background);
            min-height: 100vh;
            overflow-x: hidden;
        }
        .parallax-container {
            position: relative;
            height: 100vh;
            overflow-y: auto;
            overflow-x: hidden;
            perspective: 10px;
            transform-style: preserve-3d;
            scroll-behavior: smooth;
        }
        .parallax-group {
            position: relative;
            height: 100vh;
            transform-style: preserve-3d;
        }
        .parallax-layer {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .bg-layer {
            transform: translateZ(-10px) scale(2);
            background: linear-gradient(135deg, var(--title-color) 0%, var(--subtitle-color) 100%);
            opacity: 0.2;
            height: 100%;
            width: 100%;
        }
        .mid-layer {
            transform: translateZ(-5px) scale(1.5);
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
        }
        .mid-content {
            position: absolute;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            filter: blur(40px);
            width: 40vw;
            height: 40vw;
            opacity: 0.6;
            animation: float 15s infinite ease-in-out;
        }
        .mid-content:nth-child(2) {
            background: rgba(var(--title-color), 0.1);
            left: 70%;
            top: 20%;
            width: 20vw;
            height: 20vw;
            animation-delay: -5s;
        }
        .mid-content:nth-child(3) {
            background: rgba(var(--subtitle-color), 0.1);
            left: 20%;
            top: 60%;
            width: 30vw;
            height: 30vw;
            animation-delay: -10s;
        }
        .content-layer {
            transform: translateZ(0);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            width: 100%;
            background: radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%);
        }
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0); }
            50% { transform: translateY(-20px) rotate(5deg); }
        }
        .main-content {
            max-width: 800px;
            text-align: center;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 3rem;
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
            border: 1px solid rgba(255,255,255,0.1);
            animation: fadeIn 1s ease-out forwards;
        }
        h1 {
            font-size: clamp(3.5rem, 10vw, 6rem);
            font-family: var(--title-font);
            color: var(--title-color);
            font-weight: 700;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
            background: linear-gradient(to right, var(--title-color), var(--subtitle-color));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        h2 {
            font-size: clamp(1.5rem, 4vw, 2.25rem);
            font-family: var(--subtitle-font);
            color: var(--subtitle-color);
            font-weight: 300;
            margin-bottom: 2rem;
            line-height: 1.4;
            opacity: 0;
            animation: slideUp 1s 0.3s ease-out forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .content {
            margin: 2rem 0;
            font-size: 1.2rem;
            line-height: 1.8;
            opacity: 0;
            animation: slideUp 1s 0.6s ease-out forwards;
        }
        .countdown-wrapper {
            margin: 3rem 0;
            opacity: 0;
            animation: slideUp 1s 0.9s ease-out forwards;
        }
        .content-group {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 4rem 2rem;
            position: relative;
            background: var(--background);
            z-index: 1;
        }
        .content-card {
            max-width: 800px;
            width: 100%;
            background: white;
            border-radius: 20px;
            padding: 3rem;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            position: relative;
            margin-bottom: 3rem;
        }
        footer {
            background: rgba(30, 30, 30, 0.9);
            color: var(--footer-color);
            padding: 3rem 2rem;
            text-align: center;
            font-family: var(--footer-font);
            position: relative;
            z-index: 1;
        }
    </style>
</head>
<body>
    <div class="parallax-container">
        <div class="parallax-group">
            <div class="parallax-layer bg-layer"></div>
            <div class="parallax-layer mid-layer">
                <div class="mid-content"></div>
                <div class="mid-content"></div>
                <div class="mid-content"></div>
            </div>
            <div class="parallax-layer content-layer">
                <div class="main-content">
                    <h1>{{title}}</h1>
                    <h2>{{subtitle}}</h2>
                    <div class="countdown-wrapper">
                        {{countdownHtml}}
                    </div>
                </div>
            </div>
        </div>
        
        <div class="content-group">
            <div class="content-card">
                <div class="content">{{mainContent}}</div>
            </div>
            <footer>{{footerText}}</footer>
        </div>
    </div>
    {{countdownScript}}
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Parallax effect on scroll
            const parallaxContainer = document.querySelector('.parallax-container');
            parallaxContainer.addEventListener('scroll', () => {
                const scrollY = parallaxContainer.scrollTop;
                document.querySelectorAll('.mid-content').forEach((element, index) => {
                    const speed = 0.05 * (index + 1);
                    element.style.transform = \`translateY(\${scrollY * speed}px) rotate(\${scrollY * 0.02}deg)\`;
                });
            });
        });
    </script>
</body>
</html>`
  },
  {
    id: 'morphing-shapes',
    name: 'Morphing Shapes',
    template: `<!DOCTYPE html>
<html lang="{{language}}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <link href="https://fonts.googleapis.com/css2?family={{titleFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family={{subtitleFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family={{textFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family={{footerFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --background: {{background}};
            --title-color: {{titleColor}};
            --subtitle-color: {{subtitleColor}};
            --text-color: {{textColor}};
            --footer-color: {{footerColor}};
            --title-font: "{{titleFont}}", sans-serif;
            --subtitle-font: "{{subtitleFont}}", sans-serif;
            --text-font: "{{textFont}}", sans-serif;
            --footer-font: "{{footerFont}}", sans-serif;
        }
        {{countdownStyles}}
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: var(--text-font);
            color: var(--text-color);
            line-height: 1.6;
            background-color: var(--background);
            min-height: 100vh;
            overflow-x: hidden;
        }
        .morphing-bg {
            position: fixed;
            inset: 0;
            z-index: -1;
            overflow: hidden;
        }
        .shape {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            opacity: 0.4;
            animation: morph 25s ease-in-out infinite;
        }
        .shape-1 {
            top: -15%;
            left: -15%;
            width: 70%;
            height: 70%;
            background: var(--title-color);
            animation-delay: 0s;
        }
        .shape-2 {
            bottom: -15%;
            right: -15%;
            width: 60%;
            height: 60%;
            background: var(--subtitle-color);
            animation-delay: -5s;
        }
        .shape-3 {
            top: 40%;
            left: 60%;
            width: 30%;
            height: 30%;
            background: var(--footer-color);
            animation-delay: -10s;
        }
        @keyframes morph {
            0%, 100% {
                border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
            }
            25% {
                border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
            }
            50% {
                border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            }
            75% {
                border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }
        }
        .content-wrapper {
            position: relative;
            padding: 5rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
            min-height: 100vh;
            display: grid;
            place-items: center;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-radius: 30px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 3rem;
            box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
            max-width: 800px;
            width: 100%;
            text-align: center;
            transform-style: preserve-3d;
            perspective: 1000px;
            animation: cardAppear 1s ease-out forwards;
        }
        @keyframes cardAppear {
            from {
                opacity: 0;
                transform: translateY(30px) rotateX(10deg);
            }
            to {
                opacity: 1;
                transform: translateY(0) rotateX(0);
            }
        }
        h1 {
            font-size: clamp(3rem, 8vw, 5rem);
            font-family: var(--title-font);
            color: var(--title-color);
            font-weight: 800;
            margin-bottom: 1.5rem;
            letter-spacing: -0.03em;
            opacity: 0;
            animation: titleReveal 1.2s 0.3s ease-out forwards;
        }
        @keyframes titleReveal {
            from {
                opacity: 0;
                transform: translateY(-20px);
                filter: blur(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
                filter: blur(0);
            }
        }
        h2 {
            font-size: clamp(1.25rem, 4vw, 2rem);
            font-family: var(--subtitle-font);
            color: var(--subtitle-color);
            font-weight: 300;
            margin-bottom: 2.5rem;
            opacity: 0;
            animation: fadeIn 1.2s 0.6s ease-out forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .countdown-container {
            margin: 2rem 0;
            opacity: 0;
            animation: fadeIn 1.2s 0.9s ease-out forwards;
        }
        .content {
            margin: 3rem 0;
            font-size: 1.2rem;
            line-height: 1.8;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            opacity: 0;
            animation: fadeIn 1.2s 1.2s ease-out forwards;
        }
        .content::before {
            content: "";
            position: absolute;
            top: -1.5rem;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--subtitle-color), transparent);
        }
        footer {
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            color: var(--footer-color);
            padding: 2rem;
            text-align: center;
            font-family: var(--footer-font);
            margin-top: 5rem;
            border-radius: 15px;
            opacity: 0;
            animation: fadeIn 1.2s 1.5s ease-out forwards;
        }
    </style>
</head>
<body>
    <div class="morphing-bg">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
    </div>
    
    <div class="content-wrapper">
        <div class="glass-card">
            <h1>{{title}}</h1>
            <h2>{{subtitle}}</h2>
            
            <div class="countdown-container">
                {{countdownHtml}}
            </div>
            
            <div class="content">
                {{mainContent}}
            </div>
            
            <footer>
                {{footerText}}
            </footer>
        </div>
    </div>
    
    {{countdownScript}}
    <script>
        // Add 3D tilt effect to the card
        const card = document.querySelector('.glass-card');
        document.addEventListener('mousemove', e => {
            if (!card) return;
            
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const percentX = (e.clientX - centerX) / (rect.width / 2);
            const percentY = (e.clientY - centerY) / (rect.height / 2);
            
            const maxRotation = 5; // Maximum rotation in degrees
            
            card.style.transform = \`rotateY(\${percentX * maxRotation}deg) rotateX(\${-percentY * maxRotation}deg)\`;
        });
        
        // Reset card position when mouse leaves
        document.addEventListener('mouseleave', () => {
            if (!card) return;
            card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    </script>
</body>
</html>`
  },
  {
    id: 'neo-vapor',
    name: 'Neo Vaporwave',
    template: `<!DOCTYPE html>
<html lang="{{language}}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <link href="https://fonts.googleapis.com/css2?family={{titleFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family={{subtitleFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family={{textFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family={{footerFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --background: #100537;
            --grid-color: rgba(245, 0, 245, 0.2);
            --title-color: {{titleColor}};
            --subtitle-color: {{subtitleColor}};
            --text-color: {{textColor}};
            --footer-color: {{footerColor}};
            --glow-color: #fc00ff;
            --title-font: "{{titleFont}}", sans-serif;
            --subtitle-font: "{{subtitleFont}}", sans-serif;
            --text-font: "{{textFont}}", sans-serif;
            --footer-font: "{{footerFont}}", sans-serif;
        }
        {{countdownStyles}}
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: var(--text-font);
            color: var(--text-color);
            line-height: 1.6;
            background-color: var(--background);
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
        }
        .perspective-grid {
            position: fixed;
            inset: 0;
            perspective: 3px;
            transform-style: preserve-3d;
            z-index: -1;
            overflow: hidden;
        }
        .grid {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 200%;
            height: 200vh;
            background: linear-gradient(rgba(245, 0, 245, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(245, 0, 245, 0.3) 1px, transparent 1px);
            background-size: 40px 40px;
            transform: translate(-50%, -50%) rotateX(75deg);
            transform-origin: center;
            animation: gridMove 15s linear infinite;
        }
        .sun {
            position: absolute;
            bottom: 5vh;
            left: 50%;
            transform: translateX(-50%);
            width: 60vh;
            height: 60vh;
            background: linear-gradient(to top, #ff00d9, transparent 70%);
            border-radius: 50%;
            filter: blur(40px);
            opacity: 0.7;
        }
        .mountains {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 30vh;
            background: 
                linear-gradient(to bottom right, transparent 49%, #2d0064 50%) 0 0,
                linear-gradient(to bottom left, transparent 49%, #2d0064 50%) 0 0;
            background-size: 60px 30px;
            background-repeat: repeat-x;
        }
        @keyframes gridMove {
            0% { transform: translate(-50%, -50%) rotateX(75deg) translateY(0); }
            100% { transform: translate(-50%, -50%) rotateX(75deg) translateY(40px); }
        }
        .glitch-container {
            padding: 5rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 1;
        }
        .title-container {
            text-align: center;
            position: relative;
            margin-bottom: 3rem;
        }
        h1 {
            font-size: clamp(3rem, 10vw, 7rem);
            font-family: var(--title-font);
            color: #fff;
            font-weight: 800;
            letter-spacing: -0.03em;
            line-height: 1.1;
            position: relative;
            animation: glitch 3s infinite;
            transform-style: preserve-3d;
            text-shadow: 
                0 0 10px var(--glow-color),
                0 0 20px var(--glow-color),
                0 0 40px var(--glow-color),
                0 0 80px var(--glow-color);
        }
        h1::before, h1::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--background);
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
            transform: translateZ(-1px);
        }
        h1::after {
            clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
            transform: translateZ(1px);
        }
        @keyframes glitch {
            0%, 100% { transform: translate(0); }
            7% { transform: translate(-2px, 2px); }
            10% { transform: translate(-2px, -2px); }
            20% { transform: translate(5px, 1px); }
            27% { transform: translate(0); }
            92% { transform: translate(0); }
            95% { transform: translate(5px, 1px); }
            100% { transform: translate(0); }
        }
        h2 {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            font-family: var(--subtitle-font);
            color: var(--subtitle-color);
            font-weight: 300;
            margin-top: 1.5rem;
            margin-bottom: 3rem;
            text-shadow: 
                0 0 5px var(--subtitle-color),
                0 0 10px var(--subtitle-color);
        }
        .content-box {
            background: rgba(0, 0, 0, 0.6);
            border: 1px solid rgba(245, 0, 245, 0.5);
            border-radius: 8px;
            padding: 3rem;
            max-width: 800px;
            width: 100%;
            position: relative;
            overflow: hidden;
            margin-bottom: 3rem;
            box-shadow: 
                0 0 10px rgba(245, 0, 245, 0.3),
                0 0 20px rgba(245, 0, 245, 0.2),
                0 0 30px rgba(245, 0, 245, 0.1);
        }
        .content-box::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, #00ccff, #0033ff, #ff00cc, #cc00ff, #00ccff);
            background-size: 400%;
            z-index: -1;
            animation: borderglow 20s linear infinite;
        }
        @keyframes borderglow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .countdown-container {
            margin: 2rem 0;
            text-align: center;
        }
        .content {
            font-size: 1.2rem;
            line-height: 1.8;
            color: #fff;
            margin: 2rem 0;
        }
        footer {
            color: var(--footer-color);
            padding: 2rem;
            text-align: center;
            font-family: var(--footer-font);
            background: rgba(0, 0, 0, 0.4);
            border-top: 1px solid rgba(245, 0, 245, 0.2);
            width: 100%;
            position: relative;
            z-index: 1;
        }
    </style>
</head>
<body>
    <div class="perspective-grid">
        <div class="sun"></div>
        <div class="grid"></div>
        <div class="mountains"></div>
    </div>
    
    <div class="glitch-container">
        <div class="title-container">
            <h1 data-text="{{title}}">{{title}}</h1>
            <h2>{{subtitle}}</h2>
        </div>
        
        <div class="content-box">
            <div class="countdown-container">
                {{countdownHtml}}
            </div>
            
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
        document.querySelector('h1').setAttribute('data-text', document.querySelector('h1').textContent);
        
        // Add parallax effect on mouse movement
        document.addEventListener('mousemove', e => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            
            document.querySelector('.grid').style.transform = \`translate(-50%, -50%) rotateX(75deg) translateY(0) translateX(\${moveX}px)\`;
            document.querySelector('.sun').style.transform = \`translateX(calc(-50% + \${moveX * 2}px)) translateY(\${moveY * 2}px)\`;
            document.querySelector('.mountains').style.transform = \`translateY(\${moveY}px)\`;
        });
    </script>
</body>
</html>`
  },
  {
    id: 'cosmic-journey',
    name: 'Cosmic Journey',
    template: `<!DOCTYPE html>
<html lang="{{language}}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <link href="https://fonts.googleapis.com/css2?family={{titleFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family={{subtitleFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family={{textFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family={{footerFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --background: #05061a;
            --title-color: {{titleColor}};
            --subtitle-color: {{subtitleColor}};
            --text-color: {{textColor}};
            --footer-color: {{footerColor}};
            --title-font: "{{titleFont}}", sans-serif;
            --subtitle-font: "{{subtitleFont}}", sans-serif;
            --text-font: "{{textFont}}", sans-serif;
            --footer-font: "{{footerFont}}", sans-serif;
        }
        {{countdownStyles}}
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: var(--text-font);
            color: var(--text-color);
            line-height: 1.6;
            background-color: var(--background);
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
        }
        .stars {
            position: fixed;
            inset: 0;
            z-index: -1;
        }
        .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            animation: twinkle var(--duration, 4s) ease-in-out infinite;
            animation-delay: var(--delay, 0s);
            transform: scale(var(--scale, 1));
            opacity: var(--opacity, 0.7);
        }
        @keyframes twinkle {
            0%, 100% { opacity: var(--opacity, 0.7); transform: scale(var(--scale, 1)); }
            50% { opacity: 0.2; transform: scale(0.5); }
        }
        .nebula {
            position: fixed;
            inset: 0;
            background: 
                radial-gradient(circle at 30% 20%, rgba(var(--title-color-rgb, 60, 120, 255), 0.15) 0%, transparent 40%),
                radial-gradient(circle at 70% 60%, rgba(var(--subtitle-color-rgb, 160, 60, 255), 0.15) 0%, transparent 40%);
            opacity: 0.8;
            filter: blur(60px);
            z-index: -1;
        }
        .cosmic-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 6rem 2rem;
            position: relative;
            z-index: 1;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .cosmic-header {
            text-align: center;
            margin-bottom: 4rem;
            position: relative;
        }
        .cosmic-header::after {
            content: "";
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 120px;
            height: 2px;
            background: linear-gradient(to right, transparent, var(--title-color), transparent);
        }
        h1 {
            font-size: clamp(3.5rem, 10vw, 6rem);
            font-family: var(--title-font);
            background: linear-gradient(to right, var(--title-color), var(--subtitle-color));
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            font-weight: 700;
            margin-bottom: 1.5rem;
            position: relative;
            line-height: 1.2;
            text-shadow: 0 0 30px rgba(var(--title-color-rgb, 255, 255, 255), 0.5);
            animation: cosmicPulse 8s ease-in-out infinite;
        }
        @keyframes cosmicPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
        }
        h2 {
            font-size: clamp(1.5rem, 4vw, 2.25rem);
            font-family: var(--subtitle-font);
            color: var(--subtitle-color);
            font-weight: 300;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
            opacity: 0.9;
        }
        .cosmic-card {
            background: rgba(20, 20, 40, 0.6);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 3rem;
            max-width: 800px;
            width: 100%;
            position: relative;
            overflow: hidden;
            transform-style: preserve-3d;
            box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
        }
        .cosmic-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
            pointer-events: none;
        }
        .cosmic-glow {
            position: absolute;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, var(--title-color) 0%, transparent 70%);
            border-radius: 50%;
            filter: blur(40px);
            opacity: 0.15;
            pointer-events: none;
            transition: all 0.3s ease;
        }
        .countdown-container {
            margin: 2.5rem 0;
            text-align: center;
            position: relative;
        }
        .content {
            margin: 2rem 0;
            font-size: 1.2rem;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.85);
        }
        footer {
            margin-top: 4rem;
            padding: 2rem;
            text-align: center;
            font-family: var(--footer-font);
            color: var(--footer-color);
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            width: 100%;
            max-width: 800px;
        }
    </style>
</head>
<body>
    <div class="stars" id="stars"></div>
    <div class="nebula"></div>
    
    <div class="cosmic-container">
        <div class="cosmic-header">
            <h1>{{title}}</h1>
            <h2>{{subtitle}}</h2>
        </div>
        
        <div class="cosmic-card" id="cosmicCard">
            <div class="cosmic-glow" id="glow"></div>
            
            <div class="countdown-container">
                {{countdownHtml}}
            </div>
            
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
        // Generate stars
        function createStars() {
            const stars = document.getElementById('stars');
            const count = Math.floor(window.innerWidth * window.innerHeight / 1000);
            
            for (let i = 0; i < count; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                
                // Random position
                star.style.left = \`\${Math.random() * 100}vw\`;
                star.style.top = \`\${Math.random() * 100}vh\`;
                
                // Random properties
                star.style.setProperty('--opacity', Math.random() * 0.5 + 0.3);
                star.style.setProperty('--scale', Math.random() * 1.5 + 0.5);
                star.style.setProperty('--duration', \`\${Math.random() * 6 + 2}s\`);
                star.style.setProperty('--delay', \`\${Math.random() * 4}s\`);
                
                stars.appendChild(star);
            }
        }
        
        // Moving glow effect
        function setupGlowEffect() {
            const card = document.getElementById('cosmicCard');
            const glow = document.getElementById('glow');
            
            document.addEventListener('mousemove', e => {
                const cardRect = card.getBoundingClientRect();
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                
                // Check if mouse is near the card
                const cardCenterX = cardRect.left + cardRect.width / 2;
                const cardCenterY = cardRect.top + cardRect.height / 2;
                const distance = Math.sqrt(Math.pow(mouseX - cardCenterX, 2) + Math.pow(mouseY - cardCenterY, 2));
                
                if (distance < 300) {
                    const relativeX = mouseX - cardRect.left;
                    const relativeY = mouseY - cardRect.top;
                    
                    glow.style.left = \`\${relativeX - 100}px\`;
                    glow.style.top = \`\${relativeY - 100}px\`;
                    glow.style.opacity = '0.15';
                } else {
                    glow.style.opacity = '0';
                }
            });
        }
        
        document.addEventListener('DOMContentLoaded', () => {
            createStars();
            setupGlowEffect();
        });
    </script>
</body>
</html>`
  },
  {
    id: 'kinetic-typography',
    name: 'Kinetic Typography',
    template: `<!DOCTYPE html>
<html lang="{{language}}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <link href="https://fonts.googleapis.com/css2?family={{titleFont}}:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family={{subtitleFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family={{textFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family={{footerFont}}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --background: {{background}};
            --title-color: {{titleColor}};
            --subtitle-color: {{subtitleColor}};
            --text-color: {{textColor}};
            --footer-color: {{footerColor}};
            --title-font: "{{titleFont}}", sans-serif;
            --subtitle-font: "{{subtitleFont}}", sans-serif;
            --text-font: "{{textFont}}", sans-serif;
            --footer-font: "{{footerFont}}", sans-serif;
            --primary: var(--title-color);
            --secondary: var(--subtitle-color);
        }
        {{countdownStyles}}
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: var(--text-font);
            color: var(--text-color);
            line-height: 1.6;
            background-color: var(--background);
            min-height: 100vh;
            overflow-x: hidden;
        }
        .grain-overlay {
            position: fixed;
            inset: 0;
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=');
            opacity: 0.15;
            z-index: 2;
            pointer-events: none;
        }
        .kinetic-wrapper {
            max-width: 1200px;
            margin: 0 auto;
            padding: 5vh 2rem;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            z-index: 1;
        }
        .hero-section {
            height: 90vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        .title-wrapper {
            overflow: hidden;
            position: relative;
            display: inline-block;
            margin-bottom: 2rem;
        }
        .char-container {
            display: inline-block;
            white-space: pre;
            opacity: 0;
            transform: translateY(100%);
            animation: fadeAndRise 0.5s forwards;
            animation-delay: calc(var(--char-index) * 0.1s);
        }
        @keyframes fadeAndRise {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        h1 {
            font-size: clamp(4rem, 15vw, 10rem);
            font-family: var(--title-font);
            color: var(--title-color);
            font-weight: 900;
            line-height: 1;
            letter-spacing: -0.05em;
            text-transform: uppercase;
        }
        .subtitle-wrapper {
            overflow: hidden;
            margin-bottom: 3rem;
            position: relative;
        }
        h2 {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            font-family: var(--subtitle-font);
            color: var(--subtitle-color);
            font-weight: 300;
            opacity: 0;
            animation: fadeIn 1s 1.5s forwards;
        }
        @keyframes fadeIn {
            to { opacity: 1; }
        }
        .horizontal-line {
            width: 100%;
            max-width: 100px;
            height: 4px;
            background: linear-gradient(90deg, transparent, var(--primary), transparent);
            margin: 2rem auto;
            opacity: 0;
            animation: growLine 1s 1.8s forwards;
        }
        @keyframes growLine {
            from { transform: scaleX(0); opacity: 0; }
            to { transform: scaleX(1); opacity: 1; }
        }
        .content-section {
            padding: 5rem 2rem;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            max-width: 900px;
            margin: 0 auto;
            box-shadow: 0 20px 80px rgba(0, 0, 0, 0.15);
            position: relative;
        }
        .content-section::before {
            content: '';
            position: absolute;
            inset: -1px;
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            border-radius: 21px;
            z-index: -1;
            opacity: 0.3;
        }
        .countdown-container {
            margin: 3rem auto;
            opacity: 0;
            animation: fadeIn 1s 2s forwards;
        }
        .content {
            font-size: 1.25rem;
            line-height: 1.8;
            max-width: 700px;
            margin: 0 auto;
            opacity: 0;
            animation: fadeIn 1s 2.2s forwards;
        }
        .scroll-indicator {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 60px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 20px;
            display: flex;
            justify-content: center;
            opacity: 0;
            animation: fadeIn 1s 2.5s forwards;
        }
        .scroll-indicator::before {
            content: '';
            width: 8px;
            height: 8px;
            background: var(--primary);
            border-radius: 50%;
            margin-top: 10px;
            animation: scrollDown 2s infinite;
        }
        @keyframes scrollDown {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(30px); opacity: 0; }
        }
        footer {
            text-align: center;
            padding: 3rem;
            font-family: var(--footer-font);
            color: var(--footer-color);
            position: relative;
            margin-top: 4rem;
            opacity: 0;
            animation: fadeIn 1s 2.5s forwards;
        }
        .noise-container {
            position: fixed;
            inset: 0;
            background: transparent;
            z-index: -1;
            overflow: hidden;
        }
        .noise-element {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200%;
            height: 200%;
            background: radial-gradient(
                circle at center,
                rgba(var(--title-color-rgb, 0, 0, 0), 0.1) 0%,
                transparent 70%
            );
            mix-blend-mode: overlay;
            pointer-events: none;
            animation: noiseMove 20s infinite alternate;
        }
        @keyframes noiseMove {
            0% { transform: translate(-50%, -50%) scale(1) rotate(0); }
            100% { transform: translate(-40%, -60%) scale(1.1) rotate(3deg); }
        }
    </style>
</head>
<body>
    <div class="grain-overlay"></div>
    <div class="noise-container">
        <div class="noise-element"></div>
    </div>
    
    <div class="kinetic-wrapper">
        <section class="hero-section">
            <div class="title-wrapper" id="titleWrapper">
                <h1 id="kineticTitle">{{title}}</h1>
            </div>
            
            <div class="subtitle-wrapper">
                <h2>{{subtitle}}</h2>
            </div>
            
            <div class="horizontal-line"></div>
            
            <div class="countdown-container">
                {{countdownHtml}}
            </div>
            
            <div class="scroll-indicator"></div>
        </section>
        
        <section class="content-section">
            <div class="content">
                {{mainContent}}
            </div>
        </section>
        
        <footer>
            {{footerText}}
        </footer>
    </div>
    
    {{countdownScript}}
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Kinetic typography effect
            const titleElement = document.getElementById('kineticTitle');
            const text = titleElement.textContent;
            let newHTML = '';
            
            // Split text into characters with animation delay
            for (let i = 0; i < text.length; i++) {
                const char = text[i] === ' ' ? '&nbsp;' : text[i];
                newHTML += \`<span class="char-container" style="--char-index: \${i}">\${char}</span>\`;
            }
            
            titleElement.innerHTML = newHTML;
            
            // Parallax effect on scroll
            window.addEventListener('scroll', () => {
                const scrollPos = window.scrollY;
                document.querySelectorAll('.char-container').forEach((char, index) => {
                    const delay = index * 0.02;
                    const movement = scrollPos * (0.1 + delay * 0.05);
                    char.style.transform = \`translateY(\${movement}px)\`;
                });
                
                document.querySelector('.subtitle-wrapper').style.transform = \`translateY(\${scrollPos * 0.15}px)\`;
            });
        });
    </script>
</body>
</html>`
  }
];