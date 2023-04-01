import axios from 'react-native-axios';

let BASE_URL_SERVER = 'https://webportal.lmdc.edu.pk/api/app.php/';
export const postApiCall = async (endPoint, data) => {
  return new Promise((resolve, reject) => {
    let headers = {
      'Content-Type': 'application/json',
    };

    axios
      .post(BASE_URL_SERVER + `${endPoint}`, data, {headers: headers})
      .then(resp => {
        let response = resp.data;
        resolve(response);
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data.message);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log(err);
        }
        reject(err);
      });
  });
};

export const postFileApiCall = (endPoint, data) => {
  return new Promise((resolve, reject) => {
    let headers = {
      'Content-Type': 'multipart/form-data',
    };
    axios
      .post(BASE_URL_SERVER + `${endPoint}`, data, {headers: headers})
      .then(resp => {
        let response = resp.data;
        resolve(response);
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data.message);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log(err);
        }
        reject(err);
      });
  });
};

export const getApiCall = (endPoint, data) => {
  return new Promise((resolve, reject) => {
    let headers = {
      'Content-Type': 'application/json',
    };
    axios
      .get(BASE_URL_SERVER + `${endPoint}`, data, {headers: headers})
      .then(resp => {
        let response = resp.data;
        resolve(response);
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data.message);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log(err);
        }
        reject(err);
      });
  });
};
