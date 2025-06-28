(function () {
  // Configuration object
  const chatbotConfig = {
    name: "Chat Bot",
    welcomeMessage: "Hello! How can I help you today?",
    primaryColor: "#0084ff",
    fontFamily: "system-ui, -apple-system, sans-serif",
  };

  // Create the chat window (not just icon)
  function createChatWindow() {
    console.log('Creating chat window...');
    const windowEl = document.createElement("div");
    windowEl.className = "chat-window";
    windowEl.innerHTML = `
      <div style="padding: 15px; border-bottom: 1px solid #eee; background: ${chatbotConfig.primaryColor}; color: white;">
        <strong>${chatbotConfig.name}</strong>
      </div>
      <div style="flex: 1; padding: 15px; overflow-y: auto; font-family: ${chatbotConfig.fontFamily}" class="chat-messages">
        <p>${chatbotConfig.welcomeMessage}</p>
      </div>
      <div style="padding: 10px; border-top: 1px solid #eee; display: flex; gap: 8px;">
        <input type="text" placeholder="Type a message..." style="flex: 1; padding: 8px; font-family: ${chatbotConfig.fontFamily}; border: 1px solid #ddd; border-radius: 4px;" class="chat-input" />
        <button style="padding: 8px 16px; background: ${chatbotConfig.primaryColor}; color: white; border: none; border-radius: 4px; cursor: pointer; font-family: ${chatbotConfig.fontFamily};" class="send-button">Send</button>
      </div>
    `;

    // Add event listeners for sending messages
    const input = windowEl.querySelector('.chat-input');
    const sendButton = windowEl.querySelector('.send-button');
    const messagesContainer = windowEl.querySelector('.chat-messages');

    function sendMessage() {
      const message = input.value.trim();
      if (message) {
        const messageEl = document.createElement('div');
        messageEl.style.cssText = 'margin: 10px 0; text-align: right;';
        messageEl.innerHTML = `
          <div style="display: inline-block; background: ${chatbotConfig.primaryColor}; color: white; padding: 8px 12px; border-radius: 15px; max-width: 80%; word-wrap: break-word;">
            ${message}
          </div>
        `;
        messagesContainer.appendChild(messageEl);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        input.value = '';
      }
    }

    // Send message on button click
    sendButton.addEventListener('click', sendMessage);

    // Send message on Enter key
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
    console.log('Chat window element created with content');
    const container = document.querySelector("#custom-chat-widget");
    if (container) {
      container.appendChild(windowEl);
      console.log('Chat window appended to container');
      windowEl.classList.add('active');
      console.log('Chat window activated');
    } else {
      console.error('Could not find chat widget container');
    }
  }

  // Create the floating icon + styling
  function createChatWidget() {
    console.log('Creating chat widget container...');
    // Add styles first
    if (!document.getElementById('custom-chat-widget-styles')) {
      const styles = document.createElement("style");
      styles.id = 'custom-chat-widget-styles';
      document.head.appendChild(styles);
      console.log('Chat widget styles created');
    }

    let container = document.querySelector('#custom-chat-widget');
    if (!container) {
      container = document.createElement("div");
      container.id = "custom-chat-widget";
      container.style.position = "fixed";
      container.style.bottom = "20px";
      container.style.right = "20px";
      container.style.zIndex = "9999";
      document.body.appendChild(container);
      console.log('Chat widget container created and appended to body');
    } else {
      console.log('Chat widget container already exists');
      container.innerHTML = '';
    }

    console.log('Creating chat icon...');
    const chatIcon = document.createElement("div");
    chatIcon.className = "chat-icon";
    chatIcon.style.cssText = `
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: ${chatbotConfig.primaryColor || '#00b894'};
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 10000;
    `;
    chatIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 30px; height: 30px; color: white;">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    `;
    console.log('Chat icon created:', chatIcon);
    container.appendChild(chatIcon);
    console.log('Chat icon appended to container');

    console.log('Creating chat widget styles...');
    const styles = document.createElement("style");
    styles.id = 'custom-chat-widget-styles';
    styles.textContent = `
      #custom-chat-widget {
        font-family: system-ui, -apple-system, sans-serif;
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
      }
      
      #custom-chat-widget .chat-icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: ${chatbotConfig.primaryColor} !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        cursor: pointer !important;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2) !important;
        transition: transform 0.3s ease !important;
      }

      #custom-chat-widget .chat-icon svg {
        color: white !important;
        width: 30px !important;
        height: 30px !important;
      }

      #custom-chat-widget .chat-icon:hover {
        transform: scale(1.1) !important;
      }

      #custom-chat-widget .chat-window {
        position: absolute !important;
        bottom: 80px !important;
        right: 0 !important;
        width: 350px !important;
        height: 500px !important;
        background: white !important;
        border-radius: 10px !important;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2) !important;
        display: none !important;
        flex-direction: column !important;
        z-index: 10000 !important;
        overflow: hidden !important;
      }

      #custom-chat-widget .chat-window.active {
        display: flex !important;
      }

      #custom-chat-widget .chat-messages {
        padding: 15px !important;
        overflow-y: auto !important;
        background: #f8f9fa !important;
      }

      #custom-chat-widget .chat-input {
        border: 1px solid #ddd !important;
        border-radius: 4px !important;
        padding: 8px !important;
        outline: none !important;
        transition: border-color 0.3s ease !important;
      }

      #custom-chat-widget .chat-input:focus {
        border-color: ${chatbotConfig.primaryColor} !important;
      }

      #custom-chat-widget .send-button {
        background: ${chatbotConfig.primaryColor} !important;
        color: white !important;
        border: none !important;
        border-radius: 4px !important;
        padding: 8px 16px !important;
        cursor: pointer !important;
        transition: opacity 0.3s ease !important;
      }

      #custom-chat-widget .send-button:hover {
        opacity: 0.9 !important;
      }
    `;
    document.head.appendChild(styles);
    console.log('Chat widget styles appended to document head');


    chatIcon.addEventListener("click", () => {
      console.log('Chat icon clicked');
      const chatWindow = document.querySelector(".chat-window");
      if (chatWindow) {
        console.log('Toggling existing chat window');
        chatWindow.classList.toggle("active");
        console.log('Chat window visibility:', chatWindow.classList.contains("active"));
      } else {
        console.log('Creating new chat window');
        createChatWindow();
      }
    });
    console.log('Click handler added to chat icon');
  }

  // Make it globally callable
  window.initCustomChatWidget = function (config) {
    console.log('Initializing custom chat widget with config:', config);
    Object.assign(chatbotConfig, config);
    console.log('Updated chatbot config:', chatbotConfig);
    createChatWidget();
  };

  // Expose createChatWidget globally for debugging
  window.debugCreateChatWidget = createChatWidget;

  // Auto-initialize when DOM is ready
  function initializeWidget() {
    console.log('Initializing chat widget...');
    if (window.customChatWidget && window.customChatWidget.configure) {
      console.log('Found custom configuration:', window.customChatWidget.configure);
      initCustomChatWidget(window.customChatWidget.configure);
    } else {
      console.log('Using default configuration');
      initCustomChatWidget({});
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWidget);
    console.log('Waiting for DOM to be ready...');
  } else {
    console.log('DOM is already ready, initializing immediately...');
    initializeWidget();
  }
  
  // Set initialization flag
  window.customChatWidget = window.customChatWidget || {};
  window.customChatWidget.initialized = true;
})();
