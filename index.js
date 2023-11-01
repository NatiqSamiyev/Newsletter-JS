// let form=document.querySelector('form')
// let input=document.querySelector('input')
// let btn=document.querySelector('.product-btn')
// let ul=document.querySelector('ul')
// let removeBtns;


// form.addEventListener('submit',submitForm)

// function submitForm(a) {
//     a.preventDefault();
//     ul.style.display='block';
//     ul.innerHTML +=`
//     <li>
//      <p>${input.value}</p>
//       <button class="remove-btn">
//          <img src="./image/Group 56.svg" alt=""></img>
//       </button>

// </li>
// `;  

// form.reset()
// removeBtns=document.querySelectorAll('.remove-btn')
// for (let index = 0; index < removeBtns.length; index++) {
//    removeBtns[index].addEventListener('click',() => remove(removeBtns[index]))
  
// }

// }

// function remove(element) {
//    element.parentElement.remove()
//    let alList=document.querySelectorAll('li')
//    if (alList.length>0) {
//       ul.style.display='block'
      
//    }

//    else{
//       ul.style.display='none'
//    }
   
// }












let form=document.querySelector('form')
let input =document.querySelector('input')
let productBtn=document.querySelector('.product-btn')
let ul=document.querySelector('ul')
let removeBtns;

form.addEventListener('submit', submitForm)

function submitForm(a) {
   a.preventDefault()
   // console.log('goster');
   ul.style.display='block'
   ul.innerHTML +=`

 <li>
      <p>${input.value}</p>
      <button class="remove-btn">
         <img src="./image/Group 56.svg" alt=""></img>
     </button>
 </li>

   `;

   form.reset()
   removeBtns=document.querySelectorAll('.remove-btn')
   for (let index = 0; index < removeBtns.length; index++) {
      removeBtns[index].addEventListener('click', () => remove(removeBtns[index]))
      
   }
   
}

function remove(element) {
   element.parentElement.remove()
   let alList=document.querySelectorAll('li')
   if (alList.length>0) {
      ul.style.display='block'
      
   }
   
   else{
      ul.style.display='none'
   }
}



