import EditEmployee from "./EditEmployee";

function Employee(props) {
  return (
    <div class="m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        class="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={props.img}
      />
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">{props.name}</p>
          <p class="text-slate-500 font-medium">{props.role}</p>
        </div>

        <EditEmployee id={props.id} name={props.name} role={props.role} updateEmployee={props.updateEmployee} />
      </div>
    </div>

    //   <>
    //     <h3>Your name is - {props.name}</h3>

    //     <p>{props.role ? props.role : 'No Role'}</p>
    //     {props.role ? <p>{props.role}</p>: <p>No Role</p>}
    //   </>
  );
}

export default Employee;
