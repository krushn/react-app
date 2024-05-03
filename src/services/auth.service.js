import axios from "./AxiosService";

/**
 * Basic auth, exchanges access details for a bearer access token to use in
 * subsequent requests.
 * @param  {string} email
 * @param  {string} password
 */
export async function basicAuth(email, password) {
    const response = await axios.get('/auth/login', {
      headers: {
        'Authorization': 'Basic ' + btoa(`${email}:${password}`),
      }
    });
    return response.data;
}