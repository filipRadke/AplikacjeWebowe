import {useUser} from "../../hooks/useUser.ts";

export default function UserInfo({id}:{id:number}) {
    const {data: user} = useUser(id);

    if(!user){
        return null;
    }
    return (
        <>{user.username}</>
    )
}