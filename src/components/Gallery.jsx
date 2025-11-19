import React from 'react';

const Gallery = () => {
  const galleryImages = [
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400',
    'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400',
    'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400',
    'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400',
    'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400',
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400',
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400',
    'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400',
    'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400',
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400'
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