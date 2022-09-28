const Hamburger = ({isOpen}: {isOpen: boolean})=> {
    return (
        <>
        <div className="hamburger">
            <div className="burger burger1"/>
            <div className="burger burger2"/>
            <div className="burger burger3"/>
        </div>

    <style>{`
                .hamburger{
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    color: white;
                }
                .burger{
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 10px;
                    background-color: white;
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                }
                .burger1{
                    transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                }
                .burger2{
                    opacity: ${ isOpen ? 0 : 1};
                }
                .burger3{
                    transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                }
                
            `}</style>
            </>
    )
}

export default Hamburger;