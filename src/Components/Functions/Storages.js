export const saveDataToLocalStorage = (data) => {
  var a = [];
  // Parse the serialized data back into an aray of objects
  a = JSON.parse(localStorage.getItem("session")) || [];
  // Push the new data (whether it be an object or anything else) onto the array
  a.push(data);
  // Alert the array value
  // Re-serialize the array back into a string and store it in localStorage
  localStorage.setItem("session", JSON.stringify(a));
};
