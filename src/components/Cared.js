
const Cared = ({no}) =>{
    return(
        

            
         <div key={no.id} className="bg-light-green dib br4 pa2 ma2 grow ba b--gray shadow-3">

            <img alt='robot' src ={`https://robohash.org/${(no.id)}`} loading="lazy"/>
            <div className="">
                <h2>{no.name}</h2>
                <p>{no.email}</p>
                <p>{no.id}</p>
            </div>
        </div>
        

        
    )
}

export default Cared