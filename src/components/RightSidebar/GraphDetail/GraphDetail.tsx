import './GraphDetail.css'

export function GraphDetail(){
    return (
        <div className="graph-detail-container">
            <div className="graph-detail-square"></div>

            <div className="graph-detail-text">
                <div className="graph-detail-title">Documents</div>
                <div className="graph-detail-description">720 files</div>
            </div>

            <div className="graph-detail-white-container">
                <p className="graph-detail-text-into-white">120GB</p>
            </div>
        </div>
    )
}