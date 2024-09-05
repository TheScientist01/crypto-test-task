// import Header from "./components/Header";
import Image from "next/image";
import mobile from "../public/phoneTrading.png";
import Box from "../components/box";
import research from "../public/research.png";
import analytics from "../public/analytics.png";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="mx-auto bg-white">
      <header className="flex justify-between py-7 w-[85%] mx-auto">
        <div className="text-2xl font-bold">Logo</div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[200px] gap-y-9 w-[90%] mx-auto mt-9">
        <div className="my-auto mx-auto md:ml-auto w-[400px]">
          <div className="font-bold text-lg text-transparent w-[200px] bg-clip-text bg-gradient-to-r from-purple-800 via-blue-400 to-pink-600">
            *30 Days free trial
          </div>
          <div className="text-[50px] text-black font-extrabold leading-[70px]">
            The world's most powerful crypto app
          </div>
          <div className="text-gray-400 mt-5 text-lg">
            Get the most accurate market data, alerts, conversions, indicators,
            tools and more - all within the same app.
          </div>
          <div className="mt-6">
            <Link
              href={"/chart/BTC"}
              className={`rounded-lg py-2 px-5 bg-black text-white hover:shadow-card-100 duration-200`}
            >
              Go charts
            </Link>
          </div>
        </div>
        <div className="flex mx-auto rounded-[50px] w-[450px] h-[600px] bg-gradient-to-tr from-purple-900 via-blue-400 to-pink-600">
          <Image
            src={mobile}
            alt="Mobile"
            className="w-[250px] h-[500px] mx-auto my-auto"
          />
        </div>
      </div>
      <div className="pt-[130px] text-center">
        <div className="font-bold text-[50px]">Why choose us?</div>
        <div className="text-gray-400 w-[400px] mx-auto my-3">
          You can find the best indicator and indicator combination for your
          coins
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] py-[50px] w-[80%] mx-auto">
        <Box
          label="Security by Default"
          text="Enable privacy mode and app locking to protect your data"
          image={analytics}
        />
        <Box
          label="Security by Default"
          text="Enable privacy mode and app locking to protect your data"
          image={research}
          // image={"/analytics.png"}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[200px] gap-y-9 w-[90%] mx-auto">
        <div className="flex justify-center mx-auto md:ml-auto w-[500px] h-[600px]">
          <Image
            src={mobile}
            alt="Mobile"
            className="w-[250px] h-[500px] mx-auto my-auto"
          />
        </div>
        <div className="my-auto mx-auto md:mr-auto w-[400px]">
          <div className="font-bold text-lg text-transparent w-[200px] bg-clip-text bg-gradient-to-r from-purple-800 via-blue-400 to-pink-600">
            *30 Days free trial
          </div>
          <div className="text-[50px] font-extrabold leading-[70px]">
            The world's most powerful crypto app
          </div>
          <div className="text-gray-400 mt-5 text-lg">
            Get the most accurate market data, alerts, conversions, indicators,
            tools and more - all within the same app.
          </div>
        </div>
      </div>
      <footer className="bg-black text-white  mt-[60px]">
        <div className="gap-9 p-2 text-center">&copy; TheSci</div>
      </footer>
    </div>
  );
};

export default HomePage;
