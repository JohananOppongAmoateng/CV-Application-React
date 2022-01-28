import {useState} from  "react"
import CV from "./CV"


function CvInput(){

  const [inputValues, setInputValues] = useState({
    name: '', email: '',phonenumber:"" ,
    schoolname: '', titleofstudy: '',
    dateofstudy:"",companyname: '',
    positiontitle: '',tasks:"", 
    workedfrom: '', workedto: ''});
  
    const [formData, setformData] = useState({
        name: '', email: '',phonenumber:"" ,
        schoolname: '', titleofstudy: '',
        dateofstudy:"",companyname: '',
        positiontitle: '',tasks:"", 
        workedfrom: '', workedto: ''});
      
  const handleChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const onSubmit =(e) => {
    e.preventDefault()
   
    setformData(inputValues)
   
  }
  const editHandler=()=>{
      return null
  }
  return <div>
      <form onSubmit={onSubmit}>
        <div className="General">
            <p>General Information</p>
             <label htmlFor="name">Name:</label>
             <input name="name" onChange={handleChange} type="text" id ="name" />
             <label htmlFor="email">Email:</label>
             <input name="email"onChange={handleChange} type="email" id ="email" />
             <label htmlFor="phonenumber">Phone Number:</label>
             <input name="phonenumber" onChange={handleChange} type="text" id ="phonenumber"/>
        </div>
        <div className="Education">
            <p>Educational Background</p>
            <label htmlFor="schoolname">School Name:</label>
            <input name="schoolname" onChange={handleChange} type="text" id ="schoolname" />
            <label htmlFor="titleofstudy">Title of Study:</label>
            <input name="titleofstudy"onChange={handleChange} type="text" id ="titleofstudy" />
            <label htmlFor="dateofstudy">Date of Study:</label>
            <input name="dateofstudy" onChange={handleChange} type="date" id ="dateofstudy"/>
        </div>
        
        <div className="Practical">
            <p>Practical Experience</p>
            <label htmlFor="companyname">Company Name:</label>
            <input name="companyname" onChange={handleChange} type="text" id ="companyname" />
            <label htmlFor="positiontitle">Position Title:</label>
            <input name="positiontitle"onChange={handleChange} type="text" id ="positiontitle" />
            <label htmlFor="task">Task:</label>
            <input name="task" onChange={handleChange} type="text" id ="task"/>
            <label htmlFor="workedfrom">Worked From:</label>
            <input name="workedfrom" onChange={handleChange} type="date" id ="wprkedfrom"/>
            <label htmlFor="workedto">To:</label>
            <input name="workedto" onChange={handleChange} type="date" id ="workedto"/>
        </div>
        <button type="submit">Submit</button>
    </form>
   <div>
        <CV inputValues={formData}/>
        <button onClick={editHandler}>Edit</button>
   </div>
  </div>
}

export default CvInput