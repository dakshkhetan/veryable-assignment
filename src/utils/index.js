export const formatAddress = (street, city, state, zip) => {
  return `${street}, ${city}, ${state} ${zip}`;
};

export const formatPhoneNumber = (phoneNum) => {
  return `(${phoneNum.slice(0, 3)}) ${phoneNum.slice(3, 6)}-${phoneNum.slice(
    6
  )}`;
};

export const formatDateTime = (dateStr) => {
  const inputDate = new Date(dateStr);

  const month = (inputDate.getMonth() + 1).toString();
  const day = inputDate.getDate().toString();
  const year = inputDate.getFullYear().toString().slice(-2);
  let hour = inputDate.getHours();
  const minute = inputDate.getMinutes().toString().padStart(2, "0");
  const amPm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  return `${month}/${day}/${year} ${hour}:${minute} ${amPm}`;
};

export const getUserIconColor = (role) => {
  switch (role) {
    case "Administrator":
      return "#2081C3";
    case "User":
      return "#68AAAB";
    case "Viewer":
      return "#7E7E7E";
    default:
      return "#000000";
  }
};
