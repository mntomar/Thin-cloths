function AboutPage() {
    return (
      <div>
        
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img
            src="/assets/about-banner.jpg"
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
        </div>
  
        
        <div className="max-w-4xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-2">About Think Cloths</h2>
          <p className="text-gray-700 leading-relaxed">
          Welcome to Think Cloths - your one-stop online fashion destination! We bring the latest
          trends in clothing, accessories, and lifestyle products straight to your doorstep. With
          a commitment to quality, affordability, and style, we make online shopping fun and
          hassle-free.
        </p>

        <p className="text-gray-700 leading-relaxed mt-2">
          At Think Cloths, our team curates collections that resonate with today's fashion-forward
          audience. Whether you're looking for daily wear, party outfits, or seasonal specials,
          we've got you covered.
        </p>
        </div>
      </div>
    );
  }
  
  export default AboutPage;
  