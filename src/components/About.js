// import React, {useState} from 'react'

// export default function About(props) {

//     const [dark, setDark] = useState({
//         color: "black",
//         backgroundColor: "white"
//     })
//     const [btnText, setBtnText] = useState("Enable dark mode")


//     const toggleDark = () =>{
//         if(dark.color === "black"){
//             setDark({
//                 color : "white",
//                 backgroundColor: "black"
//             })
//             setBtnText("Enable light mode");
//         }
//         else{
//             setDark({
//                 color : "black",
//                 backgroundColor: "white"
//             })
//             setBtnText("Enable dark mode");
//         }
//     }


//   return (
//     <div className='container' style={dark}>
//         <h1>About Us</h1>
//         <div className="accordion" id="accordionExample">
//             <div className="accordion-item">
//                 <h2 className="accordion-header">
//                 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={dark}>
//                     Accordion Item #1
//                 </button>
//                 </h2>
//                 <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//                 <div className="accordion-body" style={dark}>
//                     <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                 </div>
//                 </div>
//             </div>
//             <div className="accordion-item">
//                 <h2 className="accordion-header">
//                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={dark}>
//                     Accordion Item #2
//                 </button>
//                 </h2>
//                 <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                 <div className="accordion-body" style={dark}>
//                     <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                 </div>
//                 </div>
//             </div>
//             <div className="accordion-item">
//                 <h2 className="accordion-header">
//                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={dark}>
//                     Accordion Item #3
//                 </button>
//                 </h2>
//                 <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                 <div className="accordion-body" style={dark}>
//                     <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                 </div>
//                 </div>
//             </div>
//         </div>
//         <div className="container my-4"></div>
//         <button type='button' onClick={toggleDark} className='btn btn-dark'>{btnText}</button>
//     </div>
//   )
// }


//IMPROVED DARK MODE



export default function About(props) {

  return (
    <>
    <div className='container' style={{backgroundColor: props.mode==="dark"?"#343a40":"white", color: props.mode==="dark"?"white":"black"}}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item" style={{backgroundColor: props.mode==="dark"?"#343a40":"white", color: props.mode==="dark"?"white":"black"}}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==="dark"?"#343a40":"white", color: props.mode==="dark"?"white":"black"}}>
                    Accordion Item #1
                </button>
                <h2 className="accordion-header">
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body"  >
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" >
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==="dark"?"#343a40":"white", color: props.mode==="dark"?"white":"black"}}>
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==="dark"?"#343a40":"white", color: props.mode==="dark"?"white":"black"}}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==="dark"?"#343a40":"white", color: props.mode==="dark"?"white":"black"}}>
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==="dark"?"#343a40":"white", color: props.mode==="dark"?"white":"black"}}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
