
export default function Bcard({titulo,valor,uniValor, children }) {
    return (
        // <div className="d-flex flex-column p-3 text-center" style={{ backgroundColor: "#1e213a",minWidth:"231px",width:"46%"}} >
        <div className="col-md-6  text-center p-4 " style={{ backgroundColor: "#1e213a",margin:"0px -10px"}} >
            <span>{titulo}</span>
            <div className="mb-1">
                <span style={{fontSize:"64px",lineHeight: "75px"}} >{valor}</span>
                <span className="fs-1">{uniValor}</span>
            </div>
            { children }
          
        </div>
    );
}

