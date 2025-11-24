import React from "react";

const Donation = () => {
  const donationItems = [
    { id: 1, name: "Sewing Machines for Women Empowerment", qty: "40 units", cost: "Rs. 5,500/- each" },
    { id: 2, name: "Clothes for Widows", qty: "40 beneficiaries", cost: "Rs. 750/- each" },
    { id: 3, name: "Clothes for Poor Women", qty: "25 beneficiaries", cost: "Rs. 800/- each" },
    { id: 4, name: "Blankets for the Differently Abled", qty: "10 beneficiaries", cost: "Rs. 750/- each" },
    { id: 5, name: "Gifts for School Kids", qty: "45 kids", cost: "Rs. 750/- each" },
    { id: 6, name: "Cash Prizes for Students", qty: "Total required", cost: "Rs. 12,500/-" },
    { id: 7, name: "Medical Assistance", qty: "Total required", cost: "Rs. 10,000/-" },
  ];

  return (
    <section className="py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-extrabold mb-10 tracking-wider">
          Make a Direct Impact: Choose Your Donation
        </h2>

        {/* Red Card */}
        <div className="bg-red-700/60 rounded-2xl p-6 border border-red-500/40 shadow-2xl backdrop-blur-sm">

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left rounded-xl overflow-hidden">

              <thead className="bg-green-800 text-white uppercase text-sm">
                <tr>
                  <th className="p-4">#</th>
                  <th className="p-4">Item Name</th>
                  <th className="p-4">Qty Needed</th>
                  <th className="p-4">Cost</th>
                </tr>
              </thead>

              <tbody>
                {donationItems.map((item, idx) => (
                  <tr
                    key={item.id}
                    className={idx % 2 === 0 ? "bg-red-900/40" : "bg-red-800/40"}
                  >
                    <td className="p-4 font-bold text-yellow-300">{item.id}</td>
                    <td className="p-4">{item.name}</td>
                    <td className="p-4 font-semibold">{item.qty}</td>
                    <td className="p-4 font-bold text-green-300">{item.cost}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
