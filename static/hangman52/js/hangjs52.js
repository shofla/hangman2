//script.js

//Global Variables from start ------------------------
//The correct letters
correct1 = 'C'
correct2 = 'A'
correct3 = 'B'

n_letters = 3

document.getElementById("start_to_end_time").value = 2;



//Word correct yes or no, if yes, the experiment should proceed.
wordcorrect = 0
l1correct = l2correct = l3correct = 0

//Record the images
imagecount = 0

/* Record the order in which the letters were picked*/
order = 1

//Number of wrong letters
n_wrong_letters = 0





$(function(){
/* Actions executed after clicking button of possible letter A:
- hide button A
- make A visible in the "Chosen" field
- temporarily save the variable letter
- execute script "image"
- execute script "word"
*/

    
//$('.pbutton').click(function(){
//
//
//  letter =$(this).text();
//  console.log(mynewarray[letter])
//  // $(this).style.visibility = 'hidden';
//  // $(this).style.visibility = 'visible';
//letter = $(this).attr('id').substr(6, 1);
//// munewarray.a=
//mynewarray[letter] = 666;
//
//    image();
//    word();
//});


    $('#buttona').click(function(){
        document.getElementById("ordera").value = order;
        order = order+1
        
        buttona.style.visibility = 'hidden';
        chosena.style.visibility = 'visible';

        letter = $(this).text();
        
        image();
        word();
    });


    
    $('#buttonb').click(function(){

        document.getElementById("orderb").value = order;
        orderb = order
        order = order+1

        buttonb.style.visibility = 'hidden';
        chosenb.style.visibility = 'visible';

        letter = $(this).text();
        image();
        word();
    });


    $('#buttonc').click(function(){
        document.getElementById("orderc").value = order;
        order = order+1

        buttonc.style.visibility = 'hidden';
        chosenc.style.visibility = 'visible';

        letter = $(this).text();
        image();
        word();
    });

    $('#buttond').click(function(){
        document.getElementById("orderd").value = order;
        order = order+1;

        buttond.style.visibility = 'hidden';
        chosend.style.visibility = 'visible';

        letter = document.getElementById('buttond').textContent;
        image();
        word();
    });

    $('#buttone').click(function(){
        document.getElementById("ordere").value = order;
        order = order+1;

        buttone.style.visibility = 'hidden';
        chosene.style.visibility = 'visible';

        letter = document.getElementById('buttone').textContent;
        image();
        word();
    });

    $('#buttonf').click(function(){
        document.getElementById("orderf").value = order;
        order = order+1;

        buttonf.style.visibility = 'hidden';
        chosenf.style.visibility = 'visible';

        letter = document.getElementById('buttonf').textContent;
        image();
        word();
    });

    $('#buttong').click(function(){
        document.getElementById("orderg").value = order;
        order = order+1;

        buttong.style.visibility = 'hidden';
        choseng.style.visibility = 'visible';

        letter = document.getElementById('buttong').textContent;
        image();
        word();
    });

    $('#buttonh').click(function(){
        document.getElementById("orderh").value = order;
        order = order+1;

        buttonh.style.visibility = 'hidden';
        chosenh.style.visibility = 'visible';

        letter = document.getElementById('buttonh').textContent;
        image();
        word();
    });

    $('#buttoni').click(function(){
        document.getElementById("orderi").value = order;
        order = order+1;

        buttoni.style.visibility = 'hidden';
        choseni.style.visibility = 'visible';

        letter = document.getElementById('buttoni').textContent;
        image();
        word();
    });

    $('#buttonj').click(function(){
        document.getElementById("orderj").value = order;
        order = order+1;

        buttonj.style.visibility = 'hidden';
        chosenj.style.visibility = 'visible';

        letter = document.getElementById('buttonj').textContent;
        image();
        word();
    });

    $('#buttonk').click(function(){
        document.getElementById("orderk").value = order;
        order = order+1;

        buttonk.style.visibility = 'hidden';
        chosenk.style.visibility = 'visible';

        letter = document.getElementById('buttonk').textContent;
        image();
        word();
    });


    $('#buttonl').click(function(){
        document.getElementById("orderl").value = order;
        order = order+1;

        buttonl.style.visibility = 'hidden';
        chosenl.style.visibility = 'visible';

        letter = document.getElementById('buttonl').textContent;
        image();
        word();
    });


    $('#buttonm').click(function(){
        document.getElementById("orderm").value = order;
        order = order+1;

        buttonm.style.visibility = 'hidden';
        chosenm.style.visibility = 'visible';

        letter = document.getElementById('buttonm').textContent;
        image();
        word();
    });

   $('#buttonn').click(function(){
        document.getElementById("ordern").value = order;
        order = order+1;

        buttonn.style.visibility = 'hidden';
        chosenn.style.visibility = 'visible';

        letter = document.getElementById('buttonn').textContent;
        image();
        word();
    });

    $('#buttono').click(function(){
        document.getElementById("ordero").value = order;
        order = order+1;

        buttono.style.visibility = 'hidden';
        choseno.style.visibility = 'visible';

        letter = document.getElementById('buttono').textContent;
        image();
        word();
    });


    $('#buttonp').click(function(){
        document.getElementById("orderp").value = order;
        order = order+1;

        buttonp.style.visibility = 'hidden';
        chosenp.style.visibility = 'visible';

        letter = document.getElementById('buttonp').textContent;
        image();
        word();
    });


    $('#buttonq').click(function(){
        document.getElementById("orderq").value = order;
        order = order+1;

        buttonq.style.visibility = 'hidden';
        chosenq.style.visibility = 'visible';

        letter = document.getElementById('buttonq').textContent;
        image();
        word();
    });


    $('#buttonr').click(function(){
        document.getElementById("orderr").value = order;
        order = order+1;

        buttonr.style.visibility = 'hidden';
        chosenr.style.visibility = 'visible';

        letter = document.getElementById('buttonr').textContent;
        image();
        word();
    });


    $('#buttons').click(function(){
        document.getElementById("orders").value = order;
        order = order+1;

        buttons.style.visibility = 'hidden';
        chosens.style.visibility = 'visible';

        letter = document.getElementById('buttons').textContent;
        image();
        word();
    });


    $('#buttont').click(function(){
        document.getElementById("ordert").value = order;
        order = order+1;

        buttont.style.visibility = 'hidden';
        chosent.style.visibility = 'visible';

        letter = document.getElementById('buttont').textContent;
        image();
        word();
    });


    $('#buttonu').click(function(){
        document.getElementById("orderu").value = order;
        order = order+1;

        buttonu.style.visibility = 'hidden';
        chosenu.style.visibility = 'visible';

        letter = document.getElementById('buttonu').textContent;
        image();
        word();
    });


    $('#buttonv').click(function(){
        document.getElementById("orderv").value = order;
        order = order+1;

        buttonv.style.visibility = 'hidden';
        chosenv.style.visibility = 'visible';

        letter = document.getElementById('buttonv').textContent;
        image();
        word();
    });


    $('#buttonw').click(function(){
        document.getElementById("orderw").value = order;
        order = order+1;

        buttonw.style.visibility = 'hidden';
        chosenw.style.visibility = 'visible';

        letter = document.getElementById('buttonw').textContent;
        image();
        word();
    });


    $('#buttonx').click(function(){
        document.getElementById("orderx").value = order;
        order = order+1;

        buttonx.style.visibility = 'hidden';
        chosenx.style.visibility = 'visible';

        letter = document.getElementById('buttonx').textContent;
        image();
        word();
    });

    $('#buttony').click(function(){
        document.getElementById("ordery").value = order;
        order = order+1;

        buttony.style.visibility = 'hidden';
        choseny.style.visibility = 'visible';

        letter = document.getElementById('buttony').textContent;
        image();
        word();
    });

    $('#buttonz').click(function(){
        document.getElementById("orderz").value = order;
        order = order+1;

        buttonz.style.visibility = 'hidden';
        chosenz.style.visibility = 'visible';

        letter = document.getElementById('buttonz').textContent;
        image();
        word();
    });

});




//VISIBILITY OF HANGMAN script -------------------------------------------------------------------------------------------------------------


function image() {
    if(letter != correct1 && letter != correct2 && letter != correct3)
    {
        
        imagecount = imagecount + 1

        if(imagecount == 1)
        {
            hang1.style.visibility = 'visible';
            document.getElementById("hangcounter").innerHTML = "1/10";
        }

        if(imagecount == 2)
        {
            hang2.style.visibility = 'visible';
            document.getElementById("hangcounter").innerHTML = "2/10";
        }

        if(imagecount == 3)
        {
            hang3.style.visibility = 'visible';
            document.getElementById("hangcounter").innerHTML = "3/10";
        }

        if(imagecount == 4)
        {
            hang4.style.visibility = 'visible';
            document.getElementById("hangcounter").innerHTML = "4/10";
        }

        if(imagecount == 5)
        {
            hang5.style.visibility = 'visible';
            document.getElementById("hangcounter").innerHTML = "5/10";
        }

        if(imagecount == 6)
        {
            hang6.style.visibility = 'visible';
            document.getElementById("hangcounter").innerHTML = "6/10";
        }

        if(imagecount == 7)
        {
            hang7.style.visibility = 'visible';
            document.getElementById("hangcounter").innerHTML = "7/10";
        }

        if(imagecount == 8)
        {
            hang8.style.visibility = 'visible';
            document.getElementById("hangcounter").innerHTML = "8/10";
        }

        if(imagecount == 9)
        {
            hang9.style.visibility = 'visible';
            document.getElementById("hangcounter").innerHTML = "9/10";
        }

        if(imagecount == 10)
        {
            hang101.style.visibility = 'visible';
            hang102.style.visibility = 'visible';
            hang103.style.visibility = 'visible';
            hang104.style.visibility = 'visible';
            hang105.style.visibility = 'visible';
            alert('Unfortunately, you did not find the word. Please continue by pressing the "next" button that appeared at the bottom of the screen.');
            document.getElementById("hangcounter").innerHTML = "10/10";
            next();
        }

    }
}



//WORD SCRIPT --------------------------------------------------------------------------------------------
function word(){

    if(letter == correct1)
    {
        document.getElementById("l1").innerHTML = letter;
        l1correct = 1
    }

    if(letter == correct2)
    {
        document.getElementById("l2").innerHTML = letter;
        l2correct = 1
    }

    if(letter == correct3)
    {
        document.getElementById("l3").innerHTML = letter;
        l3correct = 1
    }

    if(l1correct+l2correct+l3correct+wordcorrect == 3)
    {
        console.log('You found the right word! Please continue by pressing the "next" button that appeared at the bottom of the screen.');

        wordcorrect = 1;
        $('form.form').submit();
        console.log('TEST');
        next();

    }
}


//MAKE NEXT BUTTON APPEAR ------------------------------------------------------------------------------------------
function next(){
    nextbutton.style.visibility ='visible'
    $('button[id^="button"]').prop('disabled', true);
    overlap.style.opacity = "0.1";

    document.getElementById("n_letters").value = imagecount;

    document.getElementById("n_right_letters").value = imagecount;
    document.getElementById("n_wrong_letters").value = imagecount;

    if(wordcorrect == 1)
    {
        document.getElementById("win").value = 1;

    }

    if(imagecount == 10)
    {
        document.getElementById("win").value = 0;
                alert(imagecount);
    }
}
