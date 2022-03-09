function init()
{
    cargarTareas();
    
    
    
}

function cargarTareas()
{
    const nodoTareas = document.querySelector("#divListaTareas");
    const table = document.createElement("table");
    table.classList.add("table");
    table.classList.add("table-hover");
    table.classList.add("table-bordered");
    
    const thr = document.createElement("tr");
    thr.innerHTML = `<thead>
                    <tr><th>No.</th><th>Tarea</th>
                    <th>Fecha Límite</th>
                    <th>Actions</th>
                    </tr>
                    </thead>`
    
    table.appendChild(thr);
    
    const tbody = document.createElement("tbody");
    
    data.forEach(element=>{
        
        const tr = document.createElement("tr");
        tr.innerHTML=`<td>${element.id}</td>
                      <td>${element.descripcion}</td>
                      <td>${element.fechaLimite}</td>
                      <td>
                        <button class="btn btn-danger">
                            Borrar
                        </button>
                        <button class="btn btn-success">
                            Marcar como Realizada
                        </button></td>`
                      
        tbody.appendChild(tr);
    });
    
    table.appendChild(tbody);
    nodoTareas.appendChild(table);
    
}