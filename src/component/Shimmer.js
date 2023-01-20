const Shimmer = () => {
  const N = 20;
  return (
    <>
      <div className="restaurant-list-shimmer">
        {Array.apply(null, { length: N }).map((num) => {
          return <div className="card-shimmer" key={num}></div>;
        })}
      </div>
    </>
  );
};

export default Shimmer;
