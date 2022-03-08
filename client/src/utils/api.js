// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

// create new account
export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// log in
export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// save location data for a logged in user
export const saveLocation = (locationData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(locationData),
  });
};

// remove saved location data for a logged in user
export const deleteLocation = (locationId, token) => {
  return fetch(`/api/users/recipes/${locationId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// make a search
export const showCurLocation = () => {
  return navigator.geolocation.getCurrentPosition(success, error);
}

// Getting current location
async function success(pos) {
  const crd = await pos.coords;
  const{latitude,longitude} = crd
  return gerCurLocation(latitude, longitude);
  

}
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
 const gerCurLocation = async (lat,lon) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`);
  if (!response.ok) {
    throw new Error("something went wrong!");
  }

  const data = await response.json();
  console.log(data);
  return data
  
};
