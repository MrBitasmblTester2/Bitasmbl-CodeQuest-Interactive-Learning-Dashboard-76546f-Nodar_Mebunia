# Bitasmbl-CodeQuest-Interactive-Learning-Dashboard-76546f-Nodar_Mebunia

## Description
A front-end web application that simulates an interactive coding lesson platform. Users can view coding modules, track progress, unlock lessons, and visualize learning streaks — all built with reusable components and modern UI design principles.

## Tech Stack
- Vue.js

## Requirements
- Use component-based design with reusable logic and props
- Use a chart library for visualizing data
- Store progress or completion state in local storage

## Installation
Follow these steps to set up the project locally.

1. Prerequisites
   - Ensure Node.js (LTS) and npm are installed on your machine.

2. Clone the repository

   bash
   git clone https://github.com/MrBitasmblTester2/Bitasmbl-CodeQuest-Interactive-Learning-Dashboard-76546f-Nodar_Mebunia.git
   cd Bitasmbl-CodeQuest-Interactive-Learning-Dashboard-76546f-Nodar_Mebunia
   

3. Install project dependencies

   bash
   npm install
   

4. Chart library

   - The project requires a chart library for visualizing learning streaks. Install a chart library compatible with Vue as needed. Example placeholder (replace <chart-library> with your chosen package):

   bash
   npm install <chart-library>
   

Note: No environment variables are required for this front-end-only project unless you add integrations that require them.

## Usage
Start and run the Vue.js application locally.

1. Development server

   - Start the dev server (project may use Vue CLI or Vite):

   bash
   npm run serve    # if using Vue CLI
   npm run dev      # if using Vite or similar setups
   

   - Open the URL shown by the dev server in your browser (commonly http://localhost:8080 or http://localhost:5173).

2. Production build

   bash
   npm run build
   

3. Data persistence

   - Progress and completion state are stored in the browser's localStorage. No backend is required to persist user progress.

## Implementation Steps
1. Clone the repository and install dependencies using the commands in the Installation section.

2. Project structure
   - Create a clear component folder structure, for example:
     - src/components/ModuleCard.vue
     - src/components/LessonViewer.vue
     - src/components/ProgressTracker.vue
     - src/components/StreakChart.vue
     - src/composables/useProgress.js (or src/mixins/progressMixin.js)

3. Component-based design
   - Implement ModuleCard.vue to receive module metadata via props and emit events for actions (select lesson, mark complete).
   - Implement LessonViewer.vue to display lesson content and controls for marking completion.
   - Implement ProgressTracker.vue to show per-module and overall completion using props and emitted events.

4. Reusable logic
   - Extract progress-related logic into a reusable composable or mixin (e.g., src/composables/useProgress.js) that exposes functions to read, update, and compute progress.
   - Ensure components utilize the composable/mixin to avoid duplicated logic.

5. localStorage persistence
   - In the composable/mixin, implement read/write helpers that persist progress and completion state to localStorage under a stable key (for example: "codequest-progress").
   - Serialize state as JSON and handle initial empty state and migration-safe reads.

6. Chart integration for learning streaks
   - Install your chosen chart library (see Installation).
   - Implement StreakChart.vue to accept streak data via props (dates, counts) and render the visualization using the chart library.
   - Provide a small adapter in the composable to transform stored progress into streak/time-series data for the chart.

7. Unlocking lessons
   - Implement unlocking logic in the composable or within ModuleCard/LessonViewer components: determine unlock conditions (e.g., previous lesson completed) by reading progress state from localStorage and expose helper methods to check locked/unlocked status.

8. Props and events
   - Use props to pass data into components and use custom events (or an event bus/state management if added later) to notify parent components of actions like marking completion.

9. UI and accessibility
   - Build UI with component reusability in mind: small focused components with clear props and emitted events.
   - Ensure keyboard accessibility for lesson navigation and progress controls.

10. Test and iterate
   - Run the app in development mode, verify progress persistence in localStorage, verify charts update when progress changes, and confirm unlocking behavior.

## API Endpoints (Optional)
This project is a front-end Vue.js application and does not include or require backend API routes based on the provided tech stack and requirements.