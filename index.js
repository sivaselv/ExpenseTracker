let list=JSON.parse(localStorage.getItem('objt'));
let item=document.getElementById('footer-table');
let  htmlcontent="<tr><th>Item.No</th><th>Specification</th><th>price</th><th>Date</th><th>delete</th><tr>";
if(list==null)
{
  list=[]
}
else{
 display();
}
function display()
{ htmlcontent="";
   htmlcontent="<tr><th>Item.No</th><th>Specification</th><th>price</th><th>Date</th><th>delete</th><tr>";
  for(let i=0;i<list.length;i++)
  {
  htmlcontent+="<tr><th>"+(i+1)+"</th><td>"+list[i].item+"</td><td>"+list[i].cost+"</td><td>"+list[i].time+"</td><td><input type='button' id='delete' value='Delete' onclick='remove("+i+")'></td></tr>";
  }
 // console.log(htmlcontent);

  item.innerHTML=htmlcontent;
}
function addobject()
{ 
  let specification=document.getElementById('specification').value;
  let price=document.getElementById('price').value;
  let date =document.getElementById('date').value;
  let obj={item:specification,cost:price,time:date};
  list.push(obj);
  document.getElementById('specification').value="";
  document.getElementById('price').value="";
  document.getElementById('date').value="";
  //console.log(list);
}
function remove( idx)
{
  list.splice(idx,1);
  display();
  localStorage.setItem('objt',JSON.stringify(list));
}
function add()
{ 
  addobject();
  if(list.length>0)
  {
  htmlcontent+="<tr><td>"+list.length+"</td><td>"+list[list.length-1].item+"</td><td>"+list[list.length-1].cost+"</td><td>"+list[list.length-1].time+"</td></tr><td><input type='button' id='delete' value='Delete'  onclick='remove("+list.length-1+")'></td>";
  }
  item.innerHTML=htmlcontent;
  display();
  localStorage.setItem('objt',JSON.stringify(list));

}
