
export default function Bcard({ children }) {
    return (
        // <div className="d-flex flex-column p-3 text-center" style={{ backgroundColor: "#1e213a",minWidth:"231px",width:"46%"}} >
        <div className="col-md-6  text-center p-4 " style={{ backgroundColor: "#1e213a",margin:"0px -10px"}} >
            <span>Wind Status</span>
            <div className="mb-1">
                <span style={{fontSize:"64px",lineHeight: "75px"}} >7</span>
                <span className="fs-1">mph</span>
            </div>
            { children }
          
        </div>
    );
}

