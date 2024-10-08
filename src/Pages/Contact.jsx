function Contact() {
    return (
      <>
        <div className="box m-9 p-4   rounded border-blue-500 border-4 bg-white shadow-lg">
          <h1 className="font-bold text-3xl text-center mb-4 text-blue-700">CONTACT ME</h1>
          <div className="form flex flex-col justify-center items-center p-4">
            <input
              className="rounded w-full md:w-3/4 lg:w-2/3 m-2 p-2 border border-blue-300 focus:outline-none focus:border-blue-500"
              placeholder="Email ID"
            ></input>
            <input
              className="rounded w-full md:w-3/4 lg:w-2/3 m-2 p-2 border border-blue-300 focus:outline-none focus:border-blue-500"
              placeholder="Name"
            ></input>
  
            <label
              htmlFor="message"
              className="block w-full md:w-3/4 lg:w-2/3 mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full md:w-3/4 lg:w-2/3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-blue-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
            <button className="bg-blue-600 rounded p-2 m-2 text-white w-full md:w-3/4 lg:w-2/3 hover:bg-blue-700 transition duration-300">Submit</button>
          </div>
        </div>
      </>
    );
  }
  
  export default Contact;
  