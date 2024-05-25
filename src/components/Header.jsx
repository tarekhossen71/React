
const loginStatusButton = (status) => {
    if (status) {
        return <button>Logout</button>
    } else {
        return <button>Login</button>
    }
}

const Header = () => {
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>Other</li>
                <li>{loginStatusButton(false)}</li>
            </ul>
        </div>
    );
};

export default Header;