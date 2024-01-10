import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const MenuPopover = ({ label, menuItems }) => (
  <Popover className="relative">
    <Popover.Button className="flex items-center gap-x-1 text-gray-98 leading-none opacity-90">
      {label}
      <ChevronDownIcon className="h-5 w-5 flex-none text-gray-98" />
    </Popover.Button>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="absolute top-full z-10 mt-3 w-screen max-w-[280px] overflow-hidden rounded-3xl bg-white opacity-20 shadow-lg ring-1 ring-gray-98">
        <div className="p-4">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-900"
            >
              <div className="flex-auto group ">
                <a href={item.href} className="block font-semibold  group-hover:text-[#FFFFFF]">
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-white opacity-70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
);

MenuPopover.propTypes = {
  label: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default MenuPopover;
