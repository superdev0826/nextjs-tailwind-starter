'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import ClipLoader from 'react-spinners/ClipLoader';

const TrialEmailInput = ({ value, onChange }) => {
  const [clicked, setClicked] = useState(false);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmit = () => {
    if (value) {
      setError('');
      setClicked(true);
      setTimeout(() => {
        if (validateEmail(value)) {
          setStatus('right');
        } else {
          setStatus('wrong');
        }
      }, 1000);
    } else {
      setError('Email is a required field');
    }
  };

  const setInitialStatus = () => {
    setClicked(false);
    setStatus('loading');
  };

  const showStatus = (
    <div>
      {status === 'loading' && (
        <div className="w-[50px] h-[50px] rounded-full bg-[#9747FF] flex justify-center place-items-center">
          <ClipLoader color="#FFFFFF" loading />
        </div>
      )}
      {status === 'right' && (
        <div
          className="w-[50px] h-[50px] rounded-full bg-[#40BFAA] flex justify-center place-items-center hover:cursor-pointer"
          onClick={setInitialStatus}
        >
          <FaCheck color="#FFFFFF" />
        </div>
      )}
      {status === 'wrong' && (
        <div
          className="w-[50px] h-[50px] rounded-full bg-[#CB6AFB] flex justify-center place-items-center hover:cursor-pointer"
          onClick={setInitialStatus}
        >
          <ImCross color="#FFFFFF" />
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col">
      <div className="flex items-center w-full h-[60px] rounded-[60px] border border-[#9966ff30] bg-input-gradient p-[6px] pl-8">
        <input
          value={value}
          placeholder="Your business email..."
          className="bg-transparent h-full flex-1 outline-none text-gray-98 placeholder:bg-placeholder-gradient placeholder:bg-clip-text placeholder:text-transparent placeholder:font-light placeholder:opacity-80"
          onChange={onChange}
        />
        {clicked ? (
          showStatus
        ) : (
          <button
            type="button"
            className="w-[168px] h-12 rounded-[48px] bg-primary-1 font-bold text-black flex items-center justify-center"
            onClick={onSubmit}
          >
            Free Trial
          </button>
        )}
      </div>
      <p className="mt-3 ml-5 text-[#FF0000]">{error}</p>
    </div>
  );
};

TrialEmailInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default TrialEmailInput;
