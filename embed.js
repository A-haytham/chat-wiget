(function () {
  if (
    !window.customChatWidget ||
    window.customChatWidget.getState !== "initialized"
  ) {
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
      const script = document.createElement("script");
      script.src =
        "https://chat-wiget-6bghmp0do-ahmeds-projects-d443845c.vercel.app/chat-widget.js";
      script.id = "custom-chat-widget-script";
      document.body.appendChild(script);
    };

    // Load script when page is ready
    if (document.readyState === "complete") {
      loadWidget();
    } else {
      window.addEventListener("load", loadWidget);
    }
  }
})();
