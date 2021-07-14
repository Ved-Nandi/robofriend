
const Scroll = (props) =>{
    return(
        <div style={{"borderTop":'2px solid black', height:"70vh", overflowY:"scroll"}}>
            {props.children}
        </div>
    )
}


export default Scroll