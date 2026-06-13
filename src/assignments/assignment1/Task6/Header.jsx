const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <div className="text-2xl font-bold">⚡ LogoText</div>
      <h1 className="text-xl font-semibold">My Company</h1>
      <nav className="flex gap-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Services</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
};

export default Header;