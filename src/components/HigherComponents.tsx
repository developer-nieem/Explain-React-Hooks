
const HigherComponents  = (WithBorder) => {
    return (props) => {
            <div className="border border-blue-200 rounded-full">
                <WithBorder></WithBorder>
            </div>
    }
};

export default HigherComponents;