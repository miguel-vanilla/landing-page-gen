import React from 'react';
import { Download, Eye } from 'lucide-react';
import { ConfigPanel } from './components/ConfigPanel';
import { Preview } from './components/Preview';
import { LandingPageConfig, DEFAULT_CONTENT } from './types';

function downloadHtml(html: string) {
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'landing-page.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function App() {
  const [config, setConfig] = React.useState<LandingPageConfig>({
    colorScheme: 'minimal',
    backgroundColor: '#ffffff',
    useSameFont: true,
    titleFont: 'Inter',
    subtitleFont: 'Inter',
    textFont: 'Inter',
    footerFont: 'Inter',
    titleColor: '#2d3436',
    subtitleColor: '#636e72',
    textColor: '#2d3436',
    footerColor: '#b2bec3',
    useGradient: false,
    gradientStartColor: '#3b82f6',
    gradientEndColor: '#60a5fa',
    gradientAngle: 45,
    font: 'Inter',
    language: 'en',
    includeCountdown: false,
    countdownDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 16),
    theme: 'centered-simple',
    ...DEFAULT_CONTENT.en,
  });

  const [showPreview, setShowPreview] = React.useState(false);

  const handleConfigChange = (updates: Partial<LandingPageConfig>) => {
    setConfig((prev) => {
      const newConfig = { ...prev, ...updates };
      // Update content when language changes
      if (updates.language && updates.language !== prev.language) {
        return {
          ...newConfig,
          countdownDate: prev.countdownDate,
          ...DEFAULT_CONTENT[updates.language as keyof typeof DEFAULT_CONTENT],
        };
      }
      return newConfig;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex">
      <ConfigPanel config={config} onChange={handleConfigChange} />
      
      <div className="flex-1 flex flex-col">
        <div className="bg-white p-5 shadow-lg flex justify-between items-center border-b border-gray-200 backdrop-blur-sm bg-white/90 sticky top-0 z-10">
          <h2 className="text-xl font-medium text-gray-700">Preview</h2>
          <div className="flex gap-3">
            <button
              onClick={() => setShowPreview(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg active:shadow-sm duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Eye className="w-4 h-4" />
              Preview Full Page
            </button>
            <button
              onClick={() => downloadHtml(document.querySelector('iframe')?.srcdoc || '')}
              className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg active:shadow-sm duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              Generate & Download
            </button>
          </div>
        </div>
        
        <div className="flex-1 flex p-6">
          <Preview config={config} />
        </div>
        
        {showPreview && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col animate-scaleIn">
              <div className="p-5 border-b flex justify-between items-center bg-gray-50 rounded-t-xl">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-indigo-600" />
                  Full Page Preview
                </h2>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-gray-500 hover:text-gray-700 bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center shadow-sm hover:shadow transition-all"
                >
                  ×
                </button>
              </div>
              <div className="flex-1 p-5 bg-gray-100">
                <div className="w-full h-full bg-white rounded-lg shadow-inner overflow-hidden border border-gray-200">
                  <iframe
                    srcDoc={document.querySelector('iframe')?.srcdoc}
                    className="w-full h-full border-0"
                    title="Full Preview"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
