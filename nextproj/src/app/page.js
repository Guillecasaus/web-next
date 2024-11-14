import Image from "next/image";
import Navbar from "./components/Navbar";
import Users from "./components/User";

export default function Home() {
  return (
    <>
      <div className=""></div><Navbar />
        <div className="flex justify-center items-center text-3xl">
          <h1 >HomePage</h1>
          <Users />
        </div>
    
    </>

  );
}
