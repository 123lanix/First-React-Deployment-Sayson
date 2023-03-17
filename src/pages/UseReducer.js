import StateCounter from "../components/StateCounter";
import ReducerCounter from "../components/ReducerCounter";
const ReducerPage = () => {
    return ( 
        <div>
            <h1>This is Reducer page</h1>
            <br></br>
            <StateCounter></StateCounter>
            <br></br>
            <ReducerCounter></ReducerCounter>
        </div>
     );
}
 
export default ReducerPage;