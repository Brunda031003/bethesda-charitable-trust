import React from 'react';

const teamMembers = [
  { role: 'Vice President', name: 'Sunny George', image: '/images/team/Sunny%20George.jpg', phone : '+91 9980144566' },
  { role: 'Member', name: 'Biju Thomas', image: '/images/team/Biju%20Thomas.jpg' , phone : '+91 9901288994'},
  { role: 'President', name: 'Saji Thomas Parel', image: '/images/team/Saji%20Thomas%20Parel.jpg' , phone : '+91 9341259500' },
  { role: 'Intl. Coordinator', name: 'Reji Parel', image: '/images/team/Reji%20Parel.jpg'  , phone : '+1 5615427699' },
  { role: 'Joint Secretary', name: 'Ebu Joy', image: '/images/team/Ebu%20Joy.jpg' , phone : '+91 9845405015' },
  { role: 'Treasurer', name: 'Jiji Parel', image: '/images/team/Jiji%20Parel.jpg' , phone : '+91 9845079490' },
  { role: 'Member', name: 'Biju Mani', image: '/images/team/Biju%20Mani.jpg' , phone : '+91 9740605546' },
  { role: 'Member', name: 'Salu Georg', image: '/images/team/Salu%20George.jpg' , phone : '+91 9980176394' },
];

const CoreTeam = () => {
  return (
    <section id="core-team" className="min-h-screen py-20 px-4 bg-red-900/70 text-white flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold mb-8 text-yellow-300">Core Team</h2>
        </div>

        {/* Grid — mobile 2, tablet 3, desktop 4 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {teamMembers.map(({ role, name, image, phone }, idx) => (
            <div
              key={idx}
              className="bg-red-900/50 p-6 rounded-xl hover:bg-red-900/80 transition-colors flex flex-col items-center text-center"
            >
              {/* Profile Image */}
              <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-yellow-300 shadow-md"
              />

              {/* Role */}
              <h3 className="text-lg sm:text-xl font-bold mb-1">{role}</h3>

              {/* Name */}
              <p className="text-yellow-300 font-medium">{name}</p>

              {/* mobile number */}
              <p className="text-white-300 font-medium">{phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
