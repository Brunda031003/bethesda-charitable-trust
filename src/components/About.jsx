import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-red-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 inline-block border-b-4 border-yellow-300 pb-2">
            ABOUT US
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white text-base md:text-lg leading-relaxed space-y-6 max-w-prose mx-auto md:mx-0 text-justify">
            <p>
              Bethesda Charitable Trust (BCT) is a nonprofit organization dedicated to uplifting underserved communities through impactful programs and meaningful outreach. Our mission is to empower individuals, promote self-reliance, and bring hope, dignity, and opportunity to those in need.
            </p>
            <p>
              We work across diverse areas including women’s empowerment, vocational training, education for underprivileged children, healthcare support, and assistance for the elderly and widows. Each year, BCT organizes initiatives such as tailoring training, distribution of sewing machines, scholarship programs, medical camps, social awareness programs, and mass weddings for financially constrained couples.
            </p>
            <p>
              By providing resources, guidance, and opportunities, we enable individuals to thrive and communities to flourish. Driven by compassion, inclusivity, and sustainability, BCT strives to create a brighter, more equitable future. With the support of donors, volunteers, and partners, we continue to transform lives and strengthen communities, one initiative at a time.
            </p>
          </div>
          
          <div className="space-y-4">
            <img 
              src="/images/about1.jpg" 
              alt="Community gathering" 
              className="rounded-lg shadow-2xl w-[375px] mx-auto"
            />
            <img 
              src="/images/about2.jpg" 
              alt="Charity event" 
              className="rounded-lg shadow-2xl w-[375px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;