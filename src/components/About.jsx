import React from 'react';
import { Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-red-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 inline-block border-b-4 border-yellow-300 pb-2">
            BETHESDA CHARITABLE TRUST
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Bethesda Charitable Trust (BCT) is a dedicated nonprofit organization committed to uplifting underserved communities through meaningful initiatives and heartfelt outreach.
            </p>
            <p>
              Rooted in the values of compassion, empowerment, and inclusivity, we strive to bring joy, dignity, and hope to the lives of those in need. Through a variety of programs, including women's empowerment, education support, and aid for marginalized groups, we aim to make a lasting difference.
            </p>
            <p>
              Our mission extends beyond charity—it is about building a stronger, united community where everyone has an opportunity to thrive. Each year, BCT organizes impactful events like the Christmas Charity Event to mobilize resources for initiatives such as providing sewing machines, clothes, school supplies, and financial aid to those in need.
            </p>
            <p className="font-semibold text-yellow-300">
              With your support, we continue to transform lives, one small step at a time. Join us in spreading the spirit of kindness and sharing the joy of giving. Together, we can create a brighter future for all.
            </p>
            <div className="pt-4">
              <Mail className="inline w-5 h-5 mr-2" />
              <a href="mailto:bct2012koppa@yahoo.in" className="text-yellow-300 hover:underline">
                bct2012koppa@yahoo.in
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600" 
              alt="Community gathering" 
              className="rounded-lg shadow-2xl w-full"
            />
            <img 
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600" 
              alt="Charity event" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;