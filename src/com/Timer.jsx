const Timer = ({time}) => {
    return(
        <div style={{display:'flex',justifyContent:'center'}}>
            <h1>{(0 + Math.floor((time / 60000) % 60))}:</h1>
            <h1>{(0 + Math.floor((time / 1000) % 60))}.</h1>
            <h1>{(0 + Math.floor((time / 10) % 100))}</h1>
        </div>
    )  
}

export default Timer