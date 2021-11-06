function Filter({active_hogs_,set_active_hogs_,all_hogs_,set_all_hogs_}){

    function handle_grease_filter(e){
        console.log(active_hogs_)
        const grease_filtered_hogs=all_hogs_.filter((given_hog) => {
            if (e.target.value==="All"){
                return (given_hog)
            }
            else {
            console.log(given_hog.greased)
            console.log(e.target.value)
            return (given_hog.greased.toString() === e.target.value)}
        })
        set_active_hogs_(grease_filtered_hogs)
    }

    function sort_by_weight_descending(e){
        const sorted_by_weight_descending = [...active_hogs_].sort((hog_one,hog_two) => {
            return (hog_two.weight - hog_one.weight)
        })
        console.log(sorted_by_weight_descending)
        set_active_hogs_(sorted_by_weight_descending)
    }

    function sort_by_weight_ascending(e){
        const sorted_by_weight_ascending = [...active_hogs_].sort((hog_one,hog_two) => {
            return (hog_one.weight - hog_two.weight)
        })
        console.log(sorted_by_weight_ascending)
        set_active_hogs_(sorted_by_weight_ascending)
    }

        function sort_alphabetically(e){
            const sorted_alphabetically = [...active_hogs_].sort((hog_name_one,hog_name_two) => {
                let name_one = hog_name_one.name
                let name_two = hog_name_two.name
                if (name_one < name_two) {return -1}
                if (name_one > name_two) {return 1}
            }
            )
            console.log(sorted_alphabetically)
            set_active_hogs_(sorted_alphabetically)
        }
    

    return (
        <div id="filter">
            <h3>Show me...</h3>
        <select onChange={handle_grease_filter} id="greasefilter" name="greasefilter">
            <option value="All">All Pigs</option>
            <option value={true}>Greased Pigs</option>
            <option value={false}>No Greased Pigs</option>
        </select>
            <h3>Sort by...</h3>
        <button onClick={sort_alphabetically}>Name (A-Z)</button> <br></br>
        <button onClick={sort_by_weight_descending}>Biggest to Smallest</button>
        <button onClick={sort_by_weight_ascending}>Smallest to Biggest</button>
        </div>
    )
}

export default Filter