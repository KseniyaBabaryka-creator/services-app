Service Selection App (Vue 3)

Service Selection App is a frontend web application built with Vue 3, designed to simulate a real-world scenario where users can browse, filter, and select services, such as health or wellbeing offerings. The project demonstrates modern frontend development practices, including state management, routing, reactive UI updates, and responsive design.

Key Features

Vue 3 + Composition API: Utilizes <script setup> for cleaner and more maintainable code.

Pinia: Manages global state, including the current user, available services, selected services, and applied filters.

Vue Router: Implements client-side routing between login and service selection screens.

Service Filtering: Users can filter services by category, duration (up to 20 minutes), and price (free or paid).

Selected Services Overview: Displays selected services dynamically in a dedicated component.

Mocked Login: Simple login system to demonstrate state persistence and navigation.

Tailwind CSS: Fully responsive design, adhering to a modern color scheme and UX patterns.

User Feedback: Includes form validation, pending states on form submission, and visual indicators for filters.

Persistent Mock Data: Services data is loaded from a mockData.js file, which can easily be replaced with a real API in the future.

Project Structure

/src/views – Contains the main screens: LoginView.vue and ServiceSelectionView.vue.

/src/components – Reusable components such as ServiceCard.vue, FilterBar.vue, and SelectedServices.vue.

/src/stores – Pinia store (appStore.js) for managing global application state.

/src/data – Mock data for services (mockData.js).

UX Considerations

Clear Navigation: Users are redirected to login if not authenticated.

Reactive Filters: Applying or clearing filters updates the services list in real time.

Immediate Feedback: Form validation and pending states give users clear feedback on actions.

Responsive Layout: Designed to work on both mobile and desktop screens.

Ease of Use: Simple, readable interface prioritizing usability and accessibility.

Goals and Metrics for Success

Correct selection and display of services based on user filters.

Smooth, responsive UI interactions with no page reloads.

Proper state management, ensuring the selected services persist during the session.

Clean, maintainable code demonstrating best practices in modern Vue development.

Future Improvements

Integrate a real backend API instead of using mock data.

Add authentication with persistent sessions.

Implement drag-and-drop or bulk selection for services.

Enhance accessibility (keyboard navigation, screen reader support).

Add unit and e2e tests for components and store actions.
