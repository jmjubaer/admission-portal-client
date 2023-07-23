
const LoadingSpinner = () => {

    return (
        <div className="min-h-screen" style={{display: 'flex',alignItems:"center",justifyContent:"center",minHeight:"calc(100vh-136px)"}}>
            <div style={{fontSize:"72px",display: 'flex', alignItems:"baseline"}}>
                <p>L</p>
                <p style={{margin:"0 8px",width:"40px",height:"40px",border:"8px dashed blue",borderRadius:"50%"}} className='animation'></p>
                <p>ading....</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;