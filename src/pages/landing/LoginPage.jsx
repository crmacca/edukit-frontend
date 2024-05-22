import InputField from "../../components/InputField";
import StyledButton from "../../components/StyledButton";

const LoginPage = () => {
    return (
        <div className="grid grid-cols-2 text-zinc-900">
            <div className="p-5 flex h-full flex-col items-center justify-center bg-slate-100 border-r-3 border-slate-400 shadow-2xl drop-shadow-2xl">
                <div className="flex items-center justify-start w-full">
                    <img className="h-[10vh]" src={'branding/textIco.svg'}/>
                </div>
                <div className="h-full w-full flex-grow flex flex-col gap-2 text-start p-5">
                    <div className="flex w-full items-center justify-center">
                        <img className="h-[40vh] select-none" src={'branding/fullIco.svg'}/>
                    </div>
                    <div className="md:max-w-[20vw] w-full mx-auto flex flex-col">
                        <p className="select-none mt-2 font-light text-sm text-zinc-600">Email</p>
                        <InputField type='email' placeholder='name@school.edu.au' className='w-full' />
                        <p className="select-none mt-2 font-light text-sm text-zinc-600">Password</p>
                        <InputField type='password' placeholder='Password' className='w-full' />
                        <StyledButton className='mt-3'>
                            Login
                        </StyledButton>
                    </div>
                </div>
                <h1 className='font-regular lightBold text-gray-500 text-xs'>
                    © EduKit LLC {new Date().getUTCFullYear()}
                </h1>
            </div>
            <img className="w-full h-screen object-cover" src={`media/background3.jpg`} />
        </div>
    )
}

export default LoginPage;