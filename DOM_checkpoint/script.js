



// fonction removeItem pour supprimer l'item voulu
let x = document.getElementsByClassName('fa-times')

   for (let i=0; i< x.length; i++){
    console.log(x[i])
    x[i].addEventListener('click', removeItem)
}

function removeItem(event){
    del_btn= event.target
    del_btn.parentElement.parentElement.remove()
    grandTotal()
    
}


// fonction pour le coeur clickable

    var clicks = 0; // counter 
    var a = document.getElementsByClassName("fa-heart"); 
    for (var i=0; i < a.length ; i++){
    a[i].addEventListener("click",function(e){
        
    btnclicked= e.target
    ++clicks
    if (clicks%2 !==0 ){
        btnclicked.style.color='red' 
    }
    else { btnclicked.style.color='black'}
      })
      }


// changement de prix selon la quantité

let quantityFields = document.getElementsByClassName('num')
for (let j =0; j <quantityFields.length; j++){
    
    quantityFields[j].addEventListener("change", totalCost)
}


   function totalCost(e){

        let quantity = e.target
        quantity_parent = quantity.parentElement
        price_field =quantity_parent.getElementsByClassName("item-price")[0]
        total_field =quantity_parent.getElementsByClassName("total-price")[0]
        price_field_content = price_field.innerText.replace('€',' ')
         var total = quantity.value * price_field_content
         quantity_parent.getElementsByClassName("total-price")[0].innerText = total + '€'
         grandTotal()
        if(isNaN(quantity.value)|| quantity.value <= 0){
            quantity.value = 1
        }

    }

// changement du total

   function grandTotal(){
    let total = 0
    let grand_total = document.getElementById("total")
    all_total_fields = document.getElementsByClassName("total-price")
    for(let i = 0; i < all_total_fields.length; i++){
        all_prices = Number(all_total_fields[i].innerText.replace('€', ''))
        total+= all_prices
    }
    grand_total.innerText = "€"+total
   }
    
   


    


  


