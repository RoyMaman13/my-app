import React from 'react'
import './Menu.css'

function clicked() {
  var myEle = document.getElementById("formGroupExampleInput2").toString;

  document.getElementById("demo").innerHTML = myEle;
}


const Menu = () => {
  return (

    <form class="form-signin">
      <div>
        <label for="formGroupExampleInput" class="form-label"><h2>username</h2></label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="enter your username"></input>
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label"><h2>password</h2></label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="enter your password"></input>
      </div>
      <div>
        <button onClick={clicked}>submit</button>
      </div>
      <div>
        <p id="demo"></p>
      </div>

    </form>


  )
}

export default Menu