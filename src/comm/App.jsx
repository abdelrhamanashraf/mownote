import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes"
//import    from



function App(){
return <div>
    <Header />
    {notes.map((termz)=> 
     <Note  
    key={termz.key}
    title ={termz.title}
    content ={termz.content}
    />
)}
    <Footer />
</div>

}
export default App;