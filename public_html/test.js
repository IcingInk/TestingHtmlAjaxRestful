function completeAndRedirect(){
    alert('You\'re nearly there! To complete your entry, you simply need to tap \'continue\' on the next page. Good luck!');
    location.href='http://google.com/?SID='+'<? echo $CATEGORY; ?>'+','+'<? echo $PLATFORM; ?>'+','+'<? echo $DEVICE; ?>\n\
    '+'&email='+document.forms[0].elements[0].value;
}

