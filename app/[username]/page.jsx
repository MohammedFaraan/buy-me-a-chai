"use client";

function UserPage({ params }) {
  return (
    <main className=" text-white">
      <div className="hero-image relative">
        <img
          className="w-full h-[350px] object-cover"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/18.gif?token-hash=CGelXoSI3qaaHVt04mwHOK7oRIKspobR8_zaWWwi5v0%3D&token-time=1754265600"
          alt="hero-image"
        />
        <div className="absolute flex items-center justify-center -bottom-20 right-[32%] md:right-[45.5%]  ">
          <img
            height={150}
            width={150}
            className="border-2 border-white rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCsqRYLAFDdL4Ix_AHai7kNVyoPV9Ssv1xg&s"
            alt="below-img"
          />
        </div>
      </div>

      <div className="info flex flex-col gap-2 px-2 md:px-0 mt-24 mb-12 text-center">
        <h2 className="font-bold text-4xl">@{params.username}</h2>
        <p className="text-xl">Creating Animated art for VTT's</p>
        <p className="text-slate-400">
          19,002 members . 100 Posts . $18,310/release
        </p>
      </div>

      <div className="payment container px-2 md:px-10 w-full my-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mx-auto">
        <div className="p-4 bg-slate-900 rounded-lg">
          <h2 className="text-2xl font-bold text-center my-5">Supporters</h2>
          <ul className="text-lg mx-10">
            <li className="flex items-center gap-2 mb-2">
              <img height={25} width={25} src="avatar.gif" alt="avatar" />
              <span>User-1 payed $50 with a message "Keep it up bro"</span>{" "}
            </li>
            <li className="flex items-center gap-2 mb-2">
              <img height={25} width={25} src="avatar.gif" alt="avatar" />
              <span>User-1 payed $50 with a message "Keep it up bro"</span>{" "}
            </li>
            <li className="flex items-center gap-2 mb-2">
              <img height={25} width={25} src="avatar.gif" alt="avatar" />
              <span>User-1 payed $50 with a message "Keep it up bro"</span>{" "}
            </li>
            <li className="flex items-center gap-2 mb-2">
              <img height={25} width={25} src="avatar.gif" alt="avatar" />
              <span>User-1 payed $50 with a message "Keep it up bro"</span>{" "}
            </li>
            <li className="flex items-center gap-2 mb-2">
              <img height={25} width={25} src="avatar.gif" alt="avatar" />
              <span>User-1 payed $50 with a message "Keep it up bro"</span>{" "}
            </li>
            
            
          </ul>
        </div>
        <div className="p-4 bg-slate-900 rounded-lg">
          <h2 className="text-2xl font-bold my-5 text-center">Make a Payment</h2>
          <div className="flex gap-2 flex-col">
            {/* input for name and message   */}
            <div>
              <input
                name="name"
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Name"
              />
            </div>
            <input
              name="message"
              type="text"
              className="w-full p-3 rounded-lg bg-slate-800"
              placeholder="Enter Message"
            />

            <input
              name="amount"
              type="text"
              className="w-full p-3 rounded-lg bg-slate-800"
              placeholder="Enter Amount"
            />

            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-purple-100"
            >
              Pay
            </button>
          </div>
          {/* Or choose from these amounts  */}
          <div className="flex flex-col md:flex-row mx-auto items-center justify-center gap-2 mt-5">
            <button className="bg-slate-800 p-3 rounded-lg">Pay ₹10</button>
            <button className="bg-slate-800 p-3 rounded-lg">Pay ₹20</button>
            <button className="bg-slate-800 p-3 rounded-lg">Pay ₹30</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default UserPage;
