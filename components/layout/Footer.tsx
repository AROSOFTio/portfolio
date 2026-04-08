import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">AROSOFT Innovations Ltd</h3>
          <p className="text-sm">Building premium software solutions for enterprises and startups.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Contact</h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center">
              <Mail size={16} className="mr-2" />
              <a href="mailto:info@arosoft.io" className="hover:underline">info@arosoft.io</a>
            </li>
            <li className="flex items-center">
              <Phone size={16} className="mr-2" />
              <a href="tel:+1234567890" className="hover:underline">+1 (234) 567‑890</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/projects" className="hover:underline">Projects</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs">
        © {new Date().getFullYear()} AROSOFT Innovations Ltd. All rights reserved.
      </div>
    </footer>
  );
}
