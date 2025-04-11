# Game-Inspired Personal Portfolio Website

A modern, responsive portfolio website with game-like elements built with Bootstrap 5, featuring smooth animations and interactive elements.

## Features

- Responsive design that works on all devices
- Modern and clean user interface with game-inspired elements
- Smooth scrolling navigation
- Animated sections and elements
- Interactive project cards with hover effects
- Skills progress bars with animations
- Contact form
- Social media links
- Typing effect in hero section
- Game-like cursor and hover effects
- Particle effects in the hero section
- Progress indicator
- Easter egg (Konami code)

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Font Awesome icons
- SVG for game elements

## Getting Started

### Viewing Locally

There are several ways to view the website locally:

#### Method 1: Direct File Opening
1. Simply open the `index.html` file in your web browser
   - Double-click on the file
   - Right-click and select "Open with" your preferred browser
   - Drag the file into an open browser window

#### Method 2: Using Python's Built-in Server
1. Open your terminal/command prompt
2. Navigate to the project directory
3. Run one of these commands:
   - Python 3: `python -m http.server`
   - Python 2: `python -m SimpleHTTPServer`
4. Open your browser and go to `http://localhost:8000`

#### Method 3: Using Node.js
1. Install a simple server like `http-server`: `npm install -g http-server`
2. Navigate to the project directory
3. Run: `http-server`
4. Open your browser and go to `http://localhost:8080`

#### Method 4: Using VS Code
1. Install the "Live Server" extension
2. Right-click on index.html and select "Open with Live Server"

### Customization

1. Replace the placeholder images in the `assets` folder with your own images:
   - `profile-placeholder.jpg` - Your profile picture
   - `project1-placeholder.jpg`, `project2-placeholder.jpg`, `project3-placeholder.jpg` - Your project screenshots
   - `pattern.png` - Background pattern for the hero section
   - `grid-pattern.svg` - Grid pattern for the background
   - `cursor.svg` and `cursor-pointer.svg` - Custom cursors
   - `particle.svg` - Particle effect for the hero section

2. Update the content in `index.html`:
   - Modify the hero section text
   - Update the About Me section
   - Add your own projects
   - Adjust skills and their percentages
   - Update social media links

3. Customize the styling in `styles.css`:
   - Modify the color scheme by changing the CSS variables
   - Adjust animations and transitions
   - Customize component styles

4. Add sound effects (optional):
   - Add `hover.mp3` and `click.mp3` to the assets folder for hover and click sound effects

## Deploying to GitHub Pages

1. Create a new repository on GitHub

2. Initialize Git in your project folder (if not already done):
```bash
git init
```

3. Add all files to Git:
```bash
git add .
```

4. Commit your changes:
```bash
git commit -m "Initial commit"
```

5. Add your GitHub repository as remote:
```bash
git remote add origin https://github.com/vshah31/personal-portfolio.git
```

6. Push your code to GitHub:
```bash
git push -u origin main
```

7. Go to your repository settings on GitHub

8. Scroll down to the "GitHub Pages" section

9. Select the `main` branch as the source

10. Your portfolio will be available at `https://yourusername.github.io/personal-portfolio`

## Easter Egg

Try entering the Konami code on the website:
↑ ↑ ↓ ↓ ← → ← → B A

## Contributing

Feel free to fork this repository and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, please feel free to reach out through the contact form on the website or by opening an issue in this repository. 