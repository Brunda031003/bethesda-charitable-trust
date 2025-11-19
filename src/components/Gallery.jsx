import React from 'react';

const Gallery = () => {
  const galleryImages = [
    '/images/gallery/1.jpg',
    '/images/gallery/2.jpg',
    '/images/gallery/3.jpg',
    '/images/gallery/4.jpg',
    '/images/gallery/5.jpg',
    '/images/gallery/6.jpg',
    '/images/gallery/7.jpg',
    '/images/gallery/8.jpg',
    '/images/gallery/9.jpg',
    '/images/gallery/10.jpg'
  ];

  return (
    <section id="gallery" className="min-h-screen py-20 px-4 bg-red-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold mb-4 uppercase">BCT Gallery</h2>          
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryImages.map((img, idx) => (
            <div 
              key={idx} 
              className="aspect-square overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;