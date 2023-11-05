const Card = ({ imgLink, title, price }) => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
          <div className="flex items-center justify-center">
            <img
              className="w-64"
              src={`/assets/images/${imgLink}`}
              alt="Sunset in the mountains"
            />
          </div>

          <div className="px-6 py-4">
            <p className="font-bold text-xl mb-2">{title}</p>
            <p className="text-red-600 text-base">{price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
