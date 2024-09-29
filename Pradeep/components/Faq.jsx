import React, { useState } from "react";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <div className="faq-container">
        <h1>FAQ</h1>

        <Accordion
          question="Hendrerit pellentesque vulputate nascetur senectus enim."
          answer="Congue urna sed ultricies eros commodo ac sagittis elementum. Odio eget aliquet ac morbi. Dapibus sit arcu scelerisque amet. Eros risus ac consequat viverra habitasse. Proin non vitae vitae est. Tincidunt risus purus malesuada tortor id ac hendrerit ullamcorper. Condimentum proin mauris donec id duis nulla egestas molestie. Feugiat euismod amet nec id pretium. Amet mi gravida blandit malesuada porttitor sed."
          isOpen={openIndex === 0}
          onClick={() => toggleAccordion(0)}
        />
        <Accordion
          question="Hendrerit pellentesque vulputate nascetur senectus enim."
          answer="Congue urna sed ultricies eros commodo ac sagittis elementum. Odio eget aliquet ac morbi. Dapibus sit arcu scelerisque amet. Eros risus ac consequat viverra habitasse. Proin non vitae vitae est. Tincidunt risus purus malesuada tortor id ac hendrerit ullamcorper. Condimentum proin mauris donec id duis nulla egestas molestie. Feugiat euismod amet nec id pretium. Amet mi gravida blandit malesuada porttitor sed."
          isOpen={openIndex === 1}
          onClick={() => toggleAccordion(1)}
        />
        <Accordion
          question="Hendrerit pellentesque vulputate nascetur senectus enim."
          answer="Congue urna sed ultricies eros commodo ac sagittis elementum. Odio eget aliquet ac morbi. Dapibus sit arcu scelerisque amet. Eros risus ac consequat viverra habitasse. Proin non vitae vitae est. Tincidunt risus purus malesuada tortor id ac hendrerit ullamcorper. Condimentum proin mauris donec id duis nulla egestas molestie. Feugiat euismod amet nec id pretium. Amet mi gravida blandit malesuada porttitor sed."
          isOpen={openIndex === 2}
          onClick={() => toggleAccordion(2)}
        />
      </div>
    </>
  );
}

function Accordion({ question, answer, isOpen, onClick }) {
  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="text-imgContainer" onClick={onClick}>
        <p className="question">{question}</p>

        <svg
          width="24"
          height="16"
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`icon ${isOpen ? "rotate" : ""}`}
        >
          <path
            d="M1.73916 9.89314e-06H22.2608C22.5888 -0.00108785 22.9104 0.0891901 23.1882 0.260355C23.466 0.431521 23.6886 0.676548 23.8302 0.966968C23.9718 1.25739 24.0265 1.58128 23.988 1.90101C23.9495 2.22075 23.8194 2.5232 23.6128 2.77323L13.3519 15.3633C13.1895 15.562 12.9837 15.7224 12.7497 15.8326C12.5157 15.9428 12.2595 16 12 16C11.7405 16 11.4843 15.9428 11.2503 15.8326C11.0163 15.7224 10.8105 15.562 10.6481 15.3633L0.387226 2.77323C0.180588 2.5232 0.0504656 2.22075 0.0119762 1.90101C-0.0265131 1.58128 0.028211 1.25739 0.16979 0.966968C0.311368 0.676548 0.53399 0.431521 0.811791 0.260355C1.08959 0.0891901 1.41117 -0.00108785 1.73916 9.89314e-06Z"
            fill="white"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="hidden-box">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default Faq;
