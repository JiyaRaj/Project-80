var student_arry =[
];
var display_array=[];

function submit(){
    for(var i=1; i<=4; i++)
{
    var name= document.getElementById("name_of_the_student_"+i).value;
    student_arry.push(name);
}

for(var i=0; i<student_arry.length; i++)
{
    display_array.push("<h4> name - " + student_arry[i] + "</h4>")
}
document.getElementById("display_name_with_commas").innerHTML= display_array;
var remove_commas= display_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML= remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
student_arry.sort();
var display_arry_sort=[];
for(var i=0; i<student_arry.length; i++){
    display_arry_sort.push("<h4> name - " + student_arry[i] + "</h4>");
}
document.getElementById("display_name_with_commas").innerHTML= display_arry_sort;
}