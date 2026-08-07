"use client"
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {useState} from "react";
import Swal from 'sweetalert2'
import {Checkbox} from "@nextui-org/checkbox";
import {sendDeleteRequest} from "@/lib/action";

interface DeleteFormProps {
    app: string | string [],
    user: string | string []
}

export function DeleteForm({app, user}: DeleteFormProps) {
    const [data, setData] = useState<{
        app: string,
        userId: string,
        email: string,
        confirmation: boolean,
    }>({
        app: app.toString(),
        userId: user.toString(),
        email: "",
        confirmation: false,
    })
    const [isLoading, setIsLoading] = useState(false)
    return (
        <form
            className="flex flex-col w-full sm:w-1/3 my-4 space-y-2"
            onSubmit={event => {
                event.preventDefault()
                setIsLoading(true)
                const form = new FormData()
                form.append("app", data.app)
                form.append("userId", data.userId)
                form.append("email", data.email)
                form.append("confirmation", data.confirmation ? "Yes" : "No")
                sendDeleteRequest(form).then(() => {
                        setData({
                            app: "",
                            userId: "",
                            email: "",
                            confirmation: false,
                        })
                        Swal.fire({
                            title: 'Success!',
                            text: 'Your account delete request has been sent to our support successfully. This request will be processed in 48 hours.',
                            icon: 'success',
                            confirmButtonText: 'Continue'
                        })
                        setIsLoading(false)
                    }
                )
            }}
        >
            <Input
                type="app"
                label="App Name"
                isRequired
                required
                size={"sm"}
                variant={"faded"}
                value={data.app}
                isDisabled
            />
            <Input
                type="userId"
                label="Your User ID"
                isRequired
                required
                size={"sm"}
                variant={"faded"}
                value={data.userId}
                isDisabled
            />
            <Input
                type="email"
                label="Please confirm your account email"
                isRequired
                required
                size={"sm"}
                variant={"faded"}
                value={data.email}
                isDisabled={isLoading}
                onValueChange={e => setData((prev) => {
                    prev.email = e
                    return {...prev}
                })}
            />
            <Checkbox
                isRequired
                required
                isDisabled={isLoading}
                checked={data.confirmation}
                onValueChange={e => setData((prev) => {
                    prev.confirmation = e
                    return {...prev}
                })}


            >
                <span className="text-white">Enable email notifications</span>
            </Checkbox>

            <Button isLoading={isLoading} type="submit" color="primary" variant="shadow">Submit</Button>
        </form>
    )
}