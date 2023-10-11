import React,{useState} from "react";

const Search = ({SearchNames,ShowClear,clearUsers}) => {
    const [search,setSearch]=useState('')

    const formHandler = (e) => {
        e.preventDefault();
        SearchNames(search)

        setSearch("")
    }
    return(<>
    <form className="form" onSubmit={formHandler}>
        <input type="text" name="text" placeholder="Search here.." value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <input type="submit" value="search" className="btn btn-dark btn-block"/>
    </form>
    {ShowClear && <button type="submit" className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
    </>)
}

export default Search;