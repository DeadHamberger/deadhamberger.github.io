function add(item){var current=document.getElementById('items').textContent;var newText=current+" "+"\n"+item;document.getElementById('items').innerHTML=newText;}function addMoney(price){var current=document.getElementById('total').textContent;var newText=parseInt(current)+price;document.getElementById('total').innerHTML=newText;}function addOrder(){var orderNum=0;var name=document.getElementById('nameIn').value;var order=document.getElementById("fullOrder");var currentOrders=document.getElementById("orders");document.getElementById('name').innerHTML=name;document.getElementById('orders').innerHTML = order.innerHTML + currentOrders.innerHTML;document.getElementById('items').innerHTML='  ';document.getElementById('total').innerHTML='0.00';document.getElementById('nameIn').placeholder='Name';document.getElementById('nameIn').value='';}