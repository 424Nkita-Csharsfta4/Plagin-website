async function Rsespons(){
    let responsr = await fetch('http://localhost:5235/connection')
    let content = await responsr.json()
    console.log(content)


    let list = document.querySelector('.posts')
    for(let i =0;i<content.length;i++){
     list.insertAdjacentHTML("beforeend",`
     <li class="post">
     
     <p>"Name": ${content[i].name}</p>
     <p>"Date": ${content[i].date.date_not_after.date_not_before}</p>
     <p>"Serial_Num:" ${content[i].serial_number}</p>
     <p>"Value:" ${content[i].value}</p>
     <p>"Thumbrint": ${content[i].thumbprint}</p>
 </li>`)
    }
}
Rsespons()



