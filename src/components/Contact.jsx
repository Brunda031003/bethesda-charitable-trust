import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  const contacts = [
    { name: 'BIJU THOMAS', phone: '+91 9901288994' },
    { name: 'SUNNY GEORGE PAREL', phone: '+91 9980144566' },
    { name: 'EBU P JOY', phone: '+91 9845405015' },
    { name: 'BIJU M PAREL', phone: '+91 9740605546' },
  ]
  const bctEmail = 'bethesdacharity@example.com';

  return (
    <section id="contact" className="min-h-screen py-20 px-4 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold mb-8 text-white-300 drop-shadow-lg">
            Contact Us
          </h2>
          <p className="text-yellow-300 text-lg sm:text-xl">
            Reach out to our BCT members for donations or queries
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="bg-white/10 backdrop-blur-sm border border-yellow-400 rounded-2xl shadow-2xl p-8">
          

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {contacts.map((contact, idx) => (
              <div
                key={idx}
                className="bg-red-900/50 p-4 rounded-lg flex flex-col items-center justify-center hover:bg-red-900/70 transition-colors"
              >
                <h4 className="text-lg font-bold text-white-300 mb-2">{contact.name}</h4>
                <div className="flex items-center text-yellow-300">
                  <Phone className="w-5 h-5 mr-2" />
                  <a href={`tel:${contact.phone}`} className="hover:underline">{contact.phone}</a>
                </div>
              </div>
            ))}
          </div>

          {/* BCT Email */}
          <div className="flex items-center justify-center mt-4 text-yellow-300 text-lg font-semibold">
            <Mail className="w-6 h-6 mr-2" />
            <a href={`mailto:${bctEmail}`} className="hover:underline">{bctEmail}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
