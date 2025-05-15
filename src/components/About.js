import React, {useState} from 'react'

export default function About() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (item) => {
    if (openItem === item) {
      setOpenItem(null); // close if already open
    } else {
      setOpenItem(item); // open new
    }
  };

  const [myStyle, setMyStyle] = useState({
    color:'black',
    backgroundColor:'White'
    
  }
 )
 
  const [btntext, setBtnText] = useState("Enable Dark Mode")


  const toggleStyle = ()=>{
     if(myStyle.color == 'black'){
      setMyStyle({
           color:'White',
           backgroundColor:'black',
           border: '1px solid white'
         
       })
       setBtnText("Enable light Mode");

     }
     else{
        setMyStyle({
           color:'black',
           backgroundColor:'White'
         })
       setBtnText("Enable Dark Mode");

     }
  }

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample"style={myStyle}>
        {/* Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${openItem === 1 ? '' : 'collapsed'}`}
             style={myStyle} type="button"
              onClick={() => toggleItem(1)}
              aria-expanded={openItem === 1}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${openItem === 1 ? 'show' : ''}`}
          >
            <div className="accordion-body"style={myStyle}>
              <strong>This is the first item’s accordion body.</strong> It is shown by default...
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${openItem === 2 ? '' : 'collapsed'}`}
                style={myStyle} type="button"
              onClick={() => toggleItem(2)}
              aria-expanded={openItem === 2}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${openItem === 2 ? 'show' : ''}`}
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item’s accordion body.</strong> It is hidden by default...
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${openItem === 3 ? '' : 'collapsed'}`}
              style={myStyle} type="button"
              onClick={() => toggleItem(3)}
              aria-expanded={openItem === 3}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${openItem === 3 ? 'show' : ''}`}
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item’s accordion body.</strong> It is hidden by default...
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
  <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
  <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
</div>

    </div>
  );
}


