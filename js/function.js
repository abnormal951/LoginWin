const bodyLogin =document.querySelector('#bodyLogin');
bodyLogin.classList.remove('opacity0');
bodyLogin.classList.add('opacity1');

function layoutIni(){
    const divEmail = document.querySelector("#divEmail");
    divEmail.classList.add('layoutActive');
}
setTimeout(layoutIni,1000);

document.querySelector("#btnNextPass").onclick =function(){
    const emailUser= document.querySelector("#emailUser").value;
    const alertEmailLogin =document.querySelector("#alertEmailLogin");
    const spanEmail =document.querySelector("#spanEmail");
    const emailValid = fntEmailValidate(emailUser);

    if(!emailValid){
        alertEmailLogin.innerHTML= '<p style="color:red;">Escribe una direccion de correo electronico</p>';
        alertEmailLogin.style.display="block";

    }else{
        alertEmailLogin.style.display="none";
        spanEmail.innerHTML= emailUser;
        nextLayout('#divEmail','#divPassword');
    }

}
function nextLayout(parent,next){
    const divParent = document.querySelector(parent);
    const divNext = document.querySelector(next);
    divParent.classList.remove('layoutLeft','layoutRight','layoutActive');
    divNext.classList.remove('layoutLeft','layoutRight','layoutActive');

    divParent.classList.toggle('layoutLeft');
    divNext.classList.toggle('layoutActive');
}

document.querySelector("#emailUser").onkeyup=function(){
    const emailUser=document.querySelector("#emailUser").value;
    const alertEmailLogin=document.querySelector("#alertEmailLogin");
    const emailValid = fntEmailValidate(emailUser);

    if(!emailValid){
        alertEmailLogin.innerHTML= '<p style="color:red;">Escribe una direccion de correo electronico</p>';
        alertEmailLogin.style.display="block";

    }else{
        alertEmailLogin.style.display="none";
       
    }
}

document.querySelector("#btnPrev").onclick=function(){
    prevLayout("#divPassword","#divEmail");
}

document.querySelector("#btnLogin").onclick=function(){
    const strEmailUser = document.querySelector("#emailUser").value;
    const strPassUser = document.querySelector("#passUser").value;

    const alertPass = document.querySelector('#alertPass');

    if(strPassUser==""|| strEmailUser=="")
    {
        alertPass.innerHTML='<p style="color:red;">Escriba su contraseña</p>';
        alertPass.style.display='block';
    }else{
        alertPass.style.display='none';
        alert("Usuario:"+strEmailUser+'-'+'Contraseña:'+strPassUser);
    }
}

document.querySelector("#linkCreateAcount").onclick=function(e){
    e.preventDefault();
    nextLayout("#divEmail","#divRegister");
}

document.querySelector("#btnNextEmail").onclick=function(){
    nextLayout("#divRegister","#divEmail");
}

document.querySelector("#btnRegister").onclick=function(){
    const nameUser=document.querySelector("#nameUser").value;
    const emailNewUser=document.querySelector("#emailNewUser").value;
    const passNewUser=document.querySelector("#passNewUser").value;
    const alertRegister=document.querySelector("#alertRegister");

    if (nameUser==""||emailNewUser==""||passNewUser=="" )
    {
        alertRegister.innerHTML='<p style="color:red;">Todos los campos son obligatorios</p>';
        alertRegister.style.display="block";
    }else{
        alertRegister.style.display="none";
        alert("Usuario registrado correctamente");
    }
}



document.querySelector("#linkRecoveryPass").onclick=function(e){
    e.preventDefault();
    nextLayout("#divPassword","#divRecoveryPass");
}

document.querySelector("#btnCancelar").onclick=function(){
    
    nextLayout("#divRecoveryPass","#divPassword");
}

document.querySelector("#btnSendEmail").onclick=function(){
    const sendEmail=document.querySelector("#sendEmail").value;
    const alertSentEmail = document.querySelector('#alertSentEmail');
    const emailValid = fntEmailValidate(sendEmail);

    if(!emailValid){
        alertSentEmail.innerHTML= '<p style="color:red;">Escribe una cuenta de correo</p>';
        alertSentEmail.style.display="block";

    }else{
        alertSentEmail.style.display="none";
        alert("Se envio un correo a "+sendEmail+" con las instrucciones ");
       
    }
}

document.querySelector("#sendEmail").onkeyup=function(){
    const sendEmail=document.querySelector("#emailUser").value;
    const alertSentEmail=document.querySelector("#alertSentEmail");
    const emailValid = fntEmailValidate(sendEmail);

    if(!emailValid){
        alertSentEmail.innerHTML= '<p style="color:red;">Escribe una cuenta de correo</p>';
        alertSentEmail.style.display="block";

    }else{
        alertSentEmail.style.display="none";
       
    }
}

function nextLayout(parent,next){
    const divParent = document.querySelector(parent);
    const divNext = document.querySelector(next);
    divParent.classList.remove('layoutLeft','layoutRight','layoutActive');
    divNext.classList.remove('layoutLeft','layoutRight','layoutActive');

    divParent.classList.toggle('layoutLeft');
    divNext.classList.toggle('layoutActive');
}


function prevLayout(parent,prev){
    const divParent = document.querySelector(parent);
    const divPrev = document.querySelector(prev);
    divParent.classList.remove('layoutLeft','layoutRight','layoutActive');
    divPrev.classList.remove('layoutLeft','layoutRight','layoutActive');

    divParent.classList.toggle('layoutRight');
    divPrev.classList.toggle('layoutActive');
}


//validar Email
function fntEmailValidate(email){
    const stringEmail =new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    if(stringEmail.test(email)== false){
        return false;
    }else{
        return true;
    }
}
//