import axios from "axios";
const baseUrl = "https://contactlist-90842-default-rtdb.firebaseio.com/";

/**get All Contacts
 * @returns all contacts
 */
export const getAllContacts = async () => {
  try {
    const response = await axios.get(baseUrl + "phoneBook.json");
    return response?.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};

/**
 * get One contact with Id
 * @param {*} id
 * @returns one Contact
 */
export const getContact = async (id) => {
  try {
    const response = await axios.get(baseUrl + `phoneBook/${id}.json`);
    return response?.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};

/**
 * Create new contact
 * @param {*} payload
 * @returns contact ID
 */
export const createNewContact = async (payload) => {
  try {
    const response = await axios.post(baseUrl + "phoneBook.json", payload);
    return response;
  } catch (error) {
    console.error("error in creating new contact", error);
    throw error;
  }
};

/**
 * Update COntact using id
 * @param {*} id
 * @param {*} payload
 * @returns updated contact
 */
export const updateContact = async (id, payload) => {
  try {
    const response = await axios.patch(
      baseUrl + `phoneBook/${id}.json`,
      payload
    );
    return response?.data;
  } catch (error) {
    console.error("error in updating", error);
    throw error;
  }
};

/**
 * delete contact
 * @param {*} id
 * @returns null
 */
export const deleteContact = async (id) => {
  console.log(id);
  try {
    const response = await axios.delete(baseUrl + `phoneBook/${id}.json`);
    return response?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
