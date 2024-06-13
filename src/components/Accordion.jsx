import AccordionItem from "./AccordionItem";
import { useState } from "react";

function Accordion({ data }) {
  // state ini nilai awal merupakan null.liat accordionItem
  const [curOpen, setIsOpen] = useState(null);
  //
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          curOpen={curOpen}
          onOpen={setIsOpen}
          number={index + 1}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}

export default Accordion;
