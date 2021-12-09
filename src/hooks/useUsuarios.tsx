import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from '../interfaces/reqRes';


export const useUsuarios = () => {
  
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const paginaRef = useRef(1);

  

    useEffect(() => {
      //llamado API
     cargarUsuarios();
    }, [])


    const cargarUsuarios = async()=>{
        //refactorizamos con async
        const resp = await reqResApi.get<ReqResListado>('/users',{
            params:{ page: paginaRef.current }
        });

        if(resp.data.data.length > 0){
            setUsuarios(resp.data.data);
            // paginaRef.current ++;
        }else{
            paginaRef.current --;
            alert('no hay mas registros')
        }
    }

    const paginaSiguiente =()=>{
        paginaRef.current ++;
        cargarUsuarios();
    }
    const paginaAnterior =()=>{
        if(paginaRef.current > 1) {
            paginaRef.current --;
            cargarUsuarios();
        }
    }

    return {usuarios, paginaSiguiente, paginaAnterior }

}
