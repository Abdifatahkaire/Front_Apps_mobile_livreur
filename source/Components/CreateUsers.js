
function CreateUsers(){


    return fetch("http://localhost:4000/todos/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(newUser)
      })
        
   
}
