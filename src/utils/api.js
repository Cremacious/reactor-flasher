const CLIENT_ID = 139244;
const CLIENT_SECRET = 'fdb6cb0b68f6a97fb2ade79369c9898eeda0a27c';
const AUTHORIZATION_CODE = 'your_authorization_code';

export const fetchData = async () => {
  const url = 'https://www.strava.com/oauth/token';
  const params = new URLSearchParams();
  params.append('client_id', CLIENT_ID);
  params.append('client_secret', CLIENT_SECRET);
  params.append('code', AUTHORIZATION_CODE);
  params.append('grant_type', 'authorization_code');

  await fetch(url, {
    method: 'POST',
    body: params,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));
};
