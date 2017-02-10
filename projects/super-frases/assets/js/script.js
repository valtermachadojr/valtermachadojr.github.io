var currentQuote = '', currentAuthor = '';

function inIframe () { 
    try { return window.self !== window.top; } 
    catch (e) { return true; } 
}

function openURL(url){
    window.open(url, 'Compartilhando', 'width=550, height=400, toolbar=0, scrollbars=1,location=0,statusbar=0,menubar=0, resizable=0');
}

function animateContent(element, content, extra){
    $(element).animate({
        opacity: 0
    }, 500,
    function() {
        $(this).animate({
            opacity: 1
        }, 500);
        if (!extra){
            $(element).text(content);
        }else{
            if (extra=='#text'){
                $(extra).html(content);
            }else{
                $(element).css('background-image','url(assets/img/'+content+')');
            }
        }
    });
}

function getQuote() {
    $.ajax({
        url: 'frases.json',
        type:'GET',
        dataType: 'json',
        success: function(data){
            var index = Math.floor(Math.random() * data.length);
            currentQuote = data[index].quote;
            currentAuthor = data[index].author;
            var textContent = '<i class="fa fa-quote-left fa-flip-vertical"> </i>' + data[index].quote + '<i class="fa fa-quote-right"></i>'
            animateContent(".quote-text", textContent, '#text');
            animateContent("#author", "- "+data[index].author);
            animateContent("body", data[index].image, 'bg');
        },
        error:function(exception,textStatus,errorThrown ){
            console.log('Exception:',exception);
            console.log('textStatus:',textStatus);
            console.log('errorThrown:',errorThrown);
        }
  });
}

$(document).ready(function() {
    getQuote();
    $('#new-quote').on('click', function() { getQuote() });
    $('#tweet-quote').on('click', function() {
        if(!inIframe()) {
            openURL('https://twitter.com/intent/tweet?hashtags='+currentAuthor.replace(/ +/g, "")+',comics,superfrases&related=superfrases&text=' + encodeURIComponent('"' + currentQuote + '"'));
        }
    });
});