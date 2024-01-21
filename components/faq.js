import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div id='Faqs' className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "" : "transform rotate-180"
                      } w-5 h-5 text-primary`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Do you have any offline classes?",
    answer:
      "No, we don't offer any offline classes for now. Right now we are only teaching in online environment.",
  },
  {
    question: "Do you have any scholarship for meritorious student?",
    answer:
      "Yes, we do offer scholarship, please contact our support team for more details. (+91-8168642025)",
  },
  {
    question: "What makes Design Logue stand out among other design preparation institutes?",
    answer: "Design Logue stands out due to its exclusive faculty of alumni from NIFT, NID, and IIT, offering unparalleled expertise. Our innovative approach and a track record of 100% placement set us apart.",
  },
  {
    question: "Is there any assistance provided for post-exam placements or career guidance?",
    answer: "While Design Logue has an impressive 100% placement track record, we also offer career guidance sessions and connect students with industry networks. Our goal is to not only prepare students for exams but to support their transition into successful design careers.",
  },
];

export default Faq;