document.write("54. to count the number of vowels in a given string."+"<br>");
function test54(str){
    // return str.replace(/[]/)
    var s=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=="a" ||str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
            s=s+1;
        }
    }
    return s;
}
document.write("The string :sanjeev ,Ans :"+test54("sanjeev")+"<br><br>");