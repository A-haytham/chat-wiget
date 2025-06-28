(function () {
  // Configuration
  const chatbotConfig = {
    name: "Chat Bot",
    welcomeMessage: "Hello! How can I help you today?",
    primaryColor: "#0084ff",
    fontFamily: "system-ui, -apple-system, sans-serif",
  };

  // Create chat widget container
  function createChatWidget() {
    const container = document.createElement("div");
    container.id = "custom-chat-widget";
    container.style.position = "fixed";
    container.style.bottom = "20px";
    container.style.right = "20px";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    // Add chat icon
    const chatIcon = document.createElement("div");
    chatIcon.className = "chat-icon";
    chatIcon.innerHTML = `
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
        `;
    container.appendChild(chatIcon);

    // Add styles
    const styles = document.createElement("style");
    styles.textContent = `
            #custom-chat-widget .chat-icon {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: ${chatbotConfig.primaryColor};
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                transition: transform 0.3s ease;
            }

            #custom-chat-widget .chat-icon svg {
                color: white;
            }

            #custom-chat-widget .chat-icon:hover {
                transform: scale(1.1);
            }

            #custom-chat-widget .chat-window {
                position: absolute;
                bottom: 80px;
                right: 0;
                width: 350px;
                height: 500px;
                background: white;
                border-radius: 10px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.2);
                display: none;
                flex-direction: column;
                font-family: ${chatbotConfig.fontFamily};
            }

            #custom-chat-widget .chat-window.active {
                display: flex;
            }
        `;
    document.head.appendChild(styles);

    // Toggle chat window
    chatIcon.addEventListener("click", () => {
      const existingWindow = document.querySelector(
        "#custom-chat-widget .chat-window"
      );
      if (existingWindow) {
        existingWindow.classList.toggle("active");
      } else {
        createChatWindow();
      }
    });
  }

  // Initialize chat widget
  if (document.readyState === "complete") {
    createChatWidget();
  } else {
    window.addEventListener("load", createChatWidget);
  }

  // Expose global function to initialize chat widget
  window.initCustomChatWidget = function (config) {
    Object.assign(chatbotConfig, config);
    createChatWidget();
  };

  // 👇👇 NEW CODE: auto-start if config is set from embed.js
  if (window.customChatWidget && window.customChatWidget.configure) {
    window.initCustomChatWidget(window.customChatWidget.configure);
  }
})();
