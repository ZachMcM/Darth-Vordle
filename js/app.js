const _0x373609=_0x46dd;(function(_0x20e618,_0x22240c){const _0x40ff39=_0x46dd,_0x301c63=_0x20e618();while(!![]){try{const _0x55b291=-parseInt(_0x40ff39(0x115))/0x1*(-parseInt(_0x40ff39(0x11b))/0x2)+-parseInt(_0x40ff39(0xc3))/0x3+parseInt(_0x40ff39(0x10b))/0x4+parseInt(_0x40ff39(0xc5))/0x5+-parseInt(_0x40ff39(0xfb))/0x6*(parseInt(_0x40ff39(0x11f))/0x7)+parseInt(_0x40ff39(0x103))/0x8*(parseInt(_0x40ff39(0xd7))/0x9)+parseInt(_0x40ff39(0xff))/0xa*(parseInt(_0x40ff39(0xfa))/0xb);if(_0x55b291===_0x22240c)break;else _0x301c63['push'](_0x301c63['shift']());}catch(_0x439fa4){_0x301c63['push'](_0x301c63['shift']());}}}(_0x40ad,0x4c691));const searchContainer=document[_0x373609(0x105)]('.search-container'),searchInput=document['querySelector'](_0x373609(0xc8)),suggestionBox=document[_0x373609(0x105)](_0x373609(0x109)),nameContainer=document[_0x373609(0x105)](_0x373609(0xf6)),filmContainer=document[_0x373609(0x105)]('.data-box2'),homeworldContainer=document[_0x373609(0x105)](_0x373609(0xdd)),genderContainer=document['querySelector']('.data-box4'),speciesContainer=document['querySelector'](_0x373609(0xf1)),heightContainer=document['querySelector'](_0x373609(0xd0)),massContainer=document[_0x373609(0x105)](_0x373609(0x111)),guessBtn=document[_0x373609(0x105)](_0x373609(0xca)),htpBtn=document[_0x373609(0x105)](_0x373609(0xcd)),closeModalOne=document[_0x373609(0x105)](_0x373609(0xdc)),htpModal=document[_0x373609(0x105)]('#modal-one'),endModal=document[_0x373609(0x105)](_0x373609(0xee)),endHeader=document[_0x373609(0x105)](_0x373609(0xdb)),endMessage=document[_0x373609(0x105)]('.end-message'),characterImage=document[_0x373609(0x105)](_0x373609(0xed)),playAgainBtn=document[_0x373609(0x105)]('.play-again'),shareScoreBtn=document[_0x373609(0x105)](_0x373609(0xbf)),statsBtn=document[_0x373609(0x105)](_0x373609(0xe1)),statsModal=document['querySelector'](_0x373609(0xcb)),closeModalThree=document[_0x373609(0x105)](_0x373609(0xc6)),winPCT=document['querySelector'](_0x373609(0x116)),gamesPlayed=document[_0x373609(0x105)](_0x373609(0xe3)),statsShare=document['querySelector'](_0x373609(0x11c)),aboutBtn=document[_0x373609(0x105)](_0x373609(0x127)),aboutModal=document[_0x373609(0x105)](_0x373609(0xda)),closeModalFour=document[_0x373609(0x105)]('#close-modal-four'),characterDiv=document['querySelector'](_0x373609(0x121));let guessCharacter,mysteryIndex=Math['floor'](Math[_0x373609(0xf9)]()*0x53+0x1)-0x1,guessCounter=0x0,winStatus,numWins=0x0,numGames=0x0;window[_0x373609(0xdf)](_0x373609(0xe5),function(){const _0x2547f6=_0x373609,_0x58c51d=localStorage[_0x2547f6(0x124)]('Games\x20Played');if(_0x58c51d)return;else localStorage['setItem'](_0x2547f6(0xfd),'0'),localStorage[_0x2547f6(0xd3)](_0x2547f6(0xc7),'0');});function resetUI(){const _0x308a7a=_0x373609;while(nameContainer['firstChild']){nameContainer[_0x308a7a(0x123)](nameContainer[_0x308a7a(0x10a)]);}while(filmContainer[_0x308a7a(0x102)]){filmContainer[_0x308a7a(0x123)](filmContainer['lastChild']);}while(homeworldContainer[_0x308a7a(0x102)]){homeworldContainer['removeChild'](homeworldContainer[_0x308a7a(0x10a)]);}while(genderContainer[_0x308a7a(0x102)]){genderContainer['removeChild'](genderContainer[_0x308a7a(0x10a)]);}while(speciesContainer[_0x308a7a(0x102)]){speciesContainer[_0x308a7a(0x123)](speciesContainer[_0x308a7a(0x10a)]);}while(heightContainer[_0x308a7a(0x102)]){heightContainer[_0x308a7a(0x123)](heightContainer[_0x308a7a(0x10a)]);}while(massContainer[_0x308a7a(0x102)]){massContainer[_0x308a7a(0x123)](massContainer[_0x308a7a(0x10a)]);}}function updateStats(_0x3cdf1e){const _0x385dde=_0x373609,_0x55cb27=parseInt(localStorage[_0x385dde(0x124)](_0x385dde(0xfd)))+0x1;localStorage[_0x385dde(0xd3)](_0x385dde(0xfd),JSON[_0x385dde(0xf5)](_0x55cb27));if(_0x3cdf1e){const _0x371938=parseInt(localStorage[_0x385dde(0x124)](_0x385dde(0xc7)))+0x1;localStorage[_0x385dde(0xd3)](_0x385dde(0xc7),JSON[_0x385dde(0xf5)](_0x371938));}}window['addEventListener'](_0x373609(0xe5),function(){const _0x2697f4=_0x373609;htpModal['classList']['add'](_0x2697f4(0x107)),closeModalOne[_0x2697f4(0xdf)](_0x2697f4(0xd8),function(){const _0x3cfb37=_0x2697f4;htpModal[_0x3cfb37(0x10e)]['remove'](_0x3cfb37(0x107));}),window[_0x2697f4(0xdf)](_0x2697f4(0xd8),function(_0x466edd){const _0x292787=_0x2697f4;_0x466edd[_0x292787(0xf8)]==htpModal&&htpModal[_0x292787(0x10e)][_0x292787(0x101)](_0x292787(0x107));});}),htpBtn[_0x373609(0xdf)](_0x373609(0xd8),function(){const _0x58e3be=_0x373609;htpModal[_0x58e3be(0x10e)][_0x58e3be(0xe4)](_0x58e3be(0x107)),closeModalOne['addEventListener'](_0x58e3be(0xd8),function(){const _0x53dbf0=_0x58e3be;htpModal[_0x53dbf0(0x10e)][_0x53dbf0(0x101)]('active');}),window['addEventListener'](_0x58e3be(0xd8),function(_0x25e822){const _0x421215=_0x58e3be;_0x25e822[_0x421215(0xf8)]==htpModal&&htpModal[_0x421215(0x10e)][_0x421215(0x101)]('active');});}),statsBtn[_0x373609(0xdf)]('click',function(){const _0x3be704=_0x373609;let _0x4f96b2=localStorage['getItem'](_0x3be704(0xfd));gamesPlayed['innerText']=_0x4f96b2;let _0x566afc=Math[_0x3be704(0xf7)](parseInt(localStorage[_0x3be704(0x124)](_0x3be704(0xc7)))/parseInt(localStorage['getItem'](_0x3be704(0xfd)))*0x64)+'%';_0x4f96b2==0x0?winPCT[_0x3be704(0x119)]='0%':winPCT[_0x3be704(0x119)]=_0x566afc,statsModal['classList'][_0x3be704(0xe4)]('active'),closeModalThree[_0x3be704(0xdf)]('click',function(){const _0x5d1e07=_0x3be704;statsModal[_0x5d1e07(0x10e)][_0x5d1e07(0x101)](_0x5d1e07(0x107));}),window['addEventListener'](_0x3be704(0xd8),function(_0x6cb574){const _0x2b3835=_0x3be704;_0x6cb574[_0x2b3835(0xf8)]==statsModal&&statsModal['classList'][_0x2b3835(0x101)](_0x2b3835(0x107));}),statsShare[_0x3be704(0xdf)](_0x3be704(0xd8),function(){const _0x2327fb=_0x3be704;let _0x3f659d=_0x2327fb(0x125)+_0x566afc+_0x2327fb(0x122)+_0x4f96b2+'\x20games\x20played\x20on\x20Darth\x20Vordle!\x20Play\x20Darth\x20Vordle\x20at\x20darthvordle.com\x20today!';navigator[_0x2327fb(0xce)]['writeText'](_0x3f659d)[_0x2327fb(0xde)](function(){const _0x401b93=_0x2327fb;console[_0x401b93(0x120)]('stats\x20copied\x20to\x20clipboard'),alert('Your\x20stats\x20have\x20been\x20copied\x20to\x20your\x20clipboard!');});});}),aboutBtn[_0x373609(0xdf)](_0x373609(0xd8),function(){const _0x329ccb=_0x373609;aboutModal[_0x329ccb(0x10e)][_0x329ccb(0xe4)](_0x329ccb(0x107)),closeModalFour[_0x329ccb(0xdf)](_0x329ccb(0xd8),function(){const _0x1a8db8=_0x329ccb;aboutModal[_0x1a8db8(0x10e)][_0x1a8db8(0x101)](_0x1a8db8(0x107));}),window[_0x329ccb(0xdf)](_0x329ccb(0xd8),function(_0x1fa41c){const _0x5b6422=_0x329ccb;_0x1fa41c[_0x5b6422(0xf8)]==aboutModal&&aboutModal[_0x5b6422(0x10e)][_0x5b6422(0x101)](_0x5b6422(0x107));});}),searchInput[_0x373609(0x112)]=_0x16ce66=>{const _0x50cd45=_0x373609;let _0x37ae8a=_0x16ce66['target'][_0x50cd45(0xd6)],_0x566ec7=[];if(_0x37ae8a){_0x566ec7=nameList['filter'](_0x5dd3c3=>{const _0x2af8fc=_0x50cd45;return _0x5dd3c3['toLocaleLowerCase']()['startsWith'](_0x37ae8a[_0x2af8fc(0x108)]());}),_0x566ec7=_0x566ec7[_0x50cd45(0x114)](_0x1b2606=>{const _0x31fb8f=_0x50cd45;return _0x1b2606=_0x31fb8f(0x11d)+_0x1b2606+_0x31fb8f(0xe2);}),displaySuggestions(_0x566ec7),searchContainer[_0x50cd45(0x10e)]['add'](_0x50cd45(0x107));let _0x2bcaef=suggestionBox['querySelectorAll']('li');for(let _0x36600c=0x0;_0x36600c<_0x2bcaef[_0x50cd45(0x11e)];_0x36600c++){_0x2bcaef[_0x36600c]['setAttribute'](_0x50cd45(0xeb),_0x50cd45(0xfe));}}else searchContainer[_0x50cd45(0x10e)]['remove']('active');};function displaySuggestions(_0x3b6adc){const _0x522c2c=_0x373609;let _0x528e97;!_0x3b6adc['length']?(console['log'](_0x522c2c(0xea)),searchContainer[_0x522c2c(0x10e)][_0x522c2c(0x101)]('active'),userValue=searchInput[_0x522c2c(0xd6)],_0x528e97=_0x522c2c(0x11d)+userValue+_0x522c2c(0xe2)):_0x528e97=_0x3b6adc[_0x522c2c(0x106)](''),suggestionBox[_0x522c2c(0x100)]=_0x528e97;}function _0x40ad(){const _0x49f7e8=['join','active','toLocaleLowerCase','.suggestion-box','lastChild','79440bfPXdx','homeworld','\x20of\x208','classList','appendChild','style','.data-box7','onkeyup','div','map','1xRBSUz','.win-pct','&#x2193','gender','innerText','species','1058582wSVPkW','.share-stats','<li>','length','3457517NOaMVZ','log','.character-info','\x20win\x20percentage\x20with\x20','removeChild','getItem','I\x20have\x20a\x20','I\x20couldn\x27t\x20guess\x20the\x20mystery\x20character...\x20','.about-btn','#06e606','.share-score','The\x20mystery\x20character\x20was...\x20','name','#FFE81F','1192746DVJbFj','createTextNode','1061650JNbkrd','#close-modal-three','Times\x20Won','.guess-input','placeholder','.guess-btn','#modal-three','images/','.question','clipboard','height','.data-box6','\x20in\x20','mass','setItem','Enter\x20Guess\x20','textContent','value','723933aKERbU','click','writeText','#modal-four','.end-header','#close-modal-one','.data-box3','then','addEventListener','films','.stats-btn','</li>','.num-games-played','add','DOMContentLoaded','src','Your\x20score\x20has\x20been\x20copied\x20to\x20your\x20clipboard!','color','Enter\x20Guess\x201\x20of\x208','no\x20related\x20character\x20found','onclick','You\x20won','.character-image','#modal-two','.\x20Play\x20Darth\x20Vordle\x20at\x20darthvordle.com\x20today!','&#x2191','.data-box5','Score\x20copied\x20to\x20clipboard','unknown','.jpg','stringify','.data-box1','round','target','random','569756yDzLMM','6Ypigpm','floor','Games\x20Played','select(this)','70lcyULf','innerHTML','remove','firstChild','8iBbQgK','createElement','querySelector'];_0x40ad=function(){return _0x49f7e8;};return _0x40ad();}function select(_0x33ee37){const _0x1c21a4=_0x373609;let _0x4e3133=_0x33ee37[_0x1c21a4(0xd5)];searchInput[_0x1c21a4(0xd6)]=_0x4e3133,searchContainer['classList'][_0x1c21a4(0x101)](_0x1c21a4(0x107)),guessCounter++;let _0x3937c9=guessCounter+0x1;searchInput[_0x1c21a4(0xc9)]=_0x1c21a4(0xd4)+_0x3937c9+_0x1c21a4(0x10d),console['clear'](),characterDiv[_0x1c21a4(0x10e)][_0x1c21a4(0xe4)](_0x1c21a4(0x107)),getGuess(),checkGuess();}function _0x46dd(_0x13f230,_0x16a18d){const _0x40adb2=_0x40ad();return _0x46dd=function(_0x46dd79,_0x22c8be){_0x46dd79=_0x46dd79-0xbe;let _0x5f08e8=_0x40adb2[_0x46dd79];return _0x5f08e8;},_0x46dd(_0x13f230,_0x16a18d);}function getGuess(){const _0x4a4512=_0x373609;for(let _0xd82ff2=0x0;_0xd82ff2<characters[_0x4a4512(0x11e)];_0xd82ff2++){characters[_0xd82ff2][_0x4a4512(0xc1)]==searchInput[_0x4a4512(0xd6)]&&(guessCharacter=characters[_0xd82ff2]);}console[_0x4a4512(0x120)](guessCharacter);}function gameDone(){const _0x59c5d6=_0x373609;characterDiv['classList'][_0x59c5d6(0x101)](_0x59c5d6(0x107)),updateStats(winStatus),endModal[_0x59c5d6(0x10e)][_0x59c5d6(0xe4)](_0x59c5d6(0x107));let _0x21b790=_0x59c5d6(0xcc)+mysteryIndex+_0x59c5d6(0xf4);characterImage[_0x59c5d6(0xe6)]=_0x21b790;}function checkGuess(){const _0x3f6584=_0x373609,_0x1ef085=document[_0x3f6584(0x104)](_0x3f6584(0x113)),_0x263731=document['createTextNode'](guessCounter+'.\x20'+guessCharacter['name']);_0x1ef085['appendChild'](_0x263731),nameContainer[_0x3f6584(0x10f)](_0x1ef085);const _0x1319a8=document[_0x3f6584(0x104)]('div'),_0x49afc0=document[_0x3f6584(0xc4)](guessCounter+'.\x20'+guessCharacter['films'][0x0]);_0x1319a8['appendChild'](_0x49afc0),filmContainer['appendChild'](_0x1319a8);const _0x3f8f1a=document[_0x3f6584(0x104)](_0x3f6584(0x113)),_0xa8618=document['createTextNode'](guessCounter+'.\x20'+guessCharacter[_0x3f6584(0x10c)]);_0x3f8f1a[_0x3f6584(0x10f)](_0xa8618),homeworldContainer[_0x3f6584(0x10f)](_0x3f8f1a);const _0x3cc516=document['createElement'](_0x3f6584(0x113)),_0x264e88=document[_0x3f6584(0xc4)](guessCounter+'.\x20'+guessCharacter['gender']);_0x3cc516[_0x3f6584(0x10f)](_0x264e88),genderContainer['appendChild'](_0x3cc516);const _0x283920=document[_0x3f6584(0x104)](_0x3f6584(0x113)),_0x171f13=document['createTextNode'](guessCounter+'.\x20'+guessCharacter[_0x3f6584(0x11a)]);_0x283920[_0x3f6584(0x10f)](_0x171f13),speciesContainer[_0x3f6584(0x10f)](_0x283920);const _0x1548ea=document['createElement'](_0x3f6584(0x113));let _0xcadfbc;guessCharacter['height']==_0x3f6584(0xf3)?_0xcadfbc=document[_0x3f6584(0xc4)](guessCounter+'.\x20'+guessCharacter['height']):_0xcadfbc=document[_0x3f6584(0xc4)](guessCounter+'.\x20'+guessCharacter[_0x3f6584(0xcf)]+'cm');_0x1548ea[_0x3f6584(0x10f)](_0xcadfbc),heightContainer[_0x3f6584(0x10f)](_0x1548ea);const _0x2b9538=document[_0x3f6584(0x104)](_0x3f6584(0x113));let _0x17473f;guessCharacter[_0x3f6584(0xd2)]==_0x3f6584(0xf3)?_0x17473f=document[_0x3f6584(0xc4)](guessCounter+'.\x20'+guessCharacter[_0x3f6584(0xd2)]):_0x17473f=document[_0x3f6584(0xc4)](guessCounter+'.\x20'+guessCharacter[_0x3f6584(0xd2)]+'kg');_0x2b9538[_0x3f6584(0x10f)](_0x17473f),massContainer['appendChild'](_0x2b9538);let _0x4b4dea=0x0,_0x414f39=characters[mysteryIndex];if(guessCharacter[_0x3f6584(0xc1)]==_0x414f39[_0x3f6584(0xc1)])console[_0x3f6584(0x120)](_0x3f6584(0xec)),winStatus=!![],gameDone(),endHeader[_0x3f6584(0x119)]='Congratulations,\x20You\x20Won!',endMessage['innerText']='The\x20mystery\x20character\x20was...\x20'+_0x414f39[_0x3f6584(0xc1)],playAgainBtn[_0x3f6584(0xdf)]('click',function(){const _0x8eca66=_0x3f6584;return endModal[_0x8eca66(0x10e)][_0x8eca66(0x101)]('active'),resetUI(),guessCounter=0x0,mysteryIndex=Math[_0x8eca66(0xfc)](Math[_0x8eca66(0xf9)]()*0x53+0x1)-0x1;}),shareScoreBtn[_0x3f6584(0xdf)](_0x3f6584(0xd8),function(){const _0x2863e5=_0x3f6584;let _0x2adfdc='I\x20was\x20able\x20to\x20guess\x20the\x20mystery\x20character...\x20'+_0x414f39[_0x2863e5(0xc1)]+_0x2863e5(0xd1)+guessCounter+'\x20guesses!\x20Play\x20Darth\x20Vordle\x20at\x20darthvordle.com\x20today!';navigator[_0x2863e5(0xce)][_0x2863e5(0xd9)](_0x2adfdc)[_0x2863e5(0xde)](function(){const _0x4b68a3=_0x2863e5;console['log'](_0x4b68a3(0xf2)),alert('Your\x20score\x20has\x20been\x20copied\x20to\x20your\x20clipboard!');});}),searchInput['value']='',searchInput[_0x3f6584(0xc9)]=_0x3f6584(0xe9);else{if(guessCounter!=0x8){guessCharacter[_0x3f6584(0xe0)][0x0]==_0x414f39['films'][0x0]&&(_0x1319a8[_0x3f6584(0x110)][_0x3f6584(0xe8)]='#06e606',_0x4b4dea++);guessCharacter['homeworld']==_0x414f39[_0x3f6584(0x10c)]&&(_0x3f8f1a[_0x3f6584(0x110)]['color']='#06e606',_0x4b4dea++);guessCharacter[_0x3f6584(0x11a)]==_0x414f39['species']&&(_0x283920[_0x3f6584(0x110)][_0x3f6584(0xe8)]=_0x3f6584(0xbe),_0x4b4dea++);guessCharacter[_0x3f6584(0x118)]==_0x414f39[_0x3f6584(0x118)]&&(_0x3cc516[_0x3f6584(0x110)][_0x3f6584(0xe8)]=_0x3f6584(0xbe),_0x4b4dea++);const _0x2b6285=Number(guessCharacter[_0x3f6584(0xcf)]),_0x486113=Number(_0x414f39[_0x3f6584(0xcf)]);if(_0x2b6285==_0x486113)_0x1548ea[_0x3f6584(0x110)]['color']=_0x3f6584(0xbe),_0x4b4dea++;else{if(_0x2b6285>_0x486113)_0x1548ea[_0x3f6584(0x100)]=_0x1548ea['innerText']+_0x3f6584(0x117),_0x2b6285-_0x486113<=0x5&&(_0x1548ea[_0x3f6584(0x110)][_0x3f6584(0xe8)]=_0x3f6584(0xc2));else _0x486113>_0x2b6285&&(_0x1548ea['innerHTML']=_0x1548ea['innerText']+_0x3f6584(0xf0),_0x486113-_0x2b6285<=0x5&&(_0x1548ea['style'][_0x3f6584(0xe8)]=_0x3f6584(0xc2)));}const _0xc16e48=Number(guessCharacter[_0x3f6584(0xd2)]),_0x5ef777=Number(_0x414f39[_0x3f6584(0xd2)]);if(_0xc16e48==_0x5ef777)_0x2b9538[_0x3f6584(0x110)][_0x3f6584(0xe8)]='#06e606',_0x4b4dea++;else{if(_0xc16e48>_0x5ef777)_0x2b9538[_0x3f6584(0x100)]=_0x2b9538[_0x3f6584(0x119)]+_0x3f6584(0x117),_0xc16e48-_0x5ef777<=0x5&&(_0x2b9538[_0x3f6584(0x110)]['color']=_0x3f6584(0xc2));else _0x5ef777>_0xc16e48?(_0x2b9538['innerHTML']=_0x2b9538['innerText']+_0x3f6584(0xf0),_0x5ef777-_0xc16e48<=0x5&&(_0x2b9538[_0x3f6584(0x110)][_0x3f6584(0xe8)]='#FFE81F')):console[_0x3f6584(0x120)](_0xc16e48,_0x5ef777);}_0x4b4dea==0x0&&console[_0x3f6584(0x120)]('No\x20matching\x20attributes'),searchInput[_0x3f6584(0xd6)]='';}else console[_0x3f6584(0x120)]('You\x20lost'),winStatus=![],gameDone(),endHeader[_0x3f6584(0x119)]='Oops,\x20You\x20Lost!',endMessage[_0x3f6584(0x119)]=_0x3f6584(0xc0)+_0x414f39[_0x3f6584(0xc1)],playAgainBtn[_0x3f6584(0xdf)](_0x3f6584(0xd8),function(){const _0x322791=_0x3f6584;return endModal['classList'][_0x322791(0x101)](_0x322791(0x107)),resetUI(),guessCounter=0x0,randomNumber=Math[_0x322791(0xfc)](Math[_0x322791(0xf9)]()*0x53+0x1);}),shareScoreBtn[_0x3f6584(0xdf)]('click',function(){const _0x25d138=_0x3f6584;let _0x31a1c7=_0x25d138(0x126)+_0x414f39[_0x25d138(0xc1)]+_0x25d138(0xef);navigator[_0x25d138(0xce)]['writeText'](_0x31a1c7)[_0x25d138(0xde)](function(){const _0x1f5013=_0x25d138;console[_0x1f5013(0x120)]('Score\x20copied\x20to\x20clipboard'),alert(_0x1f5013(0xe7));});}),searchInput[_0x3f6584(0xd6)]='',searchInput['placeholder']=_0x3f6584(0xe9);}}
