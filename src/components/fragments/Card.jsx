const Card = ({ imgLink, title, price, onClick }) => {
  const handleClick = () => {
    // Mengarahkan ke halaman lain (misalnya '/halaman-lain')
    history.push("/halaman-lain");
  };
  return (
    <>
      <div
        className="flex flex-wrap"
        onClick={() => (window.location.href = "/")}
      >
        <div className="max-w-xs rounded overflow-hidden shadow-lg ">
          <div className=" flex items-center justify-center">
            <img
              className="w-64 "
              src={`/assets/images/${imgLink}`}
              alt="Sunset in the mountains"
            />
          </div>

          <div className="p-5">
            <p className="font-bold text-xl mb-2 line-clamp-2">{title}</p>
            <p className="text-red-600 text-base">{price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
