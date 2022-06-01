async function Rsespons(){
    let responsr = await fetch('http://localhost:5235/connection')
    let content = await responsr.json()
    console.log(content)


    let list = document.querySelector('.posts')
    for(let i =0;i<content.length;i++){
     list.insertAdjacentHTML("beforeend",`
     <li class="post">
     <p>"Name": ${content[i].name}</p>
     <p>"Date": ${content[i].date.date_not_after}</p>
     <p>"Date": ${content[i].date.date_not_before}</p>
     <p>"Serial_Num:" ${content[i].serial_number}</p>
     <p>"Value:" ${content[i].signature_algoritm}</p>
     <p>"Value:" ${content[i].signature_algoritm.friendly_name}</p>
     <p>"Value:" ${content[i].signature_algoritm.value}</p>
     <p>"Name": ${content[i].date.has_private_key}</p>
     <p>"Name": ${content[i].date.private_key}</p>
     <p>"Name": ${content[i].date.public_key}</p>
     <p>"Thumbrint": ${content[i].thumbprint}</p>
 </li>`)
    }
}
Rsespons()



