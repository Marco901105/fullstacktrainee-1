/*1.Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y.*/

function getGreaterThan(y, numbers) {
	var numbers = [1,3,5,7];
	var counter = 0;
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] > y) {
		    counter +=1;
		    console.log(numbers[i]);
		}
	}
	return counter;
}
console.log(getGreaterThan(3));


/*2.Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array.*/

function getValues(z) {
	x=Math.max.apply(null, z);
	y=Math.min.apply(null, z);

	var sum = 0;
	for(var i = 0; i<z.length; i++){
		sum += parseInt( z[i], 10 );
	}

	var avg = sum/z.length;
	console.log([x,y,avg]);
}
getValues([1,2,-3,-5,5]);


/*3.Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por el texto (string) 'Dojo'. 
Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, "Dojo", "Dojo", 5].*/

function stringReplace(x) {
	for (var i = 0; i < x.length; i++) {
		if (x[i] < 0) {
			x[i] = 'Dojo';
		}
	}

	console.log(x);
}
stringReplace([1,2,-3,-5,5]);


/*4.Dado un array y su respectivo índice, remueve los valores en el rango del índice dado (acortando el array). 
Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].*/

function shortArr(x,rem1,rem2) {
  	x.splice(rem2,1);
	x.splice(rem1,1);
	console.log(x);
}
shortArr([20,30,40,50,60,70],2,4);




