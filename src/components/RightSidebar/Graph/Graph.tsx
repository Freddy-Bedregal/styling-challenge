import './Graph.css'

export function Graph(){
    return (
        <div className="graph-container">
            <span className="graph-title">Storage</span>
            <div className="circlex">
                <span className='circle-number'>85%</span>
                <span className='circle-text-under'>Used</span>
            </div>
            <div className='graph-description'>490.2 GB of 500GB used</div>
        </div>
    )
}