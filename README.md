# Custom Chat Bot Widget

## How to Use the Chat Bot on Your Website

1. Add the following script tag to your HTML file (preferably just before the closing `</body>` tag):

```html
<script>
(function() {
    const script = document.createElement('script');
    script.src = 'YOUR_DOMAIN/embed.js';
    script.async = true;
    document.body.appendChild(script);
})();
</script>
```

2. Replace `YOUR_DOMAIN` with the actual domain where your chat bot is hosted.

3. (Optional) Customize the chat bot appearance by adding configuration:

```html
<script>
    window.customChatWidget.configure({
        name: 'Your Bot Name',
        welcomeMessage: 'Welcome! How can I help you today?',
        primaryColor: '#0084ff',
        fontFamily: 'Arial, sans-serif'
    });
</script>
```

## Features

- Floating chat icon
- Customizable appearance
- Responsive design
- Easy integration
- Works on all modern browsers

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| name | string | 'Chat Bot' | The name of your chat bot |
| welcomeMessage | string | 'Hello! How can I help you today?' | Initial message shown to users |
| primaryColor | string | '#0084ff' | Main color theme (hex code) |
| fontFamily | string | 'system-ui, sans-serif' | Font family for the chat widget |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Development

To modify the chat bot:

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Build for production: `npm run build`