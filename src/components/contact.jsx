
import React from "react";
import { Formik ,Field,Form ,ErrorMessage} from "formik";
import * as Yup from    "yup";
const Contact = () => {

  const formInitialschema = {
    Fname: '',
    lname: '',
    email: ' ',
    mobile: '',


  }

    //  const  validateSchema =  Yup.object({

    //     Fname:Yup.string().required("first name  is required.")

    //  })

    const validateSchema = Yup.object({
        Fname: Yup.string().max(15, 'Must be 15 characters or less').required('First name is Required'),
            lname: Yup.string().max(15, 'Must be 10 characters or less').required('Last name is Required'),
            email:Yup.string().required("Email must be required").email("Enter valid Email."),
            mobile:Yup.string().required("Contact number must be required").max(10,"Enter valid number").min(10,"Enter valid number"),
            msgg:Yup.string().required("massege must be required").max(100,"massage can not be 100 char.")


    }) //end yup lib


     const HendellFormSubmit = (values) => {
   console.log(values);
  }
  return (
    <React.Fragment>
      <center>
        <h5>ENQUERY HERE TO CONTACT US -   </h5>
        <div className="card">

        <Formik initialValues={formInitialschema} onSubmit={values => {HendellFormSubmit(values)} } validationSchema = {validateSchema} >
        
        <Form action="/action_page.php" method="post" autoComplete="off">
            <label for="Fname">First Name</label>
            <Field type="text" id="Fname" name="Fname" placeholder="Your name.." autoComplete="new-password" />
            <p style={{color:"red"}}><ErrorMessage name="Fname" /></p>

            <label for="lname">Last Name</label>
            <Field type="text" id="lname" name="lname" placeholder="Your last name.." autoComplete="new-password" />
            <p style={{color:"red"}}><ErrorMessage name="lname" /></p>

            <label for="lname">Email</label>
            <Field type="text" id="email" name="email" placeholder="example@email.com" autoComplete="new-password" />
            <p style={{color:"red"}}><ErrorMessage name="email" /></p>

            <label for="lname">Mobile</label>
            <Field type="text" id="mobile" name="mobile" placeholder="+91" autoComplete="new-password" />
            <p style={{color:"red"}}><ErrorMessage name="mobile" /></p>

            <label for="lname">Messege</label>
            <Field as="textarea" id="topic" name="msgg" className="txtarea"></Field>
            <p style={{color:"red"}}><ErrorMessage name="msgg" /></p>

            <Field type="submit" value="Submit" />
          </Form>
        
        </Formik>
        
          
        </div>
        <p><span style={{color:"red"}}>*</span>VALIDATION USING FORMIK AND YUP LIBRARY </p>
      </center>

    </React.Fragment>
  );

}

export default Contact;


// // import React from "react";
// // // import { Formik } from "formik";
// // import { useState } from "react";
// // // import { useEffect } from "react";
// // const Contact = () => {

// //     const [Fname, setFname] = useState();
// //     const [Lname, setLname] = useState();
// //     const [Email, setEmail] = useState();
// //     const [Mobile, setMobile] = useState();
// //     const [Message,setMessage] = useState();
// //     return(
// //         <React.Fragment>
// //         <center>
// //         <h3>ENQUERY HERE TO CONTACT US -   </h3>
// // <div className ="card">
// //   <form action="/action_page.php" method = "post" autoComplete="off">
// //     <label for="Fname">First Name</label>
// //     <h3>{Fname}</h3>
// //     <input type="text" id="Fname" name="Fname" placeholder="Your name.." value={Fname}  onChange={(e) => setFname(e.target.value)}/>
// //     <label for="lname">Last Name</label>
// //     <h3>{Lname}</h3>  
// //     <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={Lname} onChange={(e) => setLname(e.target.value)}/>

// //     <label for="lname">Email</label>
// //     <h3>{Email}</h3>  
// //     <input type="text" id="email" name="email"  placeholder="example@email.com" value={Email} onChange={(e) => setEmail(e.target.value)}/>

// //     <label for="lname">Mobile</label>
// //     <h3>{Mobile}</h3>  
// //     <input type="text" id="mobile" name="mobile" placeholder="+91" value={Mobile} onChange = { (e) => setMobile(e.target.value)}/>

// //     <label for="lname">Message</label>
// //     <h3>{Message}</h3> 
// //     <textarea  className = "txtarea" name="Message" id="Message" value={Message} onChange = {(e)=> setMessage(e.target.value)}></textarea> 


// //     <label for="country">Country</label>
// //     <select id="country" name="country">
// //       <option value="australia">Australia</option>
// //       <option value="canada">Canada</option>
// //       <option value="usa">USA</option>
// //     </select>

// //     <input type="submit"  value="Submit"/>
// //   </form>
// // </div>
// // </center>
// // <p style = {{margin:"0px 5px 0px 5px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate venenatis ultricies. Aenean aliquet mattis fringilla. Fusce sodales luctus nulla, laoreet lobortis sem dignissim id. Donec tempor, tellus eu finibus cursus, ligula mi lobortis lectus, in imperdiet turpis justo non felis. Duis vulputate tortor vel est pharetra facilisis.  Ut a nulla vel dui malesuada interdum.  Nunc vitae viverra nunc. Vestibulum quam lectus, maximus sed leo in, accumsan euismod enim. Nullam sodales, est eget gravida pulvinar, ipsum lacus ultrices ligula, et facilisis sem ipsum in erat. Praesent condimentum risus ex, sit amet ornare nisi consectetur vitae.</p>
// //         </React.Fragment>
// //     );

// //     }
// // export default Contact;

// import React from "react";
// import { useFormik } from "formik";
// // import { useEffect } from "react";
// const Contact = () => {

//   const formik = useFormik({
//     initialValues: {
//       Fname: '',
//       lname: '',
//       email: '',
//       moblie: '',
//       Message: '',
//     },
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   return (
//     <React.Fragment>
//       <center>
//         <h3>ENQUERY HERE TO CONTACT US -   </h3>
//         <div className="card">
//           <form action="/action_page.php" method="post" autoComplete="off" onSubmit={formik.handleSubmit}>
//             <label for="Fname">First Name</label>

//             <input type="text" id="Fname" name="Fname" placeholder="Your name.." onChange={formik.handleChange} value={formik.values.Fname} />
//             <label for="lname">Last Name</label>

//             <input type="text" id="lname" name="lname" placeholder="Your last name.." onChange={formik.handleChange} value={formik.values.lname} />

//             <label for="lname">Email</label>

//             <input type="text" id="email" name="email" placeholder="example@email.com" onChange={formik.handleChange} value={formik.values.email} />

//             <label for="lname">Mobile</label>
//             <input type="text" id="mobile" name="mobile" placeholder="+91" onChange={formik.handleChange} value={formik.values.mobile} />

//             <label for="lname">Message</label>
//             <textarea className="txtarea" name="Message" id="Message" onChange={formik.handleChange} value={formik.values.Message}></textarea>


//             <label for="country">Country</label>
//             <select id="country" name="country">
//               <option value="australia">Australia</option>
//               <option value="canada">Canada</option>
//               <option value="usa">USA</option>
//             </select>

//             <input type="submit" value="Submit" />
//           </form>
//         </div>
//       </center>
//       <p style={{ margin: "0px 5px 0px 5px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate venenatis ultricies. Aenean aliquet mattis fringilla. Fusce sodales luctus nulla, laoreet lobortis sem dignissim id. Donec tempor, tellus eu finibus cursus, ligula mi lobortis lectus, in imperdiet turpis justo non felis. Duis vulputate tortor vel est pharetra facilisis.  Ut a nulla vel dui malesuada interdum.  Nunc vitae viverra nunc. Vestibulum quam lectus, maximus sed leo in, accumsan euismod enim. Nullam sodales, est eget gravida pulvinar, ipsum lacus ultrices ligula, et facilisis sem ipsum in erat. Praesent condimentum risus ex, sit amet ornare nisi consectetur vitae.</p>
//     </React.Fragment>
//   );

// }

// export default Contact;