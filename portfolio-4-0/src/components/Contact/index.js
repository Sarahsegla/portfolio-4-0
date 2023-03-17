import React from 'react' ;
import './styles.css';
import { useState } from 'react';

function Contact(props) {

//     const formID = 'cGJZ2fOQ';
//     const Url = `https://submit-form.com/${formId}`;


// const submitForm = async ( event: FormEvent) => {

// event.preventDefault();
// await postSubmission()
// };

// const postSubmission = async () => {
//     const payload = {
//         message: 'Formspark submit'
//     };
//     try {
//         const result = await axios.post(Url, payload )
//     } catch(error) {
//         console.log(error);
//     }
// };
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [userInput, setUserInput] = useState("");




    return (
        <div>
        <div className='contact' >
        <p>Contact ME:</p>
        <p><a href={"https://www.linkedin.com/in/sarah-segla-6788a4203/"} >Linkedin</a></p>
        <p><a href={"mailto:ablavisarahsegla@gmail.com"}>Ablavisarahsegla@gmail.com</a></p>
        </div>
        <div className='contactBox'>
            <h1 className='form'> 
            <span>Contact Form</span>
            <form>
                <label>
                    Name:
                <input type="text" placeholder='John Doe' value={name} onChange={(e) => setName(e.target.value)}> 
             </input>
             </label>
             <label>
                    Email:
                <input type="text"  placeholder='JohnDoe@test.com' value={email} onChange={(e) => setEmail(e.target.value)}> 
             </input>
                </label>
                <label>
                    Message:
                <textarea type="text"  placeholder='Hi, Sarah...' value={userInput} onChange={(e) => setUserInput(e.target.value)}> 
             </textarea>
                </label>
                <button className='submitButton'>
                    Submit
                </button>
            </form>

            </h1>
        </div>

        </div>
    )
}


export default Contact;