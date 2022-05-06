import './CardBig.css'

export function CardBig(){
    return (
        <div className='card-big-container'>
            <div className='row-icons'>
                <div className='orange-square'></div>
                <div className='circle'></div>
            </div>

            <p className='card-title'>App Project</p>
            <p className='card-detail'>Created: 20.02.2020</p>
        </div>
    )
}