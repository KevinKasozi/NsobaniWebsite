import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#ffffff', backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"18\" viewBox=\"0 0 100 18\"%3E%3Cpath fill=\"%232277e5\" fill-opacity=\"0.46\" d=\"M61.82 18c3.47-1.45 6.86-3.78 11.30-7.34C78 6.76 80.34 5.10 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.90-3.40 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.10-1.63-3.40-2.66C11.57 9.30 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.70 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.90 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.80 0 8.35-.56 11.82-2z\"%3E%3C/path%3E%3C/svg%3E')" }}>
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Let's Keep in Touch</h2>
            <div className="flex justify-start space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Useful Links</h2>
            <ul className="list-none p-0 m-0">
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center mt-4">&copy; {new Date().getFullYear()} Great Ormond Street Hospital</p>
    </footer>
  );
};

export default Footer;
