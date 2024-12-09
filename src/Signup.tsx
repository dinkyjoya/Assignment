
import { Formik,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup';
import './Login.css'
import { Link } from 'react-router-dom';

const Signup = () => {
  const validationSchema= Yup.object({
    name: Yup.string().required('Name is required'),
    username:Yup.string().required('Username is required'),
    email:Yup.string().email('Invalid email format').required('EMail is required'),
    password:Yup.string().min(6,'Password must be at least 6 characters').required('Password is required'),
    terms:Yup.boolean().oneOf([true],'You must accept the terms and condition').required('You must accept the terms'),
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
      alert('Form submitted successfully');
      resetForm();
    }}
    >
      {(props)=>(
 <form className='login-form' onSubmit={props.handleSubmit}>
 <div className="input-group">
   <label>Name</label>
   <input type="text" name="name" placeholder='Type your name here' onChange={props.handleChange} value={props.values.name}/>
   <ErrorMessage name="name" component="div" className='error-message' />
 </div>
 <div className="input-group">
   <label>Username</label>
   <input type="text" name="username" placeholder='Type your username here' onChange={props.handleChange} value={props.values.username}/>
   <ErrorMessage name="username" component="div" className='error-message' />
 </div>
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

 <div className="input-group checkbox-group">
  <label className='check'>
    <div>
    <Field type="checkbox" name="terms" />
    </div>
    <div>
    remember me
    </div>
  </label>
  <ErrorMessage name="terms" component="div" className='error-message' />
</div>
<div className='link'>
<p>Already have an account?<Link to='/login'>Login</Link></p>
</div>

 <button type='submit'>Submit</button>
</form>
      )}
</Formik>
</div>

    </div>
  )
}

export default Signup