import React from 'react';
import { Phone } from 'lucide-react';

const Contact = () => {
  const contacts = [
    { name: 'SAJI THOMAS PAREL', phone: '9341259500' },
    { name: 'BIJU THOMAS', phone: '9901288994' },
    { name: 'SUNNY GEORGE PAREL', phone: '9980144566' },
    { name: 'JIJI PAREL', phone: '9845079490' },
    { name: 'EBU P JOY', phone: '9845405015' },
    { name: 'SALU GEORGE', phone: '9845079490' },
    { name: 'BIJU M PAREL', phone: '9740605546' }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <svg width="200" height="100" viewBox="0 0 200 100" className="mx-auto">
              <path d="M20,20 Q50,10 80,30 L100,50 L120,30 Q150,10 180,20" 
                    fill="none" stroke="#FCD34D" strokeWidth="3"/>
              <text x="50" y="60" fill="#FCD34D" fontSize="24" fontWeight="bold">contact us!</text>
            </svg>
          </div>
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