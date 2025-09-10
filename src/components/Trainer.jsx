const Trainer = ({ trainerImageUrl, trainerName }) => {
    return (
      <div className="flex my-4">
        <img
          src={trainerImageUrl}
          alt=""
          className="h-[90px] w-[90px] rounded-lg ml-8"
        />
        <p className="ml-4 mt-4 text-sm">{trainerName}</p>
      </div>
    );
  };
  
  export default Trainer;
  