import React from 'react';
import { Phone } from 'lucide-react';

const Contact = () => {
  const contacts = [
    { name: 'SAJI THOMAS PAREL', phone: '+91 9341259500' },
    { name: 'BIJU THOMAS', phone: '+91 9901288994' },
    { name: 'SUNNY GEORGE PAREL', phone: '+91 9980144566' },
    { name: 'JIJI PAREL', phone: '+91 9845079490' },
    { name: 'EBU P JOY', phone: '+91 9845405015' },
    { name: 'SALU GEORGE', phone: '+91 9980176394' },
    { name: 'BIJU M PAREL', phone: '+91 9740605546' },
    { name: 'REJI PAREL', phone: '+1 5615427699' },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold mb-8 text-yellow-300">Contact Us</h2>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {contacts.map((contact, idx) => (
              <div
                key={idx}
                className="bg-red-900/50 p-6 rounded-lg hover:bg-red-900/70 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
                <div className="flex items-center text-yellow-300">
                  <Phone className="w-5 h-5 mr-2" />
                  <a href={`tel:${contact.phone}`} className="hover:underline">
                    {contact.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
