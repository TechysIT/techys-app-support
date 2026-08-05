import Image from "next/image";
import {DeleteForm} from "@/components/DeleteForm";

export default function AccountDelete({
                                          searchParams,
                                      }: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const app = searchParams?.app
    const user = searchParams?.user
    return (
        <div className="container min-h-screen w-full flex flex-col justify-center items-center">
            <Image src={"/logo.png"} alt={"Logo"} height={100} width={100}/>
            <p className="text-2xl text-white font-bold mt-2">Techy&apos;s App Support</p>
            <p className="text-lg text-white font-light">Account Delete Form</p>
            <p className="text-lg text-white font-light">Please fill up form details</p>
            <DeleteForm app={app?.at(0)} user={user?.at(0)}/>
        </div>
    );
}
