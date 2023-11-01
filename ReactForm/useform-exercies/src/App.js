import { Routes, Route } from "react-router-dom";
import {
  ContactForm,
  BookManagementApp,
  MailForm,
  MedicalDeclarationForm,
} from "./components/Forms";
import { NavBar } from "./components/Layout";

function App() {
  return (
    <div className="container border p-5 ">
      <h1 className="text-center my-4 text-primary">
        React Hook Form Exercises
      </h1>
      <NavBar />
      <Routes>
        <Route path="/formContact" element={<ContactForm />} />
        <Route path="/formBooks" element={<BookManagementApp />} />
        <Route path="/formMail" element={<MailForm />} />
        <Route path="/formMedical" element={<MedicalDeclarationForm />} />
      </Routes>
      {/* <ContactForm /> */}
      {/* <BookManagementApp /> */}
      {/* <MailForm /> */}
      {/* <MedicalDeclarationForm /> */}
    </div>
  );
}
export default App;
