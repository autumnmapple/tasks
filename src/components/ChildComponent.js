import "./ChildComponent.css"
const ChildComponent=(props)=>{
  return (
    <div className="element-item">
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
        <p>{props.date}</p>   
    </div>
  );
};
export default ChildComponent;
