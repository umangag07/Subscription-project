import React, { useState } from "react";
import axios from "axios";

function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");
  const clickhandler = async () => {
    if (firstname !== "" && lastname !== "" && email !== "") {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        const body = {
          firstname: firstname,
          lastname: lastname,
          email: email,
        };
        setResponse("Subscribing");
        await axios
          .post("http://localhost:5000/api/v1/subscription/post", body)
          .then((result) => {
            setResponse(result.data.message);
            setFirstName("");
            setLastName("");
            setEmail("");
          })
          .catch((error) => {
            setResponse(error.message);
          });
      } else {
        setResponse("Invalid Email address");
      }
    } else {
      setResponse("Empty field");
    }
  };
  return (
    <div className="App">
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl  text-gray-900">
              Subscribe to our mailing list for more personalised content.
            </h2>
          </div>

          <div className="rounded bg-white max-w-md rounded overflow-hidden shadow-xl p-5">
            <form className="space-y-4">
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="grid gap-6">
                  <div className="col-span-12">
                    <label
                      for="first_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      name="first_name"
                      id="first_name"
                      autocomplete="given-name"
                      className="mt-1 h-7 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md"
                    />
                  </div>
                  <div className="col-span-12">
                    <label
                      for="first_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      name="first_name"
                      id="first_name"
                      autocomplete="given-name"
                      className="mt-1 border-2 h-7 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md"
                    />
                  </div>

                  <div className="col-span-12">
                    <label
                      for="email_address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="text"
                      name="email_address"
                      id="email_address"
                      autocomplete="email"
                      className="mt-1 h-7 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md"
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={clickhandler}
                  className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <h1 className="text-blue-900 text-center mt-4 font-mono font-bold">
              {response}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
