const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">MyBrand</div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">Features</a>
        <a href="#" className="hover:text-gray-300">Pricing</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;