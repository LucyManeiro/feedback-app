import Card from "./shared/Card"
import PropTypes from "prop-types"
import {FaTimes} from "react-icons/fa"

function FeedbackItem({item, handleDelete}) {
    const {rating, text} = item
    
    console.log(arguments)
    
    return (
        <Card>
            <div className="num-display">{rating}</div>
            <button onClick={()=> handleDelete(item.id)} className="close">
                <FaTimes color="purple"/>
            </button>
            <div className="text-display">
                {text}
            </div>
        </Card>
    
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}
export default FeedbackItem
