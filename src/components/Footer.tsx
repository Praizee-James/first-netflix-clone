import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 px-8 py-12 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Speed Test</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
              <li><a href="#" className="hover:underline">Legal Notices</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Account</a></li>
              <li><a href="#" className="hover:underline">Ways to Watch</a></li>
              <li><a href="#" className="hover:underline">Corporate Information</a></li>
              <li><a href="#" className="hover:underline">Only on Netflix</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Media Center</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <p className="text-sm">© 2024 Netflix Clone</p>
      </div>
    </footer>
  );
};

export default Footer;