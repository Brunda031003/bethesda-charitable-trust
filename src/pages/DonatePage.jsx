import React from "react";

// Add Google Font
const headingFont = `
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
`;

const DonatePage = () => {
  const donationItems = [
    { id: 1, name: "Sewing Machines for Women Empowerment", qty: "40 sewing machines", cost: "Rs. 5,500/- each" },
    { id: 2, name: "Clothes for Widows", qty: "40 beneficiaries", cost: "Rs. 750/- each" },
    { id: 3, name: "Clothes for Poor Women", qty: "25 beneficiaries", cost: "Rs. 800/- each" },
    { id: 4, name: "Blankets for the Differently Abled", qty: "10 beneficiaries", cost: "Rs. 750/- each" },
    { id: 5, name: "Gifts for School Kids", qty: "45 kids", cost: "Rs. 750/- each" },
    { id: 6, name: "Cash Prizes for Students", qty: "Total required", cost: "Rs. 12,500/-" },
    { id: 7, name: "Medical Assistance", qty: "Total required", cost: "Rs. 10,000/-" },
  ];

  return (
    <div
      className="min-h-screen text-white px-4 py-6 md:px-10 md:py-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('images/background.webp')",
      }}
    >
      <style>{headingFont}</style>

      {/* HEADER SECTION */}
      <div className="max-w-6xl mx-auto text-center space-y-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">

          {/* TEXT */}
          <div>
            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-yellow-300"
              style={{ fontFamily: "Great Vibes, cursive" }}
            >
              BCT Christmas Charity Event
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-200 mt-4">
              December 27, 2025 • 5:00 PM Onwards <br />
              BCT Ground Indoor, Mundgod
            </p>

            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-300 pt-4">
              Let's Spread the Spirit of Christmas Together!
            </h4>

            <div className="w-16 sm:w-20 h-1 bg-yellow-300 mx-auto rounded-full mt-3"></div>
          </div>
        </div>
      </div>

      {/* RED CARD WRAPPER */}
      <div className="max-w-5xl mx-auto bg-red-900/80 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl border border-red-700/40">

        {/* QUOTE CARD */}
        <div className="bg-green-900 p-4 md:p-6 rounded-xl mb-8 border border-green-700/40">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-300">
            “Changing Lives, One Village At A Time”
          </h3>

          <p className="text-sm sm:text-base text-white/90 mt-3 leading-relaxed">
            These enhanced initiatives aim to uplift underprivileged communities
            in the remote areas of North Karnataka...
          </p>

          {/* STATS */}
          <div className="flex justify-center gap-6 sm:gap-10 mt-6 text-xs sm:text-base">
            <div className="text-center">
              <p className="text-2xl sm:text-4xl font-bold text-yellow-300">13+</p>
              <p className="text-white/80">Years</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-4xl font-bold text-yellow-300">10+</p>
              <p className="text-white/80">Communities</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-4xl font-bold text-yellow-300">100+</p>
              <p className="text-white/80">Families</p>
            </div>
          </div>
        </div>

        {/* DONATION TABLE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-center">
          DONATION ITEMS
        </h2>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm sm:text-base">
              <thead className="bg-green-900 text-white uppercase text-xs sm:text-sm">
                <tr>
                  <th className="p-3 sm:p-4">#</th>
                  <th className="p-3 sm:p-4">Item Name</th>
                  <th className="p-3 sm:p-4">Qty Needed</th>
                  <th className="p-3 sm:p-4">Cost</th>
                </tr>
              </thead>

              <tbody>
                {donationItems.map((item, idx) => (
                  <tr
                    key={item.id}
                    className={
                      idx % 2 === 0
                        ? "bg-green-700/40 text-white"
                        : "bg-green-600/30 text-white"
                    }
                  >
                    <td className="p-3 sm:p-4 font-bold">{item.id}</td>
                    <td className="p-3 sm:p-4">{item.name}</td>
                    <td className="p-3 sm:p-4 font-semibold">{item.qty}</td>
                    <td className="p-3 sm:p-4 font-bold text-yellow-300">{item.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ACCOUNT DETAILS SECTION */}
        <div className="mt-12 px-4">
          <div className="bg-white/10 backdrop-blur-md border border-yellow-400 
                          shadow-lg rounded-2xl p-6 w-full">
            <h2 className="text-3xl font-extrabold text-center text-yellow-300 mb-6 tracking-wide drop-shadow">
              BANK ACCOUNT DETAILS
            </h2>

            <div className="grid grid-cols-2 gap-4 text-lg text-white font-semibold">

              <div className="text-right opacity-80">Account Name:</div>
              <div className="text-left text-yellow-300">Bethesda Charitable Trust</div>

              <div className="text-right opacity-80">Account Number:</div>
              <div className="text-left text-yellow-300">67207616428</div>

              <div className="text-right opacity-80">IFSC Code:</div>
              <div className="text-left text-yellow-300">SBIN0070715</div>

            </div>
          </div>
        </div>



        {/* CONTACTS FOR DONATION */}
        <div className="mt-8 sm:mt-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center text-yellow-300 mb-6 tracking-wide drop-shadow">
            CONTACT FOR DONATION
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 px-2 sm:px-4">
            {[
              { name: 'Saji Thomas Parel',phone : '+91 9341259500' },
              { name: 'Biju Thomas', phone : '+91 9901288994'},
              { name: 'Sunny George', phone : '+91 9980144566' },
              { name: 'Reji Parel', phone : '+1 5615427699' },
              { name: 'Jiji Parel',  phone : '+91 9845079490' },
              { name: 'Ebu Joy',  phone : '+91 9845405015' },
              {name: 'Salu George',  phone : '+91 9980176394' },
              {name: 'Biju Mani',  phone : '+91 9740605546' }                   
            ].map((person, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-gradient-to-r bg-green-900
                          text-yellow-300 font-bold shadow-md hover:shadow-xl transition-all
                          flex items-center justify-between transform hover:scale-[1.03]"
              >
                <span className="text-base sm:text-lg">{person.name}</span>
                <span className="text-sm sm:text-md">{person.phone}</span>
              </div>
            ))}
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default DonatePage;
