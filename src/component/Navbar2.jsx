import sun from "../assets/icons/sun.svg";
import Resbtn from "./Resume";

export default function Navbar2() {
  return (
    <nav className="bg-orange-300 fixed top-0 left-0 right-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold p-5">Omkar Jawalikar</h1>
        <div className="topright flex  ">
          <div className="p-5">
            <Resbtn />
          </div>
          <button className="p-5">
            <img className="w-10 h-10" src={sun} alt="Theme toggle" />
          </button>
        </div>
      </div>
    </nav>
  );
}
