import './SmallCard.css'

export function SmallCard(){
    return (
        <div className='card-small-container'>
            <div className='card-small-row-icons'>
                <div className='card-small-orange-square'></div>
                <div className='card-small-circle'></div>
            </div>

            <p className='card-small-title'>App Project</p>
            <p className='card-small-detail'>Created: 20.02.2020</p>
        </div>
    )
}