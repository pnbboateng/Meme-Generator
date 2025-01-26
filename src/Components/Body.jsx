import "../Components/Header.css"
import React from "react"


export default function Body(){
    const [memeText, setMemeText] = React.useState({
        image_url: "http://i.imgflip.com/1bij.jpg",
        topText: "One does not simply",
        bottomText: "walk into mordor"

    })




    function getData(event){
     const {value} = event.currentTarget
     setMemeText(prevMemeText =>({
        ...prevMemeText, topText: value
     }))
       
    }

    function getData2(event){
        const {value} = event.currentTarget
        setMemeText(prevMemeText =>({
           ...prevMemeText, bottomText: value
        }))
          
       }
    
    return(
        <section>
            <div className="meme-container">
            <div className="form">
                <label htmlFor="Top Text"> Top Text
                    <input type="text" 
                    placeholder="One does not simply"
                    name="TopText"
                    onChange={getData}
                    />
                </label>
                <label htmlFor="Bottom Text"> Bottom Text
                    <input type="text" 
                    placeholder="Walk into Mordor"
                    name="TopText"
                    onChange={getData2}
                    
                    />
                </label>
                <button type="submit">Get a new meme image</button>
            </div>
                <div className="meme-image">
                    <img src={memeText.image_url} alt="" />
                    <span className="upperText">{memeText.topText}</span>
                    <span className="lowerText">{memeText.bottomText}</span>

                </div>
            
            </div>
        </section>

    )
}