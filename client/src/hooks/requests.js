const axios = require("axios");
//Api Adress
const API_URL = "";

//get search result
async function httpGetSearch(id) {
  //get the search result of an item
  console.log(id)
  let searchitem = {};
  await axios
    .get(`${API_URL}/search/${id}`)
    .then(function(response) {
      searchitem = response;
    })
    .catch(function(err) {
      console.log(err);
    })
    .then(function() {
      console.log("search complete");
    });

  return searchitem;
}

//get the list view
async function httpGetlist() {
  //get all the list off item result
  try {
    const response = await axios.get(`${API_URL}/view`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

//delete an item using id
async function httpDeleteItem(id) {
  //delte and item with an id
  axios.delete(`${API_URL}/delete/${id}`).then(function() {
    console.log("deleted sucessfully");
  });
}

//update an item with id
async function httpUpdateItem(item) {
  //update an item usign id
  await axios.put(`${API_URL}/update`, item);
}

async function httpAddItem(item) {
  //add a new item
  axios
    .post(`${API_URL}/add`, item)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}

export {
  httpGetSearch,
  httpGetlist,
  httpDeleteItem,
  httpUpdateItem,
  httpAddItem,
};
