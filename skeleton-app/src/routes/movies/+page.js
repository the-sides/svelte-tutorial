import { env } from '$env/dynamic/public'

export async function load() {
    return {
        token: env.PUBLIC_READ_TOKEN
    }
}
