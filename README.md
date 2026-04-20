# ✅ Task List App

A simple and functional task management application built with vanilla JavaScript, HTML, and CSS. Add, view, and remove tasks — with data persisted via LocalStorage and optional JSON API integration.

---

## 🚀 Features

- **Add tasks** — quickly create new tasks with a title and description
- **Remove tasks** — delete tasks individually with a single click
- **Task detail page** — click on any task to open a dedicated page with its full description
- **LocalStorage persistence** — tasks are saved in the browser and remain after page refresh
- **API integration** — optionally load tasks from an external JSON API
- **Responsive design** — styled and ready to use out of the box

---

## 🛠️ Technologies

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| HTML         | Page structure                |
| CSS          | Styling and layout            |
| JavaScript   | Logic and interactivity       |
| LocalStorage | Client-side data persistence  |
| JSON API     | Optional external data source |

---

## 📁 Project Structure

```
task-list-app/
├── App.jsx             # Main page — task list
├── TaskPage.jsx        # Task detail page
├── Tasks.jsx           # Tasks manipulation
└── README.md
```

---

## ▶️ Getting Started

No build tools or dependencies required — just open in a browser.

1. **Clone the repository**

   ```bash
   git clone https://github.com/pedro-sky/Task-List
   ```

2. **Enter the project folder and install dependencies**

   ```bash
   cd Task-List
   npm install
   ```

3. **Start the development server**

   npm run dev

---

## 🔌 API Integration

The app supports loading tasks from an external JSON API. To use it, configure the endpoint in `App.jsx`:

```js
const response = await fetch("https://your-api-url.com/tasks");
```

The API response should follow this format:

```json
[
  {
    "id": 1,
    "title": "Task title",
    "description": "Task description"
  }
]
```
## 📸 Screenshots

<img width="572" height="449" alt="image" src="https://github.com/user-attachments/assets/0a8f9591-e978-47be-b48d-104639ee01b9" />
<br>
<img width="532" height="186" alt="image" src="https://github.com/user-attachments/assets/f7cc018f-9c29-45ad-bcc2-41b291c1c768" />


---

## 💾 LocalStorage

Tasks added by the user are automatically saved to the browser's LocalStorage under the key `tasks`. This means your task list will persist between sessions without any backend.

---

## 📄 License

This project is open source. Feel free to use, modify, and distribute it.
