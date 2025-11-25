import React from 'react';

const activities = [
  {
    title: "Education",
    image: "/images/Education.png",
    alt: "Children learning",
    description: "Each year, we help 45–50 students from nearby villages by providing essential school supplies, including uniforms, textbooks, notebooks, bags, and more, ensuring they have everything needed for a smooth learning experience."
  },
  {
    title: "Tailoring Centre",
    image: "/images/Tailoring.png",
    alt: "Tailoring class",
    description: "Every year, we distribute 35–40 sewing machines in bulk during our annual program. So far, we have successfully completed 47 batches of our Tailoring Training Center, with each batch training 30–35 women."
  },
  {
    title: "Women Empowerment",
    image: "/images/Women Empowerment.jpg",
    alt: "Charity event",
    description: "This initiative is part of our Women Empowerment program. It is designed for women who complete the tailoring training in a given year, and includes sports, feedback sessions, and other engaging activities."
  },
  {
    title: "Medical Assistance",
    image: "/images/Medical1.jpg",
    alt: "Helping hands",
    description: "We provide medical assistance to the needy by partnering with and clinics for free or low-cost care. We also organize medical camps in underserved areas and supply essential medications and medical equipment"
  }
];

const WorksOfBCT = () => {
  return (
    <section id="works-of-bct" className="min-h-screen py-20 px-4 bg-red-700/70 bor">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 inline-block border-b-8 border-yellow-300 pb-2">
            IMPACT OF BCT
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="bg-red-800 rounded-lg shadow-lg border-4 border-yellow-300 text-center">
              <img 
                src={activity.image} 
                alt={activity.alt} 
                className="mx-auto rounded shadow-md h-48 object-cover w-full"
              />
              {/* Title */}
              <h3 className="text-xl font-bold text-yellow-900 bg-yellow-300 px-0 py-1 -mt-1 relative z-10">
                {activity.title}
              </h3>
              {/* Description */}
              <p className="text-sm leading-relaxed text-white text-justify p-2 pt-0">
                {activity.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorksOfBCT;
