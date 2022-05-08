import './HintLargeCard.css'

export function HintLargeCard(){
    return (
        <div className='hint-large-card-container'>
            <div className='left-hint-large-card-container'>
                <span className='name-text'>Name</span>
            </div>

            <div className='right-hint-large-card-container'>
                <span className='members-text'>Members</span>
                <span className='last-modified-text'>Last Modified</span>
                <span></span>
            </div>
        </div>
    )
}