import { NextRouter} from "next/router"

export const redirect = (router: NextRouter,to: string) => {
    router.push(to)
}