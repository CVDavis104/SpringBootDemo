async function getCandy(){
    
    try {
        const raw_response = await fetch(`http://localhost:8080/app/candies`);

        if(!raw_response.ok){
        throw new Error(raw_response.status);
        }//if statement ending

        const json_data = await raw_response.json();
        console.log(json_data);

        var favCandy = document.getElementById("favCandy");
        var candy = document.createElement("candy");

        favCandy.innerHTML = `${json_data[1].name}, is my favorite candy!`
        favCandy.append(candy);

    }//try block ending

    catch(error){
        alert("Error:" + error)
    }//catch block ending

}//'getZodiac()' function ending