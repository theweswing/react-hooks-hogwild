import react,{useState} from "react"

function HogForm({all_hogs_,set_all_hogs_}){
    const [hogSubmission,setHogSubmission]=useState({
        name: "",
        specialty: "",
        greased: "",
        weight: "",
        "highest medal achieved":"",
        image:""
    })

    function handleChange(e){
        setHogSubmission(
            {...hogSubmission,[e.target.name]:e.target.value}
        )
        console.log(hogSubmission)
    }

    function handleSubmit(e){
        e.preventDefault()
        const hogsPlusNewHog=[...all_hogs_,hogSubmission]
        set_all_hogs_(hogsPlusNewHog)
        e.target.reset()
    }
    return (

        <div>
            <h3>Submit New Hog</h3>
        <form onSubmit={handleSubmit} name="hogform" id="hogform">
            <label>Name</label>
            <input onChange={handleChange} type="text" name="name"></input><br></br><br></br>
            <label>Specialty</label>
            <input onChange={handleChange} type="text" name="specialty"></input><br></br><br></br>
            <label>Weight</label>
            <input onChange={handleChange} type="number" name="weight"></input><br></br><br></br>
            <label>Grease Classification</label>
            <select onChange={handleChange} name="greased">
                <option value={true}>Greased</option>
                <option value={false}>Not Greased</option>
                </select><br></br><br></br>
            <label>Highest Medal Achieved</label>
            <select onChange={handleChange} name="medals">
                <option value="diamond">Diamond</option>
                <option value="platinum">Platinum</option>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="bronze">Bronze</option>
                <option value="wood">Wood</option>
                <option value="unmedaled">No Medals Achieved</option>
            </select><br></br><br></br>
            <label>Pic Of Your Hog</label>
            <input onChange={handleChange} type="text" name="image"></input><br></br><br></br>
            <button type="submit">Submit Hog For Review</button>

        </form>
        </div>
    )
}

export default HogForm