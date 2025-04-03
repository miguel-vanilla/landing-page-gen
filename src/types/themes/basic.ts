import { Theme } from '../core';

export const BASE_THEMES: Theme[] = [
  {
    id: 'centered-simple',
    name: 'Elegant Centered',
    template: `
<!DOCTYPE html>
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
            --text: {{text}};
            --title-color: {{titleColor}};
            --subtitle-color: {{subtitleColor}};
            --text-color: {{textColor}};
            --footer-color: {{footerColor}};
            --gradient: {{gradient}};            
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
            position: relative;
        }
        body::before {
            content: '';
            position: absolute;
            inset: 0;
            background: var(--gradient);
            mix-blend-mode: multiply;
            pointer-events: none;
            opacity: var(--gradient) ? 1 : 0;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 4rem 2rem;
            text-align: center;
            position: relative;
        }
        h1 {
            font-size: clamp(2.5rem, 8vw, 5rem);
            margin-bottom: 1rem;
            font-family: var(--title-font);
            color: var(--title-color);
            font-weight: 700;
            letter-spacing: -0.02em;
            line-height: 1.2;
        }
        h2 {
            font-size: clamp(1.25rem, 4vw, 2rem);
            margin-bottom: 2rem;
            font-family: var(--subtitle-font);
            color: var(--subtitle-color);
            font-weight: 400;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }
        .content {
            margin: 2rem 0;
            font-size: 1.1rem;
            font-family: var(--text-font);
            color: var(--text-color);
        }
        footer {
            margin-top: 4rem;
            padding: 2rem;
            border-top: 1px solid var(--subtitle-color);
            font-family: var(--footer-font);
            color: var(--footer-color);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>{{title}}</h1>
        <h2>{{subtitle}}</h2>
        {{countdownHtml}}
        <div class="content">{{mainContent}}</div>
        <footer>{{footerText}}</footer>
    </div>
    {{countdownScript}}
</body>
</html>`
  },
  {
    id: 'split-screen',
    name: 'Split Screen',
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
            --text: {{text}};
            --title-color: {{titleColor}};
            --subtitle-color: {{subtitleColor}};
            --text-color: {{textColor}};
            --footer-color: {{footerColor}};
            --gradient: {{gradient}};
            --title-font: "{{titleFont}}", sans-serif;
            --subtitle-font: "{{subtitleFont}}", sans-serif;
            --text-font: "{{textFont}}", sans-serif;
            --footer-font: "{{footerFont}}", sans-serif;
        }
        {{countdownStyles}}
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            min-height: 100vh;
            display: grid;
            grid-template-columns: 1fr 1fr;
            font-family: var(--text-font);
            color: var(--text-color);
            line-height: 1.6;
            background-color: var(--background);
            position: relative;
        }
        @media (max-width: 768px) {
            body {
                grid-template-columns: 1fr;
            }
        }
        .left-panel {
            padding: 4rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        .left-panel::before {
            content: '';
            position: absolute;
            inset: 0;
            background: var(--gradient);
            mix-blend-mode: multiply;
            pointer-events: none;
            opacity: var(--gradient) ? 1 : 0;
        }
        .right-panel {
            background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1080&q=80') center/cover;
            position: relative;
        }
        .right-panel::after {
            content: '';
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.3);
        }
        h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            margin-bottom: 1.5rem;
            font-family: var(--title-font);
            color: var(--title-color);
            font-weight: 700;
            position: relative;
        }
        h2 {
            font-size: clamp(1.25rem, 2.5vw, 1.75rem);
            margin-bottom: 2rem;
            font-family: var(--subtitle-font);
            color: var(--subtitle-color);
            font-weight: 400;
            position: relative;
        }
        .content {
            position: relative;
            margin: 2rem 0;
            font-size: 1.1rem;
        }
        footer {
            position: relative;
            margin-top: auto;
            padding-top: 2rem;
            font-family: var(--footer-font);
            color: var(--footer-color);
            border-top: 1px solid rgba(var(--footer-color), 0.2);
        }
    </style>
</head>
<body>
    <div class="left-panel">
        <h1>{{title}}</h1>
        <h2>{{subtitle}}</h2>
        {{countdownHtml}}
        <div class="content">{{mainContent}}</div>
        <footer>{{footerText}}</footer>
    </div>
    <div class="right-panel"></div>
    {{countdownScript}}
</body>
</html>`
  },
  {
    id: 'hero-image',
    name: 'Hero Image',
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
            --text: {{text}};
            --title-color: {{titleColor}};
            --subtitle-color: {{subtitleColor}};
            --text-color: {{textColor}};
            --footer-color: {{footerColor}};
            --gradient: {{gradient}};
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
        }
        .hero {
            height: 100vh;
            background: url('https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=1080&q=80') center/cover;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem;
        }
        .hero::before {
            content: '';
            position: absolute;
            inset: 0;
            background: var(--gradient), rgba(0, 0, 0, 0.5);
            mix-blend-mode: multiply;
        }
        .hero-content {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
        }
        h1 {
            font-size: clamp(3rem, 10vw, 6rem);
            margin-bottom: 1rem;
            font-family: var(--title-font);
            color: white;
            font-weight: 700;
            letter-spacing: -0.02em;
            line-height: 1.1;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        h2 {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            margin-bottom: 2rem;
            font-family: var(--subtitle-font);
            color: rgba(255, 255, 255, 0.9);
            font-weight: 400;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
        .content {
            background: var(--background);
            padding: 4rem 2rem;
            text-align: center;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        footer {
            text-align: center;
            padding: 2rem;
            background: rgba(0, 0, 0, 0.05);
            font-family: var(--footer-font);
            color: var(--footer-color);
        }
    </style>
</head>
<body>
    <div class="hero">
        <div class="hero-content">
            <h1>{{title}}</h1>
            <h2>{{subtitle}}</h2>
            {{countdownHtml}}
        </div>
    </div>
    <div class="content">
        <div class="container">
            {{mainContent}}
        </div>
    </div>
    <footer>{{footerText}}</footer>
    {{countdownScript}}
</body>
</html>`
  },
  {
    id: 'modern-stack',
    name: 'Modern Stack',
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
            --text: {{text}};
            --title-color: {{titleColor}};
            --subtitle-color: {{subtitleColor}};
            --text-color: {{textColor}};
            --footer-color: {{footerColor}};
            --gradient: {{gradient}};
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
        }
        .stack {
            display: grid;
            grid-template-rows: auto 1fr auto;
            min-height: 100vh;
            gap: 2rem;
            position: relative;
        }
        .header {
            padding: 6rem 2rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        .header::before {
            content: '';
            position: absolute;
            inset: 0;
            background: var(--gradient);
            mix-blend-mode: multiply;
            opacity: var(--gradient) ? 1 : 0;
        }
        .header::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100px;
            background: linear-gradient(to bottom, transparent, var(--background));
        }
        h1 {
            font-size: clamp(3rem, 8vw, 5rem);
            margin-bottom: 1rem;
            font-family: var(--title-font);
            color: var(--title-color);
            font-weight: 800;
            letter-spacing: -0.03em;
            line-height: 1.1;
            position: relative;
        }
        h2 {
            font-size: clamp(1.25rem, 3vw, 2rem);
            margin-bottom: 2rem;
            font-family: var(--subtitle-font);
            color: var(--subtitle-color);
            font-weight: 400;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            position: relative;
        }
        .content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 2rem;
            font-size: 1.125rem;
            position: relative;
        }
        footer {
            text-align: center;
            padding: 3rem 2rem;
            font-family: var(--footer-font);
            color: var(--footer-color);
            background: rgba(0, 0, 0, 0.03);
            position: relative;
        }
    </style>
</head>
<body>
    <div class="stack">
        <header class="header">
            <h1>{{title}}</h1>
            <h2>{{subtitle}}</h2>
            {{countdownHtml}}
        </header>
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
    id: 'minimal-cards',
    name: 'Minimal Cards',
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
            --text: {{text}};
            --title-color: {{titleColor}};
            --subtitle-color: {{subtitleColor}};
            --text-color: {{textColor}};
            --footer-color: {{footerColor}};
            --gradient: {{gradient}};
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
            display: flex;
            flex-direction: column;
        }
        .cards-container {
            flex: 1;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            padding: 4rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
            width: 100%;
        }
        .card {
            background: white;
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            display: flex;
            flex-direction: column;
            gap: 1rem;
            position: relative;
            overflow: hidden;
        }
        .card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: var(--gradient);
            mix-blend-mode: multiply;
            opacity: var(--gradient) ? 0.1 : 0;
        }
        h1 {
            font-size: clamp(2rem, 5vw, 3.5rem);
            font-family: var(--title-font);
            color: var(--title-color);
            font-weight: 700;
            line-height: 1.2;
            position: relative;
        }
        h2 {
            font-size: clamp(1.25rem, 2.5vw, 1.5rem);
            font-family: var(--subtitle-font);
            color: var(--subtitle-color);
            font-weight: 400;
            position: relative;
        }
        .content {
            font-size: 1.1rem;
            position: relative;
        }
        footer {
            text-align: center;
            padding: 2rem;
            font-family: var(--footer-font);
            color: var(--footer-color);
            background: rgba(0, 0, 0, 0.02);
            position: relative;
        }
    </style>
</head>
<body>
    <div class="cards-container">
        <div class="card">
            <h1>{{title}}</h1>
            <h2>{{subtitle}}</h2>
        </div>
        <div class="card">
            {{countdownHtml}}
        </div>
        <div class="card">
            <div class="content">{{mainContent}}</div>
        </div>
    </div>
    <footer>{{footerText}}</footer>
    {{countdownScript}}
</body>
</html>`
  },
  {
    id: 'gradient-mesh',
    name: 'Gradient Mesh',
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
            --text: {{text}};
            --title-color: {{titleColor}};
            --subtitle-color: {{subtitleColor}};
            --text-color: {{textColor}};
            --footer-color: {{footerColor}};
            --gradient: {{gradient}};
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
            position: relative;
            overflow-x: hidden;
        }
        .mesh-gradient {
            position: fixed;
            inset: 0;
            background: 
                radial-gradient(circle at 0% 0%, var(--title-color) 0%, transparent 50%),
                radial-gradient(circle at 100% 0%, var(--subtitle-color) 0%, transparent 50%),
                radial-gradient(circle at 100% 100%, var(--footer-color) 0%, transparent 50%),
                radial-gradient(circle at 0% 100%, var(--text-color) 0%, transparent 50%);
            opacity: 0.1;
            pointer-events: none;
        }
        .container {
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
            padding: 6rem 2rem;
            display: grid;
            gap: 4rem;
        }
        .header {
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }
        h1 {
            font-size: clamp(3.5rem, 10vw, 7rem);
            font-family: var(--title-font);
            color: var(--title-color);
            font-weight: 800;
            line-height: 1;
            letter-spacing: -0.04em;
            margin-bottom: 2rem;
        }
        h2 {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            font-family: var(--subtitle-font);
            color: var(--subtitle-color);
            font-weight: 400;
            line-height: 1.4;
            max-width: 600px;
            margin: 0 auto;
        }
        .content {
            font-size: 1.25rem;
            max-width: 700px;
            margin: 0 auto;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            border-radius: 1rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        footer {
            text-align: center;
            padding: 3rem;
            font-family: var(--footer-font);
            color: var(--footer-color);
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            background: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(5px);
        }
    </style>
</head>
<body>
    <div class="mesh-gradient"></div>
    <div class="container">
        <header class="header">
            <h1>{{title}}</h1>
            <h2>{{subtitle}}</h2>
            {{countdownHtml}}
        </header>
        <main class="content">
            {{mainContent}}
        </main>
    </div>
    <footer>{{footerText}}</footer>
    {{countdownScript}}
</body>
</html>`
  },
  {
    id: 'dynamic-diagonal',
    name: 'Dynamic Diagonal',
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
            --gradient: {{gradient}};
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
            position: relative;
            overflow-x: hidden;
        }
        .diagonal-container {
            position: relative;
            min-height: 100vh;
            display: grid;
            grid-template-rows: 1fr auto;
        }
        .diagonal-content {
            position: relative;
            padding: 6rem 2rem;
            clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
            background: var(--gradient), rgba(0, 0, 0, 0.05);
        }
        .content-wrapper {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            gap: 4rem;
        }
        .header {
            text-align: left;
            max-width: 800px;
        }
        h1 {
            font-size: clamp(3rem, 8vw, 6rem);
            font-family: var(--title-font);
            color: var(--title-color);
            font-weight: 800;
            line-height: 1.1;
            letter-spacing: -0.03em;
            margin-bottom: 2rem;
        }
        h2 {
            font-size: clamp(1.5rem, 3vw, 2rem);
            font-family: var(--subtitle-font);
            color: var(--subtitle-color);
            font-weight: 400;
            max-width: 600px;
        }
        .content {
            font-size: 1.25rem;
            max-width: 700px;
            padding: 3rem;
            background: white;
            border-radius: 1rem;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            margin-left: auto;
            position: relative;
        }
        footer {
            text-align: center;
            padding: 3rem 2rem;
            font-family: var(--footer-font);
            color: var(--footer-color);
            background: white;
        }
    </style>
</head>
<body>
    <div class="diagonal-container">
        <div class="diagonal-content">
            <div class="content-wrapper">
                <header class="header">
                    <h1>{{title}}</h1>
                    <h2>{{subtitle}}</h2>
                    {{countdownHtml}}
                </header>
                <main class="content">
                    {{mainContent}}
                </main>
            </div>
        </div>
        <footer>{{footerText}}</footer>
    </div>
    {{countdownScript}}
</body>
</html>`
  }
];