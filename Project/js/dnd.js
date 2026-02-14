//<![CDATA[
$(window).load(function(){

"use strict";
var left = '';
var right = '';
var variable = '';
var relate = '';

$('#a').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  e.originalEvent.dataTransfer.setData('Text', '#a');
  variable = 'Teala';
});

$('#b').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  e.originalEvent.dataTransfer.setData('Text', '#b');
  variable = 'Eshelia';
});

$('#c').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  e.originalEvent.dataTransfer.setData('Text', '#c');
  variable = 'Kwele';
});

$('#d').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  e.originalEvent.dataTransfer.setData('Text', '#d');
  variable = 'Kali';
});

$('#e').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  e.originalEvent.dataTransfer.setData('Text', '#e');
  variable = 'Pyara';
});

$('#f').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  e.originalEvent.dataTransfer.setData('Text', '#f');
  variable = 'Mahana';
});

$('#g').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  e.originalEvent.dataTransfer.setData('Text', '#g');
  variable = 'Rayen';
});

$('#h').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  e.originalEvent.dataTransfer.setData('Text', '#h');
  variable = 'Aisu';
});

$('#i').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  e.originalEvent.dataTransfer.setData('Text', '#i');
  variable = 'Itami';
});

$('#j').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  e.originalEvent.dataTransfer.setData('Text', '#j');
  variable = 'Shini';
});

$('#k').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  e.originalEvent.dataTransfer.setData('Text', '#k');
  variable = 'Wentea';
});

$('#l').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  e.originalEvent.dataTransfer.setData('Text', '#l');
  variable = 'Kayre';
});

$('#m').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  e.originalEvent.dataTransfer.setData('Text', '#m');
  variable = 'Riasa';
});

$('#n').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  e.originalEvent.dataTransfer.setData('Text', '#n');
  variable = 'Daeon';
});

$('#o').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  e.originalEvent.dataTransfer.setData('Text', '#o');
  variable = 'Marate';
});

$('#p').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  e.originalEvent.dataTransfer.setData('Text', '#p');
  variable = 'F&uacute; c&igrave;';
});

$('#q').bind('dragstart', function(e) {
  e.originalEvent.dataTransfer.effectAllowed = 'copy';
  e.originalEvent.dataTransfer.setData('Text', '#q');
  variable = 'Amaranthine';
});

$('#drop-box1').bind('drop', function(e) {
  e.preventDefault();
  e.stopPropagation();
  left = variable;
  $('#drop1').html(left);
  $(this).html($(e.originalEvent.dataTransfer.getData('Text')).clone());
  drop();
  return false;
}).bind('dragover', false);

$('#drop-box2').bind('drop', function(e) {
  e.preventDefault();
  e.stopPropagation();
  right = variable;
  $('#drop2').html(right);
  $(this).html($(e.originalEvent.dataTransfer.getData('Text')).clone());
  drop();
  return false;
}).bind('dragover', false);

function drop() {
	switch (left) {
		  case 'Teala':
			 switch(right) {
				 case 'Teala':
				   relate = 'She rather likes herself.';
				   $('#result').html(relate);
				   break;
				 case 'Eshelia':
				   relate = 'Teala\'s best friend. When Teala\'s mother died, she moved into the massive Airist estate.';
				   $('#result').html(relate);
				   break;
				 case 'Kwele':
				   relate = 'Teala\'s other best friend';
				   $('#result').html(relate);
				   break;
				 case 'Kali':
				   relate = 'Teala likes Kali, but thinks she should lighten up. Later, she is desperate to make things right with Odisse.';
				   $('#result').html(relate);
				   break;
				 case 'Pyara':
				   relate = 'Teala thinks of Pyara as her oasis. Later, Pyara\'s death is a constant source of guilt for her.';
				   $('#result').html(relate);
				   break;
				 case 'Mahana':
				   relate = 'After seeing Pyara die, Teala is very protective of Mahana. She refuses to make the same mistake twice.';
				   $('#result').html(relate);
				   break;
				 case 'Rayen':
				   relate = 'Teala trusts Rayen.';
				   $('#result').html(relate);
				   break;
				 case 'Aisu':
				   relate = 'Teala trusts Aisu.';
				   $('#result').html(relate);
				   break;
				 case 'Itami':
				   relate = 'Teala has no feelings toward Itami.';
				   $('#result').html(relate);
				   break;
				 case 'Shini':
				   relate = 'Teala has no feelings toward Shini.';
				   $('#result').html(relate);
				   break;
				 case 'Wentea':
				   relate = 'Teala has no feelings toward Wentea.';
				   $('#result').html(relate);
				   break;
				 case 'Kayre':
				   relate = 'Teala has no feelings toward Kayre.';
				   $('#result').html(relate);
				   break;
				 case 'Riasa':
				   relate = ' Teala has affection for Riasa.';
				   $('#result').html(relate);
				   break;
				 case 'Daeon':
				   relate = 'Teala has complicated feelings toward Daeon. She finds him an interesting person, but she has a problem with his business practices.';
				   $('#result').html(relate);
				   break;
				 case 'Marate':
				   relate = 'Teala loathes Marate.';
				   $('#result').html(relate);
				   break;
				 case 'F&uacute; c&igrave;':
				   relate = 'Teala has a bit of a blind spot towards F&uacute; c&igrave;. Later on, she finds fighting Zh&ograve;u-ch&uacute;n difficult.';
				   $('#result').html(relate);
				   break;
				 case 'Amaranthine':
				   relate = 'Teala misses her little sister.';
				   $('#result').html(relate);
				   break;
				 default:
				   relate = '';
				   $('#result').html(relate);
				   break;
			 }
		  break;
		  case 'Eshelia':
			 switch(right) {
				 case 'Teala':
				   relate = 'Eshelia\'s best friend. She considers Teala a rival in a friendly way.';
				   $('#result').html(relate);
				   break;
				 case 'Eshelia':
				   relate = 'She rather likes herself.';
				   $('#result').html(relate);
				   break;
				 case 'Kwele':
				   relate = 'Eshelia\'s annoying friend. She likes Kwele best at a distance and when she can\'t hear her.';
				   $('#result').html(relate);
				   break;
				 case 'Kali':
				   relate = 'Eshelia respects Kali for her devotion to Pyara. Later, she tries to avoid Odisse.';
				   $('#result').html(relate);
				   break;
				 case 'Pyara':
				   relate = 'Eshelia envies Pyara. Pyara is the lighthearted peacemaker that Eshelia wishes she could be.';
				   $('#result').html(relate);
				   break;
				 case 'Mahana':
				   relate = 'Because of Pyara, Eshelia is extra protective of Mahana.';
				   $('#result').html(relate);
				   break;
				 case 'Rayen':
				   relate = 'Eshelia likes Rayen.';
				   $('#result').html(relate);
				   break;
				 case 'Aisu':
				   relate = 'Eshelia likes Aisu.';
				   $('#result').html(relate);
				   break;
				 case 'Itami':
				   relate = 'Eshelia hates Itami.';
				   $('#result').html(relate);
				   break;
				 case 'Shini':
				   relate = 'Eshelia hates Shini.';
				   $('#result').html(relate);
				   break;
				 case 'Wentea':
				   relate = 'Eshelia hates Wentea.';
				   $('#result').html(relate);
				   break;
				 case 'Kayre':
				   relate = 'Eshelia hates Kayre.';
				   $('#result').html(relate);
				   break;
				 case 'Riasa':
				   relate = 'Eshelia hates Riasa.';
				   $('#result').html(relate);
				   break;
				 case 'Daeon':
				   relate = 'Eshelia was instrumental in the vast majority of the hardships Daeon has experienced in life. They don\'t get along.';
				   $('#result').html(relate);
				   break;
				 case 'Marate':
				   relate = 'Eshelia wants to face Marate so Teala doesn\'t have to.';
				   $('#result').html(relate);
				   break;
				 case 'F&uacute; c&igrave;':
				   relate = 'Eshelia adores F&uacute; c&igrave;. Seeing Zh&ograve;u-ch&uacute;n\'s empty, broken expression breaks Eshelia\'s heart.';
				   $('#result').html(relate);
				   break;
				 case 'Amaranthine':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 default:
				   relate = '';
				   $('#result').html(relate);
				   break;
			 }
		  break;
		  case 'Kwele':
			 switch(right) {
				 case 'Teala':
				   relate = 'Kwele idolizes Teala. She moved to Sege partially to meet her.';
				   $('#result').html(relate);
				   break;
				 case 'Eshelia':
				   relate = 'Kwele intentionally antagonizes Eshelia. She\'s a bit of a brat.';
				   $('#result').html(relate);
				   break;
				 case 'Kwele':
				   relate = 'She rather likes herself.';
				   $('#result').html(relate);
				   break;				   
				 case 'Kali':
				   relate = 'Kwele is close to Kali. She rarely interacts with Odisse.';
				   $('#result').html(relate);
				   break;
				 case 'Pyara':
				   relate = 'Kwele and Pyara are super BFF\'s. They always looking for fun. ';
				   $('#result').html(relate);
				   break;
				 case 'Mahana':
				   relate = 'Kwele seems to not fully know what happened to Pyara, but she treasures Mahana because of her. ';
				   $('#result').html(relate);
				   break;
				 case 'Rayen':
				   relate = 'Kwele likes Rayen, but she makes life difficult for Kwele.';
				   $('#result').html(relate);
				   break;
				 case 'Aisu':
				   relate = 'Kwele like Aisu because she\'s easy to mess with. Fortunately, Aisu doesn\'t hold grudges.';
				   $('#result').html(relate);
				   break;
				 case 'Itami':
				   relate = 'Kwele doesn\'t mind Itami. ';
				   $('#result').html(relate);
				   break;
				 case 'Shini':
				   relate = 'Kwele doesn\'t mind Shini. ';
				   $('#result').html(relate);
				   break;
				 case 'Wentea':
				   relate = 'Kwele moved to Sege specifically to find Wentea, her older sister.';
				   $('#result').html(relate);
				   break;
				 case 'Kayre':
				   relate = 'Kwele doesn\'t mind Kayre. ';
				   $('#result').html(relate);
				   break;
				 case 'Riasa':
				   relate = 'After Pyara died, Riasa and Kwele became best friends.';
				   $('#result').html(relate);
				   break;
				 case 'Daeon':
				   relate = 'Kwele doesn\'t mind Daeon.';
				   $('#result').html(relate);
				   break;
				 case 'Marate':
				   relate = 'Kwele is very interested in Marate. ';
				   $('#result').html(relate);
				   break;
				 case 'F&uacute; c&igrave;':
				   relate = 'Kwele love love <b>loves</b> F&uacute; c&igrave;. Unfortunately for Zh&ograve;u-ch&uacute;n, those feelings don\'t go away.';
				   $('#result').html(relate);
				   break;
				 case 'Amaranthine':
				   relate = 'They\'ve never met. ';
				   $('#result').html(relate);
				   break;
				 default:
				   relate = '';
				   $('#result').html(relate);
				   break;
			 }
		  break;
		  case 'Kali':
			 switch(right) {
				 case 'Teala':
				   relate = 'Kali trusts Teala. Later, Odisse hates Teala and blames her for Pyara\'s death.';
				   $('#result').html(relate);
				   break;
				 case 'Eshelia':
				   relate = 'Kali thinks Eshelia is dependable. After Pyara\'s death, she hates herself for ever thinking Eshelia was trustworthy.';
				   $('#result').html(relate);
				   break;
				 case 'Kwele':
				   relate = 'Kali and Kwele have a lot of affection for each other. Later, Odisse stays away from Kwele as much as possible, since she *knows* Kwele doesn\'t know what happened to Pyara.';
				   $('#result').html(relate);
				   break;
				 case 'Kali':
				   relate = 'She rather likes herself.';
				   $('#result').html(relate);
				   break;
				 case 'Pyara':
				   relate = 'Pyara is Kali\'s entire world. After they lost their parents, Kali grew up fast to take care of her sister. Her death destroyed Kali to the point that she had to leave the Airist estate and eventually led her to Marate and the Starlights. Shortly afterward, she took up the name Odisse and started on the path of revenge.';
				   $('#result').html(relate);
				   break;
				 case 'Mahana':
				   relate = 'Odisse thinks that Mahana is actually Pyara with memory loss. She\'s obsessed with her.';
				   $('#result').html(relate);
				   break;
				 case 'Rayen':
				   relate = 'Kali appreciates Rayen for her professionalism. Even after she loses Pyara, Kali still appreciates Rayen.';
				   $('#result').html(relate);
				   break;
				 case 'Aisu':
				   relate = 'Kali dislikes Aisu and thinks her irresponsible. Odisse blames her for not noticing the intruders that killed Pyara.';
				   $('#result').html(relate);
				   break;
				 case 'Itami':
				   relate = 'Odisse thinks Itami is an idiot.';
				   $('#result').html(relate);
				   break;
				 case 'Shini':
				   relate = 'Odisse thinks Shini is using her power to control Mahana. She\'s tried to quietly assassinate Shini more than once. ';
				   $('#result').html(relate);
				   break;
				 case 'Wentea':
				   relate = 'Odisse reluctantly trusts Wentea.';
				   $('#result').html(relate);
				   break;
				 case 'Kayre':
				   relate = 'Odisse finds Kayre annoying.';
				   $('#result').html(relate);
				   break;
				 case 'Riasa':
				   relate = 'Odisse thinks Riasa is a vapid airhead.';
				   $('#result').html(relate);
				   break;
				 case 'Daeon':
				   relate = 'Odisse reluctantly trusts Daeon, as Daeon is mostly responsible for her welfare.';
				   $('#result').html(relate);
				   break;
				 case 'Marate':
				   relate = 'Odisse thinks of Marate as a new father figure.';
				   $('#result').html(relate);
				   break;
				 case 'F&uacute; c&igrave;':
				   relate = 'Odisse sees a lot of herself in Zh&ograve;u-ch&uacute;n; and considers her an ally.';
				   $('#result').html(relate);
				   break;
				 case 'Amaranthine':
				   relate = 'Odisse and Amaranthine have a very tense relationship. She secretly wonders if killing Amy will hurt Teala.';
				   $('#result').html(relate);
				   break;
				 default:
				   relate = '';
				   $('#result').html(relate);
				   break;
			 }
		  break;
		  case 'Pyara':
			 switch(right) {
				 case 'Teala':
				   relate = 'Pyara sees Teala as a less controlling older sister.';
				   $('#result').html(relate);
				   break;
				 case 'Eshelia':
				   relate = 'Pyara think Eshelia is the most beautiful girl she\'s ever seen. She really wants to kidnap Eshelia and use her as a dress up doll. Eshelia remains blissfully unaware of this, though she has caught Pyara staring on occasion...';
				   $('#result').html(relate);
				   break;
				 case 'Kwele':
				   relate = 'Pyara and Kwele get along famously.';
				   $('#result').html(relate);
				   break;
				 case 'Kali':
				   relate = 'Pyara loves her big sister, but she finds her completely overbearing.';
				   $('#result').html(relate);
				   break;
				 case 'Pyara':
				   relate = 'She rather likes herself.';
				   $('#result').html(relate);
				   break;
				 case 'Mahana':
				   relate = 'They can\'t meet.';
				   $('#result').html(relate);
				   break;
				 case 'Rayen':
				   relate = 'Pyara avoids Rayen as much as possible. She doesn\'t want to do any work, something Rayen is eager to rectify.';
				   $('#result').html(relate);
				   break;
				 case 'Aisu':
				   relate = 'Pyara relates to Aisu on many levels. The most notable being that they both are complete airheads.';
				   $('#result').html(relate);
				   break;
				 case 'Itami':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Shini':
				   relate = 'Pyara met Shini exactly once.';
				   $('#result').html(relate);
				   break;
				 case 'Wentea':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Kayre':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Riasa':
				   relate = 'Pyara finds Riasa a threat, though she doesn\'t show it nor does she ever let anyone know about it.';
				   $('#result').html(relate);
				   break;
				 case 'Daeon':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Marate':
				   relate = 'They\'ve never <i>publically</i> met.';
				   $('#result').html(relate);
				   break;
				 case 'F&uacute; c&igrave;':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Amaranthine':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 default:
				   relate = '';
				   $('#result').html(relate);
				   break;
			 }
		  break;
		  case 'Mahana':
			 switch(right) {
				 case 'Teala':
				   relate = 'Mahana sees Teala as an overprotective big sister.';
				   $('#result').html(relate);
				   break;
				 case 'Eshelia':
				   relate = 'Mahana sees Eshelia as an overprotective mother. She also finds Eshelia incredibly beautiful.';
				   $('#result').html(relate);
				   break;
				 case 'Kwele':
				   relate = 'Mahana thinks that Kwele is too smothering, but she likes her all the same.';
				   $('#result').html(relate);
				   break;
				 case 'Kali':
				   relate = 'Odisse terrifies Mahana.';
				   $('#result').html(relate);
				   break;
				 case 'Pyara':
				   relate = 'They can\'t meet.';
				   $('#result').html(relate);
				   break;
				 case 'Mahana':
				   relate = 'She rather likes herself.';
				   $('#result').html(relate);
				   break;
				 case 'Rayen':
				   relate = 'Mahana likes Rayen the most out of the people staying at the Airist estate, as Rayen doesn\'t treat her like she\'s made of glass.';
				   $('#result').html(relate);
				   break;
				 case 'Aisu':
				   relate = 'Mahana and Aisu get along well enough, but they don\'t really have much in common.';
				   $('#result').html(relate);
				   break;
				 case 'Itami':
				   relate = 'Mahana has been actively following Itami\'s movements in hopes of finding Shini.';
				   $('#result').html(relate);
				   break;
				 case 'Shini':
				   relate = 'Mahana wants to kill Shini in the hope that that will break the vampirism curse.';
				   $('#result').html(relate);
				   break;
				 case 'Wentea':
				   relate = 'Mahana idolizes Wentea. She wishes to be as stylish and graceful as the model one day. She has no clue that Kwele is related to Wentea.';
				   $('#result').html(relate);
				   break;
				 case 'Kayre':
				   relate = 'Mahana has no conflict with Kayre.';
				   $('#result').html(relate);
				   break;
				 case 'Riasa':
				   relate = 'Mahana has no conflict with Riasa, however as Riasa is a friend of Kwele\'s, Mahana tries to subtlely manipulate her into spilling info about Shini.';
				   $('#result').html(relate);
				   break;
				 case 'Daeon':
				   relate = 'Mahana has no conflict with Daeon.';
				   $('#result').html(relate);
				   break;
				 case 'Marate':
				   relate = 'Mahana doesn\'t know he exists.';
				   $('#result').html(relate);
				   break;
				 case 'F&uacute; c&igrave;':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Amaranthine':
				   relate = 'Mahana doesn\'t realize that she knows Amaranthine, as she never found out Amy\'s name when they met.';
				   $('#result').html(relate);
				   break;
				 default:
				   relate = '';
				   $('#result').html(relate);
				   break;
			 }
		  break;
		  case 'Rayen':
			 switch(right) {
				 case 'Teala':
				   relate = 'Rayen is secretly a massive Teala fangirl. No one has a clue.';
				   $('#result').html(relate);
				   break;
				 case 'Eshelia':
				   relate = 'Rayen has some jealous toward Eshelia. She wishes she could be as close to Teala as Eshelia is. No one has a clue.';
				   $('#result').html(relate);
				   break;
				 case 'Kwele':
				   relate = 'Rayen finds Kwele frustrating. Kwele tends to do things on her whimsy and a logically minded person like Rayen can\'t understand her.';
				   $('#result').html(relate);
				   break;
				 case 'Kali':
				   relate = 'Kali and Rayen have a mutual respect for each other. Even later on, Odisse and Kali still have that respect, though Rayen\'s is tinged with an undercurrent of fear.';
				   $('#result').html(relate);
				   break;
				 case 'Pyara':
				   relate = 'Rayen\'s biggest goal in life is to catch Pyara and make her work. It\'s a constant struggle.';
				   $('#result').html(relate);
				   break;
				 case 'Mahana':
				   relate = 'After what happened to Pyara, Rayen is especially nice to Mahana. Mahana doesn\'t realize that Rayen is treating her particularly well, which tells you plenty about how Rayen typically treats people.';
				   $('#result').html(relate);
				   break;
				 case 'Rayen':
				   relate = 'She rather likes herself.';
				   $('#result').html(relate);
				   break;
				 case 'Aisu':
				   relate = 'Rayen loves her airhead sister. Love doesn\'t always mean like.';
				   $('#result').html(relate);
				   break;
				 case 'Itami':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Shini':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Wentea':
				   relate = 'They\'ve never met, but Rayen is concerned with Aisu\'s fascination.';
				   $('#result').html(relate);
				   break;
				 case 'Kayre':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Riasa':
				   relate = 'Rayen knows Riasa. Riasa tends to try to avoid Rayen as much as possible.';
				   $('#result').html(relate);
				   break;
				 case 'Daeon':
				   relate = 'They\'ve never met, but she knows who he is.';
				   $('#result').html(relate);
				   break;
				 case 'Marate':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'F&uacute; c&igrave;':
				   relate = 'Rayen cares about F&uacute; c&igrave; greatly.';
				   $('#result').html(relate);
				   break;
				 case 'Amaranthine':
				   relate = 'Rayen knows precise where Amaranthine is, but she keeps it to herself to avoid Teala tracking her down.';
				   $('#result').html(relate);
				   break;
				 default:
				   relate = '';
				   $('#result').html(relate);
				   break;
			 }
		  break;
		  case 'Aisu':
			 switch(right) {
				 case 'Teala':
				   relate = 'Aisu and Teala get along well. Mainly because Aisu keeps Teala\'s cake addiction to herself.';
				   $('#result').html(relate);
				   break;
				 case 'Eshelia':
				   relate = 'Aisu and Eshelia get along well. Mainly because Aisu never says anything about all the times Eshelia goes to petting zoos and the massive stuff animal collection she hides in her room.';
				   $('#result').html(relate);
				   break;
				 case 'Kwele':
				   relate = 'Aisu likes Kwele, even though Kwele is always puling pranks on her. Aisu is pretty good natured.';
				   $('#result').html(relate);
				   break;
				 case 'Kali':
				   relate = 'Aisu likes Kali a lot. She\'s too dense to realize the feeling isn\'t mutual. Kali really hates that Aisu knows her secrets.';
				   $('#result').html(relate);
				   break;
				 case 'Pyara':
				   relate = 'Aisu and Pyara are close as sisters. Ironic since they both have actual sisters.';
				   $('#result').html(relate);
				   break;
				 case 'Mahana':
				   relate = 'Aisu and Mahana are friendly enough, but they don\'t interact much in real life. Neither knows about the others affection for Wentea. Both are members of her fan club and talk constantly online via alias. They\'ll be best friends if they ever figure it out.';
				   $('#result').html(relate);
				   break;
				 case 'Rayen':
				   relate = 'Aisu loves Rayen.';
				   $('#result').html(relate);
				   break;
				 case 'Aisu':
				   relate = 'She rather likes herself.';
				   $('#result').html(relate);
				   break;
				 case 'Itami':
				   relate = 'They\'ve never met, but Aisu is in her fan club.';
				   $('#result').html(relate);
				   break;
				 case 'Shini':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Wentea':
				   relate = 'Aisu is a massive fan of Wentea. If they met, she would probably faint. And by probably, I mean definitely.';
				   $('#result').html(relate);
				   break;
				 case 'Kayre':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Riasa':
				   relate = 'Aisu knows Riasa.';
				   $('#result').html(relate);
				   break;
				 case 'Daeon':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Marate':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'F&uacute; c&igrave;':
				   relate = 'Aisu spoils the heck out of F&uacute; c&igrave;. This does not change later on.';
				   $('#result').html(relate);
				   break;
				 case 'Amaranthine':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 default:
				   relate = '';
				   $('#result').html(relate);
				   break;
			 }
		  break;
		  case 'Itami':
			 switch(right) {
				 case 'Teala':
				   relate = 'Itami had no issue with Teala until she figured out how much wrong with her life is Teala\'s direct fault.';
				   $('#result').html(relate);
				   break;
				 case 'Eshelia':
				   relate = 'Itami initially blamed Eshelia for a lot of Teala\'s actions and though it was clarified later, the resentment remains.';
				   $('#result').html(relate);
				   break;
				 case 'Kwele':
				   relate = 'Itami had no issue with Kwele until she found out that the thief she was trying to find was Kwele.';
				   $('#result').html(relate);
				   break;
				 case 'Kali':
				   relate = 'Itami had no issue with Kali, but later she began to distrust Odisse.';
				   $('#result').html(relate);
				   break;
				 case 'Pyara':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Mahana':
				   relate = 'Itami does know that Mahana is looking for Shini, but doesn\'t know why. She aims to protect her little sister as best as she can.';
				   $('#result').html(relate);
				   break;
				 case 'Rayen':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Aisu':
				   relate = 'Itami knows of Aisu because of her fan club, but they\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Itami':
				   relate = 'She rather likes herself';
				   $('#result').html(relate);
				   break;
				 case 'Shini':
				   relate = 'While Itami tries to be the strong older sister, she always ends up relying on Shini as much as Shini relies on her.';
				   $('#result').html(relate);
				   break;
				 case 'Wentea':
				   relate = 'She\'s on friendly terms with Wentea.';
				   $('#result').html(relate);
				   break;
				 case 'Kayre':
				   relate = 'Itami keeps her facade up, but she is jealous of Kayre for easily accomplishing what she struggled and failed at.';
				   $('#result').html(relate);
				   break;
				 case 'Riasa':
				   relate = 'Itami think Riasa is a cutie, but they never interact much.';
				   $('#result').html(relate);
				   break;
				 case 'Daeon':
				   relate = 'Outside of the vested interest Day Enterpises has in Rainbow Star as their music label, Itami and Daeon don\'t interact much.';
				   $('#result').html(relate);
				   break;
				 case 'Marate':
				   relate = 'Itami has met Marate on a number of occasions, but she doesn\'t know why he\'s always so nice to her.';
				   $('#result').html(relate);
				   break;
				 case 'F&uacute; c&igrave;':
				   relate = 'Itami doesn\'t know F&uacute; c&igrave; exists.';
				   $('#result').html(relate);
				   break;
				 case 'Amaranthine':
				   relate = 'Itami has seen Amy in social circles, but they\'ve never spoke.';
				   $('#result').html(relate);
				   break;
				 default:
				   relate = '';
				   $('#result').html(relate);
				   break;
			 }
		  break;
		  case 'Shini':
			 switch(right) {
				 case 'Teala':
				   relate = 'Shini hates Teala with a vehement passion.';
				   $('#result').html(relate);
				   break;
				 case 'Eshelia':
				   relate = 'Shini hates Eshelia more than she hates Teala.';
				   $('#result').html(relate);
				   break;
				 case 'Kwele':
				   relate = 'Shini hates Kwele on principle.';
				   $('#result').html(relate);
				   break;
				 case 'Kali':
				   relate = 'Shini hates Kali for stealing her father\'s affection from her.';
				   $('#result').html(relate);
				   break;
				 case 'Pyara':
				   relate = 'Shini met Pyara exactly once.';
				   $('#result').html(relate);
				   break;
				 case 'Mahana':
				   relate = 'Shini thinks of Mahana as her plaything. She knows that Mahana is looking for her.';
				   $('#result').html(relate);
				   break;
				 case 'Rayen':
				   relate = 'She doesn\'t know who Rayen is.';
				   $('#result').html(relate);
				   break;
				 case 'Aisu':
				   relate = 'Shini doesn\'t know who Aisu is.';
				   $('#result').html(relate);
				   break;
				 case 'Itami':
				   relate = 'Shini loves Itami and is utterly loyal to her. Shini takes great pains to make sure Itami doesn\'t find out she\'s a vampire.';
				   $('#result').html(relate);
				   break;
				 case 'Shini':
				   relate = 'She rather likes herself.';
				   $('#result').html(relate);
				   break;
				 case 'Wentea':
				   relate = 'Shini hates Wentea for being everything she wishes she could be. Shini is a rather petty.';
				   $('#result').html(relate);
				   break;
				 case 'Kayre':
				   relate = 'Shini is apathetic to Kayre even though they interact often.';
				   $('#result').html(relate);
				   break;
				 case 'Riasa':
				   relate = 'Shini is apathetic to Riasa even though they interact often.';
				   $('#result').html(relate);
				   break;
				 case 'Daeon':
				   relate = 'Shini vaguely hates Daeon, but she\'s smart enough to not ruin the deal with the record label over it.';
				   $('#result').html(relate);
				   break;
				 case 'Marate':
				   relate = 'Shini hates Marate for abandoning Itami and her when they were children. Shini is one of the only people who knows Marate is their biological father.';
				   $('#result').html(relate);
				   break;
				 case 'F&uacute; c&igrave;':
				   relate = 'Shini has never met F&uacute; c&igrave;.';
				   $('#result').html(relate);
				   break;
				 case 'Amaranthine':
				   relate = 'Shini knows who Amaranthine is and she hates her for it.';
				   $('#result').html(relate);
				   break;
				 default:
				   relate = '';
				   $('#result').html(relate);
				   break;
			 }
		  break;
		  case 'Wentea':
			 switch(right) {
				 case 'Teala':
				   relate = 'Wentea doesn\'t care much about Teala.';
				   $('#result').html(relate);
				   break;
				 case 'Eshelia':
				   relate = 'Wentea doesn\'t care much about Eshelia.';
				   $('#result').html(relate);
				   break;
				 case 'Kwele':
				   relate = 'Wentea knows her little sister is looking for her. She has no intention of being found.';
				   $('#result').html(relate);
				   break;
				 case 'Kali':
				   relate = 'Wentea doesn\'t care much about Kali.';
				   $('#result').html(relate);
				   break;
				 case 'Pyara':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Mahana':
				   relate = 'Wentea doesn\'t know that she knows Mahana. She interacts with Mahana through her fan club.';
				   $('#result').html(relate);
				   break;
				 case 'Rayen':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Aisu':
				   relate = 'They\'ve never met. Aisu wouldn\'t be able to handle meeting her idol.';
				   $('#result').html(relate);
				   break;
				 case 'Itami':
				   relate = 'Itami and Wentea are on friendly terms.';
				   $('#result').html(relate);
				   break;
				 case 'Shini':
				   relate = 'Wentea knows Shini dislikes her. She has no idea why and she wants to fix it.';
				   $('#result').html(relate);
				   break;
				 case 'Wentea':
				   relate = 'She rather likes herself.';
				   $('#result').html(relate);
				   break;
				 case 'Kayre':
				   relate = 'Wentea doesn\'t even try to make friends with Kayre anymore.';
				   $('#result').html(relate);
				   break;
				 case 'Riasa':
				   relate = 'Wentea and Riasa get along pretty well as coworkers.';
				   $('#result').html(relate);
				   break;
				 case 'Daeon':
				   relate = 'Wentea owns a debt of gratituce for Daeon\'s support when she was starting out.';
				   $('#result').html(relate);
				   break;
				 case 'Marate':
				   relate = 'They\'ve met but never spoke for long. He unnerves her and she suspects that he knows her secret.';
				   $('#result').html(relate);
				   break;
				 case 'F&uacute; c&igrave;':
				   relate = 'Wentea thinks F&uacute; c&igrave; is adorable. Later she are one of the few people to be close to F&uacute; c&igrave;.';
				   $('#result').html(relate);
				   break;
				 case 'Amaranthine':
				   relate = 'Wentea and Amaranthine are very close.';
				   $('#result').html(relate);
				   break;
				 default:
				   relate = '';
				   $('#result').html(relate);
				   break;
			 }
		  break;
		  case 'Kayre':
			 switch(right) {
				 case 'Teala':
				   relate = 'Kayre wants to hurt Teala the way that she hurt Kayre.';
				   $('#result').html(relate);
				   break;
				 case 'Eshelia':
				   relate = 'Kayre also knows that Eshelia is the reason Teala was able to hurt Kayre and that Eshelia had something to do with her own parents\' deaths.';
				   $('#result').html(relate);
				   break;
				 case 'Kwele':
				   relate = 'Kayre sees no threat in Kwele.';
				   $('#result').html(relate);
				   break;
				 case 'Kali':
				   relate = 'Kayre is apathetic to Kali.';
				   $('#result').html(relate);
				   break;
				 case 'Pyara':
				   relate = 'Kayre is apathetic to Pyara.';
				   $('#result').html(relate);
				   break;
				 case 'Mahana':
				   relate = 'Kayre sees no threat in Mahana.';
				   $('#result').html(relate);
				   break;
				 case 'Rayen':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Aisu':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Itami':
				   relate = 'Kayre sees Itami as a friend and doesn\'t have an inkling of her resentment.';
				   $('#result').html(relate);
				   break;
				 case 'Shini':
				   relate = 'Kayre likes Shini, but in the way you like your friend\'s younger sibling.';
				   $('#result').html(relate);
				   break;
				 case 'Wentea':
				   relate = 'Kayre is apathetic to Wentea.';
				   $('#result').html(relate);
				   break;
				 case 'Kayre':
				   relate = 'Kayre is a nacissist.';
				   $('#result').html(relate);
				   break;
				 case 'Riasa':
				   relate = 'Riasa is the person Kayre is closest with. Kayre dotes on her like a little sister, though they share no familial connections.';
				   $('#result').html(relate);
				   break;
				 case 'Daeon':
				   relate = 'As Day Enterprises is responsible for Kayre\'s, and more importantly Riasa\'s, continued well being, Kayre feels a debt on gratitiude toward Daeon.';
				   $('#result').html(relate);
				   break;
				 case 'Marate':
				   relate = 'Kayre both respects and fears Marate.';
				   $('#result').html(relate);
				   break;
				 case 'F&uacute; c&igrave;':
				   relate = 'Other than Riasa, Zh&ograve;u-ch&uacute;n is the person Kayre likes most. The cuteness is a major factor.';
				   $('#result').html(relate);
				   break;
				 case 'Amaranthine':
				   relate = 'They\'ve met.';
				   $('#result').html(relate);
				   break;
				 default:
				   relate = '';
				   $('#result').html(relate);
				   break;
			 }
		  break;
		  case 'Riasa':
			 switch(right) {
				 case 'Teala':
				   relate = 'Riasa is aware of the things Blu has done and thinks she is bad, but she doesn\'t hate Teala.';
				   $('#result').html(relate);
				   break;
				 case 'Eshelia':
				   relate = 'Riasa also thinks Kystalin is a bad person, but she doesn\'t hate Eshelia.';
				   $('#result').html(relate);
				   break;
				 case 'Kwele':
				   relate = 'Riasa absolutely loves Kwele. She also thinks Soluvia is a terrible person.';
				   $('#result').html(relate);
				   break;
				 case 'Kali':
				   relate = 'Riasa has a lot of trouble getting along with Kali.';
				   $('#result').html(relate);
				   break;
				 case 'Pyara':
				   relate = 'Riasa is a bit wary of Pyara.';
				   $('#result').html(relate);
				   break;
				 case 'Mahana':
				   relate = 'Riasa would like to get along with Mahana.';
				   $('#result').html(relate);
				   break;
				 case 'Rayen':
				   relate = 'Rayen would like to avoid Rayen as much as possible.';
				   $('#result').html(relate);
				   break;
				 case 'Aisu':
				   relate = 'Rayen would like to get along with Aisu better than she already does.';
				   $('#result').html(relate);
				   break;
				 case 'Itami':
				   relate = 'Riasa likes that Itami is always nice to her.';
				   $('#result').html(relate);
				   break;
				 case 'Shini':
				   relate = 'Riasa wants to get along with Shini. Shini doesn\'t want to get along with Riasa.';
				   $('#result').html(relate);
				   break;
				 case 'Wentea':
				   relate = 'Riasa thinks Wentea is the prettiest person she ever met.';
				   $('#result').html(relate);
				   break;
				 case 'Kayre':
				   relate = 'Riasa knows that Kayre is wrapped around her finger and that\'s way she likes it.';
				   $('#result').html(relate);
				   break;
				 case 'Riasa':
				   relate = 'She rather likes herself.';
				   $('#result').html(relate);
				   break;
				 case 'Daeon':
				   relate = 'Daeon is responsible for Riasa\'s welfare. She greatly appreciates him because of it.';
				   $('#result').html(relate);
				   break;
				 case 'Marate':
				   relate = 'Riasa doesn\'t want to deal with Marate any more than she has to. She finds Marate completely terrifying.';
				   $('#result').html(relate);
				   break;
				 case 'F&uacute; c&igrave;':
				   relate = 'Riasa will absolute chase F&uacute; c&igrave; through the streets to cuddle her. F&uacute; c&igrave; will absolutely flee with all her might. Zh&ograve;u-ch&uacute;n doesn\'t get to avoid this fate.';
				   $('#result').html(relate);
				   break;
				 case 'Amaranthine':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 default:
				   relate = '';
				   $('#result').html(relate);
				   break;
			 }
		  break;
		  case 'Daeon':
			 switch(right) {
				 case 'Teala':
				   relate = 'Daeon has a complicated relationship with Teala. He\'s in love with her and he despises her.';
				   $('#result').html(relate);
				   break;
				 case 'Eshelia':
				   relate = 'Daeon is aware of Eshelia\'s machinations and how they have adversely effected his life. They don\'t get along.';
				   $('#result').html(relate);
				   break;
				 case 'Kwele':
				   relate = 'Daeon doesn\'t really know much about Kwele.';
				   $('#result').html(relate);
				   break;
				 case 'Kali':
				   relate = 'Daeon willfully manipulates life to interact with Kali as little as possible.';
				   $('#result').html(relate);
				   break;
				 case 'Pyara':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Mahana':
				   relate = 'Daeon doesn\'t have an issue with Mahana.';
				   $('#result').html(relate);
				   break;
				 case 'Rayen':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Aisu':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Itami':
				   relate = 'Daeon has a vested interest in Rainbow Star and as such, an interest in Itami.';
				   $('#result').html(relate);
				   break;
				 case 'Shini':
				   relate = 'Daeon has a vested interest in Rainbow Star and is aware of Shini\'s... unique personality.';
				   $('#result').html(relate);
				   break;
				 case 'Wentea':
				   relate = 'Daeon is close friends with Wentea, one of the few he allows himself to have. He helped Wentea when she was starting out.';
				   $('#result').html(relate);
				   break;
				 case 'Kayre':
				   relate = 'Day Enterprises funds Kayre\'s research and Daeon interacts with Kayre often. They aren\'t close.';
				   $('#result').html(relate);
				   break;
				 case 'Riasa':
				   relate = 'Day Enterprises funds Riasa\'s engineering pursuits and Daeon interacts with Riasa often. They aren\'t close.';
				   $('#result').html(relate);
				   break;
				 case 'Daeon':
				   relate = 'He rather likes himself.';
				   $('#result').html(relate);
				   break;
				 case 'Marate':
				   relate = 'Daeon has much respect for Marate.';
				   $('#result').html(relate);
				   break;
				 case 'F&uacute; c&igrave;':
				   relate = 'Daeon looked out for F&uacute; c&igrave; when she was in Marate\'s care.';
				   $('#result').html(relate);
				   break;
				 case 'Amaranthine':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 default:
				   relate = '';
				   $('#result').html(relate);
				   break;
			 }
		  break;
		  case 'Marate':
			 switch(right) {
				 case 'Teala':
				   relate = 'Marate knows Teala\'s intentions. He knows she wants to kill him. He pities his silly daughter.';
				   $('#result').html(relate);
				   break;
				 case 'Eshelia':
				   relate = 'Marate appreciates Eshelia\'s care for his daughter.';
				   $('#result').html(relate);
				   break;
				 case 'Kwele':
				   relate = 'Marate finds Kwele an intriguing mystery. He knows she\'s hiding something and is very interested in what it is.';
				   $('#result').html(relate);
				   break;
				 case 'Kali':
				   relate = 'Marate sees Odisse as a daughter surrogate. He enjoys how this drives his daughters to be better.';
				   $('#result').html(relate);
				   break;
				 case 'Pyara':
				   relate = 'Marate can tell that Pyara is the lynchpin on which the events of the future hang. He\'s met her, but only in private.';
				   $('#result').html(relate);
				   break;
				 case 'Mahana':
				   relate = 'Marate is well aware of Mahana.';
				   $('#result').html(relate);
				   break;
				 case 'Rayen':
				   relate = 'Marate appreciates Rayen\'s efforts to protect Teala.';
				   $('#result').html(relate);
				   break;
				 case 'Aisu':
				   relate = 'Marate occasionally uses Aisu as courier, but without her knowledge of his identity.';
				   $('#result').html(relate);
				   break;
				 case 'Itami':
				   relate = 'Marate dotes on his daughter. She has no idea why &#40;or that she <i>is</i> his daughter&#41;.';
				   $('#result').html(relate);
				   break;
				 case 'Shini':
				   relate = 'Marate understands that Shini hates him, but he doesn\'t regret abandoning the twins as children.';
				   $('#result').html(relate);
				   break;
				 case 'Wentea':
				   relate = 'Marate knows <i>exactly</i> who Wentea really is.';
				   $('#result').html(relate);
				   break;
				 case 'Kayre':
				   relate = 'Marate thinks Kayre is too soft. He does his best to push Kayre to be better.';
				   $('#result').html(relate);
				   break;
				 case 'Riasa':
				   relate = 'Marate uses Riasa to infiltrate Teala and her circle of friends. Riasa is completely unaware of this.';
				   $('#result').html(relate);
				   break;
				 case 'Daeon':
				   relate = 'Marate sees Daeon as the son he\'s never had.';
				   $('#result').html(relate);
				   break;
				 case 'Marate':
				   relate = 'Marate is a wholly self-actualized person.';
				   $('#result').html(relate);
				   break;
				 case 'F&uacute; c&igrave;':
				   relate = 'Marate knows F&uacute; c&igrave;\'s importance to the GCSC, so he takes her in after the Ti&#257;nsh&agrave;ng massacre. He is also responsible for Teala later taking her in, and after the GCSC tranforms her into Zh&ograve;u-ch&uacute;n, sets her up in the apartment she shares with Amy and Wendi.';
				   $('#result').html(relate);
				   break;
				 case 'Amaranthine':
				   relate = 'Marate has been keeping Amy\'s whereabouts and existence secret. Later, he moves in Zh&ograve;u-ch&uacute;n and Wendi to form a three man cell to counter Teala.';
				   $('#result').html(relate);
				   break;
				 default:
				   relate = '';
				   $('#result').html(relate);
			 }
		  break;
		  case 'F&uacute; c&igrave;':
			 switch(right) {
				 case 'Teala':
				   relate = 'Zh&ograve;u-ch&uacute;n eventually hates Teala when she finds out Teala\'s role in her loss.';
				   $('#result').html(relate);
				   break;
				 case 'Eshelia':
				   relate = 'F&uacute; c&igrave; likes Eshelia well enough.';
				   $('#result').html(relate);
				   break;
				 case 'Kwele':
				   relate = 'Both F&uacute; c&igrave; and Zh&ograve;u-ch&uacute;n tend to try to avoid the cuddle attacks Kwele brings. Neither are very successful.';
				   $('#result').html(relate);
				   break;
				 case 'Kali':
				   relate = 'Zh&ograve;u-ch&uacute;n and Odisse are close allies.';
				   $('#result').html(relate);
				   break;
				 case 'Pyara':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Mahana':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Rayen':
				   relate = 'F&uacute; c&igrave; trusts Rayen.';
				   $('#result').html(relate);
				   break;
				 case 'Aisu':
				   relate = 'F&uacute; c&igrave; enjoys that Aisu is always nice to her. Zh&ograve;u-ch&uacute;n still faintly feels appreciation toward her.';
				   $('#result').html(relate);
				   break;
				 case 'Itami':
				   relate = 'F&uacute; c&igrave; knows who Itami is';
				   $('#result').html(relate);
				   break;
				 case 'Shini':
				   relate = 'F&uacute; c&igrave; knows who Shini is';
				   $('#result').html(relate);
				   break;
				 case 'Wentea':
				   relate = 'F&uacute; c&igrave; likes Wentea a lot, but she doesn\'t let Aisu know that they\'ve met. Zh&ograve;u-ch&uacute;n still faintly has lingering affection.';
				   $('#result').html(relate);
				   break;
				 case 'Kayre':
				   relate = 'F&uacute; c&igrave; knows Kayre has affection for her. Ironically, F&uacute; c&igrave; has apathy for Kayre.';
				   $('#result').html(relate);
				   break;
				 case 'Riasa':
				   relate = 'F&uacute; c&igrave; will actively flee from Riasa. F&uacute; c&igrave; knows she\'s cute, but Riasa terrifies her. Zh&ograve;u-ch&uacute;n still has to deal with it.';
				   $('#result').html(relate);
				   break;
				 case 'Daeon':
				   relate = 'F&uacute; c&igrave; never paid much attention to Daeon.';
				   $('#result').html(relate);
				   break;
				 case 'Marate':
				   relate = 'F&uacute; c&igrave; loves Marate.';
				   $('#result').html(relate);
				   break;
				 case 'F&uacute; c&igrave;':
				   relate = 'She rather likes herself.';
				   $('#result').html(relate);
				   break;
				 case 'Amaranthine':
				   relate = 'F&uacute; c&igrave; is one of the few people who knows that Amy exists. Zh&ograve;u-ch&uacute;n is one of the few people who Amy considers a friend.';
				   $('#result').html(relate);
				   break;
				 default:
				   relate = '';
				   $('#result').html(relate);
				   break; 				  
			 }
		  break;
		  case 'Amaranthine':
			 switch(right) {
				 case 'Teala':
				   relate = 'Amy loves her big sister. Or rather, she enjoys frustrating Teala\'s ambitions.';
				   $('#result').html(relate);
				   break;
				 case 'Eshelia':
				   relate = 'Amy is one of the few people who can regularly outsmart Eshelia. The best part? Eshelia doesn\'t even know she exists.';
				   $('#result').html(relate);
				   break;
				 case 'Kwele':
				   relate = 'They haven\'t met.';
				   $('#result').html(relate);
				   break;
				 case 'Kali':
				   relate = 'Considering that Amy regularly torments Kali at every opportunity, it\'s understandable that Odisse doesn\'t like Amy every much.';
				   $('#result').html(relate);
				   break;
				 case 'Pyara':
				   relate = 'Pyara was already gone before Amy came out play.';
				   $('#result').html(relate);
				   break;
				 case 'Mahana':
				   relate = 'While Shini thinks Mahana is her plaything, but Amy knows Mahana is her plaything.';
				   $('#result').html(relate);
				   break;
				 case 'Rayen':
				   relate = 'Amy likes Rayen. Or rather, Amy likes that Rayen\'s loyalty to Teala will prevent her from outing Amy.';
				   $('#result').html(relate);
				   break;
				 case 'Aisu':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Itami':
				   relate = 'Amy navigates the same social circles as Itami and delights in staying just outside of Itami\'s grasp.';
				   $('#result').html(relate);
				   break;
				 case 'Shini':
				   relate = 'Amy delights in Shini\'s hatred. She knows why Shini hates her. And it makes her happy.';
				   $('#result').html(relate);
				   break;
				 case 'Wentea':
				   relate = 'Wentea is one of the few people that Amy gets along without and deception. They are very close friends.';
				   $('#result').html(relate);
				   break;
				 case 'Kayre':
				   relate = 'my completely unnerves Kayre. It\'s the creepy child act that does it.';
				   $('#result').html(relate);
				   break;
				 case 'Riasa':
				   relate = 'They\'ve never met and Amy plans to keep it that way.';
				   $('#result').html(relate);
				   break;
				 case 'Daeon':
				   relate = 'They\'ve never met.';
				   $('#result').html(relate);
				   break;
				 case 'Marate':
				   relate = 'Amy regularly abuses her father\'s indulgence. It\'s a wonder Marate even puts up with it.';
				   $('#result').html(relate);
				   break;
				 case 'F&uacute; c&igrave;':
				   relate = 'F&uacute; c&igrave; and Amy get along famously. Zh&ograve;u-ch&uacute;n is one of the only people who know Amy exists.';
				   $('#result').html(relate);
				   break;
				 case 'Amaranthine':
				   relate = 'Amy thinks she\'s adorable. Most people agree.';
				   $('#result').html(relate);
				   break;
				 default:
				   relate = '';
				   $('#result').html(relate);  
			 }
		  break;
		  default:
			 relate = '';
			 $('#result').html(relate);
	   }
}

});


//]]> 