import React, { useRef } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {

  const servicesRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    // Check if the ref and the current property exist
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='relative pb-10 bg-coolGray-50 overflow-hidden'>
          <nav>
            <div className='container mx-auto px-4'>
              <div className='flex h-24 items-center'>
                <a className='inline-block' href='#'>
                  <img
                    className='h-logo'
                    src='images/logo-text.svg'
                    alt=''
                  />
                </a>
                <button className='lg:hidden navbar-burger py-1 ml-auto'>
                  <svg
                    width={44}
                    height={16}
                    viewBox='0 0 44 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width={44} height={2} rx={1} fill='black' />
                    <rect y={14} width={44} height={2} rx={1} fill='black' />
                  </svg>
                </button>
                <div className='hidden lg:flex ml-auto mr-12 items-center'>
                  <a className='inline-block hover:underline mr-10' href='#/about'>
                    About
                  </a>
                  <a  onClick={() => scrollToSection(servicesRef)} className='inline-block hover:underline mr-10' href='#/services'>
                    Services
                  </a>
                  <a className='inline-block hover:underline mr-10' href='#/projects'>
                    Projects
                  </a>
                  <a onClick={() => scrollToSection(contactUsRef)} className='inline-block hover:underline' href='#/contact-us'>
                    Contact us
                  </a>
                </div>
                <a
                  className='group hidden lg:inline-flex py-4 px-8 items-center justify-center leading-none font-medium text-black hover:text-white border border-black rounded-full hover:bg-black transition duration-200'
                  href='#'
                >
                  <span className='mr-2'>Start a Website</span>
                  <span className='group-hover:rotate-45 transform transition duration-100'>
                    <svg
                      width={10}
                      height={10}
                      viewBox='0 0 10 10'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M9 1L1 9'
                        stroke='currentColor'
                        strokeWidth='1.3'
                        strokeMiterlimit={10}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M9 8.33571V1H1.66429'
                        stroke='currentColor'
                        strokeWidth='1.3'
                        strokeMiterlimit={10}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </nav>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full lg:w-5/12 px-4 mb-6 lg:mb-0'>
                <div className='flex flex-col h-full'>
                  <img
                    className='block w-full mb-6'
                    src='asitrastudio-assets/headers/banner-left-medium.png'
                    alt=''
                  />
                  <div className='py-10 px-10 h-full bg-white rounded-5xl'>
                    <h1 className='max-w-xs md:max-w-md font-heading text-5xl sm:text-7xl mb-4 tracking-tighter'>
                      Hassle free websites
                    </h1>
                    <div className='max-w-sm ml-auto text-right'>
                      <p>
                        <span className='block'>
                          Agile Pages designs and hosts websites in house on the
                          Gold Coast.
                        </span>
                        <span className='block'>
                          focused on brand creation, rebrands, and brand
                        </span>
                        <span className='block'>
                          transformation for progressive companies.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-7/12 px-4'>
                <div className='relative h-full'>
                  <div className='absolute top-0 right-0 m-6 w-44 h-44 flex items-center justify-center'>
                    <img
                      className='absolute top-0 left-0 animate-spinSlow'
                      style={{ animationDirection: 'reverse' }}
                      src='https://images.unsplash.com/photo-1621863622358-c2851384f82d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxMnx8bW93aW5nfGVufDB8fHx8MTY5MjUwNTE5M3ww&ixlib=rb-4.0.3&q=85&w=1920'
                      alt=''
                    />
                    <img
                      className='relative'
                      src='asitrastudio-assets/headers/arrow-spin.svg'
                      alt=''
                    />
                  </div>
                  <img
                    className='block h-full w-full rounded-5xl object-cover'
                    src='asitrastudio-assets/headers/photo-right-large.png'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-50' />
            <nav className='relative flex flex-col py-6 px-10 w-full h-full bg-white overflow-y-auto'>
              <div className='flex mb-auto items-center'>
                <a className='inline-block mr-auto' href='#'>
                  <img
                    className='h-4'
                    src='asitrastudio-assets/logos/logo-asi.svg'
                    alt=''
                  />
                </a>
                <a className='navbar-close' href='#'>
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6 18L18 6M6 6L18 18'
                      stroke='#111827'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </a>
              </div>
              <div className='py-12 mb-auto'>
                <ul className='flex-col'>
                  <li className='mb-6'>
                    <a className='inline-block text-black' href='#'>
                      About
                    </a>
                  </li>
                  <li className='mb-6'>
                    <a className='inline-block text-black' href='#'>
                      Services
                    </a>
                  </li>
                  <li className='mb-6'>
                    <a className='inline-block text-black' href='#'>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a className='inline-block text-black' href='#'>
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  className='block mb-3 px-4 py-4 text-center font-medium text-black hover:text-white border border-black hover:bg-black rounded-full transition duration-200'
                  href='#'
                >
                  Login
                </a>
                <a
                  className='block px-4 py-4 text-center font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200'
                  href='#'
                >
                  Sign in
                </a>
              </div>
            </nav>
          </div>
        </section>
        <section className='py-12 md:py-24 bg-coolGray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-md lg:max-w-none mx-auto'>
              <div className='max-w-3xl mb-20'>
                <h1 className='font-heading text-6xl sm:text-8xl lg:text-10xl tracking-tighter'>
                  Pricing
                </h1>
              </div>
              <div className='flex flex-col xs:flex-row mb-10 items-center'>
                <span className='text-xl'>Billed monthly</span>
                <div className='inline-flex p-0.5 my-4 xs:my-0 xs:mx-4 lg:mx-8 bg-black rounded-full'>
                  <button className='inline-block w-7 h-7 bg-white rounded-full' />
                  <button className='inline-block w-7 h-7 bg-transparent rounded-full' />
                </div>
                <div className='inline-flex items-center'>
                  <span className='inline-block mr-3 text-xl text-coolGray-500'>
                    Billed yearly
                  </span>
                  <span className='inline-block py-1.5 px-3 text-xs border-1.5 border-black rounded-full'>
                    
                  </span>
                </div>
              </div>
              <div className='flex flex-wrap -mx-4'>
                <div className='w-full lg:w-1/2 px-4 mb-5 lg:mb-0'>
                  <div className='relative h-full pt-10 pb-10 px-8 border rounded-4xl overflow-hidden'>
                    <img
                      className='absolute top-0 end-0'
                      src='asitrastudio-assets/pricing/shadow-blue.png'
                      alt=''
                    />
                    <span className='block mb-2 text-xl font-medium'>
                      Business Standard
                    </span>
                    <div className='flex mb-4 items-end'>
                      <h3 className='text-7xl tracking-tighter'>$39</h3>
                      <span className='ml-2 text-lg text-coolGray-600'>
                        /month
                      </span>
                    </div>
                    <p className='text-coolGray-600 mb-8'>
                      Business standard description
                    </p>
                    <a
                      className='block mb-16 py-5 px-4 text-center leading-none font-medium text-white bg-blue-500 hover:bg-black rounded-full transition duration-150'
                      href='#'
                    >
                      Get started
                    </a>
                    <ul>
                      <li className='flex items-center mb-4'>
                        <svg
                          width={21}
                          height={22}
                          viewBox='0 0 21 22'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            y='0.5'
                            width={21}
                            height={21}
                            rx='10.5'
                            fill='black'
                          />
                          <path
                            d='M15.7676 8.13463C15.4582 7.82482 14.9558 7.82501 14.646 8.13463L9.59787 13.183L7.35419 10.9393C7.04438 10.6295 6.54217 10.6295 6.23236 10.9393C5.92255 11.2491 5.92255 11.7513 6.23236 12.0611L9.03684 14.8656C9.19165 15.0204 9.39464 15.098 9.59765 15.098C9.80067 15.098 10.0039 15.0206 10.1587 14.8656L15.7676 9.25644C16.0775 8.94684 16.0775 8.44443 15.7676 8.13463Z'
                            fill='white'
                          />
                        </svg>
                        <span className='ml-4'>Website design</span>
                      </li>
                      <li className='flex items-center mb-4'>
                        <svg
                          width={21}
                          height={22}
                          viewBox='0 0 21 22'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            y='0.5'
                            width={21}
                            height={21}
                            rx='10.5'
                            fill='black'
                          />
                          <path
                            d='M15.7676 8.13463C15.4582 7.82482 14.9558 7.82501 14.646 8.13463L9.59787 13.183L7.35419 10.9393C7.04438 10.6295 6.54217 10.6295 6.23236 10.9393C5.92255 11.2491 5.92255 11.7513 6.23236 12.0611L9.03684 14.8656C9.19165 15.0204 9.39464 15.098 9.59765 15.098C9.80067 15.098 10.0039 15.0206 10.1587 14.8656L15.7676 9.25644C16.0775 8.94684 16.0775 8.44443 15.7676 8.13463Z'
                            fill='white'
                          />
                        </svg>
                        <span className='ml-4'>Single page site</span>
                      </li>
                      <li className='flex items-center mb-4'>
                        <svg
                          width={21}
                          height={22}
                          viewBox='0 0 21 22'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            y='0.5'
                            width={21}
                            height={21}
                            rx='10.5'
                            fill='black'
                          />
                          <path
                            d='M15.7676 8.13463C15.4582 7.82482 14.9558 7.82501 14.646 8.13463L9.59787 13.183L7.35419 10.9393C7.04438 10.6295 6.54217 10.6295 6.23236 10.9393C5.92255 11.2491 5.92255 11.7513 6.23236 12.0611L9.03684 14.8656C9.19165 15.0204 9.39464 15.098 9.59765 15.098C9.80067 15.098 10.0039 15.0206 10.1587 14.8656L15.7676 9.25644C16.0775 8.94684 16.0775 8.44443 15.7676 8.13463Z'
                            fill='white'
                          />
                        </svg>
                        <span className='ml-4'>Custom domain</span>
                      </li>
                      <li className='flex items-center mb-4'>
                        <svg
                          width={21}
                          height={22}
                          viewBox='0 0 21 22'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            y='0.5'
                            width={21}
                            height={21}
                            rx='10.5'
                            fill='black'
                          />
                          <path
                            d='M15.7676 8.13463C15.4582 7.82482 14.9558 7.82501 14.646 8.13463L9.59787 13.183L7.35419 10.9393C7.04438 10.6295 6.54217 10.6295 6.23236 10.9393C5.92255 11.2491 5.92255 11.7513 6.23236 12.0611L9.03684 14.8656C9.19165 15.0204 9.39464 15.098 9.59765 15.098C9.80067 15.098 10.0039 15.0206 10.1587 14.8656L15.7676 9.25644C16.0775 8.94684 16.0775 8.44443 15.7676 8.13463Z'
                            fill='white'
                          />
                        </svg>
                        <span className='ml-4'>2 Hour of support</span>
                      </li>
                      <li className='flex items-center mb-4'>
                        <svg
                          width={21}
                          height={22}
                          viewBox='0 0 21 22'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            y='0.5'
                            width={21}
                            height={21}
                            rx='10.5'
                            fill='black'
                          />
                          <path
                            d='M15.7676 8.13463C15.4582 7.82482 14.9558 7.82501 14.646 8.13463L9.59787 13.183L7.35419 10.9393C7.04438 10.6295 6.54217 10.6295 6.23236 10.9393C5.92255 11.2491 5.92255 11.7513 6.23236 12.0611L9.03684 14.8656C9.19165 15.0204 9.39464 15.098 9.59765 15.098C9.80067 15.098 10.0039 15.0206 10.1587 14.8656L15.7676 9.25644C16.0775 8.94684 16.0775 8.44443 15.7676 8.13463Z'
                            fill='white'
                          />
                        </svg>
                        <span className='ml-4'>Website Hosting</span>
                      </li>
                      <li className='flex items-center'>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='w-full lg:w-1/2 px-4'>
                  <div className='h-full pt-10 pb-10 px-8 border rounded-4xl'>
                    <span className='block mb-2 text-xl font-medium'>
                      Business Pro
                    </span>
                    <div className='flex mb-4 items-end'>
                      <h3 className='text-7xl tracking-tighter'>$59</h3>
                      <span className='ml -2 text-lg text-coolGray-500'>
                        /month
                      </span>
                    </div>
                    <p className='text-coolGray-600 mb-8'>
                      Business pro description
                    </p>
                    <a
                      className='block mb-16 py-5 px-4 text-center leading-none font-medium text-black hover:text-white border-1.5 hover:bg-black border-black rounded-full transition duration-150'
                      href='#'
                    >
                      Get started
                    </a>
                    <ul>
                      <li className='flex items-center mb-4'>
                        <svg
                          width={21}
                          height={22}
                          viewBox='0 0 21 22'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            y='0.5'
                            width={21}
                            height={21}
                            rx='10.5'
                            fill='black'
                          />
                          <path
                            d='M15.7676 8.13463C15.4582 7.82482 14.9558 7.82501 14.646 8.13463L9.59787 13.183L7.35419 10.9393C7.04438 10.6295 6.54217 10.6295 6.23236 10.9393C5.92255 11.2491 5.92255 11.7513 6.23236 12.0611L9.03684 14.8656C9.19165 15.0204 9.39464 15.098 9.59765 15.098C9.80067 15.098 10.0039 15.0206 10.1587 14.8656L15.7676 9.25644C16.0775 8.94684 16.0775 8.44443 15.7676 8.13463Z'
                            fill='white'
                          />
                        </svg>
                        <span className='ml-4'>Website design</span>
                      </li>
                      <li className='flex items-center mb-4'>
                        <svg
                          width={21}
                          height={22}
                          viewBox='0 0 21 22'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            y='0.5'
                            width={21}
                            height={21}
                            rx='10.5'
                            fill='black'
                          />
                          <path
                            d='M15.7676 8.13463C15.4582 7.82482 14.9558 7.82501 14.646 8.13463L9.59787 13.183L7.35419 10.9393C7.04438 10.6295 6.54217 10.6295 6.23236 10.9393C5.92255 11.2491 5.92255 11.7513 6.23236 12.0611L9.03684 14.8656C9.19165 15.0204 9.39464 15.098 9.59765 15.098C9.80067 15.098 10.0039 15.0206 10.1587 14.8656L15.7676 9.25644C16.0775 8.94684 16.0775 8.44443 15.7676 8.13463Z'
                            fill='white'
                          />
                        </svg>
                        <span className='ml-4'>Three page website</span>
                      </li>
                      <li className='flex items-center mb-4'>
                        <svg
                          width={21}
                          height={22}
                          viewBox='0 0 21 22'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            y='0.5'
                            width={21}
                            height={21}
                            rx='10.5'
                            fill='black'
                          />
                          <path
                            d='M15.7676 8.13463C15.4582 7.82482 14.9558 7.82501 14.646 8.13463L9.59787 13.183L7.35419 10.9393C7.04438 10.6295 6.54217 10.6295 6.23236 10.9393C5.92255 11.2491 5.92255 11.7513 6.23236 12.0611L9.03684 14.8656C9.19165 15.0204 9.39464 15.098 9.59765 15.098C9.80067 15.098 10.0039 15.0206 10.1587 14.8656L15.7676 9.25644C16.0775 8.94684 16.0775 8.44443 15.7676 8.13463Z'
                            fill='white'
                          />
                        </svg>
                        <span className='ml-4'>Custom domain</span>
                      </li>
                      <li className='flex items-center mb-4'>
                        <svg
                          width={21}
                          height={22}
                          viewBox='0 0 21 22'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            y='0.5'
                            width={21}
                            height={21}
                            rx='10.5'
                            fill='black'
                          />
                          <path
                            d='M15.7676 8.13463C15.4582 7.82482 14.9558 7.82501 14.646 8.13463L9.59787 13.183L7.35419 10.9393C7.04438 10.6295 6.54217 10.6295 6.23236 10.9393C5.92255 11.2491 5.92255 11.7513 6.23236 12.0611L9.03684 14.8656C9.19165 15.0204 9.39464 15.098 9.59765 15.098C9.80067 15.098 10.0039 15.0206 10.1587 14.8656L15.7676 9.25644C16.0775 8.94684 16.0775 8.44443 15.7676 8.13463Z'
                            fill='white'
                          />
                        </svg>
                        <span className='ml-4'>
                          Jira &amp; Salesforce Integration
                        </span>
                      </li>
                      <li className='flex items-center mb-4'>
                        <svg
                          width={21}
                          height={22}
                          viewBox='0 0 21 22'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            y='0.5'
                            width={21}
                            height={21}
                            rx='10.5'
                            fill='black'
                          />
                          <path
                            d='M15.7676 8.13463C15.4582 7.82482 14.9558 7.82501 14.646 8.13463L9.59787 13.183L7.35419 10.9393C7.04438 10.6295 6.54217 10.6295 6.23236 10.9393C5.92255 11.2491 5.92255 11.7513 6.23236 12.0611L9.03684 14.8656C9.19165 15.0204 9.39464 15.098 9.59765 15.098C9.80067 15.098 10.0039 15.0206 10.1587 14.8656L15.7676 9.25644C16.0775 8.94684 16.0775 8.44443 15.7676 8.13463Z'
                            fill='white'
                          />
                        </svg>
                        <span className='ml-4'>Data insights</span>
                      </li>
                      <li className='flex items-center mb-4'>
                        <svg
                          width={21}
                          height={22}
                          viewBox='0 0 21 22'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            y='0.5'
                            width={21}
                            height={21}
                            rx='10.5'
                            fill='black'
                          />
                          <path
                            d='M15.7676 8.13463C15.4582 7.82482 14.9558 7.82501 14.646 8.13463L9.59787 13.183L7.35419 10.9393C7.04438 10.6295 6.54217 10.6295 6.23236 10.9393C5.92255 11.2491 5.92255 11.7513 6.23236 12.0611L9.03684 14.8656C9.19165 15.0204 9.39464 15.098 9.59765 15.098C9.80067 15.098 10.0039 15.0206 10.1587 14.8656L15.7676 9.25644C16.0775 8.94684 16.0775 8.44443 15.7676 8.13463Z'
                            fill='white'
                          />
                        </svg>
                        <span className='ml-4'>Enterprise-grade security</span>
                      </li>
                      <li className='flex items-center'>
                        <svg
                          width={21}
                          height={22}
                          viewBox='0 0 21 22'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            y='0.5'
                            width={21}
                            height={21}
                            rx='10.5'
                            fill='black'
                          />
                          <path
                            d='M15.7676 8.13463C15.4582 7.82482 14.9558 7.82501 14.646 8.13463L9.59787 13.183L7.35419 10.9393C7.04438 10.6295 6.54217 10.6295 6.23236 10.9393C5.92255 11.2491 5.92255 11.7513 6.23236 12.0611L9.03684 14.8656C9.19165 15.0204 9.39464 15.098 9.59765 15.098C9.80067 15.098 10.0039 15.0206 10.1587 14.8656L15.7676 9.25644C16.0775 8.94684 16.0775 8.44443 15.7676 8.13463Z'
                            fill='white'
                          />
                        </svg>
                        <span className='ml-4'>iOS &amp; Android apps</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 md:py-20 bg-coolGray-50'>
          <div className='container mx-auto px-4'>
            <h1 className='font-heading text-6xl sm:text-8xl md:text-10xl tracking-tighter mb-20'>
              Tell us about your business
            </h1>
            <div className='mb-6 pb-10 pt-20 lg:pt-10 px-10 max-w-xl lg:max-w-none mx-auto bg-white rounded-4xl'>
              <div className='flex flex-wrap -mx-4 items-center'>
                <div className='w-full lg:w-7/12 px-4 mb-12 lg:mb-0'>
                  <div className='max-w-sm xl:max-w-lg mx-auto'>
                    <h3 className='text-5xl xl:text-7xl tracking-tight mb-6'>
                      Althhorpe Street Leamigton Spa
                    </h3>
                    <p className='max-w-md text-lg text-coolGray-600 mb-10'>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <a
                      className='group inline-flex py-5 px-8 items-center justify-center leading-none font-medium text-black hover:text-white border border-black rounded-full hover:bg-black transition duration-200'
                      href='#'
                    >
                      <span className='mr-2'>Get consulation</span>
                      <span className='group-hover:rotate-45 transform transition duration-100'>
                        <svg
                          width={10}
                          height={10}
                          viewBox='0 0 10 10'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M9 1L1 9'
                            stroke='currentColor'
                            strokeWidth='1.3'
                            strokeMiterlimit={10}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M9 8.33571V1H1.66429'
                            stroke='currentColor'
                            strokeWidth='1.3'
                            strokeMiterlimit={10}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div className='w-full lg:w-5/12'>
                  <img
                    className='block w-full rounded-4xl'
                    src='asitrastudio-assets/features/photo-medium-dark.png'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='pb-10 pt-20 lg:pt-10 px-10 max-w-xl lg:max-w-none mx-auto bg-white rounded-4xl'>
              <div className='flex flex-wrap -mx-4 items-center'>
                <div className='w-full lg:w-5/12 order-last lg:order-first'>
                  <img
                    className='block w-full rounded-4xl'
                    src='asitrastudio-assets/features/photo-medium-light.png'
                    alt=''
                  />
                </div>
                <div className='w-full lg:w-7/12 px-4 mb-12 lg:mb-0'>
                  <div className='max-w-sm xl:max-w-lg mx-auto'>
                    <h3 className='text-5xl xl:text-7xl tracking-tight mb-6'>
                      Althhorpe Street Leamigton Spa
                    </h3>
                    <p className='max-w-md text-lg text-coolGray-600 mb-10'>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <a
                      className='group inline-flex py-5 px-8 items-center justify-center leading-none font-medium text-black hover:text-white border border-black rounded-full hover:bg-black transition duration-200'
                      href='#'
                    >
                      <span className='mr-2'>Get consulation</span>
                      <span className='group-hover:rotate-45 transform transition duration-100'>
                        <svg
                          width={10}
                          height={10}
                          viewBox='0 0 10 10'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M9 1L1 9'
                            stroke='currentColor'
                            strokeWidth='1.3'
                            strokeMiterlimit={10}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M9 8.33571V1H1.66429'
                            stroke='currentColor'
                            strokeWidth='1.3'
                            strokeMiterlimit={10}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative py-12 md:py-24 bg-coolGray-50 overflow-hidden'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap -mx-4 items-center mb-20'>
              <div className='w-full md:w-1/2 px-4 mb-8 md:mb-0'>
                <h1 className='font-heading text-6xl md:text-10xl tracking-tighter'>
                  Our client's had this to say...
                </h1>
              </div>
              <div className='w-full md:w-1/2 px-4'>
                <div className='flex items-center justify-end'>
                  <a
                    className='inline-flex h-16 sm:h-18 w-16 sm:w-18 mr-8 items-center justify-center text-black hover:text-white hover:bg-black border border-black rounded-full transition duration-200'
                    href='#'
                  >
                    <svg
                      width={27}
                      height={27}
                      viewBox='0 0 27 27'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10.7051 7.12817L4.15732 13.6759L10.7051 20.2237'
                        stroke='currentColor'
                        strokeWidth='1.61806'
                        strokeMiterlimit={10}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M22.4941 13.6759H4.33949'
                        stroke='currentColor'
                        strokeWidth='1.61806'
                        strokeMiterlimit={10}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </a>
                  <a
                    className='inline-flex h-16 sm:h-18 w-16 sm:w-18 items-center justify-center text-black hover:text-white hover:bg-black border border-black rounded-full transition duration-200'
                    href='#'
                  >
                    <svg
                      width={27}
                      height={27}
                      viewBox='0 0 27 27'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M16.2949 7.12817L22.8427 13.6759L16.2949 20.2237'
                        stroke='currentColor'
                        strokeWidth='1.61806'
                        strokeMiterlimit={10}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M4.50586 13.6759H22.6605'
                        stroke='currentColor'
                        strokeWidth='1.61806'
                        strokeMiterlimit={10}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='flex items-center flex-xl-nowrap'>
              <div className='flex-shrink-0 mr-6 inline-block w-full max-w-lg lg:max-w-6xl'>
                <div className='bg-coolGray-100 rounded-4xl overflow-hidden'>
                  <div className='flex flex-wrap'>
                    <div className='w-full lg:w-4/12'>
                      <img
                        className='block h-full w-full rounded-4xl object-cover'
                        src='asitrastudio-assets/testimonials/photo-people1.png'
                        alt=''
                      />
                    </div>
                    <div className='w-full lg:w-8/12 self-center'>
                      <div className='py-16 px-8 sm:px-16 max-w-2xl'>
                        <p className='mb-8 text-2xl leading-snug'>
                          <span>
                            KW70 Fix is a leading real estate investment firm in
                            the World, headquartered in New York with offices in
                          </span>
                          <span className='text-coolGray-500'>
                            London, Chicago, Barcelona, Vienna, Rome, Las Vegas.
                          </span>
                          <span>
                            KW70 Fix initiative seeks out regions and markets
                            with robust underlying catalysts, such as burgeoning
                            technology sectors, a diverse workforce, and a
                            strong entrepreneurial culture.
                          </span>
                        </p>
                        <span className='block'>Wade Warren</span>
                        <span className='block text-sm text-coolGray-500'>
                          CEO, Since Industry
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex-shrink-0 mr-6 inline-block w-full max-w-lg lg:max-w-6xl'>
                <div className='bg-coolGray-100 rounded-4xl overflow-hidden'>
                  <div className='flex flex-wrap'>
                    <div className='w-full lg:w-4/12'>
                      <img
                        className='block h-full w-full rounded-4xl object-cover'
                        src='asitrastudio-assets/testimonials/photo-people1.png'
                        alt=''
                      />
                    </div>
                    <div className='w-full lg:w-8/12 self-center'>
                      <div className='py-16 px-8 sm:px-16 max-w-2xl'>
                        <p className='mb-8 text-2xl leading-snug'>
                          <span>
                            “KW70 Fix is a leading real estate investment firm
                            in the World, headquartered in New York with offices
                            in
                          </span>
                          <span className='text-coolGray-500'>
                            London, Chicago, Barcelona, Vienna, Rome, Las Vegas.
                          </span>
                          <span>
                            KW70 Fix initiative seeks out regions and markets
                            with robust underlying catalysts, such as burgeoning
                            technology sectors, a diverse workforce, and a
                            strong entrepreneurial culture.
                          </span>
                        </p>
                        <span className='block'>Wade Warren</span>
                        <span className='block text-sm text-coolGray-500'>
                          CEO, Since Industry
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 md:py-24 bg-coolGray-50'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap -mx-4 mb-20 lg:mb-32 items-center'>
              <div className='w-full sm:w-1/2 px-4 mb-8 sm:mb-0'>
                <h1 className='font-heading text-6xl sm:text-8xl md:text-10xl tracking-tighter'>
                  FAQ
                </h1>
              </div>
              <div className='w-full sm:w-1/2 px-4 text-right'>
                <a
                  className='group inline-flex items-center justify-center py-5 px-8 text-base leading-none border-1.5 border-black font-medium text-black hover:text-white hover:bg-black rounded-full transition duration-200'
                  href='#'
                >
                  <span className='mr-4'>Go to all questions</span>
                  <span className='group-hover:rotate-45 transform transition duration-100'>
                    <svg
                      width={11}
                      height={11}
                      viewBox='0 0 11 11'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M9.5 1.5L1.5 9.5'
                        stroke='currentColor'
                        strokeWidth='1.3'
                        strokeMiterlimit={10}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M9.5 8.83571V1.5H2.16429'
                        stroke='currentColor'
                        strokeWidth='1.3'
                        strokeMiterlimit={10}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full lg:w-1/3 px-4 mb-6 lg:mb-0'>
                <div className='h-full py-12 px-6 lg:px-8 xl:px-12 border rounded-4xl max-w-md mx-auto'>
                  <h4 className='text-2xl xl:text-3xl mb-8'>
                    What if my business partner doesn't appear in search results
                    when I try to add them as?
                  </h4>
                  <a
                    className='group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-black'
                    href='#'
                  >
                    <span className='mr-4'>Learn more</span>
                    <span className='group-hover:rotate-45 transform transition duration-100'>
                      <svg
                        width={11}
                        height={11}
                        viewBox='0 0 11 11'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9.5 1.5L1.5 9.5'
                          stroke='black'
                          strokeWidth='1.3'
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M9.5 8.83571V1.5H2.16429'
                          stroke='black'
                          strokeWidth='1.3'
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-4 mb-6 lg:mb-0'>
                <div className='h-full py-12 px-6 lg:px-8 xl:px-12 border rounded-4xl max-w-md mx-auto'>
                  <h4 className='text-2xl xl:text-3xl mb-8'>
                    Do I need to use the Paid Partnership label for things like
                    free trips or gifted product?
                  </h4>
                  <a
                    className='group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-black'
                    href='#'
                  >
                    <span className='mr-4'>Learn more</span>
                    <span className='group-hover:rotate-45 transform transition duration-100'>
                      <svg
                        width={11}
                        height={11}
                        viewBox='0 0 11 11'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9.5 1.5L1.5 9.5'
                          stroke='black'
                          strokeWidth='1.3'
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M9.5 8.83571V1.5H2.16429'
                          stroke='black'
                          strokeWidth='1.3'
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-4'>
                <div className='h-full py-12 px-6 lg:px-8 xl:px-12 border rounded-4xl max-w-md mx-auto'>
                  <h4 className='text-2xl xl:text-3xl mb-8'>
                    How can I enable brands to promote my posts?
                  </h4>
                  <a
                    className='group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-black'
                    href='#'
                  >
                    <span className='mr-4'>Learn more</span>
                    <span className='group-hover:rotate-45 transform transition duration-100'>
                      <svg
                        width={11}
                        height={11}
                        viewBox='0 0 11 11'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9.5 1.5L1.5 9.5'
                          stroke='black'
                          strokeWidth='1.3'
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M9.5 8.83571V1.5H2.16429'
                          stroke='black'
                          strokeWidth='1.3'
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 md:py-24 bg-coolGray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl px-8 mb-20 mx-auto text-center'>
              <p className='text-xl lg:text-2xl tracking-tight mb-10'>
                <span>
                  KW70 Fix is a leading real estate investment firm in the
                  World, headquartered in New York with offices in
                </span>
                <span className='italic text-coolGray-600'>
                  London, Chicago, Barcelona, Vienna, Rome, Las Vegas.
                </span>
                <span>
                  KW70 Fix initiative seeks out regions and markets with robust
                  underlying catalysts, such as burgeoning technology sectors, a
                  diverse workforce, and a strong entrepreneurial culture. In
                  those carefully selected markets and locations, we bring
                  capital and expertise to such as burgeoning technology
                  sectors, a diverse workforce, and a strong entrepreneurial
                  culture.
                </span>
              </p>
              <a
                className='group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-black'
                href='#'
              >
                <span className='mr-4'>Get to know us</span>
                <span className='group-hover:rotate-45 transform transition duration-100'>
                  <svg
                    width={11}
                    height={11}
                    viewBox='0 0 11 11'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9.5 1.5L1.5 9.5'
                      stroke='black'
                      strokeWidth='1.3'
                      strokeMiterlimit={10}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9.5 8.83571V1.5H2.16429'
                      stroke='black'
                      strokeWidth='1.3'
                      strokeMiterlimit={10}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div className='max-w-sm mx-auto sm:max-w-none'>
              <div className='flex flex-wrap'>
                <div className='w-full sm:w-1/2 lg:w-1/4'>
                  <div className='flex h-72 items-end pl-8 pr-1 pt-8 pb-12 border rounded-5xl'>
                    <div>
                      <h5 className='text-5xl lg:text-4xl 2xl:text-7xl mb-5'>
                        700+
                      </h5>
                      <span className='block text-coolGray-600'>Clients</span>
                    </div>
                  </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/4'>
                  <div className='flex h-72 items-end pl-8 pr-1 pt-8 pb-12 border rounded-5xl'>
                    <div>
                      <h5 className='text-5xl lg:text-4xl 2xl:text-7xl mb-5'>
                        40 000+
                      </h5>
                      <span className='block text-coolGray-600'>Projects</span>
                    </div>
                  </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/4'>
                  <div className='flex h-72 items-end pl-8 pr-1 pt-8 pb-12 border rounded-5xl'>
                    <div>
                      <h5 className='text-5xl lg:text-4xl 2xl:text-7xl mb-5'>
                        10 000+
                      </h5>
                      <span className='block text-coolGray-600'>
                        Units sold
                      </span>
                    </div>
                  </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/4'>
                  <div className='flex h-72 items-end pl-8 pr-1 pt-8 pb-12 border rounded-5xl'>
                    <div>
                      <h5 className='text-5xl lg:text-4xl 2xl:text-7xl mb-5'>
                        <span>9 999+m</span>
                        <sup>2</sup>
                      </h5>
                      <span className='block text-coolGray-600'>Designed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 md:py-20 bg-coolGray-50 overflow-hidden'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap -mx-4 items-center mb-20'>
              <div className='w-full lg:w-8/12 xl:w-1/2 px-4 mb-8 lg:mb-0'>
                <h1 className='font-heading text-6xl md:text-10xl tracking-tighter'>
                  Meet the team
                </h1>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='flex-shrink-0 mr-8 w-full max-w-md'>
                <img
                  className='block w-full mb-8'
                  src='asitrastudio-assets/team/photo-vertical1.png'
                  alt=''
                />
                <div className='max-w-sm'>
                  <span className='text-sm text-coolGray-600'>
                    Director of Marketing
                  </span>
                  <h4 className='text-3xl mt-1'>Jackson Wild</h4>
                </div>
              </div>
              <div className='flex-shrink-0 mr-8 w-full max-w-md'>
                <img
                  className='block w-full mb-8'
                  src='asitrastudio-assets/team/photo-vertical2.png'
                  alt=''
                />
                <div className='max-w-sm'>
                  <span className='text-sm text-coolGray-600'>
                    Senior Software Engineer
                  </span>
                  <h4 className='text-3xl mt-1'>Luca Soames</h4>
                </div>
              </div>
              <div className='flex-shrink-0 mr-8 w-full max-w-md'>
                <img
                  className='block w-full mb-8'
                  src='asitrastudio-assets/team/photo-vertical3.png'
                  alt=''
                />
                <div className='max-w-sm'>
                  <span className='text-sm text-coolGray-600'>
                    Senior Software Engineer
                  </span>
                  <h4 className='text-3xl mt-1'>Xavier Younan</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 md:py-24 bg-coolGray-50'>
          <div className='container mx-auto px-4'>
            <div className='inline-flex w-full mx-auto items-start justify-center text-center mb-20'>
              <h1 className='font-heading text-3xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-10xl tracking-tighter pt-4'>
                Our recent work
              </h1>
              <span className='block -mb-4 sm:mr-12 lg:mr-8 text-right text-2xl text-coolGray-600'>
                (21)
              </span>
            </div>
            <div className='flex flex-wrap -mx-4 -mb-20'>
              <div className='w-full lg:w-1/2 px-4 mb-20'>
                <a className='group block' href='#'>
                  <div className='relative mb-6 rounded-4xl overflow-hidden'>
                    <div className='absolute left-0 top-0 h-full w-full group-hover:bg-opacity-10 group-hover:bg-black transition duration-200' />
                    <img
                      className='block w-full h-full'
                      src='asitrastudio-assets/projects/photo-one-four2.png'
                      alt=''
                    />
                  </div>
                  <div>
                    <h3 className='text-4xl tracking-tight mb-6'>
                      Althhorpe Street Leamigton Spa
                    </h3>
                    <p className='max-w-xl text-coolGray-600'>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters,
                    </p>
                  </div>
                </a>
              </div>
              <div className='w-full lg:w-1/2 px-4 mb-20'>
                <a className='group block' href='#'>
                  <div className='relative mb-6 rounded-4xl overflow-hidden'>
                    <div className='absolute left-0 top-0 h-full w-full group-hover:bg-opacity-10 group-hover:bg-black transition duration-200' />
                    <img
                      className='block w-full h-full'
                      src='asitrastudio-assets/projects/photo-one-four3.png'
                      alt=''
                    />
                  </div>
                  <div>
                    <h3 className='text-4xl tracking-tight mb-6'>
                      Althhorpe Street Leamigton Spa
                    </h3>
                    <p className='max-w-xl text-coolGray-600'>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters,
                    </p>
                  </div>
                </a>
              </div>
              <div className='w-full lg:w-1/2 px-4 mb-20'>
                <a className='group block' href='#'>
                  <div className='relative mb-6 rounded-4xl overflow-hidden'>
                    <div className='absolute left-0 top-0 h-full w-full group-hover:bg-opacity-10 group-hover:bg-black transition duration-200' />
                    <img
                      className='block w-full h-full'
                      src='asitrastudio-assets/projects/photo-one-four4.png'
                      alt=''
                    />
                  </div>
                  <div>
                    <h3 className='text-4xl tracking-tight mb-6'>
                      Althhorpe Street Leamigton Spa
                    </h3>
                    <p className='max-w-xl text-coolGray-600'>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters,
                    </p>
                  </div>
                </a>
              </div>
              <div className='w-full lg:w-1/2 px-4 mb-20'>
                <a className='group block' href='#'>
                  <div className='relative mb-6 rounded-4xl overflow-hidden'>
                    <div className='absolute left-0 top-0 h-full w-full group-hover:bg-opacity-10 group-hover:bg-black transition duration-200' />
                    <img
                      className='block w-full h-full'
                      src='asitrastudio-assets/projects/photo-one-four1.png'
                      alt=''
                    />
                  </div>
                  <div>
                    <h3 className='text-4xl tracking-tight mb-6'>
                      Althhorpe Street Leamigton Spa
                    </h3>
                    <p className='max-w-xl text-coolGray-600'>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters,
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className='mt-20 text-center'>
              <a
                className='group inline-flex py-4 px-6 md:px-30 font-medium text-black hover:text-white items-center justify-center border-1.5 border-black rounded-full hover:bg-black transition duration-200'
                href='#'
              >
                <span className='mr-2'>View all</span>
                <span className='group-hover:rotate-45 transform transition duration-100'>
                  <svg
                    width={10}
                    height={11}
                    viewBox='0 0 10 11'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9 1.5L1 9.5'
                      stroke='currentColor'
                      strokeWidth='1.3'
                      strokeMiterlimit={10}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9 8.83571V1.5H1.66429'
                      stroke='currentColor'
                      strokeWidth='1.3'
                      strokeMiterlimit={10}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className='py-12 md:py-24 bg-coolGray-50'>
          <div className='container mx-auto px-4'>
            <div  ref={servicesRef}  className='max-w-md mx-auto lg:max-w-none'>
              <h1 className='font-heading text-6xl md:text-10xl tracking-tighter mb-20'>
                Services
              </h1>
              <div className='flex flex-wrap -mx-3'>
                <div className='w-full lg:w-1/3 px-3 mb-6 lg:mb-0'>
                  <a
                    className='relative group block h-full w-full px-9 py-14 hover:bg-black border rounded-4xl transition duration-300'
                    href='#'
                  >
                    <span className='hidden group-hover:block absolute top-0 right-0 mt-16 mr-8'>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M22 2L2 22'
                          stroke='white'
                          strokeWidth='3.25'
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M22 20.3393V2H3.66071'
                          stroke='white'
                          strokeWidth='3.25'
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                    <div>
                      <div className='max-w-xs pr-10'>
                        <h5 className='text-3xl xs:text-4xl group-hover:text-white mb-6'>
                          Website Design
                        </h5>
                      </div>
                      <p className='group-hover:text-white'>
                        We follow the RIBA Plan of Work 2020 to ensure an
                        orderly framework and project clarity from the outset.
                        First, we conduct feasibility studies and a project
                        review.
                      </p>
                    </div>
                  </a>
                </div>
                <div className='w-full lg:w-1/3 px-3 mb-6 lg:mb-0'>
                  <a
                    className='relative group block h-full w-full px-9 py-14 hover:bg-black border rounded-4xl transition duration-300'
                    href='#'
                  >
                    <span className='hidden group-hover:block absolute top-0 right-0 mt-16 mr-8'>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M22 2L2 22'
                          stroke='white'
                          strokeWidth='3.25'
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M22 20.3393V2H3.66071'
                          stroke='white'
                          strokeWidth='3.25'
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                    <div>
                      <div className='max-w-xs pr-10'>
                        <h5 className='text-3xl xs:text-4xl group-hover:text-white mb-6'>
                          Hosting
                        </h5>
                      </div>
                      <p className='group-hover:text-white'>
                        This process is led either by a chartered planning
                        consultant or chartered architect and entails the
                        preparation of concept designs and planning strategies.
                      </p>
                    </div>
                  </a>
                </div>
                <div className='w-full lg:w-1/3 px-3'>
                  <a
                    className='relative group block h-full w-full px-9 py-14 hover:bg-black border rounded-4xl transition duration-300'
                    href='#'
                  >
                    <span className='hidden group-hover:block absolute top-0 right-0 mt-16 mr-8'>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M22 2L2 22'
                          stroke='white'
                          strokeWidth='3.25'
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M22 20.3393V2H3.66071'
                          stroke='white'
                          strokeWidth='3.25'
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                    <div>
                      <div className='max-w-xs pr-10'>
                        <h5 className='text-3xl xs:text-4xl group-hover:text-white mb-6'>
                          Digital Security
                        </h5>
                      </div>
                      <p className='group-hover:text-white'>
                        During this phase the design is developed to meet the
                        required technical standards to meet building
                        regulations and incorporate sustainability strategies.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative py-36 bg-black overflow-hidden'>
          <img
            className='absolute top-0 left-0 w-full h-full object-cover'
            src='asitrastudio-assets/cta/bg-cta-room.png'
            alt=''
          />
          <div className='relative container mx-auto px-4'>
            <div className='lg:max-w-3xl mx-auto text-center'>
              <h1 className='font-heading text-5xl sm:text-8xl xl:text-10xl text-white tracking-tighter mb-14'>
                <span>Start generating leads online&nbsp;</span>
                <span />
                <span className='inline-block border-b-4 border-white'>
                  with your website.
                </span>
              </h1>
              <a
                className='group inline-flex mb-3 sm:mb-0 sm:mr-4 py-5 px-8 text-black hover:text-white leading-none items-center justify-center bg-white hover:bg-black rounded-full transition duration-150'
                href='#'
              >
                <span className='mr-2.5'>Get consulation</span>
                <span className='group-hover:rotate-45 transform transition duration-75'>
                  <svg
                    width={10}
                    height={11}
                    viewBox='0 0 10 11'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9 1.5L1 9.5'
                      stroke='currentColor'
                      strokeWidth='1.3'
                      strokeMiterlimit={10}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9 8.83571V1.5H1.66429'
                      stroke='currentColor'
                      strokeWidth='1.3'
                      strokeMiterlimit={10}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className='py-6 bg-black'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full lg:w-1/2 px-4 order-last lg:order-first'>
                <img
                  className='block max-w-lg mx-auto lg:max-w-none h-full w-full rounded-4xl object-cover'
                  src='asitrastudio-assets/contacts/map-dark.png'
                  alt=''
                />
              </div>
              <div ref={contactUsRef} className='w-full lg:w-1/2 px-4'>
                <div className='max-w-lg mx-auto lg:mr-0 pt-14 pb-16 lg:py-24'>
                  <h1 className='font-heading text-6xl xs:text-8xl sm:text-9xl xl:text-10xl tracking-tighter text-white mb-8'>
                    Let&amp;grave;s talk
                  </h1>
                  <p className='text-xl text-coolGray-500 mb-16'>
                    Whereby Embedded is the easiest way to embed video calls
                    directly into your app, website, or anywhere else you need
                    beautiful, custom video chat – that just works.
                  </p>
                  <div className='sm:flex mb-10'>
                    <div className='flex h-12 w-12 items-center justify-center border border-coolGray-800 rounded-2xl'>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M15.9945 11H16.0035'
                          stroke='white'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M11.9945 11H12.0035'
                          stroke='white'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M7.99451 11H8.00349'
                          stroke='white'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div className='mt-6 sm:mt-0 sm:ml-6'>
                      <span className='block text-white text-lg font-medium mb-5'>
                        Chat to us
                      </span>
                      <p className='text-lg text-coolGray-500 mb-1'>
                        Lorem Ipsum is simply dummy text of the
                      </p>
                      <span className='text-lg font-medium text-white'>
                        contact@example.com
                      </span>
                    </div>
                  </div>
                  <div className='sm:flex mb-10'>
                    <div className='flex h-12 w-12 items-center justify-center border border-coolGray-800 rounded-2xl'>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeMiterlimit={10}
                        />
                      </svg>
                    </div>
                    <div className='mt-6 sm:mt-0 sm:ml-6'>
                      <span className='block text-white text-lg font-medium mb-5'>
                        Call us
                      </span>
                      <p className='text-lg text-coolGray-500 mb-1'>
                        Lorem Ipsum is simply dummy text of the
                      </p>
                      <span className='text-lg font-medium text-white'>
                        +48 291 821 114
                      </span>
                    </div>
                  </div>
                  <div className='sm:flex'>
                    <div className='flex h-12 w-12 items-center justify-center border border-coolGray-800 rounded-2xl'>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M11.9989 13.4299C13.722 13.4299 15.1189 12.0331 15.1189 10.3099C15.1189 8.58681 13.722 7.18994 11.9989 7.18994C10.2758 7.18994 8.87891 8.58681 8.87891 10.3099C8.87891 12.0331 10.2758 13.4299 11.9989 13.4299Z'
                          stroke='white'
                          strokeWidth='1.5'
                        />
                        <path
                          d='M3.62166 8.49C5.59166 -0.169998 18.4217 -0.159997 20.3817 8.5C21.5317 13.58 18.3717 17.88 15.6017 20.54C13.5917 22.48 10.4117 22.48 8.39166 20.54C5.63166 17.88 2.47166 13.57 3.62166 8.49Z'
                          stroke='white'
                          strokeWidth='1.5'
                        />
                      </svg>
                    </div>
                    <div className='mt-6 sm:mt-0 sm:ml-6'>
                      <span className='block text-white text-lg font-medium mb-5'>
                        Visit us
                      </span>
                      <p className='text-lg text-coolGray-500 mb-1'>
                        Lorem Ipsum is simply dummy text of the
                      </p>
                      <span className='block mb-0.5 text-lg font-medium text-white'>
                        6811 Benjamin Franklin Drive,
                      </span>
                      <span className='text-lg font-medium text-white'>
                        Suite 170Columbia, MD 21046
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 md:py-20 bg-black'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap -mx-4 mb-16'>
              <div className='w-full lg:w-4/12 xl:w-5/12 px-4 mb-8 lg:mb-0'>
                <a className='inline-block' href='#'>
                  <img
                    style={{ height: 21 }}
                    src='asitrastudio-assets/logos/logo-asitra-white.svg'
                    alt=''
                  />
                </a>
              </div>
              <div className='w-full lg:w-8/12 xl:w-7/12 px-4'>
                <ul className='flex flex-wrap -mb-2 items-center lg:justify-end'>
                  <li className='mb-2 mr-14'>
                    <a
                      className='inline-block text-white hover:text-coolGray-400'
                      href='#'
                    >
                      Contact
                    </a>
                  </li>
                  <li className='mb-2 mr-14'>
                    <a
                      className='inline-block text-white hover:text-coolGray-400'
                      href='#'
                    >
                      Blog
                    </a>
                  </li>
                  <li className='mb-2 mr-14'>
                    <a
                      className='inline-block text-white hover:text-coolGray-400'
                      href='#'
                    >
                      Our Storry
                    </a>
                  </li>
                  <li className='mb-2 mr-14'>
                    <a
                      className='inline-block text-white hover:text-coolGray-400'
                      href='#'
                    >
                      Careers
                    </a>
                  </li>
                  <li className='mb-2 mr-14'>
                    <a
                      className='inline-block text-white hover:text-coolGray-400'
                      href='#'
                    >
                      Support
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a
                      className='inline-block text-white hover:text-coolGray-400'
                      href='#'
                    >
                      Guides
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex flex-wrap -mx-4 items-center'>
              <div className='w-full sm:w-1/2 px-4 mb-6 sm:mb-0'>
                <span className='text-sm text-coolGray-600'>
                  © 2023 Realestate.co
                </span>
              </div>
              <div className='w-full sm:w-1/2 px-4 sm:text-right'>
                <div className='-mb-2'>
                  <a
                    className='inline-block text-sm mb-2 mr-12 text-coolGray-600 hover:text-coolGray-500'
                    href='#'
                  >
                    Terms of Use
                  </a>
                  <a
                    className='inline-block text-sm mb-2 text-coolGray-600 hover:text-coolGray-500'
                    href='#'
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

