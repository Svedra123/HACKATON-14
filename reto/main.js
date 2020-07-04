function ModalAM() {
    let modal = document.getElementById("formAM");
    let btn = document.getElementById("btnAM");
    let span = document.getElementsByClassName("close1")[0];
    let cancelar = document.getElementById("btncanAM");

    return ModalINI(modal,btn,span,cancelar)

}

function ModalED() {
    let modal = document.getElementById("formED");
    let btn = document.getElementById("btnED");
    let span = document.getElementsByClassName("close0")[0];
    let cancelar = document.getElementById("btncanED");

    return ModalINI(modal,btn,span,cancelar)

}

function ModalED2() {
    let modal = document.getElementById("formED2");
    let btn = document.getElementById("btnED2");
    let span = document.getElementsByClassName("close2")[0];
    let cancelar = document.getElementById("btncanED2");

    return ModalINI(modal,btn,span,cancelar)

}

function ModalINI(modal,btn,span,cancelar) {
    btn.onclick = function() {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    cancelar.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}






// para eliminar
function Modal2() {

    let modal = document.getElementById("verModal2");
    let btn = document.getElementById("boton2");
    let span = document.getElementsByClassName("closeEl1")[0];
    let body = document.getElementsByTagName("body")[0];
    let cancelar = document.getElementById("btncancelar");
    
    let imaF = document.getElementsByClassName("ima1")[0];
    let deleteF = document.getElementById("btnAP");



    return Eliminar(modal,btn,span,body,cancelar, imaF, deleteF)
}

function Modal3() {

    let modal = document.getElementById("verModal3");
    let btn = document.getElementById("boton3");
    let span = document.getElementsByClassName("closeEl2")[0];
    let body = document.getElementsByTagName("body")[0];
    let cancelar = document.getElementById("btncancelar2");
    
    let imaF = document.getElementsByClassName("ima")[0];
    let deleteF = document.getElementById("btnAP2");


    return Eliminar(modal,btn,span,body,cancelar, imaF, deleteF)
}




function Eliminar (modal, btn ,span, body,cancelar, imaF, deleteF){
    btn.onclick = function() {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    cancelar.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }

     
    deleteF.onclick = function() {
        imaF.style.display = "none";

          modal.style.display = "none";

          body.style.position = "inherit";
          body.style.height = "auto";
          body.style.overflow = "visible";
        };
   


}

const addVid = (e) => {
    e.preventDefault();
    
    let titulo = document.getElementById("titulo").value;
    let url = document.getElementById("url").value;
    let descripcion = document.getElementById("descripcion").value;


    const contenedorV = document.querySelector("#contenedor");
    const formV = document.querySelector("#formAm");

  
    const vidInfo = {
      titulo: titulo,
      url: url,
      descripcion: descripcion,
    };
    contenedorV.innerHTML += `
    <div class="ima">
    <div class="fvid" >

    <div class="imgini">
        <div class="edit">
            <img class="edpet" id="btnED2" onclick="ModalED2()" src="/fotos/edit.png" alt="">
            <form id="formED2" class="formcontED" action="">              
                <div class="geneED">
                    <div class="barraED">
                        <h2 style="padding-left: 40px;">Agregar video</h2>
                        <span class="close2"  >X</span>
                    </div>
                    <div class="formtED">                
                        <input type="text" name="titulo" id="" placeholder="Titulo">
                        <input type="text" name="url" id="" placeholder="Url">
                        <input type="email" name="descripcion" id="" placeholder="Descripcion">
                        <div></div>
                    <button class="btn">Aceptar</button>
                    <button id="btncanED2" class="btn">Cancelar</button>
                </div>
                </div>
            </form>
            <span >Edit</span>
        </div>
        <div class="close">
            <img class="delete" id="boton3" onclick="Modal3()" src="/fotos/delete.png" alt="">  
            <div id="verModal3" class="modalContainer3">
                <div class="modal-content3">
                    <span class="closeEl2">×</span>
                    <h2 style="padding-top: 30px;">Estas seguro que quieres eliminar esta mascota??</h2>
                    
                    <button id="btnAP2" class="btn">Aceptar</button>
                    <button id="btncancelar2" class="btn">Cancelar</button>
                </div>
            </div>
            <span >Delete</span>
        </div>

    </div>   
    <img class="foto" src="/fotos/logo.png" alt="">
</div>

<div style="text-align: left; padding-left: 10px;">

    <h3 style="font-size: 18px;margin-bottom: 9px;">${vidInfo.titulo} </h2>

    
    <div style="font-size: 11px; color: #303030;">
        ${vidInfo.url}
    </div>

    <article style="font-size: 12px;color: #808080;line-height: 18px;">
        ${vidInfo.descripcion}
    </article>
    <br>

</div>

<button class="btndetalle">Ver Detalle</button>

</div>

    `;
  

    limpiarInputs();
    formV.style.display = "none";

  };

  const modalAddVid = () => {
        const btnAddVid = document.querySelector(".addvid");
        const grayV = document.querySelector(".formcont");
        const formAddVid = document.querySelector("#formAm");
        const modalDelete = document.querySelector(".modal-delete");
        
        const btnCancel = document.querySelector("#btncanAM");
        const btnAccept = document.querySelector("#btnApAM");
        btnAddVid.addEventListener("click", () => {
        modalDelete.style.display = "none";
        formAddVid.style.display = "flex";
        grayV.style.display = "flex";
        });
        

        btnAccept.addEventListener("click", addVid);
    
   
        btnCancel.addEventListener("click", (e) => {
        e.preventDefault();
        formAddVid.style.display = "none";
        grayV.style.display = "none";
        return false;
        });
    };


    function limpiarInputs() {
        document.getElementById("titulo").value = "";
        document.getElementById("url").value = "";
        document.getElementById("descripcion").value = "";
      }

      modalAddVid();