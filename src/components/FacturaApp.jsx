
import { getFactura } from "../services/getFactura"
import { ClientView } from "./ClientView";
import { FacturaView } from "./FacturaView";
import {CompanyView } from "./CompanyView";
import { ListItemsView } from "./ListItemsView";

export const FacturaApp = () => {

    //desestructuración 
    const {id, name, client, company, items} = getFactura();
    
    
    
    const factura = getFactura();
    return(
    <>
<div className="container">
    <div className="card my-3">
        <div className="card-header">
            Ejemplo Factura2
        </div>
<div className="card-body">
            <FacturaView id={id} name={name} />
        <div className="row">
            <div className="col">

            <ClientView title="Datos del cliente" client={client} />

        </div>
        <div className="col">

            <CompanyView title="Datos de la empresa" company={company} />

        </div>
        </div>
        
        <ListItemsView title="Productos de la factura" items={items} />

        </div>
</div>
</div>
    </>
)

}