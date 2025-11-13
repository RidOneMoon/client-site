
// Data for the "Pet Heroes" section
const heroes = [
  { name: "Jane", role: "Foster Parent", icon: "🏡" },
  { name: "Rafi", role: "Volunteer", icon: "🤝" },
  { name: "Sabbir", role: "Care Center", icon: "🏥" },
];

// A dedicated component to showcase the people and groups that help pets.
export default function PetHeroes() {
  return (
    <div className="bg-indigo-50/70  w-full  text-center font-sans rounded-xl border border-indigo-100"
    style={{
      paddingTop: "50px",
      paddingBottom: "50px",
      marginBottom: "40px",
      marginTop: "50px",
    }}
    >
      
      {/* Title Styling: Increased size and changed color to dark indigo for prominence */}
      <h3 className="text-4xl font-extrabold text-indigo-800 "
      style={{
        marginBottom: "40px"
      }}
      >Meet Our Pet Heroes</h3>
      
      {/* Grid/Flex Container Styling: Handles 4 cards responsively */}
      <div className="flex flex-wrap justify-center gap-8">
        {heroes.map((hero, index) => (
          // Card Styling: Increased padding, stronger shadow, rounded corners, and a subtle indigo ring for emphasis.
          <div 
            key={index} 
            className="flex-1 basis-56 max-w-xs bg-white p-8 rounded-2xl shadow-2xl transition duration-300 ease-in-out hover:shadow-indigo-300/50 hover:scale-[1.02] transform ring-4 ring-indigo-200/50"
          >
            {/* Icon Styling */}
            <span className="text-5xl block mb-4">{hero.icon}</span>
            
            {/* Name Styling */}
            <p className="text-2xl font-bold text-gray-900 mb-1">{hero.name}</p>
            
            {/* Role Styling (highlighted with Indigo color) */}
            <p className="text-base text-indigo-600 font-semibold">{hero.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}