import React, {useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
       //setText("You have clicked on handleUpClick")
       props.showAlert("Converted to uppercase!", "success");
    }
    const handleOnChange = (event) => {
        // console.log('on change');
        setText(event.target.value);
    }
    const handleLoClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
       props.showAlert("Converted to lowercase!", "success");

    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
       props.showAlert("Text Cleared!", "success");

    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
       props.showAlert("Copied to Clipboard!", "success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
       props.showAlert("Extra spaces removed!", "success");

    }

// Declare a new state variable, which we'll call "count"
//const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  //text = "new text";      wrong way to change text
  //setText = ("new text");   correct way to change text


return (
    <> 
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the above textbox to preview it"}</p>

    </div>
    </>
    )
}
