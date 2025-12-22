function validate(){
    let uName=document.getElementById("uName").value;
    //let uName=document.forms.Form.uName.value;// another way
    let uMail=document.getElementById("uMail").value;//value means user enter input in form HTML
    let uPass=document.getElementById("uPass").value;
    

    let regName=/^[A-Za-z]+$/;//javaScrip regex for Username validate
    let regMail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//javaScrip regex for Mail validate
    let regPass=/^[A-Za-z]\w{7,14}$/;//javaScrip regex for Password validate

    //condition for username
    if(uName==""||uName==null)
    {
        alert("UserName Shouldn't be empty")
        return false
    }
    if(!uName.match(regName))
    {
        alert("it should contain A-Z and a-z")
        return false
    }
    if(uName.length<3||uName.length>10)//to check the length of the UserName
    {
        alert("it should contain more than 3 character and less than 10 char")
        return false
    }

    //condition for Mailid
    if(uMail==""||uMail==null)
    {
        alert("Mail Id Shouldn't be empty")
        return false
    }
    if(!regMail.test(uMail))//anothertype if((!uMail).match(regMail))
    {
        alert("enter a valid email-id")
        return false
    }
    
    //condition for password
    if(uPass==""||uPass==null)
    {
        alert("password Shouldn't be empty")
        return false
    }
    if(!uPass.match(regPass))
    {
        alert("Please enter a valid password")
        return false
    }
}
