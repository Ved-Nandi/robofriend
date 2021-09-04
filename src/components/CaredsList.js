import Cared from './Cared'
const cardsList =({no}) =>{

    if(no.length !== 0 ){
    return (
        
    <div>

        {no.map((i) =>{ 
            return <Cared no={i} key={ i.id }/>
            })}
       

    </div>
    )
    }else{
        return <div className="loding"> <h1 className="f1">NO Robots Found</h1> </div>
    }
}

export default cardsList