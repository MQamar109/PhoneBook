import React, { useState, useEffect } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ContactSvg from "../svg/ContactSvg";
import Button from "../common/Button";
import SearchBar from "./SearchBar";
import { deleteContact, getAllContacts } from "../hook/phonebook";

const Home = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handlenNavigate = (nav) => {
    navigate(nav);
  };

  const handleNewContact = (nav) => {
    return () => {
      handlenNavigate(nav);
    };
  };
  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const fetchData = () => {
    getAllContacts()
      .then((fetchedContacts) => {
        setData(fetchedContacts);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSearch = (value) => {
    if (value) {
      const filteredContacts = Object.values(data).filter((contact) =>
        contact.firstName.toLowerCase().includes(value)
      );
      setData(filteredContacts);
    } else {
      fetchData();
    }
  };

  const handleDelete = (id) => {
    deleteContact(id)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeletion = (id) => {
    return () => handleDelete(id);
  };

  const handleUpdattion = (id) => {
    return () => handleUpdate(id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <section>
        <div className="py-16">
          <div className=" px-6 max-w-6xl text-gray-500">
            <div className="flex items-center justify-center">
              <div></div>
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
                  onClick={handleNewContact("/create")}
                />
              </div>
            </div>
            <div>
              <SearchBar onChange={handleSearch} />
            </div>
            {data && (
              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.keys(data)?.map((key) => (
                  <div
                    key={key}
                    className="relative group p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <div className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                    <div className="relative">
                      <div className="flex justify-center">
                        <ContactSvg />
                      </div>
                      <div className="mt-6 pb-6 rounded-b-[--card-border-radius] whitespace-no-wrap">
                        <h3>
                          Name: {data[key]?.firstName} {data[key]?.lastName}
                        </h3>
                        <div className="text-gray-700 dark:text-gray-300 mt-1">
                          Phone : {data[key]?.phone}
                        </div>
                        <div className="text-black-700 dark:text-white-300 mt-1">
                          Email: {data[key]?.email}
                        </div>
                      </div>

                      <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                        <Button
                          varient="tertiary"
                          onClick={handleUpdattion(key)}
                        >
                          Update
                        </Button>
                        <Button varient="danger" onClick={handleDeletion(key)}>
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
