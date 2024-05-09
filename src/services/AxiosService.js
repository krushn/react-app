import axios from 'axios';
//import { logout } from '../State';
import router from '../router';

//https://axios-http.com/docs/req_config

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;

axios.defaults.headers.patch['Content-Type'] = 'application/x-www-form-urlencoded'; 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Add a request interceptor
axios.interceptors.request.use((config) => {  

    const token = window.localStorage.getItem("token"); 
    
    if(token && !config.headers['Authorization'])
        config.headers['Authorization'] = 'Bearer ' + token;
 
    //config.headers['Language'] = language.code: null;

    return config;
});

axios.interceptors.response.use(async (response) => {
    return response;
}, err => handleAxiosError(err));

export async function handleAxiosError(err) {
  
    //const { dispatch } = useContext(AppContext)

    const response = err.response;//? err.response: err.request;

    //const errMsg = response.status ? `${response.status} - ${response.statusText}` : 'Server error';

    // Handle Bad Requests
    // This error usually appears when agent attempts to handle an 
    // account that he's been removed from assigning
    if (response.status === 400) {
        router.navigate('/404');   
    }

    // Handle No Internet Connection Error

    if (response.status == 0 || response.status == 504) {
        router.navigate('/no-internet');  
    }
    
    if(!navigator.onLine) {
        router.navigate('/no-internet');  
    }

    // Handle Expired Session Error
    if (response.status === 401) { 
       // logout();
        router.navigate('/login'); 
    }

    // Handle internal server error - 500  
    if (response.status === 500) {

        router.navigate('/500');   
    }

    // Handle page not found - 404 error 
    if (response.status === 404) {
        router.navigate('/404');  
    }

    /*if (error.status === 418) {
        eventService.error418$.next();
        return empty();
    }

    if (error.status === 419) {
        eventService.error419$.next();
        return empty();
    }

    if (error.status === 420) {
        eventService.error420$.next();
        return empty();
    }

    if (error.status === 427) {
        eventService.error427$.next();
        return empty();
    }*/

    //console.error(JSON.stringify(response));

    return Promise.reject(err);//errMsg

}
export default axios;