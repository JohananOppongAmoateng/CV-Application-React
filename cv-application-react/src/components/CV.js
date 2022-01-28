 function CV(props){
    const {inputValues} = props 
    const {name,phonenumber,email,titleofstudy,dateofstudy,schoolname,companyname,positiontitle,tasks,workedfrom,workedto}=inputValues
    return ( 
    <div>
        <div>
            <h1>General Information</h1>
            <p>Name:{name}</p>
            <p>Phone:{phonenumber}</p>
            <p>Email:{email}</p>
        </div>
        <div>
            <h1>Educational Background</h1>
            <p>School Name:{schoolname}</p>
            <p>Title of Study:{titleofstudy}</p>
            <p>Date of Study:{dateofstudy}</p>
        </div>
        <div>
            <h1>Practical Experience</h1>
            <p>Company Name:{companyname}</p>
            <p>Position Title:{positiontitle}</p>
            <p>Tasks:{tasks}</p>
            <p>From:{workedfrom}</p>
            <p>To:{workedto}</p>
        </div>
    </div> )
}

export default CV