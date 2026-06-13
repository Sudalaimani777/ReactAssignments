const Banner = ({ title, subtitle }) => {
  return (
    <section className="bg-blue-600 text-white text-center py-20 px-4">
      <h1 className="text-4xl font-bold mb-3">{title}</h1>
      <p className="text-lg">{subtitle}</p>
    </section>
  );
};

export default Banner;