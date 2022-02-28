import React, {useState} from 'react'



function TextForm(props) {
    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
    }
    const handlecapone = () => {
        try{
        let newText = text.split(" ");
        console.log(newText)
        for(let i=0;i<newText.length;i++){
            newText[i]=newText[i][0].toUpperCase()+ newText[i].slice(1)
        }
        let Catext= newText.join(" ")
        setText(Catext)
    }
    catch{
        setText("Enter Something First... and then try")
    }

    }

    const handleOnChange= (event) => {
        setText(event.target.value)
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExSpc =() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('Enter text here');
    //setText("New text")
  return (
      <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading} - </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handlecapone}>Convert First letter to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-1" onClick={handleExSpc}>Remove Extra Spaces</button>

    </div>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the text-box to preview.."}</p>
    </div>
    </>
  )
}

export default TextForm
