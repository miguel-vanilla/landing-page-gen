import React from 'react';
import { Settings, Palette, Type, Languages, Timer, Layout, ChevronDown, Droplets, Clock, Layers, Heart } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import { COLOR_SCHEMES, FONTS, LANGUAGES, THEMES, LandingPageConfig } from '../types';

interface ConfigPanelProps {
  config: LandingPageConfig;
  onChange: (config: Partial<LandingPageConfig>) => void;
}

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string; value: string }
>(({ children, className = '', value }, ref) => (
  <Accordion.Item
    ref={ref}
    value={value}
    className={`mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b shadow-sm transition-all duration-200 data-[state=open]:shadow-md ${className}`}
  >
    {children}
  </Accordion.Item>
));

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode; className?: string }
>(({ children, className = '', ...props }, ref) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      ref={ref}
      className={`group flex flex-1 items-center justify-between bg-white px-5 py-4 text-lg leading-none outline-none border-b border-gray-100 transition-colors duration-200 hover:bg-blue-50 ${className}`}
      {...props}
    >
      {children}
      <ChevronDown className="text-gray-400 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=open]:rotate-180 group-data-[state=open]:text-blue-500 group-hover:text-blue-400" />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string }
>(({ children, className = '', ...props }, ref) => (
  <Accordion.Content
    ref={ref}
    className={`data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden bg-white ${className}`}
    {...props}
  >
    <div className="px-5 py-4 border-t border-gray-100">{children}</div>
  </Accordion.Content>
));

export function ConfigPanel({ config, onChange }: ConfigPanelProps) {
  return (
    <div className="w-96 bg-white p-6 border-r border-gray-200 shadow-xl h-screen overflow-y-auto flex flex-col">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Layers className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-blue-600">Landing Page Gen</h1>
        </div>
        <div className="h-1 w-14 bg-blue-500 rounded-full ml-8"></div>
      </div>
      <hr></hr>      
      <Accordion.Root type="multiple" defaultValue={['colors']} className="space-y-4">
        <AccordionItem value="colors">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <Palette className="w-5 h-5 accordion-icon" />
              Color Scheme
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Template</label>
                <select
                  className="custom-select"
                  value={config.colorScheme}
                  onChange={(e) => {
                    const scheme = COLOR_SCHEMES[e.target.value];
                    onChange({
                      colorScheme: e.target.value,
                      backgroundColor: scheme.background,
                      titleColor: scheme.title,
                      subtitleColor: scheme.subtitle,
                      textColor: scheme.text,
                      footerColor: scheme.footer,
                      useGradient: scheme.useGradient || false,
                      ...(scheme.useGradient ? {
                        gradientStartColor: scheme.gradientStart,
                        gradientEndColor: scheme.gradientEnd,
                        gradientAngle: scheme.gradientAngle
                      } : {})
                    });
                  }}
                >
                  {Object.entries(COLOR_SCHEMES).map(([key, scheme]) => (
                    <option key={key} value={key}>
                      {scheme.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Colors</label>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-gray-500 mb-1 block">Background</span>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={config.backgroundColor}
                        onChange={(e) => onChange({ backgroundColor: e.target.value })}
                        className="h-10 w-16 cursor-pointer rounded border border-gray-200 shadow-sm"
                      />
                      <input
                        type="text"
                        value={config.backgroundColor}
                        onChange={(e) => onChange({ backgroundColor: e.target.value })}
                        className="flex-1 p-2.5 border rounded-md font-mono text-sm transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-xs text-gray-500 mb-1 block">Title</span>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={config.titleColor}
                        onChange={(e) => onChange({ titleColor: e.target.value })}
                        className="h-10 w-16 cursor-pointer rounded border border-gray-200 shadow-sm"
                      />
                      <input
                        type="text"
                        value={config.titleColor}
                        onChange={(e) => onChange({ titleColor: e.target.value })}
                        className="flex-1 p-2.5 border rounded-md font-mono text-sm transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-gray-500 mb-1 block">Subtitle</span>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={config.subtitleColor}
                        onChange={(e) => onChange({ subtitleColor: e.target.value })}
                        className="h-10 w-16 cursor-pointer rounded border border-gray-200 shadow-sm"
                      />
                      <input
                        type="text"
                        value={config.subtitleColor}
                        onChange={(e) => onChange({ subtitleColor: e.target.value })}
                        className="flex-1 p-2.5 border rounded-md font-mono text-sm transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-gray-500 mb-1 block">Text</span>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={config.textColor}
                        onChange={(e) => onChange({ textColor: e.target.value })}
                        className="h-10 w-16 cursor-pointer rounded border border-gray-200 shadow-sm"
                      />
                      <input
                        type="text"
                        value={config.textColor}
                        onChange={(e) => onChange({ textColor: e.target.value })}
                        className="flex-1 p-2.5 border rounded-md font-mono text-sm transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-gray-500 mb-1 block">Footer</span>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={config.footerColor}
                        onChange={(e) => onChange({ footerColor: e.target.value })}
                        className="h-10 w-16 cursor-pointer rounded border border-gray-200 shadow-sm"
                      />
                      <input
                        type="text"
                        value={config.footerColor}
                        onChange={(e) => onChange({ footerColor: e.target.value })}
                        className="flex-1 p-2.5 border rounded-md font-mono text-sm transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <label className="flex items-center gap-2 mb-4">
                  <input
                    type="checkbox"
                    checked={config.useGradient}
                    onChange={(e) => onChange({ useGradient: e.target.checked })}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-colors"
                  />
                  <span className="flex items-center gap-1">
                    <Droplets className="w-4 h-4" />
                    Enable Gradient Overlay
                  </span>
                </label>
                
                {config.useGradient && (
                  <div className="space-y-4 pl-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Start Color</label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={config.gradientStartColor}
                          onChange={(e) => onChange({ gradientStartColor: e.target.value })}
                          className="h-10 w-16 cursor-pointer rounded border border-gray-200 shadow-sm"
                        />
                        <input
                          type="text"
                          value={config.gradientStartColor}
                          onChange={(e) => onChange({ gradientStartColor: e.target.value })}
                          className="flex-1 p-2.5 border rounded-md font-mono text-sm transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">End Color</label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={config.gradientEndColor}
                          onChange={(e) => onChange({ gradientEndColor: e.target.value })}
                          className="h-10 w-16 cursor-pointer rounded border border-gray-200 shadow-sm"
                        />
                        <input
                          type="text"
                          value={config.gradientEndColor}
                          onChange={(e) => onChange({ gradientEndColor: e.target.value })}
                          className="flex-1 p-2.5 border rounded-md font-mono text-sm transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Angle (degrees)</label>
                      <div className="flex gap-2 items-center">
                        <input
                          type="range"
                          min="0"
                          max="360"
                          value={config.gradientAngle}
                          onChange={(e) => onChange({ gradientAngle: Number(e.target.value) })}
                          className="flex-1 h-2 accent-blue-500 cursor-pointer"
                        />
                        <span className="w-12 text-center font-mono">{config.gradientAngle}°</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="typeface">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <Type className="w-5 h-5 accordion-icon" />
              Typography
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={config.useSameFont}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    if (checked) {
                      // When enabling "use same font", set all fonts to title font
                      onChange({
                        useSameFont: checked,
                        subtitleFont: config.titleFont,
                        textFont: config.titleFont,
                        footerFont: config.titleFont
                      });
                    } else {
                      onChange({ useSameFont: checked });
                    }
                  }}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-colors"
                />
                Use same font for all text
              </label>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Title Font</label>
                  <select
                    className="custom-select"
                    value={config.titleFont}
                    onChange={(e) => {
                      const newFont = e.target.value;
                      if (config.useSameFont) {
                        onChange({
                          titleFont: newFont,
                          subtitleFont: newFont,
                          textFont: newFont,
                          footerFont: newFont
                        });
                      } else {
                        onChange({ titleFont: newFont });
                      }
                    }}
                  >
                    {FONTS.map((font) => (
                      <option key={font} value={font}>{font}</option>
                    ))}
                  </select>
                </div>

                {!config.useSameFont && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">Subtitle Font</label>
                      <select
                        className="custom-select"
                        value={config.subtitleFont}
                        onChange={(e) => onChange({ subtitleFont: e.target.value })}
                      >
                        {FONTS.map((font) => (
                          <option key={font} value={font}>{font}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Content Font</label>
                      <select
                        className="custom-select"
                        value={config.textFont}
                        onChange={(e) => onChange({ textFont: e.target.value })}
                      >
                        {FONTS.map((font) => (
                          <option key={font} value={font}>{font}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Footer Font</label>
                      <select
                        className="custom-select"
                        value={config.footerFont}
                        onChange={(e) => onChange({ footerFont: e.target.value })}
                      >
                        {FONTS.map((font) => (
                          <option key={font} value={font}>{font}</option>
                        ))}
                      </select>
                    </div>
                  </>
                )}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="language">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <Languages className="w-5 h-5 accordion-icon" />
              Language
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <select
              className="custom-select"
              value={config.language}
              onChange={(e) => onChange({ language: e.target.value })}
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="timer">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <Timer className="w-5 h-5 accordion-icon" />
              Countdown Timer
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={config.includeCountdown}
                  onChange={(e) => onChange({ includeCountdown: e.target.checked })}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-colors"
                />
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Include Countdown Timer
                </span>
              </label>
              {config.includeCountdown && (
                <div className="space-y-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Timer Style</label>
                    <select
                      className="custom-select"
                      value={config.countdownStyle}
                      onChange={(e) => onChange({ countdownStyle: e.target.value })}
                    >
                      <option value="minimal">Minimal</option>
                      <option value="boxed">Boxed</option>
                      <option value="circles">Circles</option>
                      <option value="flip">Flip</option>
                      <option value="neon">Neon</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">End Date & Time</label>
                    <input
                      type="datetime-local"
                      value={config.countdownDate}
                      onChange={(e) => onChange({ countdownDate: e.target.value })}
                      className="w-full p-2.5 border rounded-md transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                    />
                  </div>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="theme">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <Layout className="w-5 h-5 accordion-icon" />
              Theme/Layout
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <select
              className="custom-select"
              value={config.theme}
              onChange={(e) => onChange({ theme: e.target.value })}
            >
              <optgroup label="BASIC THEMES" className="option-group">
                {THEMES.filter(theme => theme.id.includes('centered') || 
                                        theme.id.includes('split') || 
                                        theme.id.includes('hero') || 
                                        theme.id.includes('modern') || 
                                        theme.id.includes('minimal') || 
                                        theme.id.includes('gradient') ||
                                        theme.id.includes('diagonal')).map((theme) => (
                  <option key={theme.id} value={theme.id}>
                    {theme.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="SPECIAL THEMES" className="option-group">
                {THEMES.filter(theme => theme.id.includes('brutalism') || 
                                        theme.id.includes('terminal') || 
                                        theme.id.includes('polymorphism') || 
                                        theme.id.includes('wobble') || 
                                        theme.id.includes('glassmorphism')).map((theme) => (
                  <option key={theme.id} value={theme.id}>
                    {theme.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="PREMIUM THEMES" className="option-group">
                {THEMES.filter(theme => theme.id.includes('parallax') || 
                                        theme.id.includes('morphing') || 
                                        theme.id.includes('neo-vapor') || 
                                        theme.id.includes('cosmic') || 
                                        theme.id.includes('kinetic')).map((theme) => (
                  <option key={theme.id} value={theme.id}>
                    {theme.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="content">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <Type className="w-5 h-5 accordion-icon" />
              Content
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Page Title</label>
                <input
                  type="text"
                  value={config.title}
                  onChange={(e) => onChange({ title: e.target.value })}
                  className="w-full p-2.5 border rounded-md transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  placeholder="Enter page title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Subtitle</label>
                <input
                  type="text"
                  value={config.subtitle}
                  onChange={(e) => onChange({ subtitle: e.target.value })}
                  className="w-full p-2.5 border rounded-md transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  placeholder="Enter subtitle"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Main Content</label>
                <textarea
                  value={config.mainContent}
                  onChange={(e) => onChange({ mainContent: e.target.value })}
                  className="w-full p-2.5 border rounded-md transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none h-32"
                  placeholder="Enter main content"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Footer Text</label>
                <input
                  type="text"
                  value={config.footerText}
                  onChange={(e) => onChange({ footerText: e.target.value })}
                  className="w-full p-2.5 border rounded-md transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  placeholder="Enter footer text"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion.Root>
      
      <div className="mt-auto pt-6 border-t border-gray-200 text-center text-sm text-gray-500 flex items-center justify-center gap-1">
        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by Miguel Lobo
      </div>
    </div>
  );
}