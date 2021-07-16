import AsyncStorage from '@react-native-async-storage/async-storage';
const apiUrl = '';
const TOKEN = 'token';
export const Get = async (path, param) => {
  console.log('Get', `${apiUrl}${path}`);
  let header = {
    Authorization: '',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  let tokenJson = await AsyncStorage.getItem(TOKEN);
  let token;
  try {
    token = JSON.parse(tokenJson || '');
  } catch (e) {
    console.log('e', e);
    AsyncStorage.setItem(TOKEN, '');
  }
  if (token) {
    header.Authorization = `Bearer ${token}`;
  }
  let url = `${apiUrl}${path}`;
  console.log('url', url);
  return fetch(`${url}`, {method: 'GET', headers: header});
};

export const Post = async (path, body) => {
  console.log('Post', `${apiUrl}${path}`);
  let header = {
    Authorization: '',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  await AsyncStorage.getItem(TOKEN).then(tokenJson => {
    let token;
    try {
      token = JSON.parse(tokenJson);
    } catch (e) {
      console.log('e', e);
      AsyncStorage.setItem(TOKEN, '');
    }
    if (token) {
      header.Authorization = `Bearer ${token}`;
    }
  });
  return fetch(`${apiUrl}${path}`, {
    method: 'POST',
    headers: header,
    body: JSON.stringify(body),
  });
};

export const Upload = async (path, body) => {
  let header = {
    Authorization: '',
  };
  await AsyncStorage.getItem(TOKEN).then(tokenJson => {
    let token;
    try {
      token = JSON.parse(tokenJson);
    } catch (e) {
      AsyncStorage.setItem(TOKEN, '');
    }
    if (token) {
      header.Authorization = `Bearer ${token}`;
    }
  });
  return fetch(`${apiUrl}${path}`, {
    method: 'POST',
    headers: header,
    body: body,
  });
};
