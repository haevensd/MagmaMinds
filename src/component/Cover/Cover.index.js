import './Cover.style.css';

const Cover = () => {
    return (
        <div className='Cover block'>
            <div className='Cover-content block-content'>
                {/* It would be cool if h1 and p tags translated in and out of place in the navbar as the user scrolls up and down */}
            <div className='Cover-inner'>
                <h1 className='random'>MagmaMinds</h1>{/* Have letters walk/scoot together into rough formation (think pixar lamp) and then swing into place as if on hinges, design effect as if heavy */}
                {/* <div className="text text--random words chars splitting" data-scroll="out" data-splitting="" style={{"--word-total": 1, "--char-total": 6}}><span className="word" data-word="Random" data-scroll="in" style={{"--word-index": 0}}><span className="char char-1" data-char="R" style={{"--char-index": 0}}>M</span><span className="char char-2" data-char="a" style={{"--char-index": 1}}>a</span><span className="char char-3" data-char="n" style={{"--char-index": 2}}>g</span><span className="char char-4" data-char="d" style={{"--char-index": 3}}>m</span><span className="char char-5" data-char="o" style={{"--char-index": 4}}>a</span><span className="char char-6" data-char="m" style={{"--char-index": 5}}>M</span><span className="char char-6" data-char="m" style={{"--char-index": 6}}>i</span><span className="char char-6" data-char="m" style={{"--char-index": 7}}>n</span><span className="char char-6" data-char="d" style={{"--char-index": 8}}>d</span><span className="char char-6" data-char="s" style={{"--char-index": 9}}>s</span></span></div> */}
                <p>Next level marketing. {/* Phase-in from left-to-right */}
                    Next level sales.{/* Phase-in after */} Next level business.</p>{/* Phase-in last */}
            </div>
            </div>
        </div>
    )
}

export default Cover;