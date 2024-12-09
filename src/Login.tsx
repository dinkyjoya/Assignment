
import { Formik,ErrorMessage } from 'formik'
import * as Yup from 'yup';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const validationSchema= Yup.object({
    email:Yup.string().email('Invalid email format').required('EMail is required'),
    password:Yup.string().min(6,'Password must be at least 6 characters').required('Password is required'),
   
  });
  return (
   <div>
  <div className='Login'>
  <Formik
      initialValues={{
        name:'',
        username:'',
        email:'',
        password:'',
        terms:false,
      }}
    validationSchema={validationSchema}
    onSubmit={(values,{ resetForm })=>{
      console.log('Form values:', values);
      alert('Login successfull');
      resetForm();
    }}
    >
      {(props)=>(
 <form className='login-form' onSubmit={props.handleSubmit}>
 <div className="input-group">
   <label>Email</label>
   <input type="email" name="email" placeholder='I need your email' onChange={props.handleChange} value={props.values.email}/>
   <ErrorMessage name="email" component="div" className='error-message' />
 </div>
 <div className="input-group">
   <label>Password</label>
   <input type="password" name="password" placeholder='Type your password here' onChange={props.handleChange} value={props.values.password}/>
   <ErrorMessage name="password" component="div" className='error-message'/>
 </div>
<div className='link'>
<p>Dont't have an account?<Link to='/'>Signup</Link></p>
</div>

 <button type='submit'>Submit</button>
</form>
      )}
</Formik>
</div>
    </div>
  )
}

export default Login