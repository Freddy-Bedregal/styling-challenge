import './SmallCard.css'

interface Props{
    title: string
}

export function SmallCard(props: Props){
    return (
        <div className='card-small-container'>
            <div className='card-small-row-icons'>
                <div className='card-small-orange-square'></div>
                <div className='card-small-circle'></div>
            </div>

            <span className='card-small-title'>{props.title}</span>
            <span className='card-small-detail'>Created: 20.02.2020</span>
        </div>
    )
}