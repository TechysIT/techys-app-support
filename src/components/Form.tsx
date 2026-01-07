"use client"
import {Input, Textarea} from "@nextui-org/input";
import {Select, SelectItem} from "@nextui-org/select";
import {Selection} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {useState} from "react";
import Swal from 'sweetalert2'

const AppsList = [
    {key: "okra", label: "Okra - Fine Indian Dining"},
    {key: "normanton", label: "Normanton"},
    {key: "simvic", label: "Simvic"},
    {key: "oneDream", label: "OneDream"}
];

export function AppForm() {
    const [data, setData] = useState<{
        name:string,
        email:string,
        description:string
    }>({
        name:"",
        email:"",
        description:""
    })
    const [selectedApp, setSelectedApp] = useState<Selection>(new Set([]));
    return (
        <form
            className="flex flex-col w-full sm:w-1/3 my-4 space-y-2"
            onSubmit={event => {
                event.preventDefault()
                setData({
                    name:"",
                    email:"",
                    description:""
                })
                setSelectedApp(new Set([]))
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent to our support successfully.',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
            }}
        >
            <Input
                type="name"
                label="Full Name"
                isRequired
                size={"sm"}
                variant={"faded"}
                value={data.name}
                onValueChange={e=>setData((prev)=>{
                    prev.name = e
                    return{...prev}
                })}
            />
            <Input
                type="email"
                label="Email"
                isRequired
                size={"sm"}
                variant={"faded"}
                value={data.email}
                onValueChange={e=>setData((prev)=>{
                    prev.email = e
                    return{...prev}
                })}
            />
            <Select
                label="Select an App"
                className="w-full"
                isRequired
                size={"sm"}
                variant={"faded"}
                selectedKeys={selectedApp}
                onSelectionChange={setSelectedApp}
            >
                {AppsList.map((app) => (
                    <SelectItem key={app.key}>
                        {app.label}
                    </SelectItem>
                ))}
            </Select>
            <Textarea
                label="Description"
                className="w-full"
                isRequired
                size={"sm"}
                variant={"faded"}
                value={data.description}
                onValueChange={e=>setData((prev)=>{
                    prev.description = e
                    return{...prev}
                })}
            />
            <Button type="submit" color="primary" variant="shadow">Submit</Button>
        </form>
    )
}