import "./GraphDetail.css";

interface Props{
  squareColor: string,
  size: string
}

export function GraphDetail(props: Props) {
  return (
    <div className="graph-detail-container">

      <div className="graph-detail-card">
        <div className="graph-detail-square" style={{background: props.squareColor}}></div>

        <div className="graph-detail-text">
          <div className="graph-detail-title">Documents</div>
          <div className="graph-detail-description">720 files</div>
        </div>

        <div className="graph-detail-white-container">
          <span className="graph-detail-text-into-white">{props.size}</span>
        </div>
      </div>

      <div className="graph-detail-container-line">
        <hr className="graph-detail-separation-line"></hr>
      </div>
    </div>
  );
}
