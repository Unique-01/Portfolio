const SkillsCard = ({ image, name }) => {
    return (
        <div className="flex flex-col items-center shadow-2xl rounded-lg w-32 md:w-40 lg:w-48 lg:h-48  p-4 m-4 hover:scale-110">
            <img
                src={image}
                alt={name}
                className="md:w-24 w-20 h-20 md:h-24  mb-4"
            />
            <h3 className="text-lg font-semibold text-white">{name}</h3>
        </div>
    );
};

export default SkillsCard;
