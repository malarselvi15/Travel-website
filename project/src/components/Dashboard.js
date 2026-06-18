function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h2>Total Leads</h2>
          <p>150</p>
        </div>

        <div className="card">
          <h2>Total Customers</h2>
          <p>80</p>
        </div>

        <div className="card">
          <h2>Total Revenue</h2>
          <p>$5000</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;