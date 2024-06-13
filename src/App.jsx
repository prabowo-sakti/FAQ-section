import "./App.css";
import Accordion from "./components/Accordion";

const faq = [
  {
    question: "Berapa Umur Mu?",
    answer: "Saya berumur 21 tahun",
  },
  {
    question: "Siapa namamu?",
    answer: "prabowo sakti",
  },
  {
    question: "Dimana rumah mu?",
    answer: "kota serang",
  },
];

function App() {
  return (
    <div>
      <Accordion data={faq} />
    </div>
  );
}

export default App;
