# 🌐 My React Portfolio Website

Welcome to my portfolio repository! This project is a responsive React portfolio website designed for a full-stack developer. It showcases various sections including hero, about, technology, work experience, projects, and contact. The site uses Framer Motion for animations and Tailwind CSS for styling. 🚀

## 📑 Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Animations with Framer Motion](#animations-with-framer-motion)
- [Styling with Tailwind CSS](#styling-with-tailwind-css)
- [Deployment](#deployment)
- [Installation](#installation)
- [Additional Resources](#additional-resources)

## 🏷️ Overview

This portfolio website highlights my skills and projects as a full-stack developer. It includes various sections to present different aspects of my work and experience. The design aims to be minimal yet engaging, with smooth transitions and animations to enhance user experience.

## 💻 Technologies Used

- **ReactJS**: For building the user interface and managing components.
- **Framer Motion**: For adding animations and transitions to elements.
- **Tailwind CSS**: For styling the website with utility-first CSS.

## ✨ Features

- **Hero Section**: An engaging introduction with a brief overview.
- **About Section**: Details about my background and skills.
- **Technology Section**: A showcase of the technologies I use.
- **Work Experience Section**: Highlights of my professional experience.
- **Projects Section**: An overview of notable projects I've worked on.
- **Contact Section**: A form for potential clients or collaborators to reach out.

## 🎨 Animations with Framer Motion

Framer Motion is used to add dynamic animations to various elements on the site. It ensures that text and icons have smooth transitions and engaging effects, providing a modern and interactive experience.

Example:
```jsx
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const AnimatedComponent = () => (
  <motion.div
    variants={fadeIn}
    initial="hidden"
    animate="visible"
  >
    <h1>Welcome to My Portfolio</h1>
  </motion.div>
);

```

## 🎨 Styling with Tailwind CSS
Tailwind CSS is used for styling the website with a utility-first approach. This allows for quick and flexible design changes without writing custom CSS.

Example:

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  <h1 className="text-2xl font-bold">Styled Component</h1>
</div>

```

##🚀 Deployment
The website is deployed using Vercel, which provides a free tier for React and Next.js applications. Vercel's deployment features ensure the site is live and accessible.

### 🛠️ Installation
To run the project locally: 

<li>Clone the repository:</li>

```jsx
git clone https://github.com/adityatambe31/My-portfolio.git
```

<li>Navigate to the project directory:</li>

```jsx
cd My-portfolio
```

<li>Install the dependencies:</li>

```jsx
npm install
```

<li>Start the development server:</li>

```jsx
npm start
```
