'use client';

import React, { useState, useEffect } from 'react';

// Configure your business contact details here:
const WHATSAPP_NUMBER = '639000000000'; // Replace with your WhatsApp number (e.g. 639171234567 for Philippines)
const MESSENGER_USERNAME = '61590794884653'; // Facebook Page ID
const PREFILLED_MESSAGE = encodeURIComponent(
  "Hi Sortech! 👋 I'm interested in getting a website for my business. Can I get a quick quote?"
);

export default function QuickChatWidget(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [showPill, setShowPill] = useState(false);

  // Show a gentle prompt pill after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPill(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${PREFILLED_MESSAGE}`;
  const messengerUrl = `https://m.me/${MESSENGER_USERNAME}`;

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none"
      aria-label="Quick chat options"
    >
      {/* Chat Popup Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Chat with Sortech"
          className="pointer-events-auto mb-3 w-[calc(100vw-2.5rem)] sm:w-80 rounded-2xl bg-white border border-gray-200 shadow-2xl overflow-hidden transition-all duration-200 animate-in fade-in slide-in-from-bottom-3"
          style={{
            boxShadow: '0 20px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-sm">
                  ST
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-blue-600 rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Sortech Support</h4>
                <p className="text-[11px] text-blue-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online · Replies in ~15 mins
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close chat menu"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-2.5 bg-gray-50/50">
            <p className="text-xs text-gray-600 mb-3 leading-relaxed">
              👋 Hi there! Want a quick estimate or have questions about a project? Chat with us directly:
            </p>

            {/* Messenger Button */}
            <a
              href={messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.518 3.736 7.215V22l3.376-1.854c.915.253 1.884.39 2.888.39 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.042 12.445l-2.56-2.73-5 2.73 5.5-5.845 2.625 2.73 4.935-2.73-5.5 5.845z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Chat on Messenger
                  </div>
                  <div className="text-[10px] text-gray-500">Facebook Messenger</div>
                </div>
              </div>
              <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200 hover:border-emerald-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.2.301-.777.978-.952 1.18-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.5-1.787-1.677-2.088-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.927-2.234-.244-.587-.492-.507-.677-.516l-.577-.01c-.2 0-.526.075-.802.376s-1.053 1.028-1.053 2.508 1.078 2.91 1.228 3.111c.15.201 2.121 3.238 5.138 4.542.718.31 1.278.496 1.716.635.722.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.429.251-.702.251-1.304.176-1.429-.075-.126-.276-.201-.577-.351zM12.042 21.82a9.78 9.78 0 01-4.992-1.365l-.358-.213-3.711.973.99-3.618-.233-.371A9.76 9.76 0 012.25 12.042c0-5.4 4.392-9.792 9.792-9.792 2.617 0 5.077 1.02 6.927 2.87a9.74 9.74 0 012.87 6.922c0 5.4-4.392 9.778-9.797 9.778zm0-17.792c-4.41 0-8 3.59-8 8 0 1.41.368 2.784 1.066 3.996l.245.424-.652 2.383 2.44-.64.412.245a7.97 7.97 0 004.489 1.592c4.41 0 8-3.59 8-8s-3.59-8-8-8z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    Chat on WhatsApp
                  </div>
                  <div className="text-[10px] text-gray-500">Fast direct reply</div>
                </div>
              </div>
              <svg className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Free Audit Form shortcut */}
            <div className="pt-2 text-center border-t border-gray-200">
              <a
                href="#audit"
                onClick={() => setIsOpen(false)}
                className="text-[11px] font-semibold text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
              >
                Or request a Free 5-Min Video Audit →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Area */}
      <div className="flex items-center gap-2 pointer-events-auto">
        {/* Welcome Pill / Tooltip */}
        {!isOpen && showPill && (
          <div
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-full bg-white border border-gray-200 shadow-lg text-xs font-semibold text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-200 hover:shadow-xl"
            style={{
              boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Need a quick quote? Chat with us</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowPill(false);
              }}
              className="text-gray-400 hover:text-gray-600 ml-0.5"
              aria-label="Dismiss message"
            >
              ×
            </button>
          </div>
        )}

        {/* Floating Circle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Open chat options"
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-150"
          style={{
            boxShadow: '0 8px 24px rgba(37,99,235,0.35)',
          }}
        >
          {/* Unread badge dot */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />

          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
