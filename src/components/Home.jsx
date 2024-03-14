import React, { useState, useEffect } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ContactSvg from "../svg/ContactSvg";
import Button from "../common/Button";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  function handleUpdate(email) {
    navigate(`/update/${email}`);
  }
  function handleDelete(email) {
    const items = JSON.parse(localStorage.getItem("phoneBook"));
    const itemToDelete = items?.findIndex((item) => item.email === email);
    if (itemToDelete !== -1) {
      items.splice(itemToDelete, 1);
      setData(items);
      localStorage.setItem("phoneBook", JSON.stringify(items));
    }
  }
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("phoneBook"));
    setData(items);
  }, []);
  return (
    <div className="flex justify-center items-center">
      <section>
        <div className="py-16">
          <div className=" px-6 max-w-6xl text-gray-500">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">
                  Quick call your Friends
                </h2>
                <p className="mt-6 text-gray-700 dark:text-gray-300">
                  A Phone book Application with some more Information.
                </p>
              </div>
              <div>
                <IoIosAddCircle
                  className="x-4 py-2 rounded cursor-pointer text-cyan-900 text-5xl md:text-7xl lg:text-8xl mb-8"
                  onClick={() => {
                    navigate("/create");
                  }}
                />
              </div>
            </div>
            {data && (
              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data?.map((item, index) => (
                  <div
                    key={item.email}
                    className="relative group p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <div className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                    <div className="relative">
                      <div className="flex justify-center">
                        <ContactSvg />
                      </div>
                      <div className="mt-6 pb-6 rounded-b-[--card-border-radius] whitespace-no-wrap">
                        <h3>
                          Name: {item.firstName} {item.lastName}
                        </h3>
                        <div className="text-gray-700 dark:text-gray-300 mt-1">
                          Phone : {item.phone}
                        </div>
                        <div className="text-black-700 dark:text-white-300 mt-1">
                          Email: {item.email}
                        </div>
                      </div>

                      <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                        <Button
                          type="button"
                          className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                          onClick={() => {
                            handleUpdate(item.email);
                          }}
                        >
                          Update
                        </Button>
                        <Button
                          type="button"
                          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                          onClick={() => {
                            handleDelete(item.email);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
