import React from 'react';
import { LandingPageConfig, COLOR_SCHEMES, THEMES } from '../types';

interface PreviewProps {
  config: LandingPageConfig;
}

export function Preview({ config }: PreviewProps) {
  const colorScheme = COLOR_SCHEMES[config.colorScheme];
  const theme = THEMES.find((t) => t.id === config.theme) || THEMES[0];

  const backgroundStyle = config.backgroundColor;
  const gradientStyle = config.useGradient
    ? `linear-gradient(${config.gradientAngle}deg, ${config.gradientStartColor}, ${config.gradientEndColor})`
    : '';

  const countdownHtml = config.includeCountdown
    ? `<div id="countdown" class="countdown">
        <div><span>0</span><small>Days</small></div>
        <div><span>0</span><small>Hours</small></div>
        <div><span>0</span><small>Minutes</small></div>
        <div><span>0</span><small>Seconds</small></div>
      </div>`
    : '';

  const countdownStyles = config.includeCountdown
    ? `
    .countdown {
      font-family: var(--text-font);
      margin: 2rem 0;
      color: var(--title-color);
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
    ${config.countdownStyle === 'minimal' ? `
      .countdown {
        font-size: 2.5rem;
        font-weight: bold;
      }
    ` : config.countdownStyle === 'boxed' ? `
      .countdown > div {
        background: var(--title-color);
        color: var(--background);
        padding: 1.5rem;
        border-radius: 0.5rem;
        min-width: 100px;
        text-align: center;
      }
      .countdown > div > span {
        display: block;
        font-size: 2.5rem;
        font-weight: bold;
      }
      .countdown > div > small {
        font-size: 0.875rem;
        opacity: 0.8;
      }
    ` : config.countdownStyle === 'circles' ? `
      .countdown > div {
        background: var(--background);
        border: 3px solid var(--title-color);
        color: var(--title-color);
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .countdown > div > span {
        font-size: 2rem;
        font-weight: bold;
      }
      .countdown > div > small {
        font-size: 0.75rem;
      }
    ` : config.countdownStyle === 'flip' ? `
      .countdown > div {
        perspective: 400px;
        margin: 0 0.5rem;
        text-align: center;
      }
      .countdown > div > span {
        display: inline-block;
        position: relative;
        padding: 1.5rem 2rem;
        background: var(--title-color);
        color: var(--background);
        font-size: 2rem;
        border-radius: 0.25rem;
        transform-style: preserve-3d;
        transform: rotateX(0deg);
        transition: transform 0.6s;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      }
      .countdown > div > small {
        display: block;
        margin-top: 0.5rem;
        color: var(--title-color);
        text-align: center;
      }
    ` : config.countdownStyle === 'neon' ? `
      .countdown {
        text-shadow: 0 0 10px var(--title-color),
                     0 0 20px var(--title-color),
                     0 0 30px var(--title-color);
      }
      .countdown > div {
        font-size: 3rem;
        font-weight: bold;
        padding: 0.5rem 1.5rem;
        text-align: center;
      }
      .countdown > div > small {
        display: block;
        font-size: 1rem;
        opacity: 0.8;
      }
    ` : ''}`
    : '';

  const countdownScript = config.includeCountdown
    ? `
    <script>
      function updateCountdown() {
        const endDate = new Date("${config.countdownDate}").getTime();
        const now = new Date().getTime();
        const distance = endDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const countdown = document.getElementById("countdown");
        if (!countdown) return;
        
        const spans = countdown.getElementsByTagName("span");
        spans[0].textContent = days;
        spans[1].textContent = hours;
        spans[2].textContent = minutes;
        spans[3].textContent = seconds;
          
        if (distance < 0) {
          document.getElementById("countdown").innerHTML = "<div class='expired'>EXPIRED</div>";
        }
      }
      
      setInterval(updateCountdown, 1000);
      updateCountdown();
    </script>`
    : '';

  const html = theme.template
    .replace('{{language}}', config.language)
    .replace('{{title}}', config.title)
    .replace(/{{titleFont}}/g, config.titleFont.replace(/\s+/g, '+'))
    .replace(/{{subtitleFont}}/g, (config.useSameFont ? config.titleFont : config.subtitleFont).replace(/\s+/g, '+'))
    .replace(/{{textFont}}/g, (config.useSameFont ? config.titleFont : config.textFont).replace(/\s+/g, '+'))
    .replace(/{{footerFont}}/g, (config.useSameFont ? config.titleFont : config.footerFont).replace(/\s+/g, '+'))
    .replace('{{background}}', backgroundStyle)
    .replace('{{gradient}}', gradientStyle)
    .replace('{{titleColor}}', config.titleColor)
    .replace('{{subtitleColor}}', config.subtitleColor)
    .replace('{{textColor}}', config.textColor)
    .replace('{{footerColor}}', config.footerColor)
    .replace('{{countdownStyles}}', countdownStyles)
    .replace('{{countdownHtml}}', countdownHtml)
    .replace('{{countdownScript}}', countdownScript)
    .replace('{{title}}', config.title)
    .replace('{{subtitle}}', config.subtitle)
    .replace('{{mainContent}}', config.mainContent)
    .replace('{{footerText}}', config.footerText);

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 flex flex-col">
        <div className="bg-gray-100 border-b flex items-center px-4 py-2 gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="text-xs text-gray-500 flex-1 text-center">
            Preview - {theme.name}
          </div>
        </div>
        <iframe
          srcDoc={html}
          className="flex-1 w-full border-0"
          title="Preview"
        />
      </div>
    </div>
  );
}