import React, {useState} from 'react'



function TextForm(props) {
    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Uppercase","success")
    }

    const handleLowClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to Lowercase","success")
    }
    const handlecapone = () => {
        try{
        let newText = text.split(" ");
        for(let i=0;i<newText.length;i++){
            newText[i]=newText[i][0].toUpperCase()+ newText[i].slice(1)
        }
        let Catext= newText.join(" ")
        setText(Catext)
        props.showalert("First Letter Capitalized","success")
    }
    catch{
        setText("Enter Something First... and then try")
        props.showalert("Nothing Found here","danger")
    }

    }

    const handleOnChange= (event) => {
        setText(event.target.value)
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied to Clipboard","success")
    }

    const handleExSpc =() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showalert("Extra Spaces Removed","success")
    }

    const totalWords=()=>{
    return text.split(/[ ]+/).filter((value)=>{return value!==''}).length;
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
        <p>{totalWords()} words and {text.length} characters</p>
        <p>{0.008* totalWords()} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the text-box to preview.."}</p>
    </div>
    </>
  )
}

export default TextForm
