'use client';

import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import MenuDisclosure from './menu-disclosure/menu-disclosure';
import MenuPopover from './menu-popover';

const platforms = [
  {
    name: 'Platform 1',
    description: 'This is the description for Platform 1',
    href: '#',
  },
  {
    name: 'Platform 2',
    description: 'This is the description for Platform 2',
    href: '#',
  },
];
const company = [
  { name: 'About us', href: '#' },
  { name: 'Watch demo', href: '#' },
  { name: 'Contact sales', href: '#' },
];
const resources = [
  { name: 'Github', href: '#' },
  { name: 'Document', href: '#' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent h-16 flex items-center justify-center">
      <nav className="relative mx-auto w-full flex max-w-screen-2xl items-center justify-end lg:justify-between xl:justify-center m-auto px-6 lg:px-10 2xl:px-0">
        {!mobileMenuOpen && (
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-98"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        )}
        <Popover.Group className="hidden lg:flex lg:gap-x-10">
          <a href="/" className="text-gray-98 leading-none opacity-90">
            Integrations
          </a>
          <MenuPopover label="Core Platform" menuItems={platforms} />
          <MenuPopover label="Company" menuItems={company} />
          <MenuPopover label="Resources" menuItems={resources} />
        </Popover.Group>
        <div className="hidden lg:flex relative xl:absolute items-center gap-8 right-0 xl:right-10 2xl:right-0 top-auto xl:top-1/2 translate-y-0 xl:-translate-y-1/2">
          <a href="/" className="text-gray-98 font-medium leading-none opacity-90">
            Contact Sales
          </a>
          <a
            href="/"
            className="text-black font-bold leading-none opacity-90 px-[18px] py-[10px] rounded-[40px] bg-gray-98"
          >
            Book a Demo
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-98"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-98">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 leading-none text-gray-98 opacity-90 hover:bg-gray-900"
                >
                  Integrations
                </a>
                <MenuDisclosure label="Core Platform" menuItems={platforms} />
                <MenuDisclosure label="Company" menuItems={company} />
                <MenuDisclosure label="Resources" menuItems={resources} />
              </div>
            </div>
            <div className="flex relative items-center justify-center gap-8 mt-20 mx-auto">
              <a href="/" className="text-gray-98 font-medium leading-none opacity-90">
                Contact Sales
              </a>
              <a
                href="/"
                className="text-black font-bold leading-none opacity-90 px-[18px] py-[10px] rounded-[40px] bg-gray-98"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
