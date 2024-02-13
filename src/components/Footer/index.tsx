import moment from 'moment';
import { BsInstagram, BsLinkedin, BsTwitter, BsTwitterX } from 'react-icons/bs';
import logo from './../../assets/logo/motickets_logo_-.png';
import { company, guests, hosts } from '../../constant';
import { useState } from 'react';

type Props = {};

const Footer = (props: Props) => {
  const [email, setEmail] = useState('');

  const subscribe = () => {
    console.log(email);
  };
  return (
    <footer className="bg-blackBg-500 w-full">
      <div className="w-full max-w-[1200px] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="col-span-full lg:col-span-1 lg:-mt-[18px]">
            <a
              className="flex-none text-xl font-semibold text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
              aria-label="Brand"
            >
              <img src={logo} alt="Website logo" />
            </a>
          </div>
          {/* End Col */}

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">FOR GUESTS</h4>

            <div className="mt-3 grid space-y-3">
              {guests.map((item, i) => (
                <p key={i}>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href={item.url}
                  >
                    {item.name}
                  </a>
                </p>
              ))}
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">FOR HOSTS</h4>
            <div className="mt-3 grid space-y-3">
              {hosts.map((item, i) => (
                <p key={i}>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href={item.url}
                  >
                    {item.name}
                  </a>
                </p>
              ))}
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">COMPANY</h4>
            <div className="mt-3 grid space-y-3">
              {company.map((item, i) => (
                <p key={i}>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href={item.url}
                  >
                    {item.name}
                  </a>
                </p>
              ))}
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-2">
            <h4 className="font-semibold text-gray-100">SUBSCRIPTION</h4>

            <form>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-gray-800">
                <div className="w-full">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    id="search"
                    name="subscribe"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  type="button"
                  onClick={subscribe}
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-sm text-gray-400">
                Subscribe to get notified when we publish new tickets.
              </p>
            </form>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">
              © {moment().format('YYYY')} Moloyal. All rights reserved.
            </p>
          </div>
          {/* End Col */}

          {/* Social Brands */}
          <div className="justify-center flex">
            <a
              className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://facebook.com"
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a
              className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://instagram.com"
            >
              <BsInstagram className="flex-shrink-0 w-4 h-4" />
            </a>
            <a
              className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://x.com"
            >
              <BsTwitterX className="flex-shrink-0 w-4 h-4" />
            </a>
            <a
              className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://linkedin.com"
            >
              <BsLinkedin className="flex-shrink-0 w-4 h-4" />
            </a>
          </div>
          {/* {/* End Social Brands */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
