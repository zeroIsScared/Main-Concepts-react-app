import Card from "./Card";
import './Concept.css'

const Concepts = (props) => {

    return (
        <Card className="concept">
        <div >
          <img src={props.image} alt={props.title} />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        </Card>
    )
}

export default Concepts;