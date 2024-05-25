
const loginStatusButton = (status) => {
    if (status) {
        return <button>Logout</button>
    } else {
        return <button>Login</button>
    }
}
const sayHi = () => alert('Say hi to all')
const PostFormData = (e) => {
    e.preventDefault();


    //Submited data
    alert('Form Submited');
}

const Header = (props) => {
    
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>Other</li>
                <li>{loginStatusButton(false)}</li>
            </ul>

            {/* <button onClick={props.btnClick}>Click</button> */}
            {/* Responding to event */}
            {/* <button onClick={()=>{
                alert('Say hi')
            }}>Submit</button>

            <button onClick={sayHi}>Click</button> */}

            {/* Form Submit */}

            <form onSubmit={PostFormData}>
                <input type="text" name="name" placeholder="Enter name" />
                <button type="submit">Submit</button>
            </form>

            

        </div>
    );
};

export default Header;