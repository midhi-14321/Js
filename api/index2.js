async function postData(){
    let options={
        "method":"POST",
        "headers":{
            "Content-Type":"application/json"

        },
        "body":JSON.stringify({
            "name":"venkatesh",
            "id":"6",
            "age":"60"
        })
    }
    try{
        let response=await fetch("http://localhost:3000/students",options)
        if(response.ok){
            console.log('data submitted')
        }
        else{
            console.log('something went wrong')
        }
    }
    catch(err){
        console.error(err)
    }

}
// postData()
async function deleteData(){
    let options={
        "method":"DELETE"
    }
    let response=await fetch("http://localhost:3000/students/3",options)
    console.log(response.statusText,response.status)
}
// deleteData()
async function updateData(){
    let options={
        "method":"PUT",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify({
            "id":"3",
            "name":"suresh raina"
        })
    }
    let response=await fetch("http://localhost:3000/students/3",options)
    console.log(response.statusText,response.status)
}
// updateData()

async function updateWholeData(){
    let options={
        "method":"PUT",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify({
            "id":"3",
            "name":"suresh raina"
        })
    }
    let response=await fetch("http://localhost:3000/students/3",options)
    console.log(response.statusText,response.status)
}
// updateWholeData()

async function updateData(){
    let options={
        "method":"PATCH",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify({
            "id":"3",
            "name":"suresh babu"
        })
    }
    let response=await fetch("http://localhost:3000/students/3",options)
    console.log(response.statusText,response.status)
}
// updateData()
