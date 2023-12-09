import './h1.css';

function Name(){
 const users=[
    {name:"kang",age:21},
     {name:"NaNa",age:25},
     {name:"NaNa",age:30},
];
//names.forEach
//names.map()
//names.filter
//value=内容　key=何番のデータ
    return (
        <div className="text">
            {users.map((user,key) => {
                return <User name={user.name} age={user.age}/>;
            })}
        </div>
    );
}
const User=(props)=>{
return (
    <div>
    {props.name}{props.age}
    </div>
)

}
export default Name;