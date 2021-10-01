
import "./Box.css"
import { Button } from 'reactstrap';

function Box({ id, height = 5, width = 5, backgroundColor = 'skyblue', handleremove }) {
    return (
        <>
            <div className="Box" id={id}
                style={{
                    display: 'inline-block',
                    backgroundColor,
                    width: `${width}em`,
                    height: `${height}em`
                }}> {backgroundColor}
            </div >
            <Button color='danger' onClick={() => handleremove(id)}>Remove Box</Button>
        </>
    )
}



export default Box;