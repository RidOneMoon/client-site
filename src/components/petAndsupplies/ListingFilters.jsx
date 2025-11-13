import Style from "./Style";

export default function ListingFilters({ q, setQ, filter, setFilter }) {
  return (
    <>
     
      <div className="filter-wrapper">
        <div className="filters-group">
          <input
            placeholder="Search by name"
            className="filter-input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">All Categories</option>
            <option value="Pets">Pets</option>
            <option value="Pet Food">Pet Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Pet Care Products">Care Products</option>
          </select>
        </div>
      </div>

      <Style />
    </>
  );
}