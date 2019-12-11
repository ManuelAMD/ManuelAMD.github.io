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
var fl = new FuzzyLogic();