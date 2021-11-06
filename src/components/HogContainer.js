import React, {useState} from "react";
import HogCard from "./HogCard"

function HogContainer({set_active_hogs_,active_hogs_}){
    function displayHogs(){
        return(
            [...active_hogs_].map((given_hog) => {
                return (<HogCard active_hogs__={active_hogs_} set_active_hogs__={set_active_hogs_} image={given_hog.image} key={given_hog.name} name={given_hog.name} specialty={given_hog.specialty} greased={given_hog.greased} weight={given_hog.weight} highestmedal={given_hog["highest medal achieved"]} />)
            })
        )

}
return (
<div>
    <h2>THE BEST HOGS</h2>
    {displayHogs()}
    </div>
)
}


export default HogContainer