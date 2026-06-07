# Podcast App

## Project Overview

Podcast App is a React built landing page that allows users to browse and discover podcasts from an external API.

The application fetches podcast data on initial page load and displays each podcast as a preview card containing:

- Podcast cover image
- Podcast title
- Number of seasons
- Associated genres
- Last updated information

The project focuses on React fundamentals, including component-based architecture, state management, data fetching, conditional rendering, responsive design, and reusable UI components.

---

## Features

- Fetches podcast data from an external API
- Loading state while data is being retrieved
- Error handling for failed requests
- Empty state handling
- Responsive grid layout
- Reusable React components
- Genre mapping service
- Date formatting utility
- Accessibility improvements using ARIA attributes

---

## Technologies Used

- React
- JavaScript (ES6+)
- CSS3
- Vite
- Fetch API

---

## Project Structure

```
src
├── api
│   └── fetchPodcasts.js
│
├── components
│   ├── Header.jsx
│   ├── PodcastCard.jsx
│   └── PodcastGrid.jsx
│
├── utils
│   ├── formatDate.js
│   └── genreService.js
│
├── data.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## Application Flow

### 1. Application Initialisation

The application starts from `main.jsx`, which renders the root `App` component.

### 2. Data Fetching

When the application loads:

- `useEffect()` runs once on mount
- `fetchPodcasts()` retrieves podcast data from the API
- Podcast data is stored using React state

### 3. State Management

The application manages three primary states:

| State      | Purpose                                   |
| ---------- | ----------------------------------------- |
| `loading`  | Indicates data is currently being fetched |
| `error`    | Stores API errors                         |
| `podcasts` | Stores podcast data returned by the API   |

### 4. Conditional Rendering

Depending on the current state:

- Loading spinner is displayed
- Error message is displayed
- Empty state message is displayed
- Podcast grid is displayed

### 5. Podcast Rendering

The podcast collection is passed to:

```jsx
<PodcastGrid podcasts={podcasts} />
```

The grid maps over the podcast array and renders:

```jsx
<PodcastCard />
```

for each podcast.

---

## Component Responsibilities

### App.jsx

Responsible for:

- Fetching data
- Managing application state
- Rendering loading, error, empty, and success states

### PodcastGrid.jsx

Responsible for:

- Rendering the podcast collection
- Creating the responsive grid layout

### PodcastCard.jsx

Responsible for displaying:

- Podcast cover image
- Podcast title
- Number of seasons
- Genres
- Last updated date

### Header.jsx

Responsible for:

- Top-level navigation area

---

## Utility Modules

### genreService.js

Maps genre IDs returned by the API to human-readable genre names.

### formatDate.js

Formats podcast update dates for display.

---

## Responsive Design

The application is designed for:

- Mobile devices (375px)
- Tablets (768px)
- Desktop screens (1024px)

CSS Grid is used to automatically adjust the number of visible podcast cards based on screen size.

---

## Accessibility

Accessibility improvements include:

- Semantic heading structure
- Descriptive image alt text
- ARIA status roles for loading states
- ARIA alert roles for error states
- Responsive layouts for smaller screens

---

## Running the Project

```bash
npm install
npm run dev
```

Then open:

```
http://localhost:5173
```

---
