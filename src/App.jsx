import DynamicButton from "./components/DynamicButton";
import StatusStyle from "./components/StatusStyle";
import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <p className="subtitle">REACT ASSIGNMENT</p>
       
        
      </header>

      <main className="assignment-container">

        <section className="assignment-card">
          <div className="number">01</div>
          <div className="content">
            <h2>Dynamic Styling Based on State</h2>
            <p className="task-description">
              Click the button to change its background color using React state.
            </p>

            <div className="demo-area">
              <DynamicButton />
            </div>
          </div>
        </section>

        <section className="assignment-card">
          <div className="number">02</div>
          <div className="content">
            <h2>Conditional Styling Based on Props</h2>
            <p className="task-description">
              Different styles are applied depending on the status prop.
            </p>

            <div className="status-container">
              <StatusStyle status="success" />
              <StatusStyle status="error" />
              <StatusStyle status="warning" />
            </div>
          </div>
        </section>

        <section className="assignment-card">
          <div className="number">03</div>
          <div className="content">
            <h2>Todo List Using Class Component</h2>
            <p className="task-description">
              Add new tasks to the list and remove them when completed.
            </p>

            <div className="todo-area">
              <TodoList />
            </div>
          </div>
        </section>

        <section className="assignment-card">
          <div className="number">04</div>
          <div className="content">
            <h2>Dark Mode & Light Mode</h2>
            <p className="task-description">
              Switch between dark and light themes using React state.
            </p>

            <ThemeToggle />
          </div>
        </section>

      </main>

      <footer>
        <p>React Assignment • Built with React</p>
      </footer>
    </div>
  );
}

export default App;