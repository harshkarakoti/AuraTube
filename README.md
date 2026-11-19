# AuraTube

AuraTube transforms your YouTube viewing experience with immersive, real-time lighting effects that glow beyond the edges of the video player.

## ✨ Features

- **⚡ Hardware Accelerated (WebGL):** Ultra-smooth glowing visuals powered by your GPU with low power consumption.
- **🎨 Deep Customization:** Adjust blur, spread, edge sizing, vibrancy, brightness, and contrast.
- **✂️ Smart Black Bar Detection:** Automatically detects and removes letterboxes and pillarboxes so the ambient light hugs the actual video frame.
- **🎬 Cinematic Smooth Motion:** Frame blending and intelligent fading for seamless, jitter-free lighting.
- **🌱 Battery Saver Mode:** Intelligently dials back rendering on podcasts and static video tracks.
- **🔒 Privacy First:** 100% client-side. No trackers, no external analytics, no user data collection.

## 🚀 Quick Installation (For Users)

No technical setup required. Works on **Google Chrome, Brave, Microsoft Edge, Opera, and Vivaldi**.

1. **Download:** Get the latest [`auratube-extension.zip`](https://github.com/harshkarakoti/AuraTube/releases) (or extract the pre-built `auratube-extension.zip`).
2. **Extract:** Unzip the downloaded file into a folder on your computer.
3. **Open Extensions:** In your browser address bar, enter:
   - **Chrome / Brave:** `chrome://extensions`
   - **Edge:** `edge://extensions`
   - **Opera:** `opera://extensions`
4. **Enable Developer Mode:** Turn **ON** the **Developer mode** toggle switch in the top-right corner.
5. **Load AuraTube:** Click **Load unpacked** (top-left) and select the extracted folder.
6. **Enjoy:** Open any video on [YouTube](https://www.youtube.com) and experience ambient lighting!

---

## 🛠️ Building from Source (For Developers)

```bash
# Clone the repository
git clone https://github.com/harshkarakoti/AuraTube.git
cd AuraTube

# Install dependencies
npm install

# Build the extension into dist/
npm run build

# Package into auratube-extension.zip
npm run build:zip
# OR build & package in one command:
npm run package
```

To load your build:
1. Open `chrome://extensions` with **Developer mode** enabled.
2. Click **Load unpacked** and select the `dist/` directory.

## 📜 License

Licensed under the [ISC License](LICENSE).
