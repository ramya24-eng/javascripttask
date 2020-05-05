var search =document.getElementById("search");
var ul=document.getElementById('search-list');
var searchBtn=document.getElementById("search-btn");
var storageArray = localStorage.getItem('recentSearches')?JSON.parse(localStorage.getItem('recentSearches')):[];
var storedValue= JSON.parse(localStorage.getItem('recentSearches'));
var hide=document.getElementById("content");
var checkbox;
//it checks whether the browser does support storage
  if(typeof(Storage) !== "undefined")
   {
    localStorage.setItem('recentSearches',JSON.stringify(storageArray));
    
    //create list of recent search content to display
    function listValues(inputval){

         //create checkbox
         var checkbox = document.createElement('input');
         checkbox.type = "checkbox";
         checkbox.className = "box";
         checkbox.onclick=function(){checkfunc(event)};

         //create list element
         var li=document.createElement("li");
         li.textContent=inputval;
         li.className="list-class";
         li.prepend(checkbox);
         ul.prepend(li);
      }

    //checks the checkbox had tick mark to strike out the value
    function checkfunc(event){
         if(event.target.checked){
            event.target.parentElement.className="list-style-strike";
            }
         else{
            event.target.parentElement.className="list-style-none";
             }
      }
    
    //it add present search value to the list
    searchBtn.addEventListener('click',function(e){
      e.preventDefault();
      if(search.value){
             storageArray.push(search.value);
             localStorage.setItem('recentSearches',JSON.stringify(storageArray));
             listValues(search.value);
             search.value="";
            }
    });

    //storedValue had the retrived local storage ,it creates lists to display
    storedValue.forEach(item =>{
            listValues(item);
            });
    //when the text bar had clicked it shows the past stored blocklist value 
    search.addEventListener('click',function(e){ 
            ul.style.cssText="display:block";
            });
}
else
{ 
    //it shows once the browser does not support
    document.getElementById("error").innerText="Oops..sorry..Browser does not support storage";
}
//to hide the block when we click anywhere on the document
document.addEventListener('mouseup', function(e) {
      var container = document.getElementById('content');
      if (!container.contains(e.target)) {
               ul.style.display = 'none';
     }
  });