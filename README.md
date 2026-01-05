# 🌤 Weather App

A simple, responsive weather app built with React.

I wanted something clean and practical, so I focused on real-world usage and improving my UI and layout skills along the way.

The app shows current conditions, daily forecasts, and hourly data with charts and subtle animations to make the experience feel more alive.

---

##  ✨ Features
- Search by city name
- GPS-based location detection
- Manual city search as a fallback when location access is denied
- Clear location-permission handling:
    - If the user denies location access, the app gracefully switches to a manual search flow
    - A dedicated UI explains why location is needed and allows the user to continue without it
- Current, daily, and hourly forecasts
- Detailed daily breakdown (every 3 hours)
- Temperature, humidity, wind, and rain probability
- Interactive weather charts
- Search suggestions for faster input
- Fully unified search flow used across all pages
- Consistent error handling with a single unified error design
- Graceful handling of:
   -Offline mode
   -Denied location permissions
   -Request timeouts 
   -Invalid city names with a clear message and expressive visual feedback
   -Empty search input with simple inline validation and a red border highlight 
   -With clear messages, short explanations, and visual illustrations
- Image preloading with smooth fade-in transitions
- Safe page refresh (F5) without breaking routing

---

## 🛠 Tech Stack
- React
- Context API
- Custom Hooks
- Axios
- Recharts
- CSS (Flexbox & Grid)
- Lottie Animations

---

## 🔐 Environment Variables
- This project uses environment variables to store API keys securely.

- API keys are not included in the repository and are loaded via .env files.

---

## 🎨 UX Notes
- Card-based layouts for daily and hourly forecasts to keep information easy to scan
- Visual weather icons to make forecasts understandable at a glance
- A dedicated fallback UI for denied location access, guiding users toward manual search instead of blocking the experience
- Thoughtful spacing and layout scaling across screen sizes
- Extra attention to small UI details like preloading and transitions to create a smoother experience

---

## ⚠️ Known Issue
- On some mobile and tablet screens with large viewport heights, long content may not be fully visible.

- This issue comes from complex interactions between Flexbox, Grid, and dynamic content height.
- A layout refactor is planned to improve long-content handling.

---

## 🎯 Why I Built This
To practice and improve:
- Feature-based React architecture
- State management with Context
- Responsive UI problem-solving
- Designing user-friendly fallback flows
- Debugging layout issues across different devices
- Working with real APIs and async data

---

## 🚀 Future Improvements
- Refactor layout containers for better long-content handling
- Improve scrolling behavior on mobile and tablet
- Add more subtle UI animations
- Accessibility and performance improvements
- Built as part of my ongoing frontend learning journey.

---

## 🎥 Demo
https://github.com/boshra-dev/weather-app/blob/main/weather-app-demo.mp4

---

Built as part of my ongoing frontend learning journey.
