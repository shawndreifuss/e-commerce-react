import React, { useState } from "react";
import { useSelector } from "react-redux";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";



const User = () => {
  //  Use the user state from the store
  const { user } = useSelector((state) => state.user);
  const currentUser = {user }
  console.log(currentUser)
  const [address, setAddress] = useState(user ? user.address : "");
  const [name, setName] = useState(user ? user.name : "Username");
  const [email, setEmail] = useState(user ? user.email : "Email");
  const [phone, setPhone] = useState(user ? user.phone : "Phone Number");

  //  Setting up auto complete for address
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    setAddress(results[0].formatted_address);
  };

  return (
    <div className="mx-auto ">
      <section>
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full opacity-50 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className=" h-screen py-16 bg-blueGray-200">
        <div className="container  px-4">
          <div className="relative mt-auto flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className=" my-auto">
              <div className="flex flex-wrap justify-center">
                <div className="w-full  px-4 lg:order-1">
                  <div className="flex w-full justify-center py-4 lg:pt-4 pt-8">
                    <form className="w-2/3 py-5">
                      <div className="grid gap-6 mb-6 md:grid-cols-2 w-full">
                        <div>
                          <label
                            htmlFor="first_name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Username
                          </label>
                          <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="last_name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Email
                          </label>
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="last_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Email@Email.com"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Phone number:
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                              <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 19 18"
                              >
                                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                              </svg>
                            </div>
                            <input
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              type="text"
                              id="phone-input"
                              aria-describedby="helper-text-explanation"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                              placeholder="123-456-7890"
                              required
                            />
                          </div>
                          <p
                            id="helper-text-explanation"
                            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                          >
                            Enter a phone number that matches the format.
                          </p>
                        </div>
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="address"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Address
                        </label>
                        <PlacesAutocomplete
                          id="address"
                          value={address}
                          onChange={setAddress}
                          onSelect={handleSelect}
                        >
                          {({
                            getInputProps,
                            suggestions,
                            getSuggestionItemProps,
                            loading,
                          }) => (
                            <div>
                              <input
                                {...getInputProps({
                                  placeholder: "Type address",
                                })}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              />

                              {suggestions.map((suggestion) => {
                                const style = {
                                  backgroundColor: suggestion.active
                                    ? "#41b6e6"
                                    : "#fff",
                                };
                                return (
                                  <div
                                    {...getSuggestionItemProps(suggestion, {
                                      style,
                                    })}
                                  >
                                    {suggestion.description}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </PlacesAutocomplete>
                      </div>
                      <div className="flex w-full items-center justify-center">
                        <div className="shrink-0">
                          <img
                            className="h-16 w-16 object-cover rounded-full"
                            src= {`../../../../backend/uploads/${currentUser.avatar}`}
                            alt=""
                          />
                        </div>
                        <label className="block">
                          <span className="sr-only">Choose profile photo</span>
                          <input
                            type="file"
                            className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                          />
                        </label>
                      </div>
                      <div className="flex items-start mb-6"></div>
                      <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Update
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default User;
