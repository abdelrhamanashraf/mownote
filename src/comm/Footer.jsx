import React from "react";

function Footer() {

  var today= new Date();
  var year=today.getFullYear();

  return  <footer>
        <p>┬ęcopyrights {year}</p>
        
        </footer>
};
export default Footer;

