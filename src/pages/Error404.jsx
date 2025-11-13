import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Error404({ setIs404 }) {
  useEffect(() => {
    setIs404(true);             
    document.title = "PawMart — Page Not Found";

    return () => setIs404(false); 
  }, [setIs404]);

  return (
    <div className=" p-20 absolute top-20 w-[20vw] h-[2-vh]  border-4 border-amber-400 flex flex-col items-center justify-center text-center mt-20">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Oops! Page not found.</p>
      <Link to="/" className="btn mt-6">Go Back Home</Link>
    </div>
  );
}
