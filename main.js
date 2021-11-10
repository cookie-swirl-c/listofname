list=[];
function submit() {
    var name_1=document.getElementById("name_of_1st_person").value;
    var name_2=document.getElementById("name_of_2nd_person").value;
    var name_3=document.getElementById("name_of_3rd_person").value;
    var name_4=document.getElementById("name_of_4th_person").value;

    list.push(name_1);
    list.push(name_2);
    list.push(name_3);
    list.push(name_4);
    console.log(list);
    document.getElementById("answer_lbl").innerHTML=list;
    document.getElementById("submit_btn").style.display="none";
    document.getElementById("sort_btn").style.display="inline-block";

}
function sort() {
    list.sort();
    console.log(list);
    document.getElementById("answer_lbl").innerHTML=list;
}