# AuraTube - Ambient Light for YouTube™

AuraTube transforms your YouTube™ viewing experience with immersive, real-time ambient lighting effects that glow beyond the edges of the video player.

![AuraTube Banner](assets/heading.png)

## ✨ Features

- **⚡ Hardware Accelerated (WebGL):** Ultra-smooth glowing visuals powered by your GPU with low power consumption.
- **🎨 Deep Customization:** Adjust blur, spread, edge sizing, vibrancy, brightness, and contrast.
- **✂️ Smart Black Bar Detection:** Automatically detects and removes letterboxes and pillarboxes so the ambient light hugs the actual video frame.
- **🎬 Cinematic Smooth Motion:** Frame blending and intelligent fading for seamless, jitter-free lighting.
- **🌱 Battery Saver Mode:** Intelligently dials back rendering on podcasts and static video tracks.
- **🔒 Privacy First:** 100% client-side. No trackers, no external analytics, no user data collection.

## 🚀 Installation (Developer / Unpacked Mode)

1. Clone or download this repository.
2. Open your Chromium browser (Chrome, Brave, Edge, Opera) and navigate to `chrome://extensions`.
3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked** and select the `dist/` directory inside this project.
5. Open any [YouTube](https://www.youtube.com) video and enjoy the immersive ambient light!

## 🛠️ Building from Source

```bash
# Install dependencies
npm install

# Build for distribution
npm run build
```

## 📜 License

Licensed under the [ISC License](LICENSE).
