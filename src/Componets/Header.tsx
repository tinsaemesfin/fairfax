import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import logoF from '../assets/logoF.svg';
import { Fragment } from 'react';

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#' },
  { name: 'Clients', href: '#clients' },
];

const Header: React.FC = () => {
  return (
    <Popover>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">FairFax</span>
                <Logo />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-8 w-8 text-primary-blue" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="font-medium text-primary-blue hover:text-gray-600">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 ">
            <span className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-secondary-golden hover:bg-[#b34b3f]"
              >
                Request a Quote
              </a>
            </span>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover-bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-8 w-8 text-primary-blue" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-primary-blue hover-text-gray-900 hover-bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="block w-full px-5 py-3 text-center font-medium text-white bg-secondary-golden hover-bg-gray-300"
            >
              Request a Quote
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

const Logo: React.FC = () => {
  return (
    <div className="flex">
      <img src={logoF} className="h-[26px] w-[70px] mr-5" alt="FairFax Logo" />
      <h1 className="text-3xl text-primary-blue font-bold">FAIRFAX</h1>
    </div>
  );
};

export default Header;
