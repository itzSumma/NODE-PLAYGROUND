const UsersPage = async () => {
  const res = await fetch("http://localhost:4000/users");
  const users = await res.json();

  return (
    <div>
      <h2 className="text-center p-10 font-bold text-2xl text-white">
        Users: {users.length}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-10 container mx-auto gap-5">
        {users.map((user) => (
  <div
  key={user.id}
  className={`relative rounded-lg p-[2px] group ${
    !user.isActive ? "opacity-50" : ""
  }`}
>
  {/* Animated border (always visible on hover) */}
  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 animate-pulse opacity-0 group-hover:opacity-100"></div>

  {/* Inner black card */}
  <div className="relative bg-black rounded-lg p-5 text-center transition-all duration-300
    group-hover:scale-[1.03] group-hover:-translate-y-1 group-hover:shadow-2xl"
  >
    <h2 className="text-xl text-blue-400">{user.name}</h2>
    <p className="text-zinc-300">{user.email}</p>
    <p className="text-zinc-400">Age: {user.age}</p>
    <p className="text-zinc-400">Role: {user.role}</p>

    <p className="mt-2 text-white">
      Status: {user.isActive ? "Active 🟢" : "Inactive 🔴"}
    </p>
  </div>
</div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
