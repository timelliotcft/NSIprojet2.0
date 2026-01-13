function conversion()
/*prend les valeurs des cases à convertir, regarde laquelle est remplie et choisie la bonne fonction de convertion à executer*/ 
{
    decimal = document.getElementById ("decimal") ;
    hexadecimal = document.getElementById ("hexadecimal") ;
    binaire = document.getElementById ("binaire") ;
    if (decimal.value != '' && binaire.value == '' && hexadecimal.value == '') 
        {return conversionDecimal();}
    if (binaire.value != '' && decimal.value == '' && hexadecimal.value == '') 
        {return conversionBinaire();}
    if (hexadecimal.value != '' && decimal.value == '' && binaire.value == '') 
        {return conversionHexadecimal();}
    else 
        {alert("Respectez la consigne");}
}

function conversionDecimal()
/*prend la valeur de la case décimal et converti cette valeur en hexadécimal 
et en binaire puis les renvoient dans les cases de convertion correspondante*/
{
    hexadecimal.value =(decimal.value -0).toString(16);
    binaire.value =(decimal.value -0).toString(2);
}

function conversionBinaire()
/*prend la valeur de la case binaire et converti cette valeur en hexadécimal 
et en décimal puis les renvoient dans les cases de convertion correspondante*/
{
    decimal.value =parseInt(binaire.value,2).toString(10);
    hexadecimal.value =parseInt(binaire.value,2).toString(16);
}

function conversionHexadecimal()
/*prend la valeur de la case hexadécimal et converti cette valeur en décimal 
et en binaire, puis les renvoient dans les cases de convertion correspondante*/
{
    decimal.value =parseInt(hexadecimal.value,16).toString(10);
    binaire.value =parseInt(hexadecimal.value,16).toString(2);
}

function reinitialisation()
/*supprime les valeurs de toutes les cases de convertion*/
{
    document.getElementById ("decimal").value = '' ;
    document.getElementById ("hexadecimal").value = '' ;
    document.getElementById ("binaire").value = '' ;
}

function sauvegarde()
/*affiche les valeurs des cases de convertion dans les cases du tableau de sauvegarde*/
{
    document.getElementById ("save10").value = document.getElementById ("decimal").value ;
    document.getElementById ("save16").value = document.getElementById ("hexadecimal").value ;
    document.getElementById ("save2").value = document.getElementById ("binaire").value ;
}

/*supprime la valeur de la cases de réponse associée */
function reinitialisation10()   {document.getElementById ("reponce10").value = '' ;}
function reinitialisation20()   {document.getElementById ("reponce20").value = '' ;}
function reinitialisation30()   {document.getElementById ("reponce30").value = '' ;}
function reinitialisation40()   {document.getElementById ("reponce40").value = '' ;}
function reinitialisation50()   {document.getElementById ("reponce50").value = '' ;}
function reinitialisation60()   {document.getElementById ("reponce60").value = '' ;}

function reinitialisation_total()
/*supprime les valeurs de toutes les cases de réponse*/
{
    document.getElementById("reponce10").value = ""
    document.getElementById("reponce20").value = ""
    document.getElementById("reponce30").value = ""
    document.getElementById("reponce40").value = ""
    document.getElementById("reponce50").value = ""
    document.getElementById("reponce60").value = ""
}

function verifier10()
/*renvoie "Bravo !!!" si la valeur de la case de réponse est bien la convertion 
demandée et "C'est faux, réessaye encore" si ce n'est pas le cas*/
{
    rep = document.getElementById("reponce10")
    if (rep.value == '1000111')
        return document.getElementById("reponce10").value = "Bravo !!!";
    else
        return document.getElementById ("reponce10").value = "C'est faux, réessaye encore";
}

function verifier20()
/*renvoie "Bravo !!!" si la valeur de la case de réponse est bien la convertion 
demandée et "C'est faux, réessaye encore" si ce n'est pas le cas*/
{
    rep = document.getElementById("reponce20")
    if (rep.value == '5e' || rep.value == '5E')
        return document.getElementById("reponce20").value = "Bravo !!!";
    else
        return document.getElementById ("reponce20").value = "C'est faux, réessaye encore";
}

function verifier30()
/*renvoie "Bravo !!!" si la valeur de la case de réponse est bien la convertion 
demandée et "C'est faux, réessaye encore" si ce n'est pas le cas*/
{
    rep = document.getElementById("reponce30")
    if (rep.value == '38')
        return document.getElementById("reponce30").value = "Bravo !!!";
    else
        return document.getElementById ("reponce30").value = "C'est faux, réessaye encore";
}

function verifier40()
/*renvoie "Bravo !!!" si la valeur de la case de réponse est bien la convertion 
demandée et "C'est faux, réessaye encore" si ce n'est pas le cas*/
{
    rep = document.getElementById("reponce40")
    if (rep.value == 'f3' || rep.value == 'F3')
        return document.getElementById("reponce40").value = "Bravo !!!";
    else
        return document.getElementById ("reponce40").value = "C'est faux, réessaye encore";
}

function verifier50()
/*renvoie "Bravo !!!" si la valeur de la case de réponse est bien la convertion 
demandée et "C'est faux, réessaye encore" si ce n'est pas le cas*/
{
    rep = document.getElementById("reponce50")
    if (rep.value == '2604')
        return document.getElementById("reponce50").value = "Bravo !!!";
    else
        return document.getElementById ("reponce50").value = "C'est faux, réessaye encore";
}

function verifier60()
/*renvoie "Bravo !!!" si la valeur de la case de réponse est bien la convertion 
demandée et "C'est faux, réessaye encore" si ce n'est pas le cas*/
{
    rep = document.getElementById("reponce60")
    if (rep.value == '101101010011')
        return document.getElementById("reponce60").value = "Bravo !!!";
    else
        return document.getElementById ("reponce60").value = "C'est faux, réessaye encore";
}

/*affiche la réponse à la convertion demandée dans la case associée */
function solution10()   {document.getElementById("reponce10").value = "1000111" ;}
function solution20()   {document.getElementById("reponce20").value = "5E" ;}
function solution30()   {document.getElementById("reponce30").value = "38"}
function solution40()   {document.getElementById("reponce40").value = "F3" ;}
function solution50()   {document.getElementById("reponce50").value = "2604" ;}
function solution60()   {document.getElementById("reponce60").value = "101101010011" ;}

function solution_total()
/*affiche toutes les réponses des convertions demandées dans chaqu'une des cases de réponse associée*/
{
    document.getElementById("reponce10").value = "1000111"
    document.getElementById("reponce20").value = "5E"
    document.getElementById("reponce30").value = "38"
    document.getElementById("reponce40").value = "F3"
    document.getElementById("reponce50").value = "2604"
    document.getElementById("reponce60").value = "101101010011"
}
