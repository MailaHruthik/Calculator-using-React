import './App.css'
export function Keypad({Handle , Evaluate, Erase}){
    return(
       
        <div className='keypad'>
        <div>
            <button onClick={()=>{
                Handle("7");
            }}>7</button>
            <button onClick={()=>{
                Handle("8")
            }}>8</button>
            <button onClick={()=>{
                Handle("9");
            }}>9</button>
            <button onClick={()=>{
                Handle("*");
            }}>x</button>
        </div>

        <div>
            <button onClick={()=>{
                Handle("4");
            }}>4</button>
            <button onClick={()=>{
                Handle("5");
            }}>5</button>
            <button onClick={()=>{
                Handle("6");
            }}>6</button>
            <button onClick={()=>{
                Handle("-");
            }}>-</button>
        </div>

        <div>
            <button onClick={()=>{
                Handle("1");
            }}>1</button>
            <button onClick={()=>{
                Handle("2");
            }}>2</button>
            <button onClick={()=>{
                Handle("3");
            }}>3</button>
            <button onClick={()=>{
                Handle("+")
            }}>+</button>
        </div>
        
        <div>
            <button onClick={()=>{
                Handle("%");
            }}>%</button>
            <button onClick={()=>{
                Handle("0");
            }}>0</button>
            <button onClick={()=>{
                Erase();
            }}>C</button>
            <button onClick={()=>{
                Evaluate();
            }}>=</button>
        </div>
        
        
        
        </div>
    )
}