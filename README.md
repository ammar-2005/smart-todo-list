📝 Smart To-Do List
A clean, responsive To-Do List web app with dark/light mode, task priorities, live search, and full edit/delete support — built with vanilla HTML, CSS, and JavaScript (no frameworks, no dependencies).


Show Image Show Image Show Image Show Image

✨ Features
✅ Add, edit, and delete tasks
🎯 Priority levels — High 🔴 / Medium 🟡 / Low 🟢, each with its own color coding
🔍 Live search — filter tasks instantly as you type
🌗 Dark / Light mode — toggle saved automatically with localStorage
💾 Persistent storage — your tasks stay saved even after closing the browser
⌨️ Keyboard support — press Enter to add or save a task
📱 Fully responsive — works smoothly on mobile and desktop
🖼️ Preview
Light Mode	Dark Mode
☀️ Clean and minimal	🌙 Easy on the eyes
(Add your own screenshots/GIF here — e.g. screenshots/light.png, screenshots/dark.png)

🛠️ Built With
HTML5 — semantic structure
CSS3 — custom properties (CSS variables) for theming, flexbox layout, responsive design
JavaScript (ES6+) — DOM manipulation, event delegation, localStorage API
No build tools, no frameworks, no npm packages — just plain web fundamentals.

🧠 How It Works
Tasks are stored as objects ({ text, priority }) in an array, persisted to localStorage under the todos key.
The dark/light mode preference is stored separately under the isDark key, so it persists across sessions.
The UI re-renders the task list on every add/edit/delete/search action by rebuilding the <ul> content from the current todos array.
Editing a task reuses the same input field and swaps the Add Task button for an Update Task button until the edit is saved.
📌 Roadmap / Possible Improvements
 Add input validation (minimum character length, empty input warning)
 Add due dates / reminders
 Add drag-and-drop reordering
 Add task categories/tags
 Add a "mark as complete" checkbox state
 Add unit tests
🤝 Contributing
Contributions, issues, and feature requests are welcome. Feel free to check the issues page or open a pull request.

📄 License
This project is licensed under the MIT License.

👤 Author
Your Name GitHub: ammar-2005

