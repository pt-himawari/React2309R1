import "./App.css";
import { ContactForm, BookManagementApp } from "./components";
function App() {
  return (
    <div className="container border p-5 ">
      <h1 className="text-center my-4 text-primary">
        React Hook Form Exercises
      </h1>
      <ContactForm />
      <BookManagementApp />
    </div>
  );
}
export default App;
