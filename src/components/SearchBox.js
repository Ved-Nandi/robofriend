const SearchBox = ({fun})=>{
    
    return(
        <div className="ma2" >

            <input type="search" onChange={fun} placeholder="Search Robots" className=" f4 pa3 ba b--green bg-lightest-blue br3"/>

        </div>
    )

}

export default SearchBox