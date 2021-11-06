import React, {useState} from "react";

function HogCard({name,specialty,greased,weight,highestmedal,image,active_hogs__,set_active_hogs__}){
const [card_clicked,set_card_clicked]=useState(false)
const display_grease_status=(greased ? "Greased" : "Not Greased")
const [card_hidden,set_card_hidden]=useState(false)

function hide_and_return(e){
    set_card_hidden(!card_hidden)
    console.log(card_hidden)
}

function collapse_or_expand_hog(){
    set_card_clicked(!card_clicked)

}

// function handle_hide_button(e){
//     const name_to_be_hidden=e.target.value
//     const hogs_minus_hidden=active_hogs__.filter((given_hog) => {return (given_hog.name !== name_to_be_hidden)})
//     set_active_hogs__(hogs_minus_hidden)
// }
    if (card_hidden===true){
        return (
            <div>
                <button onClick={hide_and_return}>Bring back {name}!</button>
            </div>
        )
    }

    else if (card_hidden===false){

    if (card_clicked===false){
    return (
        <div onMouseEnter={collapse_or_expand_hog} onMouseLeave={collapse_or_expand_hog} id={name}>
            <h2>{name}</h2>
                        <br></br>
            <img src={image} alt={name} height={200} width={250}></img><br></br><br></br>
            <button id={"hide " + name} value={name} onClick={hide_and_return}>Hide {name}</button>

        </div>
    )}
    else if (card_clicked===true){
        return (
            <div onMouseEnter={collapse_or_expand_hog} onMouseLeave={collapse_or_expand_hog} id={name}>
                <h2>{name}</h2>
                <img src={image} alt={name} height={200} width={250}></img>
                <br></br><br></br>
                <button id={"hide " + name} value={name} onClick={hide_and_return}>Hide {name}</button>
                <h4 id={specialty}>Specialty: <br></br>{specialty}</h4>
                <h4 id={weight}>Weight: <br></br>{weight} lbs</h4>
                <h4 id={name + " greased"}>Grease Classification: <br></br>{display_grease_status}</h4>
                <h4 id={name + highestmedal}>{highestmedal.toUpperCase()} MEDAL WINNER</h4>
    
            </div>
        )}
}}

export default HogCard