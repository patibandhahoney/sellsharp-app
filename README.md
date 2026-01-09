# SellSharp Landing Page

A **responsive and modern landing page** for SellSharp, built with **ReactJS + JavaScript and plain CSS**.  
This project is a front-end implementation inspired by [SellSharp.co](https://sellsharp.co/).

---

## 1. Project deployment

Browser: https://sellsharp-app2.vercel.app/
---

## 2.  Technology Stack

- **Frontend:** ReactJS with javascript   
- **Styling:** CSS
- **Routing:** Wouter  
- **Icons:** Lucide React  
- **State & Hooks:** React Hooks (useState, useEffect)  

---

## 3. Features

- Fully **responsive landing page** for Shellsharp website products.
- Hero section with call-to-action button.
- Features and pricing sections.
- Normal Login and Signup pages (UI-only).
- Interactive navigation bar.
- Accessible and keyboard-friendly components.
- Custom carousel / cards implemented in React + CSS


---

## 4. Project Structure

```
sellsharp-app/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Login, Signup, Home pages
│   ├── styles/            # CSS files
│   ├── App.jsx            # Main app component
│   └── index.js           # React entry point
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

```
## 5. Application Modules


### 1️⃣ App Initialization Module

**Files Involved:**
- `index.js`
- `App.js`

**Responsibilities:**
- Mounts React to the DOM
- Wraps routing and layout components

---

### 2️⃣ Routing Module

**Routes:**
- `/` → Home Page  
- `/login` → Login Page  
- `/signup` → Signup Page  

**Responsibilities:**
- Single Page Application navigation

---

### 3️⃣ Navbar Module
**Purpose:**  
Provides site-wide navigation.

**Features:**
- Logo
- Navigation links
- Responsive menu

**Responsibilities:**
- Navigation UI
- Responsive behavior across devices

 

### 4️⃣ Features Module

**Components Used:**
- Feature cards
- Icons and text blocks

---

### 5️⃣ Authentication UI Module (Frontend Only)
**Purpose:**  
Provides login and signup user interfaces.

**Pages:**
- `Login.js`
- `Signup.js`

**Features:**
- Input fields
- Buttons
- Form layout

⚠️ *Note: Backend authentication is not implemented.*

---


### 6️⃣ Styling Module
**Purpose:**  
Controls the visual design of the application.

**Technology Used:**
- Plain CSS (no frameworks)

**Includes:**
- Global styles
- Component-level CSS
- Media queries for responsiveness

---

### 7️⃣ Footer Module
**Purpose:**  
Displays footer information across all pages.

**Includes:**
- Branding
- Links
- Copyright information

---

### 8️⃣ Deployment Module

**Platform Used:**
- Vercel.com

---
