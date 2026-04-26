import Navbar from '../../component/shared/Navbar';

const Augthlayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}            
        </div>
    );
};

export default Augthlayout;