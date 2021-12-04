import axios from "axios";

const baseUrl = "https://quiet-reef-14327.herokuapp.com/api/companies";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => {
    return res.data;
  });
};

const changeState = (id, obj) => {
  const request = axios.patch(`${baseUrl}/${id}`, obj);
  return request.then((res) => res.data);
};

const companyService = {
  getAll,
  changeState,
};

export default companyService;
