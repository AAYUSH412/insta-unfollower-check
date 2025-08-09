<div align="center">
  <h1>🚀 Instagram Unfollower Checker</h1>
  <p><strong>Privacy-First Instagram Analytics Tool</strong></p>
  <p>Discover who doesn't follow you back, analyze your follower relationships, and gain insights into your Instagram network - all processed locally in your browser.</p>
  
  <p>
    <a href="https://insta-unfollower-check.vercel.app">🌐 Live Demo</a> •
    <a href="#-quick-start">📚 Quick Start</a> •
    <a href="#-features">✨ Features</a> •
    <a href="#-privacy--security">🔒 Privacy</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19.1.1-61dafb?style=for-the-badge&logo=react" alt="React">
    <img src="https://img.shields.io/badge/Tailwind_CSS-4.1.11-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/Vite-6.3.5-646cff?style=for-the-badge&logo=vite" alt="Vite">
    <img src="https://img.shields.io/badge/PWA-Ready-success?style=for-the-badge" alt="PWA Ready">
  </p>

  <p>
    <img src="https://img.shields.io/github/stars/AAYUSH412/insta-unfollower-check?style=social" alt="GitHub stars">
    <img src="https://img.shields.io/github/forks/AAYUSH412/insta-unfollower-check?style=social" alt="GitHub forks">
    <img src="https://img.shields.io/github/license/AAYUSH412/insta-unfollower-check?style=flat-square" alt="License">
  </p>

  <p>
    <img src="https://img.shields.io/github/v/release/AAYUSH412/insta-unfollower-check?style=flat-square&color=success" alt="Latest Release">
    <img src="https://img.shields.io/github/workflow/status/AAYUSH412/insta-unfollower-check/Build%20and%20Deploy?style=flat-square" alt="Build Status">
    <img src="https://img.shields.io/website?url=https%3A%2F%2Finsta-unfollower-check.vercel.app&style=flat-square" alt="Website Status">
    <img src="https://img.shields.io/badge/Privacy-First-brightgreen?style=flat-square" alt="Privacy First">
    <img src="https://img.shields.io/badge/No%20Login-Required-blue?style=flat-square" alt="No Login Required">
  </p>
</div>

---

## 🎯 Why Choose Our Tool?

<table>
<tr>
<td width="33%" align="center">
<h3>🔒 Privacy First</h3>
<p>100% local processing - your data never leaves your device. No servers, no tracking, no data collection.</p>
</td>
<td width="33%" align="center">
<h3>⚡ Lightning Fast</h3>
<p>Modern React 19 + Vite architecture delivers instant results with optimized performance.</p>
</td>
<td width="33%" align="center">
<h3>🎨 Beautiful UI</h3>
<p>Clean, modern interface with Tailwind CSS 4, responsive design, and accessibility features.</p>
</td>
</tr>
</table>

## ✨ Features

### 🔍 **Advanced Analytics**
- **Unfollower Detection**: Find users who don't follow you back
- **Mutual Followers**: Discover your two-way connections
- **Follower Ratio**: Calculate your follower-to-following ratio
- **Interactive Search**: Real-time filtering through your lists
- **Direct Links**: Quick access to user profiles

### 🛡️ **Privacy & Security**
- **Local Processing**: All computations happen in your browser
- **Zero Data Storage**: No user data stored on servers
- **No Authentication**: No Instagram login required
- **Open Source**: Transparent, auditable code
- **CSP Protected**: Content Security Policy headers for enhanced security

### 📱 **Modern Experience**
- **Progressive Web App**: Install on any device
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Offline Capable**: Service worker for offline functionality
- **Accessibility**: WCAG 2.1 compliant with ARIA labels
- **Dark/Light Theme**: Adaptive to system preferences

## 🚀 Quick Start

### 📋 Prerequisites

Before you begin, ensure you have:
- Node.js 16+ installed on your machine
- npm or yarn package manager
- Your Instagram data export files (see guide below)

### 📱 How to Get Your Instagram Data

<details>
<summary><strong>📖 Step-by-Step Instagram Data Export Guide</strong></summary>

1. **Open Instagram App** on your mobile device
2. **Navigate to Settings**:
   - Tap your profile picture (bottom right)
   - Tap the three lines (☰) menu
   - Select "Settings and Privacy"
3. **Request Data Download**:
   - Go to "Privacy and Security"
   - Select "Data Download"
   - Choose "Request Download"
4. **Configure Export**:
   - Format: **JSON** (important!)
   - Date Range: All data or specific range
   - Email: Confirm your email address
5. **Wait for Email**: Instagram will email you when ready (up to 48 hours)
6. **Download & Extract**: Download the ZIP file and extract it

</details>

### 🔧 Installation & Development

```bash
# Clone the repository
git clone https://github.com/AAYUSH412/insta-unfollower-check.git

# Navigate to frontend directory
cd insta-unfollower-check/frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Open your browser
# Visit http://localhost:5173
```

### 📁 Required Files

After extracting your Instagram data, locate these files:
- `followers_1.json` - Your followers list
- `following.json` - Accounts you follow

### 🎯 Using the Tool

1. **Visit**: [https://insta-unfollower-check.vercel.app](https://insta-unfollower-check.vercel.app)
2. **Upload Files**: Drag & drop or select your JSON files
3. **Get Results**: Instant analysis of your follower relationships
4. **Explore**: Browse through different tabs and search functionality

---

## 🏗️ Technical Architecture

### 🛠️ Built With Modern Technologies

<table>
<tr>
<th>Frontend</th>
<th>Build Tools</th>
<th>Styling</th>
<th>Deployment</th>
</tr>
<tr>
<td>

```
⚛️  React 19.1.1
🔀  React Router DOM 7.8.0
🎯  Lucide React Icons
📊  Heroicons
```

</td>
<td>

```
⚡  Vite 6.3.5
📦  ESLint 9.33.0
🔧  Modern ES Modules
🚀  Hot Module Replacement
```

</td>
<td>

```
🎨  Tailwind CSS 4.1.11
📱  Responsive Design
♿  Accessibility Ready
🌓  Theme Support
```

</td>
<td>

```
☁️   Vercel Platform
🚀  Automatic Deployments
🔒  Security Headers
📈  Speed Insights
```

</td>
</tr>
</table>

### 📊 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: All green
- **Bundle Size**: <500KB initial load
- **Load Time**: <2 seconds

### 🔐 Security Features

- Content Security Policy (CSP) headers
- XSS protection enabled
- Frame options deny
- Referrer policy strict
- Permissions policy configured

## � Privacy & Security

<div align="center">
<h3>🛡️ Your Data Stays Private, Always</h3>
<p><em>We've built privacy into every line of code</em></p>
</div>

### 🏠 **Local Processing Only**
- **Zero Server Upload**: Your Instagram data never leaves your browser
- **Client-Side Computing**: All analysis happens on your device
- **No Network Calls**: Files are processed entirely offline
- **Memory Safe**: Data is cleared when you close the tab

### 🔐 **Security Measures**
- **Content Security Policy**: Blocks malicious scripts and external resources
- **XSS Protection**: Prevents cross-site scripting attacks
- **Frame Protection**: Blocks embedding in malicious iframes
- **HTTPS Only**: Secure connection enforced
- **No Cookies**: Zero tracking or persistent storage

### ✅ **Privacy Guarantees**
- ❌ No user registration required
- ❌ No Instagram login needed
- ❌ No data collection or analytics
- ❌ No third-party trackers
- ❌ No server-side data storage
- ✅ 100% transparent, open-source code

---

## 📊 What You'll Discover

<table>
<tr>
<td width="50%">

### 📈 **Analytics Dashboard**
- **Unfollower Count**: Users who don't follow you back
- **Mutual Followers**: Your two-way connections
- **Follower Ratio**: Your engagement health score
- **Total Counts**: Complete statistics overview

</td>
<td width="50%">

### 🔍 **Interactive Features**
- **Real-time Search**: Filter through thousands of users instantly
- **Direct Profile Links**: One-click access to Instagram profiles
- **Tabbed Interface**: Organized view of different user categories
- **Responsive Design**: Perfect experience on any device

</td>
</tr>
</table>

---

## 📋 Development & Contributing

### 🛠️ **Available Scripts**

```bash
# Development
npm run dev          # Start development server with HMR
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint for code quality

# Deployment
vercel deploy        # Deploy to Vercel
```

### � **Project Structure**

```
insta-unfollower-check/
├── frontend/
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── Unfollowers.jsx # Main analytics component
│   │   │   ├── Header.jsx      # Navigation component
│   │   │   ├── Home.jsx        # Landing page
│   │   │   └── ...
│   │   ├── assets/             # Static assets and data
│   │   ├── utils/              # Utility functions
│   │   └── main.jsx           # App entry point
│   ├── public/
│   │   ├── sw.js              # Service worker
│   │   ├── favicon/           # App icons
│   │   └── ...
│   ├── vercel.json            # Deployment configuration
│   └── package.json           # Dependencies
├── docs/
│   └── improvement.md         # Development roadmap
└── README.md                  # You are here!
```

### 🤝 **Contributing Guidelines**

We welcome contributions! Here's how to get started:

1. **Fork the Repository**
   ```bash
   git clone https://github.com/AAYUSH412/insta-unfollower-check.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**
   - Follow the existing code style
   - Add tests if applicable
   - Update documentation

4. **Commit Your Changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/amazing-feature
   ```

### 📝 **Development Guidelines**
- **Privacy First**: Never introduce features that send data off-device
- **Performance**: Maintain <2s load times and <500KB bundle size
- **Accessibility**: Follow WCAG 2.1 AA guidelines
- **Mobile-First**: Ensure responsive design works perfectly
- **Security**: Maintain CSP compliance and security headers

---

## ❓ Frequently Asked Questions

<details>
<summary><strong>🔒 Is this tool safe to use with my Instagram data?</strong></summary>
<br>
<p><strong>Absolutely!</strong> Your Instagram data is processed entirely in your browser. We use client-side JavaScript to analyze your files - no server upload, no cloud processing, no data storage. Your privacy is our top priority.</p>
</details>

<details>
<summary><strong>🔑 Do I need to provide my Instagram login credentials?</strong></summary>
<br>
<p><strong>No login required!</strong> You only need to download your Instagram data export (as JSON files) and upload them to our tool. We never ask for your Instagram username, password, or any personal credentials.</p>
</details>

<details>
<summary><strong>🏢 Is this tool affiliated with Instagram or Meta?</strong></summary>
<br>
<p><strong>No.</strong> This is an independent, open-source project. We're not affiliated with Instagram, Meta, or Facebook. We simply help you analyze your own Instagram data.</p>
</details>

<details>
<summary><strong>💾 Does this tool store or save my data anywhere?</strong></summary>
<br>
<p><strong>No data storage!</strong> All processing happens in your browser's memory. When you close the tab, everything is gone. We don't have servers storing user data - it's technically impossible for us to save your information.</p>
</details>

<details>
<summary><strong>📱 Can I use this on my mobile device?</strong></summary>
<br>
<p><strong>Yes!</strong> Our tool is built with a mobile-first approach and works perfectly on smartphones and tablets. The interface adapts to your screen size for the best experience.</p>
</details>

<details>
<summary><strong>⏱️ How long does it take to get my Instagram data from Meta?</strong></summary>
<br>
<p><strong>Usually 24-48 hours.</strong> Instagram typically processes data export requests within this timeframe. During peak times, it might take a bit longer. Make sure to select JSON format when requesting your data.</p>
</details>

<details>
<summary><strong>🆓 Is this tool completely free?</strong></summary>
<br>
<p><strong>Yes, 100% free!</strong> No hidden fees, no premium features, no subscriptions. This is an open-source project built to help the Instagram community.</p>
</details>

<details>
<summary><strong>🔧 Can I contribute to this project?</strong></summary>
<br>
<p><strong>We'd love your help!</strong> This is an open-source project. Check out our <a href="#-development--contributing">contributing guidelines</a> and feel free to submit pull requests, report bugs, or suggest features.</p>
</details>

---

## 🌟 Community & Support

<div align="center">

### 💖 **Show Your Support**

If this tool helped you discover your Instagram unfollowers, consider giving us a ⭐!

<p>
<a href="https://github.com/AAYUSH412/insta-unfollower-check/stargazers">
<img src="https://img.shields.io/github/stars/AAYUSH412/insta-unfollower-check?style=social" alt="GitHub stars">
</a>
</p>

### 🔗 **Connect With Us**

<p>
<a href="https://github.com/AAYUSH412/insta-unfollower-check/issues">🐛 Report Issues</a> •
<a href="https://github.com/AAYUSH412/insta-unfollower-check/discussions">💬 Discussions</a> •
<a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20privacy-first%20Instagram%20unfollower%20checker!&url=https://insta-unfollower-check.vercel.app">📢 Share on Twitter</a>
</p>

</div>

---

## 📋 Roadmap & Future Plans

<table>
<tr>
<th>🚀 Current Version</th>
<th>🔮 Coming Soon</th>
<th>💡 Future Ideas</th>
</tr>
<tr>
<td>

- ✅ Unfollower detection
- ✅ Mutual followers analysis
- ✅ Interactive search & filtering
- ✅ Mobile-responsive design
- ✅ PWA support
- ✅ Privacy-first architecture

</td>
<td>

- 🔄 CSV/JSON export functionality
- 📊 Enhanced data visualizations
- 🎨 Dark/light theme toggle
- 🔍 Advanced filtering options
- 📈 Historical data comparison
- ⚡ Performance optimizations

</td>
<td>

- 📱 Native mobile app
- 🤖 Growth insights & recommendations
- 📅 Follower timeline analysis
- 🎯 Engagement rate calculator
- 🏷️ Hashtag analysis tools
- 🔔 Notification system

</td>
</tr>
</table>

---

## 📄 License & Legal

### 📜 **MIT License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
Copyright (c) 2025 Instagram Unfollower Checker

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

### ⚖️ **Disclaimer**

- This tool is for educational and personal use only
- We are not responsible for any actions taken based on the analysis
- Instagram's terms of service apply to your use of their platform
- Always respect others' privacy and Instagram's community guidelines

---

<div align="center">

### 🚀 **Ready to Discover Your Instagram Insights?**

<p>
<a href="https://insta-unfollower-check.vercel.app">
<img src="https://img.shields.io/badge/Launch%20App-4285f4?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Launch App">
</a>
</p>

<p><em>Made with ❤️ by the open-source community</em></p>

<sub>Last updated: August 2025</sub>

</div>
