# Flower of Life SVG Generator

An interactive web application that generates the sacred geometry pattern known as the Flower of Life using SVG (Scalable Vector Graphics). This tool allows you to explore different layers of the pattern, control visibility, and export high-quality SVG files.

## 🌸 Features

### Interactive Controls
- **Ring Visibility Toggle**: Show/hide individual rings with custom labels
- **Vertex Display**: Toggle vertices (intersection points) on/off
- **Scale Control**: Zoom in/out with a range slider
- **Animation**: Animate the appearance of rings sequentially
- **Export**: Download the current view as a scalable SVG file

### Sacred Geometry Rings
- **Source** (Red): The central circle - the origin of creation
- **Seed(Heart)** (Orange): The first ring of circles
- **Subconscious** (Yellow): The second layer of intersections
- **Egg(Body)** (Green): The third layer of geometric complexity
- **Flower(Consciousness)** (Blue): The fourth layer with enhanced intersections
- **Soul** (Indigo): The fifth layer of spiritual geometry
- **Fruit(Reality)** (Violet): The outermost layer representing manifested reality

### Advanced Features
- **Dynamic Ring Generation**: Automatically creates rings based on available colors
- **Secondary Intersection Check**: Enhanced geometric complexity for Ring 4+
- **Transparent Background**: Perfect for overlaying on any background
- **Scalable Export**: SVG files that work at any size
- **Live Reload**: Automatic refresh during development

## 🚀 Getting Started

### Live Demo
Visit the [GitHub Pages deployment](https://yourusername.github.io/floweroflife) to try the application.

### Local Development
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/floweroflife.git
   cd floweroflife
   ```

2. Start a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. Open your browser to `http://localhost:8000`

## 🎨 Usage

### Basic Controls
- **Toggle All**: Show/hide all rings at once
- **Individual Ring Checkboxes**: Control visibility of specific rings
- **Show Vertices**: Toggle the display of intersection points
- **Scale Slider**: Adjust the zoom level (0.1x to 3.0x)

### Animation
- Click **"Animate Rings"** to watch the pattern build up layer by layer
- Each ring appears with a 500ms delay for a smooth visual effect

### Export
- Click **"Export SVG"** to download the current view
- The exported SVG is:
  - Fully scalable (vector-based)
  - Transparent background
  - Content-fitted bounds
  - Compatible with all SVG viewers

## 🔧 Technical Details

### Architecture
- **Pure HTML/CSS/JavaScript**: No external dependencies
- **SVG-based Rendering**: Scalable vector graphics
- **Modular Design**: Clean, maintainable code structure
- **Responsive Layout**: Works on desktop and mobile

### Browser Support
- Modern browsers with SVG support
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

### File Structure
```
floweroflife/
├── index.html          # Main application (self-contained)
├── README.md           # This file
└── .git/               # Git repository
```

## 🏷️ Version History

- **export**: Complete SVG export functionality with transparent background
- **v4**: Clean code with enhanced features and custom ring labels
- **v2**: Dynamic ring generation and vertex controls
- **v1**: Initial implementation

## 📖 About the Flower of Life

The Flower of Life is a sacred geometric pattern found in ancient cultures worldwide. It consists of overlapping circles arranged in a hexagonal pattern, creating a complex web of intersections that represents the fundamental structure of space and time.

### Symbolic Meaning
- **Unity**: All circles are interconnected
- **Creation**: The pattern contains the blueprint of all existence
- **Sacred Geometry**: Found in nature, art, and architecture
- **Spiritual Significance**: Used for meditation and spiritual guidance

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines
1. Keep the code self-contained in `index.html`
2. Maintain browser compatibility
3. Test on multiple devices and browsers
4. Follow the existing code style

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Sacred geometry principles and ancient wisdom
- SVG specification and web standards
- Open source community

---

**Made with ❤️ for exploring the beauty of sacred geometry**
