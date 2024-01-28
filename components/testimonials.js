import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";
import gauraviImg from '../public/img/gauravi.jpeg';
import aakritiImg from '../public/img/aakriti.jpeg';
import maheshImg from '../public/img/mahesh.jpeg';
import ritikaImg from '../public/img/ritika.jpeg';
import sushreeImg from '../public/img/sushree.jpeg';
import yashImg from '../public/img/yashIITG.jpeg';


const testimonails = [
  {
    name: 'Gauravi',
    title: 'NIFT banglore, AIR 77',
    testimonial: 'I am very thankful to Design Logue team for providing me the opportunity to get into my Dream college. They have helped me to learn the skills that are needed in the entrance exam for design collage and also guided me and  my potential to grow and learn faster. One of the best thing is there all faculty from top design college NID NIFT IIT. These are more helpful, for need  to learn a design aspirants students. What is really happen ? I am very thankful to Design Logue and its faculty for helping to obtain my Dream college.',
    image: gauraviImg,
  },
  {
    name: 'Yash',
    title: 'IIT Guwahati, AIR 19',
    testimonial: 'The coaching provided a comprehensive and effective preparation for the UCEED entrance, covering key concepts and offering valuable insights. The instructors were knowledgeable and supportive, contributing significantly to my success. The study materials were well-structured, aiding in a thorough understanding of the exam syllabus. Overall, the coaching played a crucial role in my achievement, and I highly recommend it to fellow UCEED aspirants.',
    image: yashImg,
  },
  {
    name: 'Aakriti',
    title: 'NIFT Delhi, AIR 6',
    testimonial: 'Attending the NIFT coaching was a game-changer for me. The instructors\' expertise and personalized guidance fueled my confidence. The coaching\'s strategic approach to the exam, combined with insightful study materials, made the preparation journey both enriching and successful. Grateful for the support that played a pivotal role in my NIFT exam success. Highly recommended for aspiring NIFT candidates!',
    image: aakritiImg,
  },
  {
    name: 'Ritika',
    title: 'NIFT Hyderabad, AIR 82',
    testimonial: 'Hi everyone,  I am Ritika from Utrakhand  I got into NIFT Hyderabad fashion design department.  I secure a good rank which is why I did my first preference. I joined last year in Design Logue Institute for NIFT preparation. I have seen many classes but lastly decided to join Design Logue, there is the best faculty team. And all faculty from NIFT nid or iit.  I got the best guidance and reviews of my work. DL provides a personal mentor that is very very helpful to me. So thank you so much Design Logue team specifically Sachin sir, Ajay sir, and Rakesh sir, I got my best just because of you and Design Logue',
    image: ritikaImg,
  },
  {
    name: 'Mahesh',
    title: 'NIFT Delhi, AIR 5',
    testimonial: `Choosing this coaching for NID, UCEED, and NIFT was a wise decision. The well-rounded curriculum, expert faculty, and targeted preparation strategies proved invaluable. The coaching's focus on multiple design entrance exams provided a holistic approach, ensuring I was well-prepared for each. From top-notch study materials to interactive sessions, it's a commendable choice for those aspiring to crack NID, UCEED, and NIFT. Highly recommended for comprehensive design entrance exam preparation.`,
    image: maheshImg,
  },
  {
    name: 'Shushree',
    title: 'NIFT Delhi, AIR 70',
    testimonial: 'Design Logue transformed my career because of its Expert faculty, and innovative approach, my success in NIFT owes it all to this premier institute',
    image: sushreeImg,
  }
];

// <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
const Testimonials  = () => {
  return (
    <Container>
      <div className="flex flex-row justify-center">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        width={'85vw'}
      >
        {testimonails.map(testimonial => (
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 p-6 pb-8 lg:p-14 rounded-2xl dark:bg-trueGray-800">
            <p className="text-sm lg:text-2xl leading-normal">
              {testimonial.testimonial}
            </p>

            <Avatar
              image={testimonial.image}
              name={testimonial.name}
              title={testimonial.title}
            />
          </div>
        ))}
      </Carousel>
        {/* <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Design Logue transformed my career because of its <Mark>Expert faculty</Mark>, 
              and innovative approach, my success in NIFT owes it all to this premier institute
            </p>

            <Avatar
              image={userOneImg}
              name="Rakesh Kumar"
              title="NIFT Kolkata"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            Design Logue's faculty made learning <Mark>inspiring</Mark>. The result? My dream design school acceptance. Grateful for the guidance!
            </p>

            <Avatar
              image={userTwoImg}
              name="Sachin Kumar"
              title="NIFT Delhi"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            Unmatched preparation at Design Logue led to my <Mark>UCEED</Mark> success. Exceptional faculty, a creative haven. I owe my design aspirations to this institute.
            </p>

            <Avatar
              image={userThreeImg}
              name="Mahesh Kumar"
              title="(AIR 10) NIFT Delhi"
            />
          </div>
        </div> */}
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-primary bg-secondary rounded-md ring-secondary ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200 px-1 mx-1">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;