import { useState } from 'react'
import Image from 'next/image';
import { Tab } from '@headlessui/react'

import Container from './container';
import { ALL_COURSES  } from '../data/courses';
import courseImage from '../public/img/batch.png'
import { green } from 'tailwindcss/colors';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Tags(props) {
    return (
      <>
        {" "}
        <mark className="text-primary bg-secondary rounded-md ring-secondary ring-4 px-1 mx-1">
          {props.children}
        </mark>{" "}
      </>
    );
  }

  const Feature = props => {
    const { feature } = props;
    return (
        <div className='flex items-center'>
          <svg 
            height={12}
            width={12}
            className='fill-primary'
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
          </svg>
          <p className='ml-2'>{feature}</p>
        </div>
      );
  }

const SingleCourse = props => {
    const { course } = props;
    const { name, description, eligibility, price, duration, features, tags} = course;
    const { originalPrice, discount, newPrice } = price;

    const phoneNumber = 8168652025;

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <div className='bg-gray-100 rounded-xl p-8 m-2 flex-1 hover:shadow-2xl'>
        <Image
            src={courseImage}
            width="40"
            height="40"
            className={"object-cover"}
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
        />
        <p className='mt-4 text-xl text-black font-medium'>{name}</p>
        <p className='mt-1 text-gray-500'>{description}</p>
        <div className='mt-2 gap-1'>
            {tags.map(tag => <Tags>{tag}</Tags>)}
        </div>
        <div className='h-0.5 bg-gray-300 flex-1 mt-4'/>
        <div className='mt-4'>
            {features.included.map(feature => <Feature feature={feature}></Feature>)}
        </div>
        <div className='mt-3'>
            <Tags>{`${discount} off`}</Tags>
        </div>
        {/* <div className='mt-4 flex items-center'>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 320 512"
                height={16}
                width={16}
                className='fill-primary'
                >
            <path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z"/>
            </svg>
            <p className='text-4xl '>{newPrice}</p>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 320 512"
                height={12}
                width={12}
                className='fill-primary ml-1'
                >
            <path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z"/>
            </svg>
            <p className='text-sm ' ><del>{originalPrice}</del></p>
        </div> */}
        <button onClick={handleCall} className={`flex items-center py-3 mx-auto text-lg font-medium text-center rounded-3xl px-auto lg:px-auto lg:py-2 mt-4 bg-primary text-white w-full`}>
            <div className="text-center lg:w-auto text-l m-auto">Enquire now</div>
        </button>
        </div>
    );
}

export default function Courses() {
    

  return (
    <Container>
        <div id="Courses" className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {ALL_COURSES.map(course => <SingleCourse course={course}/>)}
        </div>
    </Container>
  )
}
