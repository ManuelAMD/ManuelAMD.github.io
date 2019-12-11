workspace = null;
blocklyArea = null;
toolbox = null;
resNivel = null;
exit='';
var mytime = 0;
var countTime = 0;
var countAyuda = 0;
var countIntentos = 0;
var EjemploFlex = {};
var counter = 0;
var empiezaMedio = 5;
var empiezaAvanzado = 10;
var ayudas = [];

var modal = null;
var modalStats = null;
var modalExit = null;
var span = null;

var nivelActual;

var niveles = [];

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

function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL
    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

importPrettiffy = function(){
  var script = document.createElement('script');
  script.setAttribute('src','https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js');
  document.head.appendChild(script);
}

attemptCodeGeneration = function(generator){
  var content = document.getElementById('codeArea');
  content.textContent = '';
  if(checkAllGeneratorFunctionsDefined(generator)){
    var code = Blockly.Python.workspaceToCode(workspace);
    content.textContent = code;
    // Remove the 'prettyprinted' class, so that Prettify will recalculate.
    content.className = content.className.replace('prettyprinted', '');
  }
};

checkAllGeneratorFunctionsDefined = function(generator){
  var blocks = workspace.getAllBlocks(false);
  var missingBlockGenerators = [];
  for(var i = 0; i < blocks.length; i++){
    var blockType = blocks[i].type;
    if(!generator[blockType]){
      if(missingBlockGenerators.indexOf(blockType) == -1){
        missingBlockGenerators.push(blockType);
      }
    }
  }
  var valid = missingBlockGenerators.length == 0;
  if(!valid){
    var msg = 'The generator code for the following blocks not specified for '+ 
      generator.name_ + ':\n - ' + missingBlockGenerators.join('\n - ');
      Blockly.alert(msg);
  }
  return valid;
};

writeCode = function(){	
	var content = document.getElementById('codeArea');
	attemptCodeGeneration(Blockly.Python);
};

addBlock = function(){
  tool = '<xml>';
  tool +=   '<block type="controls_repeat_ext">';
  tool +=     '<value name="TIMES">';
  tool +=       '<block type="math_number">';
  tool +=         '<field name="NUM">1</field>';
  tool +=       '</block>';
  tool +=     '</value>';
  tool +=   '</block>';
  tool += '</xml>';
  workspace.clear();
  var wx = Blockly.Xml.textToDom(tool)
  Blockly.Xml.domToWorkspace(wx, workspace);
};

discard = function(){
  var b = workspace.getTopBlocks();
  var c = b[0].getChildren(true)[0];
  c.setFieldValue('2','NUM');
  alert(c);
  /*var count = workspace.getAllBlocks(false).length;
  if(count < 2 || 
    window.confirm(Blockly.Msg['DELETE_ALL_BLOCKS'].replace('%1',count))){
    workspace.clear();
    if(window.location.hash){
      window.location.hash = '';
    }
  }*/
};

function evalBlocks(){
  var band = true;
  needBlocks.forEach(function(e){
    var typ = workspace.getBlocksByType(e,false);
    if (typ.length == 0){
      band = false;
      return;
    }
  });
  return band;
};

evalueStructure = function(){
  exit ='';
  addIntentos();
  if(!evalBlocks()){
    alert('No cumples con los requisitos');
    return;
  }
  runJS();
  res = resNivel+'\n';
  if (exit == res){
    clearInterval(mytime);
    document.getElementById("resTiempo").innerHTML = countTime;
    document.getElementById("resAyudas").innerHTML = countAyuda;
    document.getElementById("resIntentos").innerHTML = countIntentos;
    obj.crisp_input[0] = countTime;
    obj.crisp_input[1] = countAyuda;
    obj.crisp_input[2] = countIntentos;
    var text = "básico";
    if(fl.getResult(obj) > 50 && fl.getResult<=75){
      if (counter < empiezaMedio) {
        counter = empiezaMedio;
      }
      text = "intermedio";
    }else
    if(fl.getResult(obj) > 75){
      if (counter >= empiezaMedio && counter < empiezaAvanzado)
        counter = empiezaAvanzado;
      if (counter < empiezaMedio)
        counter = empiezaMedio;
      text = "Avanzado";
    }
    document.getElementById("resNivel").innerHTML = text;
    modalStats.style.display="block";
  }
  else{
    alert("Respuesta Incorrecta");
  }
};

function outf(text){
  var output = document.getElementById("console");
  exit += text;
  output.innerHTML += text+"<br/>";
};

function builtinRead(x){
  if(Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
    throw "File not found: '"+x+"'";
  return Sk.builtinFiles["files"][x];
};

runCode = function(){
  var code = Blockly.Python.workspaceToCode(workspace);
  var output = document.getElementById("console");
  output.innerHTML = '';
  exit='';
  Sk.configure({output:outf, read: builtinRead});
  try{
    var mod = Sk.importMainWithBody("<stdin>", false, code);
  }catch(e){
    alert(e);
  }
};

runJS = function(){
  Blockly.JavaScript.INFINITE_LOOP_TRAP = 'checkTimeout();\n';
  var timeout = 0;
  var checkTimeout = function(){
    if(timeout++ > 1000000){
      throw MSG['timeout'];
    }
  };
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  if(code == '')
    return;
  try{
    //eval(code);
    runCode();
  } catch (e){
    alert(MSG['badCode'].replace('%1', e));
  }
};

function asignaAyuda(){
  var ran = Math.floor(Math.random()*ayudas.length);
  document.getElementById("ayuda").innerHTML = "Ayuda: "+ayudas[ran];
  addAyuda();
};

function resetCounters(){
  countTime = 0;
  countAyuda = 0;
  countIntentos = 0;
};

function nextProblem(){
  resetCounters();
  var actual = niveles[counter];
  counter++;
  workspace.updateToolbox(actual[0]);
  needBlocks = actual[1];
  resNivel = actual[2];
  document.getElementById('problem').innerHTML = "Enunciado: "+actual[3];
};

function myTimer(){
  document.getElementById('time').innerHTML = 'Tiempo(s): '+countTime;
  countTime++;
};

function addAyuda(){
  countAyuda++;
  document.getElementById('ayudas').innerHTML = 'Ayuda: '+countAyuda;
};

function addIntentos(){
  countIntentos++;
  document.getElementById('intentos').innerHTML = 'Intentos: '+countIntentos;
};

function updateCounters(){
  document.getElementById('time').innerHTML = 'Tiempo(s): '+countTime;
  document.getElementById('ayudas').innerHTML = 'Ayuda: '+countAyuda;
  document.getElementById('intentos').innerHTML = 'Intentos: '+countIntentos;
}

function quitModal(){
  modal.style.display = "none";
  modalStats.style.display = "none";
  countTime=0;
  mytime = setInterval(myTimer,1000);
};

function beginBasico(){
  quitModal();
  counter = 0;
  nextProblem();
};

function beginIntermedio(){
  quitModal();
  counter = empiezaMedio;
  nextProblem();
};

function beginAvanzado(){
  quitModal();
  counter = empiezaAvanzado;
  nextProblem();
};

function salir(){
  clearInterval(mytime);
  modal.style.display = "none";
  modalStats.style.display = "none";
  modalExit.style.display="block";
};

function libre(){
  workspace.clear();
  quitModal();
  workspace.updateToolbox(libreMode());
};

function next(){
  workspace.clear();
  quitModal();
  nextProblem();
  updateCounters();
}

init = function(){
	blocklyArea = document.getElementById('blocklyArea');
  toolbox = document.getElementById('toolbox');
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
	var el = document.getElementById('trashButton');
	el.addEventListener("click",function(){discard();});
	el.addEventListener("touchend",function(){discard();});
	var el2 = document.getElementById('runButton');
	el2.addEventListener("click",function(){runJS();});
	el2.addEventListener("touchend",function(){runJS();});
  var el3 = document.getElementById('linkButton');
  el3.addEventListener("click",function(){addBlock();});
  el3.addEventListener("touchend",function(){addBlock();});
  var ev = document.getElementById('evaluate');
  ev.addEventListener("click",function(){evalueStructure();});
  ev.addEventListener("touchend",function(){evalueStructure();});
  modal = document.getElementById("myModal");
  modalStats = document.getElementById("modal2");
  modalExit = document.getElementById("modalExit");
  span = document.getElementsByClassName("close");
  span[0].addEventListener("click",function(){quitModal();});
  span[1].addEventListener("click",function(){quitModal();});
  document.getElementById("btnBasico").addEventListener("click",function(){beginBasico();});
  document.getElementById("btnIntermedio").addEventListener("click",function(){beginIntermedio();});
  document.getElementById("btnAvanzado").addEventListener("click",function(){beginAvanzado();});
  document.getElementById("btnAyuda").addEventListener("click",function(){asignaAyuda();});
  document.getElementById("btnSalir").addEventListener("click",function(){salir();});
  document.getElementById("salir").addEventListener("click",function(){salir();});
  document.getElementById("modoLibre").addEventListener("click",function(){libre();});
  document.getElementById("btnModoLibre").addEventListener("click",function(){libre();});
  document.getElementById("siguiente").addEventListener("click",function(){next();});
  niveles = [basico1(),basico2(),basico3(),basico4(),basico5(),medio1(),medio2(),medio3(),medio4(),medio5(),avanzado1(),avanzado2(),avanzado3(),avanzado4(),avanzado5()];
  modal.style.display = "block";
  ayudas = ['Selecciona las pestañas con los nombres de los bloques','Los bloques print, imprimen en la consola el texto que le asignas',
    'Los bloques se pueden juntar para seguir un procedimiento secuencial','Algunos bloques tienen cuerpo para realizar procedimientos internos',
    'Si haces click en el boton para ejecutar se puede ver la impresión en consola para ver el resultado','Una vez seguro de la estructura del código puedes evaluar para ver si es correcto',
    'Los bloques se pueden arrastrar al espacio de trabajo', 'Los bloques generan código del lenguaje python, puedes seguir la estructura lógica del código',
    'Si presionas el botón de basura se borraran todos los bloques','En el modo libre pruedes usar todos los bloques para ver como se transforma en código python y jugar con la programción',
    'Puedes usar operadores matemáticos dentro de los operadores lógicos','El bloque print puede imprimir casí cualquier estructura, text, numeros, booleanos, listas, etc.',
    'Las ayudas, tiempo e intentos fallidos afectaran el resultado de evaluación, intenta hacerlo lo mejor posible','Si quieres borrar un solo bloque puedes arrastrarlo al apartado de la basura y soltarlo',
    'Puedes hacer zoom con la rueda del mouse o con los botones de + y -','Si haces click en la zona blanca de los bloques puedes mover lo que se ve en la zona',
    'Puedes cambiar la operación de los bloques de operadores lógicos y operadores condicionales y seleccionar los que necesites','Algunos bloques apareceran con bloques sobreados, puedes sustituirlos por los bloques que necesites, ya que solo representan un ejemplo'];
  fl = new FuzzyLogic();
  window.setTimeout(importPrettiffy(),1);
}

window.addEventListener('load', init);

function onMoveBlock(event){
  if(event.type == Blockly.Events.BLOCK_MOVE || event.type == Blockly.Events.CHANGE){
    writeCode();
  }
};

var editor = new Quill('#codeArea', {
	debug: 'info',
	modules: {
		toolbar: '#toolbar'
	},
	placeholder: 'Compose an epic...',
	readOnly: false,
	theme: 'snow'
});