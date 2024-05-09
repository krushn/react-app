import { useContext, useState } from 'react';
import './Home.css';
import { AppContext, addTask, test } from '../../../State';
import Task from '../../../components/task';
import { object, string } from 'yup';

function Home() {
 
  console.log("Home")
  //useCallback
  const { state, dispatch } = useContext(AppContext)
  /*const navigate = useNavigate();

  useEffect(() => {
    if (!state.isLoggedIn) {
        navigate("/login");
    }
  }, [state.isLoggedIn]);
*/

  var validationSchema = object({
    title: string().required(),
    description: string(),
  });

  const [formData, setFormData] = useState({
    title: '',
    description: '',
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
        }*/

        return setFormData(prevState => ({
            ...prevState,
            errors: err.errors
        }));
    }

    setFormData(() => ({
        ...formData,
        loading: true
    }));
 
    //setTimeout(() => {

      const params = {
        type: "ADD_TASK",
        data: {
          title: formData.title,
          description: formData.description,
          status: 0
        }
      }

      //dispatch(addTask(params))
      dispatch(params)
      
      setFormData(() => ({
        title: "",
        description: "",
        loading: false,
        errors: []
      })); 
   //}, 200);
  }

  return (
    <div className="container">
      
      <h2>Tasks</h2>
 
      <ul>
        { state.tasks.map((task, index) => <Task key={index} index={index} task={task}></Task>)}
      </ul>

      {formData.errors.map((error) => <Error key={error} message={error}></Error>)}

      <form onSubmit={onSubmit}>
          <div className="form-group">
              <label>Title *</label>
              <input name="title" value={formData.title} onChange={handleChange}  className="form-control" placeholder="Enter title" />
          </div>
          <div className="form-group">
              <label>Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange}  className="form-control" placeholder="Enter description" />
          </div>
          <button disabled={formData.loading} type="submit" className="btn btn-primary">
              { formData.loading? "Wait..." : "Submit" }
          </button>
      </form>
    </div>
  );
}

export default Home; 