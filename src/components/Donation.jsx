import React from 'react';

const Donation = () => {
  const donationItems = [
    { id: 1, name: 'Sewing Machines for Women Empowerment', qty: '40 sewing machines', cost: 'Rs. 6,500/- each' },
    { id: 2, name: 'Clothes for Widows', qty: '20 sets', cost: 'Rs. 1,000/- each' },
    { id: 3, name: 'Clothes for Poor Women in Koppa and Indoor', qty: '30 sets', cost: 'Rs. 750/- each' },
    { id: 4, name: 'Blankets for the Handicapped', qty: '10 sets', cost: 'Rs. 1,000/- each' },
    { id: 5, name: 'Gifts for School Kids', qty: '55 kids to be gifted', cost: 'Rs. 500/- each' },
    { id: 6, name: 'Cash Prizes for High-Scoring Students', qty: 'Total required', cost: 'Rs. 15,000/-' }
  ];

  return (
    <section id="donation" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Donation Items Table */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-center">DONATION ITEMS</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl">
              <table className="w-full">
                <thead className="bg-green-800">
                  <tr>
                    <th className="p-4 text-left">#</th>
                    <th className="p-4 text-left">ITEM NAME</th>
                    <th className="p-4 text-left">QTY NEEDED</th>
                    <th className="p-4 text-left">PER ITEM COST</th>
                  </tr>
                </thead>
                <tbody>
                  {donationItems.map((item, idx) => (
                    <tr key={item.id} className={idx % 2 === 0 ? 'bg-green-700/40' : 'bg-green-600/30'}>
                      <td className="p-4 font-bold">{item.id}</td>
                      <td className="p-4">{item.name}</td>
                      <td className="p-4 font-semibold">{item.qty}</td>
                      <td className="p-4 font-bold text-yellow-300">{item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Christmas Charity Event Info */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-5xl font-bold italic text-yellow-300 mb-4">
                Christmas
              </h2>
              <h3 className="text-3xl font-bold">CHARITY EVENT</h3>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 space-y-4 shadow-2xl">
              <p className="text-lg text-center">
                Your generous contributions can bring joy to many lives.
              </p>
              
              <div className="w-24 h-1 bg-yellow-300 mx-auto"></div>
              
              <h4 className="text-2xl font-bold text-center text-yellow-300">
                Let's Spread the Spirit of Christmas Together!
              </h4>
              
              <p className="text-center leading-relaxed">
                Your support can bring smiles and hope to those in need.
              </p>
              
              <p className="text-center leading-relaxed">
                Every contribution counts. Join hands with us to make this event a grand success.
              </p>
            </div>

            {/* Account Details */}
            <div className="bg-yellow-100 text-red-900 rounded-xl p-8 shadow-2xl">
              <h4 className="text-2xl font-bold text-center mb-6">Account Details</h4>
              <div className="space-y-3 text-lg">
                <p>
                  <span className="font-bold">Account name:</span> Bethseda Charitable Trust
                </p>
                <p>
                  <span className="font-bold">Account number:</span> 67207616428
                </p>
                <p>
                  <span className="font-bold">IFSC:</span> SBIN0070715
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;