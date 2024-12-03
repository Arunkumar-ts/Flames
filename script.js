function check(){
    let s1=document.getElementById("in1");
    let s2=document.getElementById("in2");
    let ss1=s1.value;
    let ss2=s2.value;
    let out=document.getElementById("out");
    if(ss1 && ss2){
        let size=findsize(ss1,ss2);
        let fflames=findflames(size);
        let resultin=fullform(fflames);
        out.value=resultin;
    }
    else{
        out.value="Enter Names!";
    }
}
function findsize(s1, s2){
    let str1=s1.toLowerCase();
    let str2=s2.toLowerCase();
    let i,j;
    for( i=0;i<str1.length;i++){
        for(j=0;j<str2.length;j++){
            if(str1.charAt(i)==str2.charAt(j)){
                str1=str1.substring(0,i)+str1.substring(i+1);
                str2=str2.substring(0,j)+str2.substring(j+1);
                i=0;
                j=0;
            }
        }
    }
    let s3=str1+str2;
    return s3.length;    
}

function findflames(size){
     let flames="flames";
    let k=0,f=1;
    let size1=size;
    while(flames.length!=1){
        if(f==size1){
            flames=flames.substring(0,k)+flames.substring(k+1)
            f=1;
        }
        else{
            f++;
            if(k>=flames.length-1){
                if(k==flames.length-1){
                    k=0;
                }
                else{
                    k=1;
                }
            }
            else{
                k++;
            }
        }

    }
    return flames;
}

function fullform(ful){
    let fulf;
    switch(ful){
        case 'f' :{
            fulf= "FRIEND ";
            break;
        }
        case 'l' :{
            fulf= "LOVE";
            break;
        }
        case 'm' :{
            fulf= "MARRIAGE";
            break;
        }
        case 'e' :{
            fulf= "ENEMY";
            break;
        }
        case 's' :{
            fulf= "SISTER";
            break;
        }
        case 'a' :{
            fulf= "ARANGE";
            break;
        }
    }
    return fulf;
}