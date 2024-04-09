// Crear un array de cuentas
const arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
//1 - Filtrar por numero de cuenta
  function filtrarPorNroCuenta(array, nroCuenta) {
    return array.filter(cuenta => cuenta.nroCuenta === nroCuenta);
}
//2 - Filtrar por numero de titular
function filtrarPorTitularCuenta(array, titular) {
    return array.filter(cuenta => cuenta.titularCuenta === titular);
}
//3 - Filtrar por tipo de cuenta
function filtrarPorTipoCuenta(array, tipo) {
    return  + array.filter(cuenta => cuenta.tipoDeCuenta === tipo);
}
//4 - Filtrar por Monto minimo
function filtrarPorMontoMinimo(array, montoMinimo) {
    return array.filter(cuenta => cuenta.saldoEnPesos >= montoMinimo);
}
//5 - Debitar dinero de una cuenta 
function debitarEnCuenta(array, nroCuenta, monto) {
    array.forEach(cuenta => {
        if (cuenta.nroCuenta === nroCuenta) {
            cuenta.saldoEnPesos -= monto;
        }
    });
    return array;
}
//6 - Sumar el prestamo a una cuenta 
function acreditarEnCuenta(array, nroCuenta, monto) {
    array.forEach(cuenta => {
        if (cuenta.nroCuenta === nroCuenta) {
            cuenta.saldoEnPesos += monto;
        }
    });
    return array;
}
  
  // Prueba de filtrar por número de cuenta
  console.log("*** Prueba de filtrar por número de cuenta ***");

  console.log(filtrarPorNroCuenta(arrayCuentas, 5486273622));
  
  // Prueba de filtrar por titular de cuenta
  console.log("*** Prueba de filtrar por titular de cuenta ***");
  console.log(filtrarPorTitularCuenta(arrayCuentas, "Ramon Connell"));
  
  // Prueba de filtrar por tipo de cuenta
  console.log("*** Prueba de filtrar por tipo de cuenta ***");
  console.log(filtrarPorTipoCuenta(arrayCuentas, "Cuenta Corriente"));
  
  // Prueba de filtrar por un monto mínimo especificado
  console.log("*** Prueba de filtrar por un monto mínimo especificado ***");
  console.log(filtrarPorMontoMinimo(arrayCuentas, 20000));
  
  // Prueba de realizar un débito en una cuenta especificada
  console.log("*** Prueba de realizar un débito en una cuenta especificada ***");
  debitarEnCuenta(arrayCuentas, 5486273622, 5000);
  console.log(arrayCuentas);
  
  // Prueba de realizar un crédito en una cuenta especificada
  console.log("*** Prueba de realizar un crédito en una cuenta especificada ***");
  acreditarEnCuenta(arrayCuentas, 1183971869, 10000);
  console.log(arrayCuentas);
  