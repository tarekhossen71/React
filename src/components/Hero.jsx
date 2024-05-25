
const Hero = (props) => {
    let marks =80;
    const item = props.item;
    let items = ['Dhaka','Shylet','Rajshahi','Delhi'];
    return (
        <div>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIz4qZKTOplGKCIt860B8HP3mTBMZGACNFg&s" alt="" /> */}
            {/* {
                marks > 80 ? <h1>Brilliant Result</h1> : <h1>Avarage Result</h1>

            } */}
            {
                (
                    () => {
                        if (marks > 80) {
                            return <h1>Brilliant Result</h1>
                        }else{
                            return <h1>Avarage Result</h1>
                        }
                    }
                )()
            }

            {/* React js Invoke Function  */}
            {/* {(
                () => {

                }
            )()} */}

            {/* loop in jsx */}
            <ul>
                {
                    items.map((item,i)=>{
                        return <li key={i}>{ item}</li>
                    })
                }
            </ul>
            <h1>{props.title}</h1>
            <h2>Name: {item.name}</h2>
            <h3>Age: {item.age}</h3>
            <h3>City: {item.city}</h3>
        </div>
    );
};

export default Hero;