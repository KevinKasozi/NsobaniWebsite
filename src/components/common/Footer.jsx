import React from 'react';

const Footer = () => {
  return (
    <footer className="font-sans bg-gray-200 py-12 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
        <div>
          <h4 className="text-black text-lg font-bold mb-5">Company</h4>
          <ul className="space-y-4">
            <li><a href="javascript:void(0)" className="text-black -300 hover:text-black text-sm">About Us</a></li>
            <li><a href="javascript:void(0)" className="text-black -300 hover:text-black text-sm">Contact</a></li>
            <li><a href="javascript:void(0)" className="text-black -300 hover:text-black text-sm">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-black text-lg font-bold mb-5">Information</h4>
          <ul className="space-y-4">
            <li><a href="javascript:void(0)" className="text-black -300 hover:text-black text-sm">Privacy Policy</a></li>
            <li><a href="javascript:void(0)" className="text-black -300 hover:text-black text-sm">Terms of Service</a></li>
            <li><a href="javascript:void(0)" className="text-black -300 hover:text-black text-sm">Refund Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-black text-lg font-bold mb-5">Help</h4>
          <ul className="space-y-4">
            <li><a href="javascript:void(0)" className="text-black -300 hover:text-black text-sm">FAQs</a></li>
            <li><a href="javascript:void(0)" className="text-black -300 hover:text-black text-sm">Shipping Information</a></li>
            <li><a href="javascript:void(0)" className="text-black -300 hover:text-black text-sm">Returns & Exchanges</a></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-black text-lg font-bold mb-5">Newsletter</h4>
          <p className="text-black -300 mb-4 text-sm">Subscribe to our newsletter to get updates on new products and promotions.</p>
          <form className="mb-4">
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 px-4 py-3.5 rounded-l-lg w-full text-sm text-black -300 outline-none"
              />
              <button
                type="button"
                className="bg-gray-700 text-sm text-black -300 tracking-wide px-4 py-3.5 rounded-r-lg"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className='text-black -300 text-right text-sm mt-8'>© {new Date().getFullYear()}<a href='https://readymadeui.com/' target='_blank' className="hover:underline mx-1">ReadymadeUI</a>All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
