

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-bold mb-3">Track It To Habit</h4>
          <p className="text-sm">123 Clementine, Toronto, Canada</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
          <p className="text-sm">Email: info@habit.com</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-bold mb-3">Useful Links</h4>
          <ul>
            <li className="text-sm mb-2"><a href="/" className="text-blue-300 hover:text-blue-500">Landing Page</a></li>
            <li className="text-sm mb-2"><a href="/aboutus" className="text-blue-300 hover:text-blue-500">About Us</a></li>
            <li className="text-sm mb-2"><a href="/services" className="text-blue-300 hover:text-blue-500">Services</a></li>
            <li className="text-sm mb-2"><a href="/contact" className="text-blue-300 hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-bold mb-3">Connect With Us</h4>
          <ul>
            <li className="text-sm mb-2"><a href="https://facebook.com" className="text-blue-300 hover:text-blue-500">Facebook</a></li>
            <li className="text-sm mb-2"><a href="https://twitter.com" className="text-blue-300 hover:text-blue-500">Twitter</a></li>
            <li className="text-sm mb-2"><a href="https://www.linkedin.com/in/samuel-rodriguez-armesto/" className="text-blue-300 hover:text-blue-500">LinkedIn</a></li>
            <li className="text-sm mb-2"><a href="https://instagram.com" className="text-blue-300 hover:text-blue-500">Instagram</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-bold mb-3">About Us</h4>
          <p className="text-sm">Helping you track your habits since 2024</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} Track It To Habit. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}
export default Footer;