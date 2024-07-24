export default function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between py-2 ">
        <h1 className="text-2xl font-bold ">My Portfolio</h1>
        <ul className="flex">
          <li className="m-5">About</li>
          <li className="m-5">Projects</li>
          <li className="m-5">Skills</li>
          <li className="m-5">Experience</li>
          <li className="m-5">ContactMe</li>
        </ul>
      </div>
    </nav>
  );
}
