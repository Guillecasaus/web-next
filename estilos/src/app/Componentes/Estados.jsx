export default function Estados() {
    return (
        <>
            <input className="border border-gray-300 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600 invalid:focus:ring-red-400 peer"
                type="email"
                placeholder="E-mail"
            />
            <p className="text-red-400 hidden peer-invalid:block">El correo es incorrecto</p>
        </>
    );
}