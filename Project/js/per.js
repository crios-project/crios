(function(){
  "use strict";
  var a = document.getElementById ("a");
  var b = document.getElementById ("b");
  var c = document.getElementById ("c");
  var d = document.getElementById ("d");
  var e = document.getElementById ("e");
  var f = document.getElementById ("f");
  var g = document.getElementById ("g");
  var h = document.getElementById ("h");
  var i = document.getElementById ("i");
  var j = document.getElementById ("j");
  var k = document.getElementById ("k");
  var l = document.getElementById ("l");
  var m = document.getElementById ("m");
  var n = document.getElementById ("n");
  var o = document.getElementById ("o");
  var p = document.getElementById ("p");
  var q = document.getElementById ("q");

  if (a.addEventListener) {
	  a.addEventListener ("drop", tea, false);
  }
  if (b.addEventListener) {
	  b.addEventListener ("drop", esh, false);
  }
  if (c.addEventListener) {
	  c.addEventListener ("drop", kwe, false);
  }
  if (d.addEventListener) {
	  d.addEventListener ("drop", kal, false);
  }
  if (e.addEventListener) {
	  e.addEventListener ("drop", pya, false);
  }
  if (f.addEventListener) {
	  f.addEventListener ("drop", mah, false);
  }
  if (g.addEventListener) {
	  g.addEventListener ("drop", ray, false);
  }
  if (h.addEventListener) {
	  h.addEventListener ("drop", ais, false);
  }
  if (i.addEventListener) {
	  i.addEventListener ("drop", ita, false);
  }
  if (j.addEventListener) {
	  j.addEventListener ("drop", shi, false);
  }
  if (k.addEventListener) {
	  k.addEventListener ("drop", wen, false);
  }
  if (l.addEventListener) {
	  l.addEventListener ("drop", kay, false);
  }
  if (m.addEventListener) {
	  m.addEventListener ("drop", ria, false);
  }
  if (n.addEventListener) {
	  n.addEventListener ("drop", dae, false);
  }
  if (o.addEventListener) {
	  o.addEventListener ("drop", mar, false);
  }
  if (p.addEventListener) {
	  p.addEventListener ("drop", fu, false);
  }
  if (q.addEventListener) {
	  q.addEventListener ("drop", amy, false);
  }
	
function tea() {
  document.getElementById("n1").innerHTML="Teala";
  var alttext = tea.getElementsByTagName('image')[0].getAttribute('alt');
  switch (alttext) {	  
	case tea:
	document.getElementById("n2").innerHTML="Teala";
	document.getElementById("desc").innerHTML="";
	break;
	
	case esh:
	document.getElementById("n2").innerHTML="Eshelia";
	document.getElementById("desc").innerHTML="Teala's best friend. When Teala's mother died, she moved into the massive Airist estate.";
	break;
	
	case kwe:
	document.getElementById("n2").innerHTML="Kwele";
	document.getElementById("desc").innerHTML="Teala's other best friend.";
	break;
	
	case kal:
	document.getElementById("n2").innerHTML="Kali";
	document.getElementById("desc").innerHTML="Teala likes Kali, but thinks she should lighten up. Later, she is desperate to make things right with her.";
	break;
	
	case pya:
	document.getElementById("n2").innerHTML="Pyara";
	document.getElementById("desc").innerHTML="Teala thinks of Pyara as her mental oasis; talking to her helps Teala decompress. Later, Pyara is a source of guilt for her.";
	break;
	
	case mah:
	document.getElementById("n2").innerHTML="Mahana";
	document.getElementById("desc").innerHTML="After what happened to the Dana sisters, Teala is very protective of Mahana.";
	break;
	
	case ray:
	document.getElementById("n2").innerHTML="Rayen";
	document.getElementById("desc").innerHTML="Teala trusts Rayen.";
	break;
	
	case ais:
	document.getElementById("n2").innerHTML="Aisu";
	document.getElementById("desc").innerHTML="Teala trusts Aisu.";
	break;
	
	case ita:
	document.getElementById("n2").innerHTML="Itami";
	document.getElementById("desc").innerHTML="Teala has no feelings toward Itami.";
	break;
	
	case shi:
	document.getElementById("n2").innerHTML="Shini";
	document.getElementById("desc").innerHTML="Teala has no feelings toward Shini.";
	break;
	
	case wen:
	document.getElementById("n2").innerHTML="Wentea";
	document.getElementById("desc").innerHTML="Teala has no feelings toward Wentea.";
	break;
	
	case kay:
	document.getElementById("n2").innerHTML="Kayre";
	document.getElementById("desc").innerHTML="Teala has no feelings toward Kayre.";
	break;
	
	case ria:
	document.getElementById("n2").innerHTML="Riasa";
	document.getElementById("desc").innerHTML="Teala has affection for Riasa.";
	break;
	
	case dae:
	document.getElementById("n2").innerHTML="Daeon";
	document.getElementById("desc").innerHTML="Teala has complicated feelings toward Daeon. She finds him an interesting person, but she has a problem with his business practices.";
	break;
	
	case mar:
	document.getElementById("n2").innerHTML="Marate";
	document.getElementById("desc").innerHTML="Teala loathes Marate.";
	break;
	
	case fu:
	document.getElementById("n2").innerHTML="F&uacute; c&igrave;";
	document.getElementById("desc").innerHTML="Teala has a bit of a blind spot towards F&uacute; c&igrave;. Later, she becomes Teala's biggest regret aside from Pyara. Teala eventually learns her role in the Ti&#257;nsh&agrave;ng massacre.";
	break;
	
	case amy:
	document.getElementById("n2").innerHTML="Amaranthine";
	document.getElementById("desc").innerHTML="Teala misses her little sister.";
	break;
	
	default:
	document.getElementById("n2").innerHTML="";
	document.getElementById("desc").innerHTML="";
	break;
  }
}

function esh() {
  document.getElementById("n1").innerHTML="Eshelia";  
  var alttext = esh.getElementsByTagName('image')[0].getAttribute('alt');
  switch (alttext) {	  
	case tea:
	document.getElementById("n2").innerHTML="Teala";
	document.getElementById("desc").innerHTML="";
	break;
	
	case esh:
	document.getElementById("n2").innerHTML="Eshelia";
	document.getElementById("desc").innerHTML="Eshelia's best friend. She considers Teala a rival in a friendly way.";
	break;
	
	case kwe:
	document.getElementById("n2").innerHTML="Kwele";
	document.getElementById("desc").innerHTML="Eshelia's annoying friend. She likes Kwele best at a distance and when she can't hear her.";
	break;
	
	case kal:
	document.getElementById("n2").innerHTML="Kali";
	document.getElementById("desc").innerHTML="Eshelia respects Kali for her devotion to Pyara. Later, she tries to avoid Kali.";
	break;
	
	case pya:
	document.getElementById("n2").innerHTML="Pyara";
	document.getElementById("desc").innerHTML="Eshelia envies Pyara. Pyara is the lighthearted peacemaker that Eshelia wishes she could be.";
	break;
	
	case mah:
	document.getElementById("n2").innerHTML="Mahana";
	document.getElementById("desc").innerHTML="Because of Pyara, Eshelia is protective of Mahana.";
	break;
	
	case ray:
	document.getElementById("n2").innerHTML="Rayen";
	document.getElementById("desc").innerHTML="Eshelia likes Rayen.";
	break;
	
	case ais:
	document.getElementById("n2").innerHTML="Aisu";
	document.getElementById("desc").innerHTML="Eshelia likes Aisu.";
	break;
	
	case ita:
	document.getElementById("n2").innerHTML="Itami";
	document.getElementById("desc").innerHTML="Eshelia hates Itami.";
	break;
	
	case shi:
	document.getElementById("n2").innerHTML="Shini";
	document.getElementById("desc").innerHTML="Eshelia hates Shini.";
	break;
	
	case wen:
	document.getElementById("n2").innerHTML="Wentea";
	document.getElementById("desc").innerHTML="Eshelia hates Wentea.";
	break;
	
	case kay:
	document.getElementById("n2").innerHTML="Kayre";
	document.getElementById("desc").innerHTML="Eshelia hates Kayre.";
	break;
	
	case ria:
	document.getElementById("n2").innerHTML="Riasa";
	document.getElementById("desc").innerHTML="Eshelia hates Riasa.";
	break;
	
	case dae:
	document.getElementById("n2").innerHTML="Daeon";
	document.getElementById("desc").innerHTML="Eshelia was instumental in the vast majority of the hardships Daeon has experienced in life. They don't get along.";
	break;
	
	case mar:
	document.getElementById("n2").innerHTML="Marate";
	document.getElementById("desc").innerHTML="Eshelia wants to face Marate so Teala doesn't have to.";
	break;
	
	case fu:
	document.getElementById("n2").innerHTML="F&uacute; c&igrave;";
	document.getElementById("desc").innerHTML="Eshelia adores F&uacute; c&igrave;.";
	break;
	
	case amy:
	document.getElementById("n2").innerHTML="Amaranthine";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	default:
	document.getElementById("n2").innerHTML="";
	document.getElementById("desc").innerHTML="";
	break;
  }
}

function kwe() {
  document.getElementById("n1").innerHTML="Teala";  
  var alttext = kwe.getElementsByTagName('image')[0].getAttribute('alt');
  switch (alttext) {	  
	case tea:
	document.getElementById("n2").innerHTML="Teala";
	document.getElementById("desc").innerHTML="Kwele idolizes Teala. She moved to Sege partially to meet her.";
	break;
	
	case esh:
	document.getElementById("n2").innerHTML="Eshelia";
	document.getElementById("desc").innerHTML="Kwele intentionally antagonizes Eshelia. She's a bit of a brat.";
	break;
	
	case kwe:
	document.getElementById("n2").innerHTML="Kwele";
	document.getElementById("desc").innerHTML="";
	break;
	
	case kal:
	document.getElementById("n2").innerHTML="Kali";
	document.getElementById("desc").innerHTML="Kwele is close to Kali.";
	break;
	
	case pya:
	document.getElementById("n2").innerHTML="Pyara";
	document.getElementById("desc").innerHTML="Kwele and Pyara are super BFF's. They love fun.";
	break;
	
	case mah:
	document.getElementById("n2").innerHTML="Mahana";
	document.getElementById("desc").innerHTML="Kwele doesn't fully know what happened to Pyara, but she treasures Mahana because of her.";
	break;
	
	case ray:
	document.getElementById("n2").innerHTML="Rayen";
	document.getElementById("desc").innerHTML="Kwele likes Rayen, but she makes life difficult.";
	break;
	
	case ais:
	document.getElementById("n2").innerHTML="Aisu";
	document.getElementById("desc").innerHTML="Kwele like Aisu because she's easy to mess with.";
	break;
	
	case ita:
	document.getElementById("n2").innerHTML="Itami";
	document.getElementById("desc").innerHTML="Kwele doesn't mind Itami. ";
	break;
	
	case shi:
	document.getElementById("n2").innerHTML="Shini";
	document.getElementById("desc").innerHTML="Kwele doesn't mind Shini.";
	break;
	
	case wen:
	document.getElementById("n2").innerHTML="Wentea";
	document.getElementById("desc").innerHTML="Kwele moved to Sege specifically to find Wentea, her older sister. ";
	break;
	
	case kay:
	document.getElementById("n2").innerHTML="Kayre";
	document.getElementById("desc").innerHTML="Kwele doesn't mind Kayre. ";
	break;
	
	case ria:
	document.getElementById("n2").innerHTML="Riasa";
	document.getElementById("desc").innerHTML="After Pyara was gone, Riasa and Kwele became best friends. ";
	break;
	
	case dae:
	document.getElementById("n2").innerHTML="Daeon";
	document.getElementById("desc").innerHTML="Kwele doesn't mind Daeon. ";
	break;
	
	case mar:
	document.getElementById("n2").innerHTML="Marate";
	document.getElementById("desc").innerHTML="Kwele is very interested in Marate. ";
	break;
	
	case fu:
	document.getElementById("n2").innerHTML="F&uacute; c&igrave;";
	document.getElementById("desc").innerHTML="Kwele love love loves F&uacute; c&igrave;.";
	break;
	
	case amy:
	document.getElementById("n2").innerHTML="Amaranthine";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	default:
	document.getElementById("n2").innerHTML="";
	document.getElementById("desc").innerHTML="";
	break;
  }
}

function kal() {
  document.getElementById("n1").innerHTML="Kali";  
  var alttext = kal.getElementsByTagName('image')[0].getAttribute('alt');
  switch (alttext) {	  
	case tea:
	document.getElementById("n2").innerHTML="Teala";
	document.getElementById("desc").innerHTML="Kali trusts Teala. Later, Kali hates Teala and blames her for Pyara.";
	break;
	
	case esh:
	document.getElementById("n2").innerHTML="Eshelia";
	document.getElementById("desc").innerHTML="Kali thinks Eshelia is dependable. Later, she hates herself for ever thinking Eshelia was trustworthy.";
	break;
	
	case kwe:
	document.getElementById("n2").innerHTML="Kwele";
	document.getElementById("desc").innerHTML="Kali and Kwele have a lot of affection for each other. Later, she stays away from Kwele as much as possible, since she knows Kwele doesn't know what happened to Pyara.";
	break;
	
	case kal:
	document.getElementById("n2").innerHTML="Kali";
	document.getElementById("desc").innerHTML="";
	break;
	
	case pya:
	document.getElementById("n2").innerHTML="Pyara";
	document.getElementById("desc").innerHTML="Pyara is Kali's whole world. After they lost their parents, Kali grew up fast to take care of her sister.";
	break;
	
	case mah:
	document.getElementById("n2").innerHTML="Mahana";
	document.getElementById("desc").innerHTML="Kali thinks that Mahana is actually Pyara with memory loss. She's obsessed with her.";
	break;
	
	case ray:
	document.getElementById("n2").innerHTML="Rayen";
	document.getElementById("desc").innerHTML="Kali appreciates Rayen for her professionalism. Even after Pyara, she still appreciates Rayen.";
	break;
	
	case ais:
	document.getElementById("n2").innerHTML="Aisu";
	document.getElementById("desc").innerHTML="Kali dislikes Aisu.";
	break;
	
	case ita:
	document.getElementById("n2").innerHTML="Itami";
	document.getElementById("desc").innerHTML="Kali thinks Itami is an idiot.";
	break;
	
	case shi:
	document.getElementById("n2").innerHTML="Shini";
	document.getElementById("desc").innerHTML="Kali thinks Shini is using her power to control Mahana.";
	break;
	
	case wen:
	document.getElementById("n2").innerHTML="Wentea";
	document.getElementById("desc").innerHTML="Kali reluctantly trusts Wentea.";
	break;
	
	case kay:
	document.getElementById("n2").innerHTML="Kayre";
	document.getElementById("desc").innerHTML="Kali finds Kayre annoying.";
	break;
	
	case ria:
	document.getElementById("n2").innerHTML="Riasa";
	document.getElementById("desc").innerHTML="Kali thinks Riasa is a vapid airhead.";
	break;
	
	case dae:
	document.getElementById("n2").innerHTML="Daeon";
	document.getElementById("desc").innerHTML="Kali reluctantly trusts Daeon.";
	break;
	
	case mar:
	document.getElementById("n2").innerHTML="Marate";
	document.getElementById("desc").innerHTML="Kali thinks of Marate as a new father figure.";
	break;
	
	case fu:
	document.getElementById("n2").innerHTML="F&uacute; c&igrave;";
	document.getElementById("desc").innerHTML="Kali sees a lot of herself in F&uacute; c&igrave; and considers her an ally.";
	break;
	
	case amy:
	document.getElementById("n2").innerHTML="Amaranthine";
	document.getElementById("desc").innerHTML="Kali and Amaranthine have a very tense relationship.";
	break;
	
	default:
	document.getElementById("n2").innerHTML="";
	document.getElementById("desc").innerHTML="";
	break;
  }
}

function pya() {
  document.getElementById("n1").innerHTML="Pyara";  
  var alttext = pya.getElementsByTagName('image')[0].getAttribute('alt');
  switch (alttext) {	  
	case tea:
	document.getElementById("n2").innerHTML="Teala";
	document.getElementById("desc").innerHTML="Pyara sees Teala as a less controlling older sister.";
	break;
	
	case esh:
	document.getElementById("n2").innerHTML="Eshelia";
	document.getElementById("desc").innerHTML="Pyara really wants to kidnap Eshelia and use her as a dress up doll.";
	break;
	
	case kwe:
	document.getElementById("n2").innerHTML="Kwele";
	document.getElementById("desc").innerHTML="Pyara and Kwele get along famously.";
	break;
	
	case kal:
	document.getElementById("n2").innerHTML="Kali";
	document.getElementById("desc").innerHTML="Pyara loves her sister, but she finds her overbearing.";
	break;
	
	case pya:
	document.getElementById("n2").innerHTML="Pyara";
	document.getElementById("desc").innerHTML="";
	break;
	
	case mah:
	document.getElementById("n2").innerHTML="Mahana";
	document.getElementById("desc").innerHTML="They can't meet.";
	break;
	
	case ray:
	document.getElementById("n2").innerHTML="Rayen";
	document.getElementById("desc").innerHTML="Pyara avoids Rayen as much as possible. She doesn't want to do any work, something Rayen is eager to rectify.";
	break;
	
	case ais:
	document.getElementById("n2").innerHTML="Aisu";
	document.getElementById("desc").innerHTML="Pyara relates to Aisu on many levels. The most notable being that they both are complete airheads.";
	break;
	
	case ita:
	document.getElementById("n2").innerHTML="Itami";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case shi:
	document.getElementById("n2").innerHTML="Shini";
	document.getElementById("desc").innerHTML="Pyara met Shini exactly once.";
	break;
	
	case wen:
	document.getElementById("n2").innerHTML="Wentea";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case kay:
	document.getElementById("n2").innerHTML="Kayre";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case ria:
	document.getElementById("n2").innerHTML="Riasa";
	document.getElementById("desc").innerHTML="Pyara finds Riasa a threat, though she doesn't show it.";
	break;
	
	case dae:
	document.getElementById("n2").innerHTML="Daeon";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case mar:
	document.getElementById("n2").innerHTML="Marate";
	document.getElementById("desc").innerHTML="They've never publically met.";
	break;
	
	case fu:
	document.getElementById("n2").innerHTML="F&uacute; c&igrave;";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case amy:
	document.getElementById("n2").innerHTML="Amaranthine";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	default:
	document.getElementById("n2").innerHTML="";
	document.getElementById("desc").innerHTML="";
	break;
  }
}

function mah() {
  document.getElementById("n1").innerHTML="Mahana";  
  var alttext = mah.getElementsByTagName('image')[0].getAttribute('alt');
  switch (alttext) {	  
	case tea:
	document.getElementById("n2").innerHTML="Teala";
	document.getElementById("desc").innerHTML="Mahana sees Teala as an overprotective big sister. ";
	break;
	
	case esh:
	document.getElementById("n2").innerHTML="Eshelia";
	document.getElementById("desc").innerHTML="Mahana sees Eshelia as an overprotective mother. ";
	break;
	
	case kwe:
	document.getElementById("n2").innerHTML="Kwele";
	document.getElementById("desc").innerHTML="Mahana thinks that Kwele is too smothering.";
	break;
	
	case kal:
	document.getElementById("n2").innerHTML="Kali";
	document.getElementById("desc").innerHTML="Kali terrifies Mahana.";
	break;
	
	case pya:
	document.getElementById("n2").innerHTML="Pyara";
	document.getElementById("desc").innerHTML="They can't meet.";
	break;
	
	case mah:
	document.getElementById("n2").innerHTML="Mahana";
	document.getElementById("desc").innerHTML="";
	break;
	
	case ray:
	document.getElementById("n2").innerHTML="Rayen";
	document.getElementById("desc").innerHTML="Mahana likes Rayen the most out of the people staying at the Airist estate, as Rayen doesn't treat her like she's made of glass.";
	break;
	
	case ais:
	document.getElementById("n2").innerHTML="Aisu";
	document.getElementById("desc").innerHTML="Mahana and Aisu get along well enough, but they don't really have much in common.";
	break;
	
	case ita:
	document.getElementById("n2").innerHTML="Itami";
	document.getElementById("desc").innerHTML="Mahana has been actively following Itami's movements in hopes of finding Shini. ";
	break;
	
	case shi:
	document.getElementById("n2").innerHTML="Shini";
	document.getElementById("desc").innerHTML="Mahana wants to kill Shini in the hope that that will break the vampire curse she suffers from. ";
	break;
	
	case wen:
	document.getElementById("n2").innerHTML="Wentea";
	document.getElementById("desc").innerHTML="Mahana idolizes Wentea. She wishes to be as stylish and graceful as the model one day. She has no clue that Kwele is related to Wentea.";
	break;
	
	case kay:
	document.getElementById("n2").innerHTML="Kayre";
	document.getElementById("desc").innerHTML="Mahana has no conflict with Kayre. ";
	break;
	
	case ria:
	document.getElementById("n2").innerHTML="Riasa";
	document.getElementById("desc").innerHTML="Mahana has no conflict with Riasa, however as Riasa is a friend of Kwele's, Mahana tries to force info about Shini from her. ";
	break;
	
	case dae:
	document.getElementById("n2").innerHTML="Daeon";
	document.getElementById("desc").innerHTML="Mahana has no conflict with Daeon. ";
	break;
	
	case mar:
	document.getElementById("n2").innerHTML="Marate";
	document.getElementById("desc").innerHTML="Mahana doesn't know he exists.";
	break;
	
	case fu:
	document.getElementById("n2").innerHTML="F&uacute; c&igrave;";
	document.getElementById("desc").innerHTML="They've never met. ";
	break;
	
	case amy:
	document.getElementById("n2").innerHTML="Amaranthine";
	document.getElementById("desc").innerHTML="Mahana doesn't realize that she knows Amaranthine, as she never found out Amy's name. ";
	break;
	
	default:
	document.getElementById("n2").innerHTML="";
	document.getElementById("desc").innerHTML="";
	break;
  }
}

function ray() {
  document.getElementById("n1").innerHTML="Rayen";  
  var alttext = ray.getElementsByTagName('image')[0].getAttribute('alt');
  switch (alttext) {	  
	case tea:
	document.getElementById("n2").innerHTML="Teala";
	document.getElementById("desc").innerHTML="Rayen is secretly a Teala fangirl.";
	break;
	
	case esh:
	document.getElementById("n2").innerHTML="Eshelia";
	document.getElementById("desc").innerHTML="Rayen has some jealous toward Eshelia. She wishes she could be as close to Teala as Eshelia is.";
	break;
	
	case kwe:
	document.getElementById("n2").innerHTML="Kwele";
	document.getElementById("desc").innerHTML="Rayen finds Kwele frustrating. Kwele tends to do things on her whimsy and a logical person like Rayen can't understand her.";
	break;
	
	case kal:
	document.getElementById("n2").innerHTML="Kali";
	document.getElementById("desc").innerHTML="Kali and Rayen have a mutual respect for each other. Even later on, they still have that respect, though Rayen's is tinged with an undercurrent of fear.";
	break;
	
	case pya:
	document.getElementById("n2").innerHTML="Pyara";
	document.getElementById("desc").innerHTML="Rayen's biggest goal in life is to catch Pyara and make her work. It's a constant battle.";
	break;
	
	case mah:
	document.getElementById("n2").innerHTML="Mahana";
	document.getElementById("desc").innerHTML="After what happened to Pyara, Rayen is especially nice to Mahana. Mahana doesn't realize that Rayen is treating her particularly well.";
	break;
	
	case ray:
	document.getElementById("n2").innerHTML="Rayen";
	document.getElementById("desc").innerHTML="";
	break;
	
	case ais:
	document.getElementById("n2").innerHTML="Aisu";
	document.getElementById("desc").innerHTML="Rayen loves her airhead sister. Love doesn't always mean like.";
	break;
	
	case ita:
	document.getElementById("n2").innerHTML="Itami";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case shi:
	document.getElementById("n2").innerHTML="Shini";
	document.getElementById("desc").innerHTML="They've never met";
	break;
	
	case wen:
	document.getElementById("n2").innerHTML="Wentea";
	document.getElementById("desc").innerHTML="They've never met, but Rayen is concerned with Aisu's fascination.";
	break;
	
	case kay:
	document.getElementById("n2").innerHTML="Kayre";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case ria:
	document.getElementById("n2").innerHTML="Riasa";
	document.getElementById("desc").innerHTML="Rayen knows Riasa. Riasa tends to try to avoid Rayen as much as possible.";
	break;
	
	case dae:
	document.getElementById("n2").innerHTML="Daeon";
	document.getElementById("desc").innerHTML="They've never met, but she know who he is.";
	break;
	
	case mar:
	document.getElementById("n2").innerHTML="Marate";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case fu:
	document.getElementById("n2").innerHTML="F&uacute; c&igrave;";
	document.getElementById("desc").innerHTML="Rayen cares about F&uacute; c&igrave;.";
	break;
	
	case amy:
	document.getElementById("n2").innerHTML="Amaranthine";
	document.getElementById("desc").innerHTML="Rayen knows where Amaranthine is, but she keeps it to herself to avoid Teala tracking her down.";
	break;
	
	default:
	document.getElementById("n2").innerHTML="";
	document.getElementById("desc").innerHTML="";
	break;
  }
}

function ais() {
  document.getElementById("n1").innerHTML="Aisu";  
  var alttext = ais.getElementsByTagName('image')[0].getAttribute('alt');
  switch (alttext) {	  
	case tea:
	document.getElementById("n2").innerHTML="Teala";
	document.getElementById("desc").innerHTML="Aisu and Teala get along well. Mainly because Aisu keeps Teala's cake addiction to herself.";
	break;
	
	case esh:
	document.getElementById("n2").innerHTML="Eshelia";
	document.getElementById("desc").innerHTML="Aisu and Eshelia get along well. Mainly because Aisu never says anything about all the times Eshelia goes to petting zoos and the massive stuff animal collection she hides in her room.";
	break;
	
	case kwe:
	document.getElementById("n2").innerHTML="Kwele";
	document.getElementById("desc").innerHTML="Aisu likes Kwele, even though Kwele is always puling pranks on her. Aisu is pretty good natured.";
	break;
	
	case kal:
	document.getElementById("n2").innerHTML="Kali";
	document.getElementById("desc").innerHTML="Aisu likes Kali a lot. She's too dense to realize the feeling isn't mutual.";
	break;
	
	case pya:
	document.getElementById("n2").innerHTML="Pyara";
	document.getElementById("desc").innerHTML="Aisu and Pyara are close as sisters. Ironic since they both have sisters.";
	break;
	
	case mah:
	document.getElementById("n2").innerHTML="Mahana";
	document.getElementById("desc").innerHTML="Aisu and Mahana are friendly enough, but they don't interact much in real life. Neither knows about the others affection for Wentea. Both are members of her fan club and talk constantly online via alias.";
	break;
	
	case ray:
	document.getElementById("n2").innerHTML="Rayen";
	document.getElementById("desc").innerHTML="Aisu loves Rayen.";
	break;
	
	case ais:
	document.getElementById("n2").innerHTML="Aisu";
	document.getElementById("desc").innerHTML="";
	break;
	
	case ita:
	document.getElementById("n2").innerHTML="Itami";
	document.getElementById("desc").innerHTML="They've never met, but Aisu is in her fan club.";
	break;
	
	case shi:
	document.getElementById("n2").innerHTML="Shini";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case wen:
	document.getElementById("n2").innerHTML="Wentea";
	document.getElementById("desc").innerHTML="Aisu is a massive fan of Wentea. If they met, she would probably faint.";
	break;
	
	case kay:
	document.getElementById("n2").innerHTML="Kayre";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case ria:
	document.getElementById("n2").innerHTML="Riasa";
	document.getElementById("desc").innerHTML="Aisu knows Riasa.";
	break;
	
	case dae:
	document.getElementById("n2").innerHTML="Daeon";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case mar:
	document.getElementById("n2").innerHTML="Marate";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case fu:
	document.getElementById("n2").innerHTML="F&uacute; c&igrave;";
	document.getElementById("desc").innerHTML="Aisu spoils the heck out of F&uacute; c&igrave;. This does not change later on.";
	break;
	
	case amy:
	document.getElementById("n2").innerHTML="Amaranthine";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	default:
	document.getElementById("n2").innerHTML="";
	document.getElementById("desc").innerHTML="";
	break;
  }
}

function ita() {
  document.getElementById("n1").innerHTML="Itami";  
  var alttext = ita.getElementsByTagName('image')[0].getAttribute('alt');
  switch (alttext) {	  
	case tea:
	document.getElementById("n2").innerHTML="Teala";
	document.getElementById("desc").innerHTML="Itami had no issue with Teala until she figured out how much wrong with her life is Teala's direct fault.";
	break;
	
	case esh:
	document.getElementById("n2").innerHTML="Eshelia";
	document.getElementById("desc").innerHTML="Itami initially blame Eshelia for a lot of Teala's actions and though it was clarified later, the resentment remains.";
	break;
	
	case kwe:
	document.getElementById("n2").innerHTML="Kwele";
	document.getElementById("desc").innerHTML="Itami had no issue with Kwele until she found out that the thief she was trying to find was Kwele. ";
	break;
	
	case kal:
	document.getElementById("n2").innerHTML="Kali";
	document.getElementById("desc").innerHTML="Itami had no issue with Kali, but later she began to distrust her. ";
	break;
	
	case pya:
	document.getElementById("n2").innerHTML="Pyara";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case mah:
	document.getElementById("n2").innerHTML="Mahana";
	document.getElementById("desc").innerHTML="Itami does know that Mahana is looking for Shini, but doesn't know why. She aims to protect her little sister as best as she can. ";
	break;
	
	case ray:
	document.getElementById("n2").innerHTML="Rayen";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case ais:
	document.getElementById("n2").innerHTML="Aisu";
	document.getElementById("desc").innerHTML="Itami knows of Aisu because of her fan club, but they've never met.";
	break;
	
	case ita:
	document.getElementById("n2").innerHTML="Itami";
	document.getElementById("desc").innerHTML="";
	break;
	
	case shi:
	document.getElementById("n2").innerHTML="Shini";
	document.getElementById("desc").innerHTML="While Itami tries to be the strong older sister, she relies on Shini as much as Shini relies on her.";
	break;
	
	case wen:
	document.getElementById("n2").innerHTML="Wentea";
	document.getElementById("desc").innerHTML="She's on friendly terms with Wentea. ";
	break;
	
	case kay:
	document.getElementById("n2").innerHTML="Kayre";
	document.getElementById("desc").innerHTML="Itami keeps her facade up, but she is jealous of Kayre for easily accomplishing what she struggled and failed at.";
	break;
	
	case ria:
	document.getElementById("n2").innerHTML="Riasa";
	document.getElementById("desc").innerHTML="Itami think Riasa is a cutie, but they never interact much. ";
	break;
	
	case dae:
	document.getElementById("n2").innerHTML="Daeon";
	document.getElementById("desc").innerHTML="Outside of the vested interest Day Enterpises has in Rainbow Star as their music label, Itami and Daeon don't interact much. ";
	break;
	
	case mar:
	document.getElementById("n2").innerHTML="Marate";
	document.getElementById("desc").innerHTML="Itami has met Marate on a number of occasions, but she doesn't know why he's always so nice to her. ";
	break;
	
	case fu:
	document.getElementById("n2").innerHTML="F&uacute; c&igrave;";
	document.getElementById("desc").innerHTML="Itami doesn't know F&uacute; c&igrave; exists.";
	break;
	
	case amy:
	document.getElementById("n2").innerHTML="Amaranthine";
	document.getElementById("desc").innerHTML="Itami has seen Amy in social circles, but they've never spoke. ";
	break;
	
	default:
	document.getElementById("n2").innerHTML="";
	document.getElementById("desc").innerHTML="";
	break;
  }
}

function shi() {
  document.getElementById("n1").innerHTML="Teala";  
  var alttext = shi.getElementsByTagName('image')[0].getAttribute('alt');
  switch (alttext) {	  
	case tea:
	document.getElementById("n2").innerHTML="Teala";
	document.getElementById("desc").innerHTML="Shini hates Teala with a vehement passion. ";
	break;
	
	case esh:
	document.getElementById("n2").innerHTML="Eshelia";
	document.getElementById("desc").innerHTML="Shini hates Eshelia more than she hates Teala. ";
	break;
	
	case kwe:
	document.getElementById("n2").innerHTML="Kwele";
	document.getElementById("desc").innerHTML="Shini hates Kwele on principle. ";
	break;
	
	case kal:
	document.getElementById("n2").innerHTML="Kali";
	document.getElementById("desc").innerHTML="Shini hates Kali for stealing her father's affection from her. ";
	break;
	
	case pya:
	document.getElementById("n2").innerHTML="Pyara";
	document.getElementById("desc").innerHTML="Shini met Pyara exactly once.";
	break;
	
	case mah:
	document.getElementById("n2").innerHTML="Mahana";
	document.getElementById("desc").innerHTML="Shini thinks of Mahana as her plaything. She knows that Mahana is looking for her. ";
	break;
	
	case ray:
	document.getElementById("n2").innerHTML="Rayen";
	document.getElementById("desc").innerHTML="She doesn't know who Rayen is.";
	break;
	
	case ais:
	document.getElementById("n2").innerHTML="Aisu";
	document.getElementById("desc").innerHTML="Shini doesn't know who Aisu is. ";
	break;
	
	case ita:
	document.getElementById("n2").innerHTML="Itami";
	document.getElementById("desc").innerHTML="Shini loves Itami and is utterly loyal to her. Shini takes great pains to make sure Itami doesn't find out she's a vampire. ";
	break;
	
	case shi:
	document.getElementById("n2").innerHTML="Shini";
	document.getElementById("desc").innerHTML="";
	break;
	
	case wen:
	document.getElementById("n2").innerHTML="Wentea";
	document.getElementById("desc").innerHTML="Shini hates Wentea for everything she wishes she could be. Shini is a little petty. ";
	break;
	
	case kay:
	document.getElementById("n2").innerHTML="Kayre";
	document.getElementById("desc").innerHTML="Shini is apathetic to Kayre even though they interact often. ";
	break;
	
	case ria:
	document.getElementById("n2").innerHTML="Riasa";
	document.getElementById("desc").innerHTML="Shini is apathetic to Riasa even though they interact often. ";
	break;
	
	case dae:
	document.getElementById("n2").innerHTML="Daeon";
	document.getElementById("desc").innerHTML="Shini vaguely hates Daeon, but she's smart enough to not ruin the deal with the record label over it. ";
	break;
	
	case mar:
	document.getElementById("n2").innerHTML="Marate";
	document.getElementById("desc").innerHTML="Shini hates Marate for abandoning Itami and her when they were children. Shini is one of the only people who knows Marate is their biological father. ";
	break;
	
	case fu:
	document.getElementById("n2").innerHTML="F&uacute; c&igrave;";
	document.getElementById("desc").innerHTML="Shini has never met F&uacute; c&igrave;.";
	break;
	
	case amy:
	document.getElementById("n2").innerHTML="Amaranthine";
	document.getElementById("desc").innerHTML="Shini knows who Amaranthine is and she rather hates her for it. ";
	break;
	
	default:
	document.getElementById("n2").innerHTML="";
	document.getElementById("desc").innerHTML="";
	break;
  }
}

function wen() {
  document.getElementById("n1").innerHTML="Wentea";  
  switch (wen) {	  
	case tea:
	document.getElementById("n2").innerHTML="Teala";
	document.getElementById("desc").innerHTML="Wentea doesn't care much about Teala.";
	break;
	
	case esh:
	document.getElementById("n2").innerHTML="Eshelia";
	document.getElementById("desc").innerHTML="Wentea doesn't care much about Eshelia.";
	break;
	
	case kwe:
	document.getElementById("n2").innerHTML="Kwele";
	document.getElementById("desc").innerHTML="Wentea knows her little sister is looking for her. She has no intention of being found.";
	break;
	
	case kal:
	document.getElementById("n2").innerHTML="Kali";
	document.getElementById("desc").innerHTML="Wentea doesn't care much about Kali.";
	break;
	
	case pya:
	document.getElementById("n2").innerHTML="Pyara";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case mah:
	document.getElementById("n2").innerHTML="Mahana";
	document.getElementById("desc").innerHTML="Wentea doesn't know that she knows Mahana. She interacts with Mahana through her fan club.";
	break;
	
	case ray:
	document.getElementById("n2").innerHTML="Rayen";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case ais:
	document.getElementById("n2").innerHTML="Aisu";
	document.getElementById("desc").innerHTML="They've never met. Aisu wouldn't be able to handle meeting her idol.";
	break;
	
	case ita:
	document.getElementById("n2").innerHTML="Itami";
	document.getElementById("desc").innerHTML="Itami and Wentea are on friendly terms.";
	break;
	
	case shi:
	document.getElementById("n2").innerHTML="Shini";
	document.getElementById("desc").innerHTML="Wentea knows Shini dislikes her. She has no idea why and she wants to fix it.";
	break;
	
	case wen:
	document.getElementById("n2").innerHTML="Wentea";
	document.getElementById("desc").innerHTML="";
	break;
	
	case kay:
	document.getElementById("n2").innerHTML="Kayre";
	document.getElementById("desc").innerHTML="Wentea doesn't even try to make friends with Kayre anymore.";
	break;
	
	case ria:
	document.getElementById("n2").innerHTML="Riasa";
	document.getElementById("desc").innerHTML="Wentea and Riasa get along pretty well as coworkers.";
	break;
	
	case dae:
	document.getElementById("n2").innerHTML="Daeon";
	document.getElementById("desc").innerHTML="Wentea owns a debt of gratituce for Daeon's support when she was starting out.";
	break;
	
	case mar:
	document.getElementById("n2").innerHTML="Marate";
	document.getElementById("desc").innerHTML="They've met but never spoke for long.";
	break;
	
	case fu:
	document.getElementById("n2").innerHTML="F&uacute; c&igrave;";
	document.getElementById("desc").innerHTML="Wentea thinks F&uacute; c&igrave; is adorable. Later she are one of the few people to be close to F&uacute; c&igrave;.";
	break;
	
	case amy:
	document.getElementById("n2").innerHTML="Amaranthine";
	document.getElementById("desc").innerHTML="Wentea and Amy are very close.";
	break;
	
	default:
	document.getElementById("n2").innerHTML="";
	document.getElementById("desc").innerHTML="";
	break;
  }
}

function kay() {
  document.getElementById("n1").innerHTML="Kayre";  
  var alttext = kay.getElementsByTagName('image')[0].getAttribute('alt');
  switch (alttext) {	  
	case tea:
	document.getElementById("n2").innerHTML="Teala";
	document.getElementById("desc").innerHTML="Kayre wants to hurt Teala the way that she hurt Kayre. ";
	break;
	
	case esh:
	document.getElementById("n2").innerHTML="Eshelia";
	document.getElementById("desc").innerHTML="Kayre also knows that Eshelia is the reason Teala was able to hurt Kayre and that Eshelia had something to do with her parents' death. ";
	break;
	
	case kwe:
	document.getElementById("n2").innerHTML="Kwele";
	document.getElementById("desc").innerHTML="Kayre sees no threat in Kwele. ";
	break;
	
	case kal:
	document.getElementById("n2").innerHTML="Kali";
	document.getElementById("desc").innerHTML="Kayre is apathetic to Kali. ";
	break;
	
	case pya:
	document.getElementById("n2").innerHTML="Pyara";
	document.getElementById("desc").innerHTML="Kayre is apathetic to Pyara. ";
	break;
	
	case mah:
	document.getElementById("n2").innerHTML="Mahana";
	document.getElementById("desc").innerHTML="Kayre sees no threat in Mahana. ";
	break;
	
	case ray:
	document.getElementById("n2").innerHTML="Rayen";
	document.getElementById("desc").innerHTML="They've never met. ";
	break;
	
	case ais:
	document.getElementById("n2").innerHTML="Aisu";
	document.getElementById("desc").innerHTML="They've never met. ";
	break;
	
	case ita:
	document.getElementById("n2").innerHTML="Itami";
	document.getElementById("desc").innerHTML="Kayre sees Itami as a friend and doesn't have an inkling of her resentment. ";
	break;
	
	case shi:
	document.getElementById("n2").innerHTML="Shini";
	document.getElementById("desc").innerHTML="Kayre likes Shini, but in the way you like your friend's younger sibling. ";
	break;
	
	case wen:
	document.getElementById("n2").innerHTML="Wentea";
	document.getElementById("desc").innerHTML="Kayre is apathetic to Wentea. ";
	break;
	
	case kay:
	document.getElementById("n2").innerHTML="Kayre";
	document.getElementById("desc").innerHTML="";
	break;
	
	case ria:
	document.getElementById("n2").innerHTML="Riasa";
	document.getElementById("desc").innerHTML="Riasa is the person Kayre is closest with. Kayre dotes on her like a little sister, though they share no familial connections. ";
	break;
	
	case dae:
	document.getElementById("n2").innerHTML="Daeon";
	document.getElementById("desc").innerHTML="As Day Enterprises is responsible for Kayre's, and more importantly Riasa's, continued well being, Kayre feels a debt on gratitiude toward Daeon. ";
	break;
	
	case mar:
	document.getElementById("n2").innerHTML="Marate";
	document.getElementById("desc").innerHTML="Kayre both respects and fears Marate. ";
	break;
	
	case fu:
	document.getElementById("n2").innerHTML="F&uacute; c&igrave;";
	document.getElementById("desc").innerHTML="Other than Riasa, F&uacute; c&igrave; is the person Kayre likes most. The cuteness is a major factor. ";
	break;
	
	case amy:
	document.getElementById("n2").innerHTML="Amaranthine";
	document.getElementById("desc").innerHTML="They've met.";
	break;
	
	default:
	document.getElementById("n2").innerHTML="";
	document.getElementById("desc").innerHTML="";
	break;
  }
}

function ria() {
  document.getElementById("n1").innerHTML="Teala";  
  var alttext = ria.getElementsByTagName('image')[0].getAttribute('alt');
  switch (alttext) {	  
	case tea:
	document.getElementById("n2").innerHTML="Teala";
	document.getElementById("desc").innerHTML="Riasa is aware of the things Teala has done and thinks she is bad, but she doesn't hate Teala. ";
	break;
	
	case esh:
	document.getElementById("n2").innerHTML="Eshelia";
	document.getElementById("desc").innerHTML="Riasa also thinks Eshelia is a bad person, but she doesn't hate Eshelia. ";
	break;
	
	case kwe:
	document.getElementById("n2").innerHTML="Kwele";
	document.getElementById("desc").innerHTML="Riasa absolutely loves Kwele. She also thinks she's a terrible person. ";
	break;
	
	case kal:
	document.getElementById("n2").innerHTML="Kali";
	document.getElementById("desc").innerHTML="Riasa has a lot of trouble getting along with Kali. ";
	break;
	
	case pya:
	document.getElementById("n2").innerHTML="Pyara";
	document.getElementById("desc").innerHTML="Riasa is a bit wary of Pyara. ";
	break;
	
	case mah:
	document.getElementById("n2").innerHTML="Mahana";
	document.getElementById("desc").innerHTML="Riasa would like to get along with Mahana. ";
	break;
	
	case ray:
	document.getElementById("n2").innerHTML="Rayen";
	document.getElementById("desc").innerHTML="Rayen would like to avoid Rayen as much as possible. ";
	break;
	
	case ais:
	document.getElementById("n2").innerHTML="Aisu";
	document.getElementById("desc").innerHTML="Rayen would like to get along with Aisu better than she already does.";
	break;
	
	case ita:
	document.getElementById("n2").innerHTML="Itami";
	document.getElementById("desc").innerHTML="Riasa likes that Itami is always nice to her.";
	break;
	
	case shi:
	document.getElementById("n2").innerHTML="Shini";
	document.getElementById("desc").innerHTML="Riasa wants to get along with Shini. Shini doesn't want to get along with Riasa.";
	break;
	
	case wen:
	document.getElementById("n2").innerHTML="Wentea";
	document.getElementById("desc").innerHTML="Riasa thinks Wentea is the prettiest person she ever met.";
	break;
	
	case kay:
	document.getElementById("n2").innerHTML="Kayre";
	document.getElementById("desc").innerHTML="Riasa knows that Kayre is wrapped around her finger. She prefers it that way.";
	break;
	
	case ria:
	document.getElementById("n2").innerHTML="Riasa";
	document.getElementById("desc").innerHTML=".";
	break;
	
	case dae:
	document.getElementById("n2").innerHTML="Daeon";
	document.getElementById("desc").innerHTML="Daeon is responsible for Riasa's welfare. She greatly appreciates him because of it.";
	break;
	
	case mar:
	document.getElementById("n2").innerHTML="Marate";
	document.getElementById("desc").innerHTML="Riasa doesn't want to deal with Marate any more than she has to. She finds Marate completely terrifying.";
	break;
	
	case fu:
	document.getElementById("n2").innerHTML="F&uacute; c&igrave;";
	document.getElementById("desc").innerHTML="Riasa will chase F&uacute; c&igrave; through the streets to cuddle her. F&uacute; c&igrave; will absolutely flee.";
	break;
	
	case amy:
	document.getElementById("n2").innerHTML="Amaranthine";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	default:
	document.getElementById("n2").innerHTML="";
	document.getElementById("desc").innerHTML="";
	break;
  }
}

function dae() {
  document.getElementById("n1").innerHTML="Teala";  
  var alttext = dae.getElementsByTagName('image')[0].getAttribute('alt');
  switch (alttext) {	  
	case tea:
	document.getElementById("n2").innerHTML="Teala";
	document.getElementById("desc").innerHTML="Daeon has a complicated relationship with Teala. He's in love with her and he despises her.";
	break;
	
	case esh:
	document.getElementById("n2").innerHTML="Eshelia";
	document.getElementById("desc").innerHTML="Daeon is aware of Eshelia's machinations and how they have adversely effected his life. They don't get along.";
	break;
	
	case kwe:
	document.getElementById("n2").innerHTML="Kwele";
	document.getElementById("desc").innerHTML="Daeon doesn't really know much about Kwele.";
	break;
	
	case kal:
	document.getElementById("n2").innerHTML="Kali";
	document.getElementById("desc").innerHTML="Daeon willfully manipulates life to interact with Kali as little as possible.";
	break;
	
	case pya:
	document.getElementById("n2").innerHTML="Pyara";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case mah:
	document.getElementById("n2").innerHTML="Mahana";
	document.getElementById("desc").innerHTML="Daeon doesn't have an issue with Mahana.";
	break;
	
	case ray:
	document.getElementById("n2").innerHTML="Rayen";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case ais:
	document.getElementById("n2").innerHTML="Aisu";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case ita:
	document.getElementById("n2").innerHTML="Itami";
	document.getElementById("desc").innerHTML="Daeon has a vested interest in Rainbow Star and as such, an interest in Itami.";
	break;
	
	case shi:
	document.getElementById("n2").innerHTML="Shini";
	document.getElementById("desc").innerHTML="Daeon has a vested interest in Rainbow Star and is aware of Shini's... unique personality.";
	break;
	
	case wen:
	document.getElementById("n2").innerHTML="Wentea";
	document.getElementById("desc").innerHTML="Daeon is close friends with Wentea, one of the few he allows himself to have. He helped Wentea when she was starting out.";
	break;
	
	case kay:
	document.getElementById("n2").innerHTML="Kayre";
	document.getElementById("desc").innerHTML="Day Enterprises funds Kayre's research and Daeon interacts with Kayre often. They aren't close.";
	break;
	
	case ria:
	document.getElementById("n2").innerHTML="Riasa";
	document.getElementById("desc").innerHTML="Day Enterprises funds Riasa's engineering pursuits and Daeon interacts with Riasa often. They aren't close.";
	break;
	
	case dae:
	document.getElementById("n2").innerHTML="Daeon";
	document.getElementById("desc").innerHTML="";
	break;
	
	case mar:
	document.getElementById("n2").innerHTML="Marate";
	document.getElementById("desc").innerHTML="Daeon has much respect for Marate.";
	break;
	
	case fu:
	document.getElementById("n2").innerHTML="F&uacute; c&igrave;";
	document.getElementById("desc").innerHTML="Daeon looked out for F&uacute; c&igrave; when she was in Marate's care.";
	break;
	
	case amy:
	document.getElementById("n2").innerHTML="Amaranthine";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	default:
	document.getElementById("n2").innerHTML="";
	document.getElementById("desc").innerHTML="";
	break;
  }
}

function mar() {
  document.getElementById("n1").innerHTML="Teala";  
  var alttext = mar.getElementsByTagName('image')[0].getAttribute('alt');
  switch (alttext) {	  
	case tea:
	document.getElementById("n2").innerHTML="Teala";
	document.getElementById("desc").innerHTML="Marate knows Teala's intentions. He knows she wants to kill him. He pities his silly daughter.";
	break;
	
	case esh:
	document.getElementById("n2").innerHTML="Eshelia";
	document.getElementById("desc").innerHTML="Marate appreciates Eshelia's care for his daughter.";
	break;
	
	case kwe:
	document.getElementById("n2").innerHTML="Kwele";
	document.getElementById("desc").innerHTML="Marate finds Kwele an intriguing mystery. He knows she's hiding something and is very interested in what it is.";
	break;
	
	case kal:
	document.getElementById("n2").innerHTML="Kali";
	document.getElementById("desc").innerHTML="Marate sees Kali as a daughter surrogate. He enjoys how this drives his daughters to be better.";
	break;
	
	case pya:
	document.getElementById("n2").innerHTML="Pyara";
	document.getElementById("desc").innerHTML="Marate can tell that Pyara is the lynchpin on which the events of the future hang. He's met her, but only in private.";
	break;
	
	case mah:
	document.getElementById("n2").innerHTML="Mahana";
	document.getElementById("desc").innerHTML="Marate is well aware of Mahana.";
	break;
	
	case ray:
	document.getElementById("n2").innerHTML="Rayen";
	document.getElementById("desc").innerHTML="Marate appreciates Rayen's efforts to protect Teala.";
	break;
	
	case ais:
	document.getElementById("n2").innerHTML="Aisu";
	document.getElementById("desc").innerHTML="Marate occasionally uses Aisu as courier, but without her knowledge of his identity.";
	break;
	
	case ita:
	document.getElementById("n2").innerHTML="Itami";
	document.getElementById("desc").innerHTML="Marate dotes on his daughter. She has no idea why &#40;or that she <i>is</i> his daughter&#41;.";
	break;
	
	case shi:
	document.getElementById("n2").innerHTML="Shini";
	document.getElementById("desc").innerHTML="Marate understands that Shini hates him. He doesn't regret abandoning the twins as children.";
	break;
	
	case wen:
	document.getElementById("n2").innerHTML="Wentea";
	document.getElementById("desc").innerHTML="Marate knows <i>exactly</i> who Wentea really is.";
	break;
	
	case kay:
	document.getElementById("n2").innerHTML="Kayre";
	document.getElementById("desc").innerHTML="Marate thinks Kayre is too soft. He does his best to push Kayre to be better.";
	break;
	
	case ria:
	document.getElementById("n2").innerHTML="Riasa";
	document.getElementById("desc").innerHTML="Marate uses Riasa as an unaware spy on Teala and her friends.";
	break;
	
	case dae:
	document.getElementById("n2").innerHTML="Daeon";
	document.getElementById("desc").innerHTML="Marate sees Daeon as the son he's never had.";
	break;
	
	case mar:
	document.getElementById("n2").innerHTML="Marate";
	document.getElementById("desc").innerHTML="";
	break;
	
	case fu:
	document.getElementById("n2").innerHTML="F&uacute; c&igrave;";
	document.getElementById("desc").innerHTML="Marate knows F&uacute; c&igrave;'s importance to the GCSC, so he takes her in after the Ti&#257;nsh&agrave;ng massacre. He is also responsible for Teala later taking her in.";
	break;
	
	case amy:
	document.getElementById("n2").innerHTML="Amaranthine";
	document.getElementById("desc").innerHTML="Marate has been keeping Amy's whereabouts and existence secret.";
	break;
	
	default:
	document.getElementById("n2").innerHTML="";
	document.getElementById("desc").innerHTML="";
	break;
  }
}

function fu() {
  document.getElementById("n1").innerHTML="F&uacute; c&igrave;";  
  var alttext = fu.getElementsByTagName('image')[0].getAttribute('alt');
  switch (alttext) {	  
	case tea:
	document.getElementById("n2").innerHTML="Teala";
	document.getElementById("desc").innerHTML="F&uacute; c&igrave; eventually hates Teala when she finds out Teala's role in her loss.";
	break;
	
	case esh:
	document.getElementById("n2").innerHTML="Eshelia";
	document.getElementById("desc").innerHTML="F&uacute; c&igrave; likes Eshelia well enough.";
	break;
	
	case kwe:
	document.getElementById("n2").innerHTML="Kwele";
	document.getElementById("desc").innerHTML="F&uacute; c&igrave; tends to avoid the cuddle attacks Kwele brings.";
	break;
	
	case kal:
	document.getElementById("n2").innerHTML="Kali";
	document.getElementById("desc").innerHTML="F&uacute; c&igrave; and Kali are close allies.";
	break;
	
	case pya:
	document.getElementById("n2").innerHTML="Pyara";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case mah:
	document.getElementById("n2").innerHTML="Mahana";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case ray:
	document.getElementById("n2").innerHTML="Rayen";
	document.getElementById("desc").innerHTML="F&uacute; c&igrave; trusts Rayen.";
	break;
	
	case ais:
	document.getElementById("n2").innerHTML="Aisu";
	document.getElementById("desc").innerHTML="F&uacute; c&igrave; enjoys that Aisu is always nice to her. Even later, she still faintly feels appreciation.";
	break;
	
	case ita:
	document.getElementById("n2").innerHTML="Itami";
	document.getElementById("desc").innerHTML="F&uacute; c&igrave; knows who Itami is.";
	break;
	
	case shi:
	document.getElementById("n2").innerHTML="Shini";
	document.getElementById("desc").innerHTML="F&uacute; c&igrave; knows who Shini is.";
	break;
	
	case wen:
	document.getElementById("n2").innerHTML="Wentea";
	document.getElementById("desc").innerHTML="F&uacute; c&igrave; likes Wentea a lot, but she doesn't let Aisu know that they've met. Later, she faintly has lingering affection. ";
	break;
	
	case kay:
	document.getElementById("n2").innerHTML="Kayre";
	document.getElementById("desc").innerHTML="F&uacute; c&igrave; knows Kayre has affection for her. Ironically, F&uacute; c&igrave; has apathy for Kayre.";
	break;
	
	case ria:
	document.getElementById("n2").innerHTML="Riasa";
	document.getElementById("desc").innerHTML="F&uacute; c&igrave; will actively flee from Riasa. F&uacute; c&igrave; knows she's cute, but Riasa terrifies her. This doesn't change later.";
	break;
	
	case dae:
	document.getElementById("n2").innerHTML="Daeon";
	document.getElementById("desc").innerHTML="Teala has complicated feelings toward Daeon. She finds him an interesting person, but she has a problem with his business practices.";
	break;
	
	case mar:
	document.getElementById("n2").innerHTML="Marate";
	document.getElementById("desc").innerHTML="Teala loathes Marate.";
	break;
	
	case fu:
	document.getElementById("n2").innerHTML="F&uacute; c&igrave;";
	document.getElementById("desc").innerHTML="";
	break;
	
	case amy:
	document.getElementById("n2").innerHTML="Amaranthine";
	document.getElementById("desc").innerHTML="F&uacute; c&igrave; is one of the few people who knows that Amy exists. F&uacute; c&igrave; is also one of the few people who Amy considers a friend.";
	break;
	
	default:
	document.getElementById("n2").innerHTML="";
	document.getElementById("desc").innerHTML="";
	break;
  }
}

function amy() {
  document.getElementById("n1").innerHTML="Amaranthine";  
  var alttext = amy.getElementsByTagName('image')[0].getAttribute('alt');
  switch (alttext) {	  
	case tea:
	document.getElementById("n2").innerHTML="Teala";
	document.getElementById("desc").innerHTML="Amy loves her big sister. Or rather, she enjoys frustrating Teala's ambitions. ";
	break;
	
	case esh:
	document.getElementById("n2").innerHTML="Eshelia";
	document.getElementById("desc").innerHTML="Amy is one of the few people who can regularly outsmart Eshelia. The best part? Eshelia doesn't even know she exists.";
	break;
	
	case kwe:
	document.getElementById("n2").innerHTML="Kwele";
	document.getElementById("desc").innerHTML="They haven't met.";
	break;
	
	case kal:
	document.getElementById("n2").innerHTML="Kali";
	document.getElementById("desc").innerHTML="Considering that Amy regularly torments Kali at every opportunity, it's understandable that Kali doesn't like Amy every much.";
	break;
	
	case pya:
	document.getElementById("n2").innerHTML="Pyara";
	document.getElementById("desc").innerHTML="Pyara was already gone before Amy came into play.";
	break;
	
	case mah:
	document.getElementById("n2").innerHTML="Mahana";
	document.getElementById("desc").innerHTML="Shini thinks Mahana is her plaything, but Amy knows Mahana is her plaything.";
	break;
	
	case ray:
	document.getElementById("n2").innerHTML="Rayen";
	document.getElementById("desc").innerHTML="Amy likes Rayen. Or r Rayen's loyalty to Teala will prevent her from outing Amy.";
	break;
	
	case ais:
	document.getElementById("n2").innerHTML="Aisu";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case ita:
	document.getElementById("n2").innerHTML="Itami";
	document.getElementById("desc").innerHTML="Amy navigates the same social circles as Itami and delights in staying just outside of Itami's grasp.";
	break;
	
	case shi:
	document.getElementById("n2").innerHTML="Shini";
	document.getElementById("desc").innerHTML="Amy delights in Shini's hatred. She knows why Shini hates her. And it makes her happy.";
	break;
	
	case wen:
	document.getElementById("n2").innerHTML="Wentea";
	document.getElementById("desc").innerHTML="Wentea is one of the few people that Amy gets along with unironically. They are very close friends.";
	break;
	
	case kay:
	document.getElementById("n2").innerHTML="Kayre";
	document.getElementById("desc").innerHTML="Amy completely unnerves Kayre. It's the creepy child act that does it.";
	break;
	
	case ria:
	document.getElementById("n2").innerHTML="Riasa";
	document.getElementById("desc").innerHTML="They've never met and Amy plans to keep it that way.";
	break;
	
	case dae:
	document.getElementById("n2").innerHTML="Daeon";
	document.getElementById("desc").innerHTML="They've never met.";
	break;
	
	case mar:
	document.getElementById("n2").innerHTML="Marate";
	document.getElementById("desc").innerHTML="Amy regularly abuses her father's indulgence. It's a wonder Marate even puts up with it.";
	break;
	
	case fu:
	document.getElementById("n2").innerHTML="F&uacute; c&igrave; Ti&#257;nsh&#257;ng";
	document.getElementById("desc").innerHTML="F&uacute; c&igrave; and Amy get along famously. F&uacute; c&igrave; is one of the only people who know Amy exists.";
	break;
	
	case amy:
	document.getElementById("n2").innerHTML="Amaranthine";
	document.getElementById("desc").innerHTML="";
	break;
	
	default:
	document.getElementById("n2").innerHTML="";
	document.getElementById("desc").innerHTML="";
	break;
  }
}

}());