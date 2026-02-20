let nombre = document.querySelector("#nombre");
let hours = document.querySelector("#horas");
let categ = document.querySelector("#categoria");
let btn = document.querySelector("#btnAgregar");
let table = document.querySelector("#tablaCuerpo");
let borrar = document.querySelector("#btnEliminar");
let listaEmpleados = [];


const renderizarTabla = () => {
    
    table.innerHTML = "";
    listaEmpleados.forEach((emp,index) => {
        table.innerHTML += `
        <tr class="hover:bg-gray-50 transition-colors">
        <td class="px-6 py-4">${emp.nombre}</td>
        <td class="px-6 py-4 uppercase text-xs font-bold text-gray-500">${emp.categoria}</td>
        <td class="px-6 py-4 uppercase font-bold text-orange-500">${emp.horas} horas</td>
        <td class="px-6 py-4 uppercase font-bold text-green-500">$${emp.pagohr}</td>
        <td class="px-6 py-4 font-bold text-sm text-green-600">$${emp.sueldo}</td>
        <td class="px-6 py-4">
        <button onclick="borrarEmpleado(${index})" class="text-red-500 hover:text-red-700 cursor-pointer" id ="btnEliminar">Eliminar</button>
        </td>
        </tr>
        `;
    });
};

window.borrarEmpleado = (index) => {
    listaEmpleados.splice(index, 1);
        renderizarTabla(); 
    };


btn.addEventListener('click', () => {
    const nombreValor = nombre.value;
    const horasValor = hours.value;
    const categoriaValor = categ.value;
    
    const pagoHora = +categoriaValor === "senior" ? 20 : 10;
    const sueldoCalculado = horasValor * pagoHora;
    
    const nuevoEmpleado = {
        nombre: nombreValor,
        categoria: categoriaValor,
        horas: horasValor,
        pagohr: pagoHora,
        sueldo: sueldoCalculado
    }
    
    listaEmpleados.push(nuevoEmpleado);
    renderizarTabla();
    
    nombre.value ="";
    hours.value = "";
});