const Dashboard = () => {
  return (
    <div className="p-8">
      <h1>Dashboard</h1>
      <div className="xl:flex">
        <div className="sm:flex gap-4">
          <div className="w-96 h-56 bg-accent-light content-center shrink-0 text-center text-2xl">
            Image
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            impedit eius harum dolor ea, ducimus provident modi quos delectus
            eveniet repellendus sed eligendi! Hic fuga quaerat possimus, fugit
            ducimus dicta?
          </div>
        </div>
        <div className="p-2 shrink-0"></div>
        <div className="sm:flex gap-4">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nobis
            consequatur ad labore quo nulla vero omnis doloribus iure minus
            suscipit eveniet hic, dignissimos laborum ex? Corporis quos vero
            molestiae!
          </div>
          <div className="w-96 h-56 bg-accent-dark content-center shrink-0 text-center text-2xl">
            Image
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
