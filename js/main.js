
const  entry= document.querySelector('#main')

const Main= ()=>{
    return(
        <div id='bd-div'>
            <Nav/>
            <Preamble/>
            <Cards/>
            <Footer/>
        </div>
    );
}

const  Nav=()=>{
    return(
        <nav className='nav-main'>
            <h3>ChaO</h3>
            <ul className='nav-items'>
                
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>News</a></li>
              
            </ul>
            </nav>
    )
}
const Preamble=()=>{
    return(
        <div className='preambles-main'>
            <div className='cover'>
            <h1 id='pre-header'>Changing Africa Together</h1>
            <p className='pr-info'>Africa is ours.... If it fails we fail, If it rises We rise.....</p></div>
    </div>
    )
}
const Card= (props)=>{
    return(
        <div className='card-bd'>
            <h3 className='card-title'>{props.name}</h3>
            <div className='card-img'>
 <img className='img-card' src={props.img}/> 
           <div className='card-nav'>
                <a href='#'>like</a>
                <a href='#'>more</a>  
            </div>
            
                
            </div>
        </div>
    )
}
const Cards = ()=>{
    return(
        <div className='card-flex'>
            <Card
            name='Agriculture'
            img='../images/agriculture.jpg'
            /><Card
            name='Industry'
            img='../images/industry.png'
            /><Card 
            img='../images/education.jpg'
            name='Education'/>
            <Card 
            img='../images/leadership.jpg'
            name='Leadership' />
            </div>

    )
}
const Footer = ()=>{
    return (
        <div  className='ft-main'>
            <p className='ft-info' >Changing Africa Organisation &copy; 2020</p>
        </div>
    );
}
ReactDOM.render(<Main/>, entry)
gsap.to(".card-bd", {duration:2, x:20});

