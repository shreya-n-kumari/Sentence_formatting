import React, {useState} from 'react'

export default function TextForm(props) {
  const handleupClick = ()=>{
    console.log('Upper case Clicked!' + text);
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleLoClick = ()=>{
    console.log('Upper case Clicked!' + text);
    let newText = text.toLowerCase()
    setText(newText)
  }

  const handleclearClick = ()=>{
    console.log('Upper case Clicked!' + text);
    let newText = ''
    setText(newText)
  }

  const handleOnChange = (event)=>{
    console.log('On change');
    setText(event.target.value)
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text, setText] = useState('');
  //text = "new text"; //Wrong way to change the state.
  //setText('new text') //Correct way to change the state.
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div class="mb-3">
            <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Spaces</button>      
    </div>

    <div className="container my-3" >
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
