import { useContext, useEffect, useState } from 'react';
import { object, string } from 'yup';
import './Login.scss';
import { AppContext, loggedIn } from '../../../State';
import { basicAuth } from '../../../services/auth.service';
import router from '../../../router';
/*
function Login() {

    const { state, dispatch } = useContext(AppContext)

    useEffect(() => {
        if (state.isLoggedIn) {
            router.navigate("/app");
        }
      }, [state.isLoggedIn]);

    var validationSchema = object({
        email: string().email().required(),
        password: string().min(6).max(12).required(),
    });

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        errors: [],
        loading: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    function Error(props) {
        return (
            <p className='alert alert-warning'>{props.message}</p>
        )
    }

    async function onSubmit(e) {
          
        e.preventDefault(); 
        e.stopPropagation();
        
        try {
            await validationSchema.validate(formData);
        } catch (err) {
            
            /*if (err.errors.length > 0) {
                // There are errors in the form data
                alert(err.errors.join("\n"));
            } else {
                // The form data is valid, do something with it
            }*

            return setFormData(prevState => ({
                ...prevState,
                errors: err.errors
            }));
        }

        setFormData(() => ({
            ...formData,
            loading: true
        }));

        basicAuth(formData.email, formData.password).then(res => {

            if (res.token) {
                dispatch(loggedIn(res))

                setFormData(() => ({
                    email: "",
                    password: "",
                    loading: false,
                    errors: []
                }));

                router.navigate("/app")
            }
        }, err => {
            setFormData(() => ({
                ...formData,
                loading: false,
                errors: ["invalid login"]
            }));
        });
    }

    return (
        <div className="container page-login">

            {formData.errors.map((error) => <Error key={error} message={error}></Error>)}

            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" onChange={handleChange}  className="form-control" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleChange}  className="form-control" placeholder="Password" />
                </div>
                <button disabled={formData.loading} type="submit" className="btn btn-primary">
                    { formData.loading? "Wait..." : "Submit" }
                </button>
            </form>
        </div>
    )
}
*/
function Login() {
}
export default Login; 