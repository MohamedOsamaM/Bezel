var cartoona = '';
for(var i=0;i<300;i+=1)
{
    if(i%2==0)
    {
        cartoona +="<h2 class= 'dark'>route</h2>";
    }
    else 
    {
        cartoona +="<h2 class='light'>route</h2>";
    }
}
document.getElementById('demo').innerHTML = cartoona;