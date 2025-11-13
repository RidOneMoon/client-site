import { useState } from "react";
import Router from "./routes/Router";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

export default function App() {
  const [is404, setIs404] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-800 flex flex-col">
      {/* Nav */}
      {!is404 && (
        <div className="w-full flex items-center justify-center bg-white shadow-md sticky top-0 z-50">
          <Navbar />
        </div>
      )}

      {/* Main Cont */}
      <main className=" w-full flex justify-center py-8">
        <div className="w-[80%]  rounded-lg p-4">
          <Router setIs404={setIs404} />
        </div>
      </main>

      {/* Foo */}
      {!is404 && (
        <div className="text-[#ecf0f1] w-full bg-[#2c3e50] flex items-center justify-center">
          <Footer />
        </div>
      )}
    </div>
  );
}
