(function () {
  if (!window.customChatWidget || !window.customChatWidget.initialized) {
    // Initialize queue for handling commands before script loads
    window.customChatWidget = function (...args) {
      if (!window.customChatWidget.q) {
        window.customChatWidget.q = [];
      }
      window.customChatWidget.q.push(args);
    };

    // Create proxy for handling method calls
    window.customChatWidget = new Proxy(window.customChatWidget, {
      get(target, prop) {
        if (prop === "q") {
          return target.q;
        }
        return (...args) => target(prop, ...args);
      },
    });

    // Load the chat widget script
    const loadWidget = function () {
      console.log('Loading chat widget script...');
      const script = document.createElement("script");
      script.src = "chat-widget.js";
      script.async = true;
      script.id = "custom-chat-widget-script";
      script.onerror = function(error) {
        console.error('Error loading chat widget script:', error);
      };
      script.onload = function() {
        console.log('Chat widget script loaded successfully');
      };
      document.body.appendChild(script);
    };

    // Load script when page is ready
    console.log('Embed.js: Document ready state:', document.readyState);
    if (document.readyState === 'loading') {
      console.log('Embed.js: Document still loading, adding event listener...');
      document.addEventListener('DOMContentLoaded', loadWidget);
    } else {
      console.log('Embed.js: Document already loaded, loading widget immediately...');
      loadWidget();
    }
  }
})();
