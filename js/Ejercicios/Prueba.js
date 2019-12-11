tool='';
rnivelActual = '';
var enunciadoActual = '';
needBlock = [];

/*Database structure:
id
level
description
answer
help
needBlock
blocks*/

//imprime la cadena "Hola Mundo!"
basico1 = function(){
	needBlock = [];
	rnivelActual = 'Hola Mundo!';
	enunciadoActual = 'Imprime una cadena con la leyenda: Hola Mundo!';
	tool = '<xml id="toolbox" style="display: none">';
	tool += 	'<category name="Basicos" categorystyle="math_category">';
	tool += 		'<block type="text_print"></block>';
	tool +=			'<block type="text">';
	tool +=				'<field name="TEXT">Hello World!</field>';
	tool +=			'</block>';
	tool += 	'</category>';
	tool += '</xml>';
	return [tool,needBlock,rnivelActual,enunciadoActual];
};
//The "print" blockl is used to print the content of an element. elemento.
//The quotation mark block is the representation of an string.
//You can put a block together after the "print" block to print its content.
//Put a string block after the print block to print any string.
/*
var rbasico1 = 'Hola Mundo!';
Print a string with the notation: Hello World!
var enunciadobasico1 = 'Imprime una cadena con la leyenda: Hola Mundo!';
*/
//Suma dos enteros tal que sumen 20.
basico2 = function(){
	needBlock = ['math_arithmetic'];
	rnivelActual = '20';
	enunciadoActual = 'Imprime la suma de numeros tal que den un total de: 20';
	tool =  '<xml id="toolbox" style="display: none">';
	tool += 	'<category name="Basicos" categorystyle="math_category">';
	tool +=			'<block type="text_print"></block>';
	tool += 		'<block type="math_arithmetic"></block>';
	tool +=			'<block type="math_number">';
	tool +=				'<field name="NUM">10</field>';
	tool +=			'</block>';
	tool += 	'</category>';
	tool +=	'</xml>';
	return [tool,needBlock,rnivelActual,enunciadoActual];
};
/*help
The arithmetic block is used to sum two other blocks.
The number block contains a number.
You can put a block together after the "print" block to print its content.
Combine the arithmetic and number block to add, subtract, multiply or divide.
Put an arithmetic block with the sum after the print block to print any string.

Print the sum of numbers such that they give a total of: 20.
*/
/*var rbasico2 = '20';
var enunciadobasico2 = 'Imprime la suma de numeros tal que den un total de: 20';
needBlock = ['math_arithmetic'];*/

//compara dos números e imprime verdadero
basico3 = function(){
	needBlock = ['controls_if', 'logic_compare'];
	rnivelActual = 'Verdadero';
	enunciadoActual = 'Haz la comparación de dos numeros e imprime el texto con la leyenda: Verdadero';
	tool = '<xml id="toolbox" style="display: none">';
	tool += 	'<category name="Basicos" categorystyle="logic_category">';
	tool += 		'<block type="controls_if">';
	tool += 			'<statement name="DO0">';
	tool += 				'<block type="text_print">';
	tool += 					'<value name="TEXT">';
	tool += 						'<block type="text">';
	tool += 							'<field name="TEXT">true</field>';
	tool += 						'</block>';
	tool += 					'</value>';
	tool += 				'</block>';
	tool += 			'</statement>';
	tool += 		'</block>';
	tool +=			'<block type="controls_if"></block>';
	tool +=			'<block type="text_print"></block>';
	tool += 		'<block type="logic_compare"></block>';
	tool += 		'<block type="math_number"></block>';
	tool +=			'<block type="text"></block>';
	tool +=			'<block type="text_print"></block>';
	tool += 	'</category>';
	tool += '</xml>';
	return [tool,needBlock,rnivelActual,enunciadoActual];
};
/*help:
The logic block is used to compare two other blocks.
The number block contains a number.
You can put a block together after the "print" block to print its content.
Combine the logic and number block to compare two other numbers.
The if block is an structure block that do something when a true value is obtained.
put a logic block on the if block sentence an compare two numbers.

description
Compare two numbers and print a text with the notation: true.

answer: true
*/

/*var rbasico3 = 'Verdadero';
var enunciadobasico3 = 'Haz la comparación de dos numeros e imprime el texto con la leyenda: Verdadero';
*/
//compara dos strings
basico4 = function(){
	needBlock = ['controls_if','logic_compare'];
	rnivelActual = 'true';
	enunciadoActual = 'Haz la comparación de dos cadenas e imprime el texto con la leyenda: Verdadero';
	tool = '<xml id="toolbox" style="display: none">';
	tool += 	'<category name="Basicos" categorystyle="logic_category">';
	tool += 		'<block type="controls_if">';
	tool += 			'<statement name="DO0">';
	tool += 				'<block type="text_print">';
	tool += 					'<value name="TEXT">';
	tool += 						'<block type="text">';
	tool += 							'<field name="TEXT">true</field>';
	tool += 						'</block>';
	tool += 					'</value>';
	tool += 				'</block>';
	tool += 			'</statement>';
	tool += 		'</block>';
	tool +=			'<block type="controls_if"></block>';
	tool += 		'<block type="logic_compare"></block>';
	tool +=			'<block type="text_print"></block>';
	tool += 		'<block type="text"></block>';
	tool += 	'</category>';
	tool += '</xml>';
	return [tool,needBlock,rnivelActual,enunciadoActual];
};
/*
help
The logic block is used to compare two other blocks.
The quotation mark block is the representation of an string.
You can put a block together after the "print" block to print its content.
Combine the logic and string block to compare two other numbers.
The if block is an structure block that do something when a true value is obtained.
put a logic block on the if block sentence an compare two numbers.

answer: true

description: Compare two numbers and print a text with the notation: true.

*/

/*var rbasico4 = 'Verdadero';
var enunciadobasico4 = 'Haz la comparación de dos cadenas e imprime el texto con la leyenda: Verdadero';*/

//Comparar Si dos numero o strings son iguales y imprimir un string.
basico5 = function(){
	needBlock = ['controls_if','logic_compare'];
	rnivelActual = 'Hola Mundo!';
	enunciadoActual = 'Imprime una cadena con la leyenda: Condiciones';
	tool = '<xml id="toolbox" style="display: none">';
	tool += 	'<category name="Basicos" categorystyle="logic_category">';
	tool += 		'<block type="controls_if"></block>';
	tool += 		'<block type="logic_compare"></block>';
	tool += 		'<block type="math_number">';
	tool += 			'<field name="NUM">10</field>';
	tool +=			'</block>';
	tool += 		'<block type="text_print"></block>';
	tool += 		'<block type="text"></block>';
	tool += 	'</category>';
	tool += '</xml>';
	return [tool,needBlock,rnivelActual,enunciadoActual];
};

/*
help
The logic block is used to compare two other blocks.
The quotation mark block is the representation of an string.
You can put a block together after the "print" block to print its content.
Combine the logic and string block to compare two other numbers or strings.
The if block is an structure block that do something when a true value is obtained.
put a logic block on the if block sentence an compare two numbers or strings.

answer: true

'Imprime una cadena con la leyenda: Condiciones';
description: Compare two numbers or strings and print a text with the notation: true.

*/

/*var rbasico5 = '';
var enunciadobasico5 = '';*/

//Si la suma de dos numeros son mayores a 0, imprime si es mayor a 0.
medio1 = function(){
	needBlock = ['controls_if','math_arithmetic','logic_compare'];
	rnivelActual = 'Es mayor a 0';
	enunciadoActual = 'Si la suma de dos numeros enteros es mayor a 0, imprime una cadena con la leyenda: Es mayor a 0';
	tool = '<xml id="toolbox" style="display: none">';
	tool += 	'<category name="Medio" categorystyle="logic_category">';
	tool +=			'<block type="controls_if"></block>';
	tool +=			'<block type="logic_compare">';
	tool +=				'<field name="OP">GT</field>';
	tool +=				'<value name="A">';
	tool +=					'<block type="math_arithmetic"></block>';
	tool +=				'</value>';
	tool +=				'<value name="B">';
	tool +=					'<shadow type="math_number">';
	tool +=						'<field name="NUM">0</field>';
	tool +=					'</shadow>';
	tool +=				'</value>';
	tool +=			'</block>';
	tool +=			'<block type="math_arithmetic"></block>';
	tool +=			'<block type="math_number"></block>';
	tool +=			'<block type="text_print">';
	tool +=				'<value name="TEXT">';
	tool +=					'<shadow type="text">';
	tool +=						'<field name="TEXT">Es mayor a 0</field>';
	tool +=					'</shadow>';
	tool +=				'</value>';
	tool += 		'</block>';
	tool += 		'<block type="text"></block>';
	tool +=		'</category>';
	tool += '</xml>';
	return [tool,needBlock,rnivelActual,enunciadoActual];
};

/*
*id: 6
*level : 1
*description: If the sum of two integer numbers is greater than 0, print a text with the notation: Is greater than 0.
*answer: Is greater than 0
*help: 
You can change the expression of the logic block clicking on the current operator.
Combine the arithmetic and number block to add, subtract, multiply or divide.
The logic block is used to compare two other blocks.
The quotation mark block is the representation of an string.
You can put a block together after the "print" block to print its content.
Combine the logic and string block to compare two other numbers or strings.
The if block is an structure block that do something when a true value is obtained.
put a logic block on the if block sentence an compare two numbers or strings.
Put an arithmetic block with the sum after the print block to print any string.
*needBlock: 'controls_if','math_arithmetic','logic_compare'
*blocks:
*/

/*var rmedio1 = 'Es mayor a 0';
var enunciadomedio1 = 'Si la suma de dos numeros enteros es mayor a 0, imprime una cadena con la leyenda: Es mayor a 0';*/

//Ciclo de imprimir 10 numeros
medio2 = function(){
	needBlock = ['controls_repeat_ext'];
	rnivelActual = 'Hola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!';
	enunciadoActual = 'Imprime por medio de un ciclo 10 veces un texto con la leyenda: Hola Mundo!';
	tool = '<xml id="toolbox" style="display: none">';
	tool += 	'<category name="Medio" categorystyle="logic_category">';
	tool += 		'<block type="controls_repeat_ext">';
	tool +=				'<value name="TIMES">';
	tool +=					'<shadow type="math_number">';
	tool +=						'<field name="NUM">1</field>';
	tool +=					'</shadow>';
	tool +=				'</value>';
	tool += 		'</block>';
	tool +=			'<block type="math_number"></block>';
	tool += 		'<block type="text_print">';
	tool += 			'<value name="TEXT">';
	tool +=					'<shadow type="text">';
	tool +=						'<field name="TEXT">Hello world!</field>';
	tool +=					'</shadow>';
	tool +=				'</value>';
	tool += 		'</block>';
	tool +=			'<block type="text"></block>';
	tool +=		'</category>';
	tool += '</xml>';
	return [tool,needBlock,rnivelActual,enunciadoActual];
};

/*
*id: 7
*level : 1
'Imprime por medio de un ciclo 10 veces un texto con la leyenda: Hola Mundo!
*description: Print with the "for" block 10 times the text with the notation: Hello world!
Hello world!\nHola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!'
*answer: Hello world!\nHello world!\nHello world!\nHello world!\nHello world!\nHello world!\nHello world!\nHello world!\nHello world!\nHello world!
*help: 
The loop block is used to do a set of instructions during n times.
The quotation mark block is the representation of an string.
You can put a block together after the "print" block to print its content.
Put a number block inside the loop block to iterate n times.
Put a print inside of the loop block to print the text n times.
*needBlock: controls_repeat_ext
*blocks:
*/

/*var rmedio2 = 'Hola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!\nHola Mundo!';
var enunciadomedio2 = 'Imprime por medio de un ciclo 10 veces un texto con la leyenda: Hola Mundo!';*/

//Condicional donde se imprime 10 veces un texto cuando dos numeros son iguales.
medio3 = function(){
	needBlock = ['controls_if','logic_compare','controls_repeat_ext'];
	rnivelActual = 'Son iguales\nSon iguales\nSon iguales\nSon iguales\nSon iguales\nSon iguales\nSon iguales\nSon iguales\nSon iguales\nSon iguales';
	enunciadoActual = 'Genere una condición donde si dos numeros son iguales imprima 10 veces el text con la leyenda: Son iguales';
	tool = '<xml id="toolbox" style="display: none">';
	tool += 	'<category name="Medio" categorystyle="logic_category">';
	tool +=			'<block type="controls_if">';
	tool +=				'<statement name="IF0">';
	tool +=					'<block type="logic_compare"></block>';
	tool +=				'</statement>';
	tool +=				'<statement name="DO0">';
	tool +=					'<block type="controls_repeat_ext">';
	tool +=						'<value name="TIMES">';
	tool +=							'<shadow type="math_number">';
	tool +=								'<field name="NUM">1</field>';
	tool +=							'</shadow>';
	tool +=						'</value>';
	tool += 				'</block>';
	tool +=				'</statement>';
	tool +=			'</block>';
	tool +=			'<block type="controls_if"></block>';
	tool += 		'<block type="controls_repeat_ext">';
	tool +=				'<value name="TIMES">';
	tool +=					'<shadow type="math_number">';
	tool +=						'<field name="NUM">1</field>';
	tool +=					'</shadow>';
	tool +=				'</value>';
	tool += 		'</block>';
	tool +=			'<block type="logic_compare"></block>';
	tool +=			'<block type="math_number"></block>';
	tool +=			'<block type="text_print">';
	tool +=				'<value name="TEXT">';
	tool +=					'<shadow type="text">';
	tool +=						'<field name="TEXT">Son iguales</field>';
	tool +=					'</shadow>';
	tool +=				'</value>';
	tool +=			'</block>';
	tool +=			'<block type="text"></block>';
	tool +=		'</category>';
	tool += '</xml>';
	return [tool,needBlock,rnivelActual,enunciadoActual];
};

/*
*id: 8
*level : 1
*description: If two numbers are equal, then print 10 times the text with the notation: Are equal.
*answer: Are equal\nAre equal\nAre equal\nAre equal\nAre equal\nAre equal\nAre equal\nAre equal\nAre equal\nAre equal
*help: 
The loop block is used to do a set of instructions during n times.
The logic block is used to compare two other blocks.
The quotation mark block is the representation of an string.
You can put a block together after the "print" block to print its content.
Put a logic block on the if block sentence an compare two numbers.
Combine the if and loop block to do something n times if the condition is true.
Put a number block inside the loop block to iterate n times.
The if block is an structure block that do something when a true value is obtained.
Put a print inside of the loop block to print the text n times.
*needBlock: controls_if , logic_compare , controls_repeat_ext
*blocks:
*/

/*var rmedio3 = 'Son iguales\nSon iguales\nSon iguales\nSon iguales\nSon iguales\nSon iguales\nSon iguales\nSon iguales\nSon iguales\nSon iguales';
var enunciadomedio3 = 'Genere una condición donde si dos numeros son iguales imprima 10 veces el text con la leyenda: Son iguales';*/

//crear variables y asignarles valor e imprimir.
medio4 = function(){
	needBlock = ['variables_get','variables_set'];
	rnivelActual = 'Soy una variable';
	enunciadoActual = 'Crea una nueva variable y asigna el valor: "Soy una variable". e imrpime el valor de la misma';
	tool = '<xml id="toolbox" style="display: none">';
	tool += 	'<category name="Medio" categorystyle="logic_category">';
	tool +=			'<block type="text_print"></block>';
	tool +=			'<block type="text"></block>';
	tool +=			'<block type="math_number"></block>';
	tool +=		'</category>';
	tool +=		'<category name="variables" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>';
	tool += '</xml>';
	return [tool,needBlock,rnivelActual,enunciadoActual];
};

/*
*id: 9
*level : 1
Crea una nueva variable y asigna el valor: "Soy una variable". e imrpime el valor de la misma
*description: Declare a new variable and assing the valuE: "I am a variable", then print that variable.
*answer: I am a variable
*help: 
Select the variables category to create a new variable.
When a variable it's created you can assign a value to store it.
You can access to the conten of a variable if you just call it.
The quotation mark block is the representation of an string.
You can put a block together after the "print" block to print its content.
The number block contains a number.
*needBlock: variables_get , variables_set
*blocks:
*/

/*var rmedio4 = '';
var enunciadomedio4 = 'Crea una nueva variable y asigna el valor: Hola Mundo!. e imrpime el valor de la misma';*/

//Dada una varible asignar un numero y repetir numero veces un ciclo de impresion de texto;
medio5 = function(){
	needBlock = ['controls_repeat_ext','variables_set','variables_get','math_number'];
	rnivelActual = 'Soy una variable numerica\nSoy una variable numerica\nSoy una variable numerica\nSoy una variable numerica\nSoy una variable numerica';
	enunciadoActual = 'Asigna el numero 5 a una variable e imprime el número de veces asignado, la leyenda: Soy una variable numerica';
	tool = '<xml id="toolbox" style="display: none">';
	tool += 	'<category name="medio">';
	tool +=			'<block type="controls_repeat_ext">';
	tool +=				'<value name="TIMES">';
	tool +=					'<shadow type="math_number">';
	tool +=						'<field name="NUM">1</field>';
	tool +=					'</shadow>';
	tool += 			'</value>';
	tool +=			'</block>';
	tool +=			'<block type="math_number"></block>';
	tool +=			'<block type="text_print">';
	tool +=				'<value name="TEXT">';
	tool +=					'<shadow type="text">';
	tool +=						'<field name="TEXT">I am a numeric variable</field>';
	tool +=					'</shadow>';
	tool +=				'</value>';
	tool +=			'</block>';
	tool +=			'<block type="text"></block>';
	tool += 	'</category>';
	tool +=		'<category name="variables" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>';
	tool += '</xml>';
	return [tool,needBlock,rnivelActual,enunciadoActual];
};

/*
*id: 10
*level : 1
Asigna el numero 5 a una variable e imprime el número de veces asignado, la leyenda: Soy una variable numerica
*description: Declare a variable with the number 5 as its value and print the number of times of the variable a text with the notation: I am a numeric variable.
*answer: I am a numeric variable\nI am a numeric variable\nI am a numeric variable\nI am a numeric variable\nI am a numeric variable
*help: 
Select the variables category to create a new variable.
When a variable it's created you can assign a value to store it.
You can access to the conten of a variable if you just call it.
The quotation mark block is the representation of an string.
You can put a block together after the "print" block to print its content.
The number block contains a number.
*needBlock: 'controls_repeat_ext','variables_set','variables_get','math_number'
*blocks:
*/

/*var rmedio5 = '';
var enunciadomedio5 = '';*/

//Asignar una lista a una varaible e imprimirla.
avanzado1 = function(){
	needBlock = ['lists_create_with','variables_set','variables_get'];
	rnivelActual = '[\'Hola\', \'Mundo\', \'!\']';
	enunciadoActual = 'Asigar a una variable una lista con los textos: "Hola", "Mundo", "!". Respectivamente e imprimir la variable';
	tool = '<xml id="toolbox" style="display: none">';
	tool += 	'<category name="Advanced" categorystyle="logic_category">';
	tool +=			'<block type="text_print"></block>';
	tool +=			'<block type="text"></block>';
	tool +=		'</category>';
	tool +=		'<category name="Listas">';
	tool +=			'<block type="lists_create_with"></block>';
	tool +=		'</category>';
	tool +=		'<category name="variables" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>';
	tool += '</xml>';
	return [tool,needBlock,rnivelActual,enunciadoActual];
};

/*
*id: 11
*level : 2
Asigar a una variable una lista con los textos: "Hola", "Mundo", "!". Respectivamente e imprimir la variable
*description: Declare a new varaible with a list as a value, the lits have the texts: "Hello", "world", "!", respectively, and then print the variable. 
*answer: ['Hello', 'world', '!']
*help: 
You can create a list with the list block in the list category.
The list can have multiple values, in python this values can be of different types.
You can assign to a list a block, just put the block in the socket.
The order of the elements in the list it's important.
Select the variables category to create a new variable.
When a variable it's created you can assign a value to store it.
You can access to the content of a variable if you just call it.
The quotation mark block is the representation of an string.
You can put a block together after the "print" block to print its content.
The number block contains a number.
*needBlock: 'lists_create_with','variables_set','variables_get'
*blocks:
*/

/*var ravanzado1 = '';
var enunciadoavanzado1 = '';*/

//Por cada elemento de una lista de numeros imprimir el contenido
avanzado2 = function(){
	needBlock = [];
	rnivelActual = 'Hola Mundo!';
	enunciadoActual = 'Imprime una cadena con la leyenda: Hola Mundo!';
	tool = '<xml id="toolbox" style="display: none">';
	tool += 	'<category name="Advanced" categorystyle="logic_category">';
	tool +=			'<block type="controls_forEach"></block>';
	tool +=			'<block type="text_print"></block>';
	tool +=			'<block type="text">';
	tool +=				'<field name="TEXT">abc</field>';
	tool +=			'</block>';
	tool +=			'<block type="math_number"></block>';
	tool +=		'</category>';
	tool +=		'<category name="Listas">';
	tool +=			'<block type="lists_create_with"></block>';
	tool += 		'<block type="lists_repeat">';
	tool +=				'<value name="NUM">';
	tool +=					'<shadow type="math_number">';
	tool +=						'<field name="NUM">1</field>';
	tool +=					'</shadow>';
	tool +=				'</value>';
	tool +=			'</block>';
	tool +=			'<block type="lists_getIndex">';
	tool +=				'<value name="VALUE">';
	tool +=					'<block type="variables_get">';
	tool +=						'<field name="VAR"></field>';
	tool +=					'</block>';
	tool +=				'</value>';
	tool +=			'</block>';
	tool +=		'</category>';
	tool +=		'<category name="variables" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>';
	tool += '</xml>';
	return [tool,needBlock,rnivelActual,enunciadoActual];
};

/*
*id: 12
*level : 2
Asigar a una variable una lista con los textos: "Hola", "Mundo", "!". Respectivamente e imprimir la variable
*description: Declare a new varaible with a list as a value, the list have the numbers: 10, 20, 30, respectively, and then print the variable. 
*answer: [10,20,30]
*help: 
You can create a list with the list block in the list category.
The list can have multiple values, in python this values can be of different types.
You can assign to a list a block, just put the block in the socket.
The order of the elements in the list it's important.
Select the variables category to create a new variable.
When a variable it's created you can assign a value to store it.
You can access to the content of a variable if you just call it.
You can put a block together after the "print" block to print its content.
The number block contains a number.
*needBlock: 'lists_create_with','variables_set','variables_get'
*blocks:
*/

/*var ravanzado2 = '';
var enunciadoavanzado2 = '';*/

//
avanzado3 = function(){
	tool = '<xml id="toolbox" style="display: none">';
	tool += 	'<category name="Avanzado" categorystyle="logic_category">';
	
	tool +=		'</category>';
	tool += '</xml>';
	needBlock = [];
	rnivelActual = '';
	enunciadoActual = '';
	return [tool,needBlock,rnivelActual,enunciadoActual];
};

avanzado4 = function(){
	tool = '<xml id="toolbox" style="display: none">';
	tool += 	'<category name="Avanzado" categorystyle="logic_category">';
	
	tool +=		'</category>';	
	tool += '</xml>';
	needBlock = [];
	rnivelActual = '';
	enunciadoActual = '';
	return [tool,needBlock,rnivelActual,enunciadoActual];
};

avanzado5 = function(){
	tool = '<xml id="toolbox" style="display: none">';
	tool += 	'<category name="Avanzado" categorystyle="logic_category">';
	
	tool +=		'</category>';	
	tool += '</xml>';
	needBlock = [];
	rnivelActual = '';
	enunciadoActual = '';
	return [tool,needBlock,rnivelActual,enunciadoActual];
};

libreMode = function(){
	tool = '<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">';
    tool += '<category name="LOGIC" colour="%{BKY_LOGIC_HUE}">';
    tool += '  <block type="controls_if"></block>';
    tool += '  <block type="logic_compare"></block>';
    tool += '  <block type="logic_operation"></block>';
    tool += '  <block type="logic_negate"></block>';
    tool += '  <block type="logic_boolean"></block>';
    tool += '  <block type="logic_null"></block>';
    tool += '  <block type="logic_ternary"></block>';
    tool += '</category>';
    tool += '<category name="LOOPS" colour="%{BKY_LOOPS_HUE}">';
    tool += '  <block type="controls_repeat_ext">';
    tool += '    <value name="TIMES">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">10</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="controls_whileUntil"></block>';
    tool += '  <block type="controls_for">';
    tool += '    <value name="FROM">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">1</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '    <value name="TO">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">10</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '    <value name="BY">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">1</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="controls_forEach"></block>';
    tool += '  <block type="controls_flow_statements"></block>';
    tool += '</category>';
    tool += '<category name="MATH" colour="%{BKY_MATH_HUE}">';
    tool += '  <block type="math_number">';
    tool += '    <field name="NUM">123</field>';
    tool += '  </block>';
    tool += '  <block type="math_arithmetic">';
    tool += '    <value name="A">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">1</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '    <value name="B">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">1</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="math_single">';
    tool += '    <value name="NUM">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">9</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="math_trig">';
    tool += '    <value name="NUM">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">45</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="math_constant"></block>';
    tool += '  <block type="math_number_property">';
    tool += '    <value name="NUMBER_TO_CHECK">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">0</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="math_round">';
    tool += '    <value name="NUM">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">3.1</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="math_on_list"></block>';
    tool += '  <block type="math_modulo">';
    tool += '    <value name="DIVIDEND">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">64</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '    <value name="DIVISOR">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">10</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="math_constrain">';
    tool += '    <value name="VALUE">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">50</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '    <value name="LOW">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">1</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '    <value name="HIGH">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">100</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="math_random_int">';
    tool += '    <value name="FROM">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">1</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '    <value name="TO">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">100</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="math_random_float"></block>';
    tool += '  <block type="math_atan2">';
    tool += '    <value name="X">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">1</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '    <value name="Y">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">1</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '</category>';
    tool += '<category name="TEXT" colour="%{BKY_TEXTS_HUE}">';
    tool += '  <block type="text"></block>';
    tool += '  <block type="text_join"></block>';
    tool += '  <block type="text_append">';
    tool += '    <value name="TEXT">';
    tool += '      <shadow type="text"></shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="text_length">';
    tool += '    <value name="VALUE">';
    tool += '      <shadow type="text">';
    tool += '        <field name="TEXT">abc</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="text_isEmpty">';
    tool += '    <value name="VALUE">';
    tool += '      <shadow type="text">';
    tool += '        <field name="TEXT"></field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="text_indexOf">';
    tool += '    <value name="VALUE">';
    tool += '      <block type="variables_get">';
    tool += '        <field name="VAR">{textVariable}</field>';
    tool += '      </block>';
    tool += '    </value>';
    tool += '    <value name="FIND">';
    tool += '      <shadow type="text">';
    tool += '        <field name="TEXT">abc</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="text_charAt">';
    tool += '    <value name="VALUE">';
    tool += '      <block type="variables_get">';
    tool += '        <field name="VAR">{textVariable}</field>';
    tool += '      </block>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="text_getSubstring">';
    tool += '    <value name="STRING">';
    tool += '      <block type="variables_get">';
    tool += '        <field name="VAR">{textVariable}</field>';
    tool += '      </block>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="text_changeCase">';
    tool += '    <value name="TEXT">';
    tool += '      <shadow type="text">';
    tool += '        <field name="TEXT">abc</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="text_trim">';
    tool += '    <value name="TEXT">';
    tool += '      <shadow type="text">';
    tool += '        <field name="TEXT">abc</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="text_print">';
    tool += '    <value name="TEXT">';
    tool += '      <shadow type="text">';
    tool += '        <field name="TEXT">abc</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="text_prompt_ext">';
    tool += '    <value name="TEXT">';
    tool += '      <shadow type="text">';
    tool += '        <field name="TEXT">abc</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '</category>';
    tool += '<category name="LISTS" colour="%{BKY_LISTS_HUE}">';
    tool += '  <block type="lists_create_with">';
    tool += '    <mutation items="0"></mutation>';
    tool += '  </block>';
    tool += '  <block type="lists_create_with"></block>';
    tool += '  <block type="lists_repeat">';
    tool += '    <value name="NUM">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">5</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="lists_length"></block>';
    tool += '  <block type="lists_isEmpty"></block>';
    tool += '  <block type="lists_indexOf">';
    tool += '    <value name="VALUE">';
    tool += '      <block type="variables_get">';
    tool += '        <field name="VAR">{listVariable}</field>';
    tool += '      </block>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="lists_getIndex">';
    tool += '    <value name="VALUE">';
    tool += '      <block type="variables_get">';
    tool += '        <field name="VAR">{listVariable}</field>';
    tool += '      </block>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="lists_setIndex">';
    tool += '    <value name="LIST">';
    tool += '      <block type="variables_get">';
    tool += '        <field name="VAR">{listVariable}</field>';
    tool += '      </block>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="lists_getSublist">';
    tool += '    <value name="LIST">';
    tool += '      <block type="variables_get">';
    tool += '        <field name="VAR">{listVariable}</field>';
    tool += '      </block>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="lists_split">';
    tool += '    <value name="DELIM">';
    tool += '      <shadow type="text">';
    tool += '        <field name="TEXT">,</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="lists_sort"></block>';
    tool += '</category>';
    tool += '<category name="COLOUR" colour="%{BKY_COLOUR_HUE}">';
    tool += '  <block type="colour_picker"></block>';
    tool += '  <block type="colour_random"></block>';
    tool += '  <block type="colour_rgb">';
    tool += '    <value name="RED">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">100</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '    <value name="GREEN">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">50</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '    <value name="BLUE">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">0</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '  <block type="colour_blend">';
    tool += '    <value name="COLOUR1">';
    tool += '      <shadow type="colour_picker">';
    tool += '        <field name="COLOUR">#ff0000</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '    <value name="COLOUR2">';
    tool += '      <shadow type="colour_picker">';
    tool += '        <field name="COLOUR">#3333ff</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '    <value name="RATIO">';
    tool += '      <shadow type="math_number">';
    tool += '        <field name="NUM">0.5</field>';
    tool += '      </shadow>';
    tool += '    </value>';
    tool += '  </block>';
    tool += '</category>';
    tool += '<sep></sep>';
    tool += '<category name="VARIABLES" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>';
    tool += '<category name="FUNCTIONS" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"></category>';
  	tool += '</xml>';
  	return tool;
}