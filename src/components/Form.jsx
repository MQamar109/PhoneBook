import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdAddCall } from "react-icons/md";
import Label from "../common/Label";
import Input from "../common/Input";
import Button from "../common/Button";
import { createNewContact, getContact, updateContact } from "../hook/phonebook";

const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNavigation = (nav) => {
    navigate(nav);
  };

  const handleContactsNavigation = (url) => {
    return () => handleNavigation(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      createNewContact(formData)
        .then((data) => {})
        .catch((error) => {
          console.log(error);
        });
    } else {
      updateContact(id, formData)
        .then((data) => {})
        .catch((error) => {
          console.log(error);
        });
    }

    navigate("/");
  };

  useEffect(() => {
    if (id) {
      getContact(id)
        .then((data) => {
          setFormData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-full max-w-lg border border-black-500 p-8 "
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center">
          <MdAddCall className=" text-cyan-700 text-5xl md:text-6xl lg:text-7xl mb-8" />
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Label htmlFor="grid-first-name">First Name</Label>
            <Input
              varient="smallGrayOutlined"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              name="firstName"
              value={formData?.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Label htmlFor="grid-last-name">Last Name</Label>
            <Input
              varient="smallGrayOutlined"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              name="lastName"
              value={formData?.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <Label htmlFor="grid-phone">phone Number (03xx-xxxxxxx)</Label>
            <Input
              varient="mediumGrayOutlined"
              id="grid-phone"
              type="tel"
              placeholder="0300-2587412"
              name="phone"
              value={formData?.phone}
              onChange={handleChange}
              pattern="[0-9]{4}-[0-9]{7}"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <Label htmlFor="grid-email">Email</Label>
            <Input
              varient="mediumGrayOutlined"
              id="grid-email"
              type="email"
              placeholder="example@gmail.com"
              name="email"
              value={formData?.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button type="submit" varient="primary">
          Submit
        </Button>
        <Button varient="secondary" onClick={handleContactsNavigation("/")}>
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Go to Contacts
          </span>
        </Button>
      </form>
    </div>
  );
};

export default Form;
