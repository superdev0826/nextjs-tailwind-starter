import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import PropTypes from 'prop-types';
import React from 'react';

import { classNames } from 'utils/helpers';

const MenuDisclosure = ({ label, menuItems }) => (
  <Disclosure as="div" className="-mx-3">
    {({ open }) => (
      <>
        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 leading-none text-gray-98 opacity-90 hover:bg-gray-900">
          {label}
          <ChevronDownIcon
            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
            aria-hidden="true"
          />
        </Disclosure.Button>
        <Disclosure.Panel className="mt-2 space-y-2">
          {menuItems.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-lg py-2 pl-6 pr-3 text-sm leading-none text-gray-98 opacity-90 hover:bg-gray-900"
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

MenuDisclosure.propTypes = {
  label: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MenuDisclosure;
