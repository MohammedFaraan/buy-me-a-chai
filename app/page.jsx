"use client";

export default function Home() {
   
  return (
    <main className="flex-1 flex flex-col items-center p-4">
      <div className="h-[54vh] flex flex-col items-center justify-center gap-4">
        {/* Add your home page content here */}
        <div className="flex items-center justify-center text-4xl text-white font-bold  ">
          Buy Me A Chai!
          <span>
            <img src="/tea.gif" alt="chai" className="size-16" />
          </span>
        </div>
        <p className="text-sm text-gray-300 max-w-xl text-center ">
          Support your favorite creators by buying them a chai. Simple, fast,
          and secure.
        </p>
        <div className="flex mt-2">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
        {/* You can add a call-to-action button or image here */}
      </div>
      <div className="bg-white h-1 w-full opacity-10"></div>
      <div className=" text-white py-14 w-full">
        <h2 className="text-3xl text-center font-bold mb-8">
          More About The Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
          <div className="flex flex-col items-center space-y-3">
            <img
              src="man.gif"
              alt="man-image"
              width={88}
              className="bg-slate-300 rounded-xl"
            />
            <div className="text-center">
              <p className="font-bold">Personalized Support</p>
              <p>
                Receive direct support from your fans and build meaningful
                connections as a creator.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <img
              src="coin.gif"
              alt="coin-image"
              width={88}
              className="bg-slate-300 rounded-xl"
            />
            <div className="text-center">
              <p className="font-bold">Easy & Secure Payments</p>
              <p>
                Fans can quickly buy you a chai with fast, secure, and
                hassle-free transactions.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <img
              src="group.gif"
              alt="group-image"
              width={88}
              className="bg-slate-300 rounded-xl"
            />
            <div className="text-center">
              <p className="font-bold">Grow Your Community</p>
              <p>
                Engage with a wider audience and grow your community of
                supporters and fans.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 w-full opacity-10"></div>
      <div className="flex flex-col items-center text-white py-10 w-full">
        <h2 className="text-3xl text-center  font-bold mb-8">
          Learn More About Us
        </h2>
        <div>
          <iframe
            width="560"
            height="315"
            className="md:w-[560px] md:h-[315px] w-full h-[200px]"
            src="https://www.youtube.com/embed/AbkEmIgJMcU?si=AXZRnfkudd6K6bi6"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
}
