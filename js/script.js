// Mixing jQuery and Node.js code in the same file? Yes please!

$(function(){

    // Display some statistics about this computer, using node's os module.

    //var os = require('os');
    //var prettyBytes = require('pretty-bytes');
	var ceshi = '<span>关于进一步规范行业协会商会收费管理的意见(发改经体〔2017〕1999号)关于开展大中型灌区农业节水综合示范工作的指导意见(发改农经〔2017〕2029号)heheceshi</span>';
	
	rollingDisp(ceshi);
    //$('.stats').append('Number of cpu cores: <span>' + os.cpus().length + '</span>');
    //$('.stats').append('Free memory: <span>' + prettyBytes(os.freemem())+ '</span>'); 

    // The same-origin security policy doesn't apply to electron, so we can
    // send ajax request to other sites. Let's fetch Tutorialzine's rss feed:

    $.get('http://localhost:8080/api/goods', function(response){

        var rss = response;
		//rollingDisp(ceshi);
		if(rss.errCode === 0){
			//rollingDisp('<span>刷新等待中</span>');
			rollingDisp(ceshi);
		}else if(rss.errCode != 0){
			rollingDisp('<span>刷新等待中</span>');
		}
        // Find all articles in the RSS feed:

        /*rss.find('item').each(function(){
            var item = $(this);
            
            var content = item.find('encoded').html().split('</a></div>')[0]+'</a></div>';
            var urlRegex = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/g;

            // Fetch the first image of the article.
            var imageSource = content.match(urlRegex)[1];


            // Create a li item for every article, and append it to the unordered list.

            var li = $('<li><img /><a target="_blank"></a></li>');

            li.find('a')
                .attr('href', item.find('link').text())
                .text(item.find("title").text());

            li.find('img').attr('src', imageSource);

            li.appendTo(ul);

        });*/


    });

});

function rollingDisp(content,mode) {
	var speed=10;
	var tab=document.getElementById("demo");
	var tab1=document.getElementById("demo1");
	var tab2=document.getElementById("demo2");

	$('#demo1').html(content);
	$('.wrapper').css({ 
		width: $('#demo1').width() * 2 + 100
	});
	if($('#demo1').width() <  document.body.clientWidth) {
		$("#indemo").css({ 
			width: "100%"
		});
		$("#demo1").css({ 
			width: "100%"
		});
	}else{
		tab2.innerHTML=tab1.innerHTML;
		$("#indemo").css({ 
			width: "800%"
		});
	}
	function Marquee(){
		if(tab2.offsetWidth-tab.scrollLeft<=0)
			tab.scrollLeft-=tab2.offsetWidth;
		else{
			tab.scrollLeft++;
		}
	}
	var MyMar=setInterval(Marquee,speed);
	$("#demo").css({ 
		position: "absolute", 
		//left: ($(window).width() - $("#demo").outerWidth())/2, 
		top: ($(window).height() - $("#demo").outerHeight())/2 
	}); 
    // Electron's UI library. We will need it for later.

	$(window).resize(function(){ 
		$("#demo").css({ 
			position: "absolute", 
			//left: ($(window).width() - $("#demo").outerWidth())/2, 
			top: ($(window).height() - $("#demo").outerHeight())/2 
		});        
	});
}