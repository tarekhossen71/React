
const loginStatusButton = (status) => {
    if (status) {
        return <button>Logout</button>
    } else {
        return <button>Login</button>
    }
}

const Header = (props) => {
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>Other</li>
                <li>{loginStatusButton(false)}</li>
            </ul>

            <button onClick={props.btnClick}>Click</button>
        </div>
    );
};

export default Header;