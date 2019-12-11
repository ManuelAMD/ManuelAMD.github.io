var blocklyArea = null;
var toolbox = null;
var workspace = null;
isFree = false;
var mytime = null;

var obj = {
      crisp_input: [20, 3, 2],
      variables_input: [
        {
          name: "Tiempo(s)",
          setsName: ["Corto", "Medio", "Alto"],
          sets: [
            [0,0,20,40],
            [30,60,60,100],
            [80,120,150,150]
          ]
        },
        {
          name: "Intentos",
          setsName: ["Pocos", "Medio", "Muchos"],
          sets: [
            [0,0,1,2],
            [2,4,4,6],
            [5,8,10,10]
          ]
        },
        {
          name: "Ayudas",
          setsName: ["Pocas", "Intermedio", "Muchas"],
          sets: [
            [0,0,2,4],
            [4,8,8,10],
            [8,12,14,14]
          ]
        }
      ],
      variable_output: {
        name: "nivel",
        setsName: ["Basico", "Intermedio", "Avanzado"],
        sets: [
          [0,0,25,50],
          [30,50,50,75],
          [60,80,100,100]
        ]
      },
      inferences: [
        [2,1,0],
        [2,1,0],
        [2,1,0]
      ]
    };
var fl = null;

function hideAll(){
	document.getElementById('container').style.display = 'none';
	document.getElementById('profile').style.display = 'none';
	document.getElementById('out').style.display = 'none';
	document.getElementById('login').style.display = 'none';
	document.getElementById('taskContainer').style.display = 'none';
	document.getElementById('blocksContainer').style.display = 'none';
	isFree = false;
	clearInterval(mytime);
}

userTaskCompleted = [];

function cambiaLogProfile(){
	hideAll();
	document.getElementById('profile').style.display = 'block';
	document.getElementById('out').style.display = 'block';
	solutions = []
	basicSol = 0;
	intermediateSol = 0;
	advancedSol = 0;
	promise = db.collection("User").get().then(querySnapshot=>{
		querySnapshot.forEach(doc=>{
			if(doc.data().email == userGlobal.email){
				document.getElementById("profname").textContent = 'Bienvenido '+doc.data().name;
				doc.data().task.forEach(e => {
					solutions.push(e);
				});
			}
			//Datos específicos alert(`${doc.id} => ${doc.data().email}`);
		});
	}).catch(function(e){
		console.log("Error get: "+e.code+" "+e.message)
	});
	basic = 0;
	intermediate = 0;
	advanced = 0;
	promise.then(snapshot =>{
		promise2 = db.collection("Task").get().then(querySnapshot=>{
			querySnapshot.forEach(doc=>{
				if(doc.data().level == "0")
					basic ++;
				else if (doc.data().level == 1)
					intermediate ++;
				else if (doc.data().level == 2)
					advanced ++;
				solutions.forEach(e=>{
					if(doc.data().id == e){
						userTaskCompleted.push(doc.data());
						if(doc.data().level == 0)
							basicSol ++;
						else if (doc.data().level == 1)
							intermediateSol ++;
						else if (doc.data().level == 2)
							advancedSol ++;
					}
				});
				//Datos específicos alert(`${doc.id} => ${doc.data().email}`);
			});
		}).catch(function(e){
			console.log("Error get: "+e.code+" "+e.message)
		});
		promise2.then(snapshot =>{
			document.getElementById('basicValue').innerHTML = basic+"";
			document.getElementById('basicSol').innerHTML = basicSol+"";
			document.getElementById('intermediateValue').innerHTML = intermediate+"";
			document.getElementById('intermediateSol').innerHTML = intermediateSol+"";
			document.getElementById('advancedValue').innerHTML = advanced+"";
			document.getElementById('advancedSol').innerHTML = advancedSol+"";
		});
	});
	//var userDB = db.ref('User');
	//alert("xx "+userDB);
};

function cambiaProfileLog(){
	hideAll();
	document.getElementById('login').style.display = 'block';
};

function cambiaToTask(){
	hideAll();
	document.getElementById('out').style.display = 'block';
	document.getElementById('taskContainer').style.display = 'block';
	allTasks = [];
	promise = db.collection('Task').get().then(querySnapshot=>{
		querySnapshot.forEach(doc=>{
			if(doc.data().id != 0)
				allTasks.push(doc.data());
		});
	}).catch(function(e){
		console.log("Error get: "+e.code+" "+e.message)
	});
	zoneTask = document.getElementById('ulTask');
	zoneTask.innerHTML = '';
	color = '';
	nameLevel = '';
	promise.then(snapshot => {
		allTasks.forEach(e=>{
			color = 'w3-red'
			userTaskCompleted.forEach(e2=>{
				if(e.id == e2.id)
					color = 'w3-green'
			});
			if(e.level == 2)
				nameLevel = 'Advanced';
			else if(e.level == 1)
				nameLevel = 'Intermediate';
			else
				nameLevel = 'Basic';
			zoneTask.innerHTML += '<a onclick="changeBlocklyTask('+e.id+');"><li class="w3-bar"><h3 class="w3-bar-item w3-left">'+e.name+'</h3><h3 class="w3-bar-item w3-center">'+nameLevel+'</h3><span class="w3-badge w3-right w3-margin-right '+color+' w3-bar-item">&nbsp;</span></li></a>'
		});
	});
}

function userNewWin(taskId){
	promise = db.collection("User").get().then(querySnapshot=>{
		querySnapshot.forEach(doc=>{
			if(doc.data().email == userGlobal.email){
				array = doc.data().task;
				if(!array.includes(taskId)){
					array.push(taskId);
					db.collection("User").doc(doc.id).update({task: array});
					console.log(array);
				}
			}
		});
	}).catch(function(e){
		console.log("Error get: "+e.code+" "+e.message)
	});
}

var userGlobal = null;
//Login de firebase.
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  // User is signed in.
  	userGlobal = user;
  	cambiaLogProfile();
    
    // ...
  } else {
    // User is signed out.
    userGlobal == null;
    cambiaProfileLog();
  }
});


function login(){
	var userEmail = document.getElementById('formEmail').value;
	var userPass = document.getElementById('formPassword').value;
	let promise = firebase.auth().signInWithEmailAndPassword(userEmail, userPass);
	promise.then(res => {
		console.log(firebase.auth().currentUser);
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	  alert("Error: "+errorMessage);
	});
}

function logOut(){
	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	  alert("Haz salido");
	}).catch(function(error) {
	  // An error happened.
	  alert("algo salio mal")
	});
}

function registerUser(){
	var email = document.getElementById('emailReg').value;
	var password = document.getElementById('passReg').value;
	var name = document.getElementById('name').value;
	var date = document.getElementById('dateReg').value;
	//console.log(email + " "+password + " "+name + " "+date);
	firebase.auth().createUserWithEmailAndPassword(email,password).then(res=>{
		db.collection("User").add({
			name: name,
			email: email,
			date: date,
			task: []
		}).then(function(){
			alert("Se creo el usuario");
		}).catch(function(error){
			alert("Error de registro: "+error.code+" "+error.message);
		});
	}).catch(function(error){
		var errorCode = error.code;
		var errorMessage = error.message;
		alert("Error de registro: "+errorCode+" "+errorMessage);
	});
	document.getElementById('modalRegister').style.display = 'none';
};

function onProfile(){
	if(!userGlobal){
		cambiaProfileLog();
		return;
	}
	cambiaLogProfile();
}

function onTask(){
	if(!userGlobal){
		cambiaProfileLog();
		return;
	}
	cambiaToTask();
}

function onExam(){
	if(!userGlobal){
		cambiaProfileLog();
		return;
	}
}

function onMoveBlock(event){
  if(event.type == Blockly.Events.BLOCK_MOVE || event.type == Blockly.Events.CHANGE){
  	if(isFree)
	    writeCode('codeAreaFree',workspace);
	else
		writeCode('codeAreaTask',workspace2);
  }
};

/*Tasks section*/

taskData = null;

function help(){
	ran = Math.floor(Math.random()*taskData.help.length);
	document.getElementById('helpTask').innerHTML = '<h3>Help: '+taskData.help[ran]+'</h3>'
	addHelp();
}

countTime = 0;
countAyuda = 0;
countIntentos = 0;
function resetCounters(){
	countTime = 0;
  	countAyuda = 0;
	countIntentos = 0;
	document.getElementById('time').innerHTML = '<h2>Time(S): '+countTime+'</h2>';
	document.getElementById('help').innerHTML = '<h2>Helps: '+countAyuda+'</h2>';
	document.getElementById('tries').innerHTML = '<h2>Tries: '+countIntentos+'</h2>';
}

workspace2 = null;
taskIdActual = 0;

function changeBlocklyTask(id){
	taskData = null;
	blocklyArea = document.getElementById('blocklyTask');
	document.getElementById('taskContainer').style.display = 'none';
	document.getElementById('blocksContainer').style.display = 'block';
	var promise = db.collection("Task").get().then((querySnapshot) =>{
		querySnapshot.forEach((doc)=>{
			if(doc.data().id == id){
				taskData = doc.data();
				taskIdActual = id;
			}
		});
	});
	promise.then(snapshot =>{
		parser = new DOMParser();
	  	xmlDoc = parser.parseFromString(taskData.blocks,"text/xml");
	  	toolbox = xmlDoc.getElementById("toolbox");
			if(workspace2 != null && workspace2.getInjectionDiv() != null){
				workspace2.updateToolbox(toolbox);
			}else{
			workspace2 = Blockly.inject(blocklyArea,
	      {toolbox: toolbox,
	        grid:{
	          spacing: 40,
	          length: 5,
	          colour: '#f00',
	          snap: true},
	        zoom:{controls: true,
	          wheel: true,
	          startScale: 1.0,
	          maxScale: 3,
	          minScale: 0.1,
	          scaleSpeed: 1.2},
	          trashcan: true});}
		resetCounters();
		document.getElementById('problemTask').innerHTML = '<h3>Problem: '+taskData.description+'</h3>'
		workspace2.addChangeListener(onMoveBlock);
		mytime = setInterval(myTimer,1000);
	});
	//blocklyArea.style.display = 'none';
}

function nextTask(){
	if(taskIdActual >= (allTasks.length-1))
		return;
	taskIdActual ++;
	changeBlocklyTask(taskIdActual);
	document.getElementById('modalWin').style.display = 'none';
}

function previousTask(){
	if(taskIdActual <= 1)
		return;
	taskIdActual --;
	changeBlocklyTask(taskIdActual);
	document.getElementById('modalWin').style.display = 'none';
}

//Tiempo
function myTimer(){
	countTime++;
	document.getElementById('time').innerHTML = '<h2>Time(S): '+countTime+'</h2>';
};



/*end task section*/

function changeFree(){
	if(isFree)
		return;
	hideAll();
	document.getElementById('container').style.display = 'block';
	blocklyArea = document.getElementById('blocklyFree');
	if(workspace!= null && workspace.getInjectionDiv() != null){
		return
	}
	/*Obtener los bloques de firebase*/
	text = null;
	var promise = db.collection("Task").get().then((querySnapshot) =>{
		querySnapshot.forEach((doc)=>{
			if(doc.data().id == 0){
				text = doc.data().blocks;
			}
		});
	});
	promise.then(snapshot =>{
		parser = new DOMParser();
	  	xmlDoc = parser.parseFromString(text,"text/xml");
	  	toolbox = xmlDoc.getElementById("toolbox");
		workspace = Blockly.inject(blocklyArea,
	      {toolbox: toolbox,
	        grid:{
	          spacing: 40,
	          length: 5,
	          colour: '#f00',
	          snap: true},
	        zoom:{controls: true,
	          wheel: true,
	          startScale: 1.0,
	          maxScale: 3,
	          minScale: 0.1,
	          scaleSpeed: 1.2},
	          trashcan: true});
		workspace.addChangeListener(onMoveBlock);
	});
  	isFree = true;
};

function sendComment(){
	var problem = document.getElementById('problem').value;
	var description = document.getElementById('descriptionProblem').value;
	db.collection("Comments").add({
		problem: problem,
		description: description
	}).then(function(doc){
		alert("enviado");
		console.log("Documento escrito con ID: ", doc.id);
	}).catch(function(err){
		console.error("Error al añadir el documento: ", err);
	});

};

function eraseBlocksTask(){
	var count = workspace2.getAllBlocks(false).length;
	if(count < 2 || 
		window.confirm(Blockly.Msg['DELETE_ALL_BLOCKS'].replace('%1',count))){
		workspace2.clear();
		if(window.location.hash){
		  window.location.hash = '';
		}
	}
};


function eraseBlocks(){
	var count = workspace.getAllBlocks(false).length;
	if(count < 2 || 
		window.confirm(Blockly.Msg['DELETE_ALL_BLOCKS'].replace('%1',count))){
		workspace.clear();
		if(window.location.hash){
		  window.location.hash = '';
		}
	}
};

/*Creación de código*/

function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL
    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

//Importa la libreria para mejor visibilidad de código.
function importPrettiffy(){
	var script = document.createElement('script');
	script.setAttribute('src', 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js');
	document.head.appendChild(script);
};

function checkAllGeneratorFunctionsDefined(generator,work){
	var blocks = work.getAllBlocks(false);
	var missingBlockGenerators = [];
	for(var i = 0 ; i < blocks.length; i++){
		var blockType = blocks[i].type;
		if(!generator[blockType])
			if(missingBlockGenerators.indexOf(blockType) == -1)
				missingBlockGenerators.push(blockType);
	}
	var valid = missingBlockGenerators.length == 0;
	if(!valid){
		var msg = 'The generator code for the following blocks not specified for '+
			generator.name_ + ':\n - '+ missingBlockGenerators.join('\n - ');
			Blockly.alert(msg);
	}
	return valid;
};

function attempCodeGeneration(generator, element,work){
	element.textContent = '';
	if(checkAllGeneratorFunctionsDefined(generator,work)){
		var code = Blockly.Python.workspaceToCode(work);
		element.textContent = code;
		element.className = element.className.replace('prettyprinted','');
	}
};

function writeCode(content,work){
	contain = document.getElementById(content);
	attempCodeGeneration(Blockly.Python, contain, work);
};

/*Ejecución de código*/
exit ='';

function evalBlocks(){
  var band = true;
  taskData.needBlock.forEach(function(e){
    var typ = workspace2.getBlocksByType(e,false);
    if (typ.length == 0){
      band = false;
      return;
    }
  });
  return band;
};

/*function isFree(){
	if(document.getElementById("container").style.display == 'block')
		return true;
	return false;
}*/

function addIntentos(){
  countIntentos++;
  document.getElementById('tries').innerHTML ='<h2>Tries: '+countIntentos+'</h2>';
};

function addHelp(){
	countAyuda++;
	document.getElementById('help').innerHTML = '<h2>Helps: '+countAyuda+'</h2>';
}

exit = '';

evalueStructure = function(){
  exit ='';
  addIntentos();
  if(!evalBlocks()){
    alert('No cumples con los requisitos');
    return;
  }
  runJS('consoleAreaTask');
  res = taskData.answer+'\n';
  if (exit == res){
    clearInterval(mytime);
    document.getElementById("timeRes").innerHTML = '<h4>'+countTime+'</h4>';
    document.getElementById("helpRes").innerHTML = '<h4>'+countAyuda+'</h4>';
    document.getElementById("triesRes").innerHTML = '<h4>'+countIntentos+'</h4>';
    obj.crisp_input[0] = countTime;
    obj.crisp_input[1] = countAyuda;
    obj.crisp_input[2] = countIntentos;
    var text = "básico";
    if(fl.getResult(obj) > 50 && fl.getResult<=75){
      /*if (counter < empiezaMedio) {
        counter = empiezaMedio;
      }*/
      text = "intermedio";
    }else
    if(fl.getResult(obj) > 75){
      /*if (counter >= empiezaMedio && counter < empiezaAvanzado)
        counter = empiezaAvanzado;
      if (counter < empiezaMedio)
        counter = empiezaMedio;*/
      text = "Avanzado";
    }
	document.getElementById("levelRes").innerHTML = '<h4>'+text+'</h4>';
    //modalStats.style.display="block";
    //alert("Todo correcto")
    resetCounters();
    workspace2.clear();
    userNewWin(taskData.id);
    document.getElementById("modalWin").style.display = 'block';
  }
  else{
    alert("Respuesta Incorrecta");
  }
};

runJS = function(consol,work){
  Blockly.JavaScript.INFINITE_LOOP_TRAP = 'checkTimeout();\n';
  var timeout = 0;
  var checkTimeout = function(){
    if(timeout++ > 1000000){
      throw MSG['timeout'];
    }
  };
  var code = Blockly.JavaScript.workspaceToCode(work);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  if(code == '')
    return;
  try{
    //eval(code);
    executeCode(consol, work);
  } catch (e){
    alert(MSG['badCode'].replace('%1', e));
  }
};

function outf(text){
	var output = document.getElementById(consoleArea);
	exit += text;
	output.innerHTML += text +"<br>";
}

function builtinRead(x){
  if(Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
    throw "File not found: '"+x+"'";
  return Sk.builtinFiles["files"][x];
};

consoleArea = null;

function executeCode(consol, work){
	var code = Blockly.Python.workspaceToCode(work);
	var output = document.getElementById(consol);
	consoleArea = consol;
	output.innerHTML = '';
	exit='';
	Sk.configure({output:outf, read: builtinRead});
	try{
		var mod = Sk.importMainWithBody("<stdin>", false, code);
	}catch(e){
		alert(e);
	}
}
function executeCodeTask(consol, work){
	executeCode('consoleAreaTask',workspace2)
}
function executeCodeFree(consol, work){
	executeCode('consoleAreaFree',workspace)
}

/*Fin ejecución de código.*/

function init(){
	var formLog = document.getElementById('logform');
	formLog.addEventListener('submit', function(event){event.preventDefault();});
	var formReg = document.getElementById('modalRegister');
	formReg.addEventListener('submit', function(evento){evento.preventDefault();});
	var formComment = document.getElementById('modalComment');
	formComment.addEventListener('submit',function(evento){evento.preventDefault();});
	fl = new FuzzyLogic();
	window.setTimeout(importPrettiffy(),1);
	//Prueba de ocultación y agregación de elementos
	/*var x = document.getElementById('ocul');
	x.addEventListener("click",function(){oculta();});
	var y = document.getElementById('mos');
	y.addEventListener("click",function(){muestra();});
	var z = document.getElementById('add');
	z.addEventListener("click",function(){agrega();});
	var h = document.getElementById('remove');
	h.addEventListener("click",function(){quitaAgregado();});*/
}

init();