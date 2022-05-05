import './NavOptionInBox.css'

interface Props{
    name: string
}


export function NavOptionInBox(props: Props){
    
    return (
        <div className="nav-option-in-box">
            <div className="square"></div>
            <span className="option-name">{props.name}</span>
        </div>
    )
}