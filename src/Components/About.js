export default function About(props) {

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#30353a',
    backgroundColor: props.mode === 'dark' ? '#30353a' : 'white'
  }

  return (
    <div className="container my-3" style={myStyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              <b>Analyze Your text:-</b>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextUtils gives you a way to analyze your text quickly and efficiently. Whetther it be word count, character count, converting text or manipulating it.
            </div>
          </div>
        </div>


        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
              <b>Free to use :-</b>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Text utils is a free character counter tool that provides instant character count and word count statistics for a given text. Text utils reports the number of words and characters. Thus it it suitable for writtins essay/paragraph with word limit.
            </div>
          </div>
        </div>


        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
              <b>Browser Compatible</b>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This word counter software works in any web browser such as Chrome, FireFox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, excel document, pdf documents, essays etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="contaier my-3">
        <button className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
      </div> */}
    </div>

  );
}
