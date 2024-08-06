

function Certificates()
{
    return(
        <>
        <h1 className="text-4xl font-bold text-center mt-8 mb-8">
        Certificates & Awards
      </h1>
      <div className="flex flex-col md:flex-row justify-center">
        {/* Certificates and Awards */}
        <div className="bg-white border border-gray-200 p-4 rounded shadow-md mb-4 w-full md:w-1/2">
          <h2 className="text-xl font-semibold">Certificates</h2>
          <ul className="list-disc list-inside mt-2">
            <li>
              Certificate in Advanced Web Development, XYZ Institute, 2023
            </li>
            <li>JavaScript Mastery Certificate, ABC Academy, 2022</li>
            {/* Add more certificates here */}
          </ul>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded shadow-md mb-4 w-full md:w-1/2">
          <h2 className="text-xl font-semibold">Awards</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Best Organizer Award, VIT Vellore, 2024</li>
            <li>Excellence in Leadership, XYZ Organization, 2023</li>
            {/* Add more awards here */}
          </ul>
        </div>
      </div>
        </>
    )
}


export default Certificates;