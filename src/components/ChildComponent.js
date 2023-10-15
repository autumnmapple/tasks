import "./ChildComponent.css"
const ChildComponent=({name, description, date })=>{
  return (
    <div className="element-item">
        <h2>{name}</h2>
        <h3>{description}</h3>
        <p>{date}</p>   
    </div>
  );
};
export default ChildComponent;
