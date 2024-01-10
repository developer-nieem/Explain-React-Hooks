
const UserRender = ({data , loading , error}) => {
   
    if (loading) {
        return <p>Loading......</p>
    }

    if (error) {
        return <p>Something is wrong</p>
    }


    return (
        <div>
            {
                data.map(item =>  <p>{item.name}</p> )
            }
        </div>
    );
};

export default UserRender;