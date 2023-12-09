import "./h1.css";


function Planets(){
    const planets =[
        {name:"Mars", isGasPlanet: false},
        {name:"kang", isGasPlanet: false},
        {name:"dada", isGasPlanet: true},
        {name:"lala", isGasPlanet: false},
    ];
    return (
        <div className="text">
        {planets.map(
            (planet,key) => !planet.isGasPlanet && <h1> {planet.name} </h1>
            )}
        </div>
    );
}
export default Planets

