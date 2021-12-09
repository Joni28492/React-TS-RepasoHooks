

export const TiposBasicos = () => {

    const nombre : string = 'Joni';
    const edad: number  = 35;
    const estaActivo: boolean = false;

    const poderes: string[]= [];
    //'velocidad','volar', 'Respirar bajo el agua'
    
    return (
        <>
            <h3>Tipos Basicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'Activo' : 'no activo'}
            <br/>
            {poderes.join(', ')}
        </>
    )
}
